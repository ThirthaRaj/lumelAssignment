var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Logger } from '@nestjs/common';
import { parse } from 'csv-parse';
let FileUploadService = class FileUploadService {
    constructor() { }
    async importOrderDetails(file) {
        try {
            if ((file === null || file === void 0 ? void 0 : file.mimetype) === 'text/csv') {
                const csvString = Buffer.from(file.buffer).toString('utf8');
                parse(csvString, {
                    columns: true,
                    trim: true,
                    skip_empty_lines: true
                }, async (err, rows) => {
                    if (err) {
                        Logger.error(err, 'Error parsing CSV:');
                        return;
                    }
                    console.log('========1=1=1=11=', rows);
                    let updatedRows = rows.map((row) => {
                        if (row === null || row === void 0 ? void 0 : row.Title) {
                            let title = row.Title;
                            if (title)
                                return title;
                        }
                    });
                    updatedRows = updatedRows.filter(Boolean);
                    let uniqueRows = new Map(updatedRows.map((row) => [row.toLowerCase(), row]));
                });
            }
        }
        catch (error) {
            console.error(error);
            throw new Error('Error importing order details into database');
        }
    }
};
FileUploadService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], FileUploadService);
export { FileUploadService };
//# sourceMappingURL=file-upload.service.js.map