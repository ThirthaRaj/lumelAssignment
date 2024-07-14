var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
let UserEntity = class UserEntity {
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Date)
], UserEntity.prototype, "dateOfSale", void 0);
__decorate([
    Column('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "unitPrice", void 0);
__decorate([
    Column('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "discount", void 0);
__decorate([
    Column('decimal', { precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], UserEntity.prototype, "shipingCost", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "paymentMethod", void 0);
UserEntity = __decorate([
    Entity({ name: 'orders' })
], UserEntity);
export { UserEntity };
//# sourceMappingURL=order.entity.js.map