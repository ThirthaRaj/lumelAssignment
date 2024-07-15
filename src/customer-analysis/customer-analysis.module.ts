import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/entities/customer.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { CustomerAnalysisController } from './customer-analysis.controller';
import { CustomerAnalysisService } from './customer-analysis.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, ProductEntity, OrderEntity])],
  controllers: [CustomerAnalysisController],
  providers: [CustomerAnalysisService],
})

export class CustomerAnalysisModule {}
