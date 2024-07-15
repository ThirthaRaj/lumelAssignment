import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { retry } from "rxjs";
import { CustomerEntity } from "src/entities/customer.entity";
import { OrderEntity } from "src/entities/order.entity";
import { ProductEntity } from "src/entities/product.entity";
import { Between, Repository } from "typeorm";
import { allowedValues } from "./customer-analysis.dto";
import { sortCriteria } from "./customer-analysis.dto";

@Injectable()
export class CustomerAnalysisService {
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

    async getCustomerDetails(startDate: Date, endDate: Date, value: string) {
        try {


            if(!startDate && !endDate) {
                throw new Error('Missing startDate and endDate')
            }
            // Find the data between date range
            let data = await this.orderRepository.find({
                where: {
                    dateOfSale: Between(startDate, endDate)
                }
            });
            if(allowedValues.includes(value) && endDate && startDate && value) {
                const key = value === sortCriteria.Customer ? 'customerId' :'id';

                const arrayUniqueByKey = [...new Map(data.map(item =>
                [item[key], item])).values()];
                return {
                    count: arrayUniqueByKey.length
                };
            }

            // Get the average value
            const average = data.reduce((total, order) => total + (order.unitPrice) , 0) / data.length;
            return {
                average: average
            };
        } catch (error) {
            Logger.error('Error while fetching customer details', error)
            throw new Error('Error while fetching customer details')
        }
    }
}