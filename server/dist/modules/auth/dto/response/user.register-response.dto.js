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
exports.UserRegisterResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_role_enum_1 = require("../../../role/enum/user-role.enum");
class UserRegisterResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, posts: { required: true, type: () => [require("../../../carPost/dto/response/carPost-details-response.dto").CarPostDetailsResponseDto] }, roles: { required: true, type: () => [require("../../../role/dto/response/role-response.dto").RoleResponseDto] }, createdAt: { required: true, type: () => Date } };
    }
}
exports.UserRegisterResponseDto = UserRegisterResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", String)
], UserRegisterResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRegisterResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], UserRegisterResponseDto.prototype, "posts", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(user_role_enum_1.UserRoleEnum),
    __metadata("design:type", Array)
], UserRegisterResponseDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserRegisterResponseDto.prototype, "createdAt", void 0);
//# sourceMappingURL=user.register-response.dto.js.map