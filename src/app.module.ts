import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerAnalysisModule } from './customer-analysis/customer-analysis.module';
import { dataSourceOptions } from './database/config';
import { FileUploadModule } from './file-upload/file-upload.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true,}),TypeOrmModule.forRoot(dataSourceOptions), FileUploadModule, CustomerAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
