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
exports.CarPostEntity = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const body_type_enum_1 = require("../../modules/carPost/enum/body-type.enum");
const car_brands_enum_1 = require("../../modules/carPost/enum/car-brands.enum");
const currensy_enum_1 = require("../../modules/carPost/enum/currensy.enum");
const status_enum_1 = require("../../modules/carPost/enum/status.enum");
const create_update_entity_1 = require("./common/create.update.entity");
const user_entity_1 = require("./user.entity");
let CarPostEntity = class CarPostEntity extends create_update_entity_1.CreateUpdateModel {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, brand: { required: true, enum: require("../../modules/carPost/enum/car-brands.enum").CarBrandsEnum }, model: { required: true, type: () => String }, year: { required: true, type: () => Number }, image: { required: true, type: () => [String] }, mileage: { required: true, type: () => Number, minimum: 0 }, bodyType: { required: true, enum: require("../../modules/carPost/enum/body-type.enum").BodyTypeEnum }, status: { required: true, enum: require("../../modules/carPost/enum/status.enum").StatusCarEnum }, price: { required: true, type: () => Number }, currency: { required: true, enum: require("../../modules/carPost/enum/currensy.enum").CurrencyEnum }, sold: { required: true, type: () => Boolean }, region: { required: true, type: () => String }, description: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, user: { required: true, type: () => require("./user.entity").UserEntity } };
    }
};
exports.CarPostEntity = CarPostEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The unique identifier of the car' }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, typeorm_1.Column)({ type: 'varchar', enum: car_brands_enum_1.CarBrandsEnum, default: car_brands_enum_1.CarBrandsEnum.Audi }),
    (0, swagger_1.ApiProperty)({ example: 'Renault', description: 'The brand of the car' }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    (0, swagger_1.ApiProperty)({ example: 'Logan', description: 'The model of the car' }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    (0, swagger_1.ApiProperty)({ example: 1963, description: 'The age of the car' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CarPostEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', array: true, default: [] }),
    (0, swagger_1.ApiProperty)({
        example: 'toyota45w5w.png',
        description: 'The image of the car',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Array)
], CarPostEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true, default: 0 }),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ example: 50000, description: 'The mileage of the car' }),
    __metadata("design:type", Number)
], CarPostEntity.prototype, "mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: body_type_enum_1.BodyTypeEnum,
        default: body_type_enum_1.BodyTypeEnum.SEDAN,
    }),
    (0, swagger_1.ApiProperty)({
        enum: body_type_enum_1.BodyTypeEnum,
        default: body_type_enum_1.BodyTypeEnum.WAGON,
        description: 'The body type of the car',
    }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "bodyType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: status_enum_1.StatusCarEnum,
        default: status_enum_1.StatusCarEnum.USED,
    }),
    (0, swagger_1.ApiProperty)({
        enum: status_enum_1.StatusCarEnum,
        default: status_enum_1.StatusCarEnum.NEW,
        description: 'The status of the car',
    }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer', nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 20000, description: 'The price of the car' }),
    __metadata("design:type", Number)
], CarPostEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: currensy_enum_1.CurrencyEnum,
        default: currensy_enum_1.CurrencyEnum.UAH,
    }),
    (0, swagger_1.ApiProperty)({
        enum: currensy_enum_1.CurrencyEnum,
        default: currensy_enum_1.CurrencyEnum.UAH,
        description: 'The currency of the car price',
    }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    (0, swagger_1.ApiProperty)({ example: false, description: 'Whether the car is sold' }),
    __metadata("design:type", Boolean)
], CarPostEntity.prototype, "sold", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    (0, swagger_1.ApiProperty)({ example: 'Paris', description: 'The region of the car' }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    (0, swagger_1.ApiProperty)({
        example: 'This Audi A3 is a compact luxury sedan manufactured...',
        description: 'Detailed description of the car',
    }),
    __metadata("design:type", String)
], CarPostEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CarPostEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CarPostEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (entity) => entity.posts),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], CarPostEntity.prototype, "user", void 0);
exports.CarPostEntity = CarPostEntity = __decorate([
    (0, typeorm_1.Entity)('carPost')
], CarPostEntity);
//# sourceMappingURL=carPost.entity.js.map