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
exports.UserRegisterRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UserRegisterRequestDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { username: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String, minLength: 3, maxLength: 20, pattern: "/^[+0-9\\s\\-()]*$/" }, password: { required: true, type: () => String, minLength: 8, pattern: "/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).{8,}$/" } };
    }
}
exports.UserRegisterRequestDto = UserRegisterRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.trim().toLowerCase()),
    (0, swagger_1.ApiProperty)({ example: 'example@gmail.com' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[+0-9\s\-()]*$/, { message: 'Invalid phone number format' }),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.Matches)(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, {
        message: 'Пароль повинен містити принаймні одну цифру, одну маленьку та велику літеру, один спецсимвол і бути не менше 8 символів у довжину.',
    }),
    __metadata("design:type", String)
], UserRegisterRequestDto.prototype, "password", void 0);
//# sourceMappingURL=user.register-request.dto.js.map