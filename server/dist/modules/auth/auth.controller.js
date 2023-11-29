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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const logout_guard_1 = require("../../common/guards/logout.guard");
const user_response_mapper_1 = require("../user/user.response.mapper");
const auth_service_1 = require("./auth.service");
const user_login_request_dto_1 = require("./dto/request/user.login-request.dto");
const user_register_request_dto_1 = require("./dto/request/user.register-request.dto");
const user_register_response_dto_1 = require("./dto/response/user.register-response.dto");
let AuthController = exports.AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async registerUser(dto) {
        try {
            const result = await this.authService.register(dto);
            return user_response_mapper_1.UserResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }
    async login(data) {
        return await this.authService.login(data);
    }
    async logout() {
        return;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register new user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: user_register_response_dto_1.UserRegisterResponseDto,
    }),
    (0, common_1.Post)('register'),
    openapi.ApiResponse({ status: 201, type: require("./dto/response/user.register-response.dto").UserRegisterResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_request_dto_1.UserRegisterRequestDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Login user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
    }),
    (0, common_1.Post)('login'),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_request_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), logout_guard_1.LogoutGuard),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Successful response',
        type: 'The user is logout',
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: 'The user is logout',
    }),
    (0, common_1.Post)('logout'),
    openapi.ApiResponse({ status: 201 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map