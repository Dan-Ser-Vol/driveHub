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
exports.CarPostBaseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const body_type_enum_1 = require("../../enum/body-type.enum");
const car_brands_enum_1 = require("../../enum/car-brands.enum");
const currensy_enum_1 = require("../../enum/currensy.enum");
const status_enum_1 = require("../../enum/status.enum");
class CarPostBaseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, brand: { required: true, enum: require("../../enum/car-brands.enum").CarBrandsEnum }, model: { required: true, type: () => String }, year: { required: true, type: () => Number, minimum: 1960, maximum: new Date().getFullYear() }, image: { required: true, type: () => [String] }, mileage: { required: true, type: () => Number, minimum: 0 }, bodyType: { required: true, enum: require("../../enum/body-type.enum").BodyTypeEnum }, status: { required: true, enum: require("../../enum/status.enum").StatusCarEnum }, price: { required: true, type: () => Number }, currency: { required: true, enum: require("../../enum/currensy.enum").CurrencyEnum }, sold: { required: true, type: () => Boolean }, region: { required: true, type: () => String }, description: { required: true, type: () => String }, user: { required: true, type: () => require("../../../../database/entities/user.entity").UserEntity }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
exports.CarPostBaseDto = CarPostBaseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Audi',
        description: 'The brand of the car',
        enum: car_brands_enum_1.CarBrandsEnum,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Q7', description: 'The model of the car' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2017, description: 'The year of the car' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1960),
    (0, class_validator_1.Max)(new Date().getFullYear()),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CarPostBaseDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'taz.png',
        description: 'The image of the car',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CarPostBaseDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 50000, description: 'The mileage of the car' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CarPostBaseDto.prototype, "mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: body_type_enum_1.BodyTypeEnum,
        default: body_type_enum_1.BodyTypeEnum.WAGON,
        description: 'The body type of the car',
    }),
    (0, class_validator_1.IsEnum)(body_type_enum_1.BodyTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "bodyType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: status_enum_1.StatusCarEnum,
        default: status_enum_1.StatusCarEnum.USED,
        description: 'The status of the car',
    }),
    (0, class_validator_1.IsEnum)(status_enum_1.StatusCarEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20000, description: 'The price of the car' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CarPostBaseDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: currensy_enum_1.CurrencyEnum,
        default: currensy_enum_1.CurrencyEnum.USD,
        description: 'The currency of the car price',
    }),
    (0, class_validator_1.IsEnum)(currensy_enum_1.CurrencyEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, description: 'Whether the car is sold' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CarPostBaseDto.prototype, "sold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Paris', description: 'The region of the car' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "region", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'This Audi Q7 is a compact luxury car manufactured...',
        description: 'Detailed description of the car',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CarPostBaseDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CarPostBaseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CarPostBaseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=carPost-base.dto.js.map