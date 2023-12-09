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
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const account_type_enum_1 = require("../../modules/user/enum/account-type.enum");
const ban_status_enum_1 = require("../../modules/user/enum/ban-status.enum");
const carPost_entity_1 = require("./carPost.entity");
const create_update_entity_1 = require("./common/create.update.entity");
const role_entity_1 = require("./role.entity");
let UserEntity = class UserEntity extends create_update_entity_1.CreateUpdateModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, password: { required: true, type: () => String }, accountType: { required: true, type: () => String, enum: require("../../modules/user/enum/account-type.enum").AccountTypeEnum.BASIC }, banned: { required: true, enum: require("../../modules/user/enum/ban-status.enum").BanStatusEnum }, token: { required: false, type: () => String }, posts: { required: true, type: () => [require("./carPost.entity").CarPostEntity] }, roles: { required: true, type: () => [require("./role.entity").RoleEntity] } };
    }
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', unique: true }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: account_type_enum_1.AccountTypeEnum,
        default: account_type_enum_1.AccountTypeEnum.BASIC,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "accountType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ban_status_enum_1.BanStatusEnum,
        default: ban_status_enum_1.BanStatusEnum.INACTIVE,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", String)
], UserEntity.prototype, "banned", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => carPost_entity_1.CarPostEntity, (entity) => entity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.RoleEntity, (entity) => entity.users),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
//# sourceMappingURL=user.entity.js.map