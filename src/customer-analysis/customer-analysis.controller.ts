import { Controller, Get, HttpException, Query, Req } from "@nestjs/common";
import { sortCriteria } from './customer-analysis.dto';
import { CustomerAnalysisService } from "./customer-analysis.service";

@Controller('customer-analysis') 
export class CustomerAnalysisController {
    constructor(
        private readonly customerAnalysisService: CustomerAnalysisService
    ){}

    @Get('')
    async getproducts(
        @Query('startDate') startDate: Date,
        @Query('endDate') endDate: Date,
        @Query('sortCriteria') sortCriteria: sortCriteria,
    ) {
        try {
            return this.customerAnalysisService.getCustomerDetails(startDate, endDate, sortCriteria)
        } catch (error) {
            throw new Error('Error in fetching customer analysis data')
        }
    }
}