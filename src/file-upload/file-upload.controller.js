var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, FileTypeValidator, Logger, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileUploadService } from './file-upload.service';
let FileUploadController = class FileUploadController {
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    async uploadFile(file) {
        try {
            await this.fileUploadService.importOrderDetails(file);
        }
        catch (error) {
            Logger.error('Error in importing orders');
            throw new Error(error);
        }
    }
};
__decorate([
    Post(),
    UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, callback) => {
                const name = file.originalname.split('.')[0];
                const fileExtName = extname(file.originalname);
                callback(null, `${name}-${Date.now()}${fileExtName}`);
            }
        })
    })),
    __param(0, UploadedFile(new ParseFilePipe({
        validators: [
            new FileTypeValidator({ fileType: 'csv' }),
        ]
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "uploadFile", null);
FileUploadController = __decorate([
    Controller('file-upload'),
    __metadata("design:paramtypes", [FileUploadService])
], FileUploadController);
export { FileUploadController };
//# sourceMappingURL=file-upload.controller.js.map