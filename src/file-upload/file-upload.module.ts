import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/entities/customer.entity';
import { OrderEntity } from 'src/entities/order.entity';
import { ProductEntity } from 'src/entities/product.entity';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, ProductEntity, OrderEntity])],
  controllers: [FileUploadController],
  providers: [FileUploadService],
})

export class FileUploadModule {}
