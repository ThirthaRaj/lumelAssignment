import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { parse } from 'csv-parse';
import { CustomerEntity } from 'src/entities/customer.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileUploadService {
    constructor(
        @InjectRepository(CustomerEntity)
        private readonly customerRepository: Repository<CustomerEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<
        ProductEntity
        >,
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<
        OrderEntity
        >
    ) {}

    /**
     * 
     * @param file 
     */
    async importOrderDetails(file: any) {
        try {
          if (file?.mimetype === 'text/csv') {
            // parse csv file for  order details
            const csvString = Buffer.from(file.buffer).toString('utf8');
            parse(
              csvString,
              {
                columns: true, // Treat the first row as headers
                trim: true, // Trim leading/trailing whitespace from columns
                skip_empty_lines: true // Skip empty lines in the CSV file
              },
              async (err, rows) => {
                if (err) {
                  Logger.error(err, 'Error parsing CSV:');
                  return;
                }

                const orderData = [];
                const productData = [];
                const customerData = [];
                let updatedRows: string[] = rows.map((row,index) => {
                  
                    // Push orders data
                    orderData.push({
                        id: row['Order Id'] || Math.floor(Math.random()*100000),
                        productId: row['Product ID'],
                        customerId: row['Customer ID'],
                        dateOfSale: row['Date of Sale'],
                        discount: parseInt(row['Discount']) || 0,
                        unitPrice: parseInt(row['Unit Price']) || 0,
                        shipingCost: parseInt(row['Shipping Cost']) || 0,
                        paymentMethod: row['Payment Method']

                    })

                    // Push product data
                    productData.push({
                        id: row['Product ID'],
                        category: row['Category'],
                        productName: row['Product Name']
                    })

                    // Push customer data
                    customerData.push({
                        id : row['Customer ID'],
                        customerName: row['Customer Name'],
                        email: row['Customer Email'],
                        customerAddress: row['Customer Address'] || '',
                        region: row['Region'] || '',
                    })
                });

                try {

                   // Insert or update products
                   await this.productRepository
                   .createQueryBuilder()
                   .insert()
                   .orIgnore(true)
                   .into(ProductEntity)
                   .values(productData)
                   .orUpdate({ conflict_target: ['id'] })
                   .execute();

                   // Insert or update customers
                   await this.customerRepository
                   .createQueryBuilder()
                   .insert()
                   .orIgnore(true)
                   .into(CustomerEntity)
                   .values(customerData)
                   .orUpdate({ conflict_target: ['id'] })
                   .execute();

                   // Insert or update Orders
                   await this.orderRepository
                   .createQueryBuilder()
                   .insert()
                   .orIgnore(true)
                   .into(OrderEntity)
                   .values(orderData)
                   .orUpdate({ conflict_target: ['id'] })
                   .execute();
                } catch (error) {
                    Logger.warn('Error while bulk insert', error)
                }

                return {
                    message: 'Successfully inserted the data'
                }
              }
            );
          }  else {
            Logger.log('Unsupported file format, Please user CSV files')
            throw new Error(
              'Unsupported file format, Please user CSV files'
            );
          }
        } catch (error) {
          Logger.error('Error importing order details into database')
          throw new Error(
            'Error importing order details into database'
          );
        }
      }
}
