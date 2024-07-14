/* eslint-disable prettier/prettier */
import { Controller, FileTypeValidator, Get, HttpCode, Logger, MaxFileSizeValidator, ParseFilePipe, Post, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { FileUploadService } from './file-upload.service';

@Controller('file-upload')
export class FileUploadController {
    constructor(
        private readonly fileUploadService: FileUploadService,
    ){}
    /**
     * 
     * @param file 
     */

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
          limits: {
            // max size 50mb
            fileSize: 5e7
          }
        })
      )
    async uploadFile(@UploadedFile(new ParseFilePipe({
        validators: [
            new FileTypeValidator({ fileType: 'csv' }),
        ]
      })) file: Express.Multer.File) {
          try {
            await this.fileUploadService.importOrderDetails(file)
          } catch (error) {
              Logger.error('Error in importing orders')
              throw new Error(error)
          }
    }
}
