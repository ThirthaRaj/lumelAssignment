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
        private readonly customerEntity: Repository<CustomerEntity>,
        @InjectRepository(ProductEntity)
        private readonly productEntity: Repository<
        ProductEntity
        >,
        @InjectRepository(OrderEntity)
        private readonly orderEntity: Repository<
        OrderEntity
        >
    ) {}
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
                        productId: row['Product ID'],
                        customerId: row['Customer ID'],
                        id: Math.floor(Math.random()*100000),
                        dateOfSale: row['Date of Sale'],
                        unitPrice: row['Unit Price'],
                        shippingCost: row['Shipping Cost'],
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
                        address: row['Customer Address']
                    })
                });

                try {

                   // Handle duplicates
                    await this.productEntity.insert(productData)
                    await this.orderEntity.insert(orderData);
                    await this.customerEntity.insert(customerData)
                } catch (error) {
                    Logger.warn('Error while bulk insert')
                }

                return {
                    message: 'Successfully inserted the data'
                }
              }
            );
          } 
        } catch (error) {
          throw new Error(
            'Error importing order details into database'
          );
        }
      }
}
