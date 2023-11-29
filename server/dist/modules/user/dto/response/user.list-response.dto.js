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
exports.UserListItemResponseDto = exports.UserListResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_list_query_request_dto_1 = require("../request/user-list-query.request.dto");
class UserListResponseDto extends user_list_query_request_dto_1.UserListQueryRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./user.list-response.dto").UserListItemResponseDto] }, total: { required: true, type: () => Number } };
    }
}
exports.UserListResponseDto = UserListResponseDto;
class UserListItemResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } };
    }
}
exports.UserListItemResponseDto = UserListItemResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], UserListItemResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserListItemResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'example@gmail.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserListItemResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserListItemResponseDto.prototype, "createdAt", void 0);
//# sourceMappingURL=user.list-response.dto.js.map