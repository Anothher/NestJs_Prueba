"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolEntity = void 0;
const typeorm_1 = require("typeorm");
let RolEntity = class RolEntity {
};
exports.RolEntity = RolEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        name: 'codRole',
        type: 'int'
    }),
    __metadata("design:type", Number)
], RolEntity.prototype, "id_rol", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'descripcion',
        type: 'varchar',
        nullable: false,
        length: '200'
    }),
    __metadata("design:type", String)
], RolEntity.prototype, "descripcion", void 0);
exports.RolEntity = RolEntity = __decorate([
    (0, typeorm_1.Entity)('tbl_rol')
], RolEntity);
//# sourceMappingURL=rol.entity.js.map