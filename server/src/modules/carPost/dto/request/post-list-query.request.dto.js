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
exports.PostListQueryRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const pagination_query_dto_1 = require("../../../../common/dto/pagination.query.dto");
const order_enum_1 = require("../../../../common/enum/order.enum");
const post_list_order_field_enum_1 = require("../../enum/post-list-order-field.enum");
class PostListQueryRequestDto extends pagination_query_dto_1.PaginationQueryDto {
    constructor() {
        super(...arguments);
        this.order = order_enum_1.OrderEnum.ASC;
        this.orderBy = post_list_order_field_enum_1.PostListOrderFieldEnum.createdAt;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { order: { required: false, default: order_enum_1.OrderEnum.ASC, enum: require("../../../../common/enum/order.enum").OrderEnum }, orderBy: { required: false, default: post_list_order_field_enum_1.PostListOrderFieldEnum.createdAt, enum: require("../../enum/post-list-order-field.enum").PostListOrderFieldEnum }, search: { required: false, type: () => String } };
    }
}
exports.PostListQueryRequestDto = PostListQueryRequestDto;
__decorate([
    (0, class_validator_1.IsEnum)(order_enum_1.OrderEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostListQueryRequestDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(post_list_order_field_enum_1.PostListOrderFieldEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostListQueryRequestDto.prototype, "orderBy", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toLowerCase()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PostListQueryRequestDto.prototype, "search", void 0);
//# sourceMappingURL=post-list-query.request.dto.js.map