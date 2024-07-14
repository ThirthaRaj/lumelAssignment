"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
var typeorm_1 = require("typeorm");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "dateOfSale", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 })
    ], UserEntity.prototype, "unitPrice", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 })
    ], UserEntity.prototype, "discount", void 0);
    __decorate([
        (0, typeorm_1.Column)('decimal', { precision: 5, scale: 2 })
    ], UserEntity.prototype, "shipingCost", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEntity.prototype, "paymentMethod", void 0);
    UserEntity = __decorate([
        (0, typeorm_1.Entity)({ name: 'orders' })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
//# sourceMappingURL=order.entity.js.map