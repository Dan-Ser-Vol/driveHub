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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const role_guard_1 = require("../../common/guards/role.guard");
const user_role_enum_1 = require("../role/enum/user-role.enum");
const user_update_request_dto_1 = require("./dto/request/user.update-request.dto");
const user_list_query_request_dto_1 = require("./dto/request/user-list-query.request.dto");
const user_details_response_dto_1 = require("./dto/response/user.details-response.dto");
const user_list_response_dto_1 = require("./dto/response/user.list-response.dto");
const user_update_response_dto_1 = require("./dto/response/user.update-response.dto");
const user_response_mapper_1 = require("./user.response.mapper");
const user_service_1 = require("./user.service");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getAllUsers(query) {
        try {
            const result = await this.userService.getAll(query);
            return user_response_mapper_1.UserResponseMapper.toListDto(result, query);
        }
        catch (err) {
            throw new common_1.HttpException(err.massege, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getById(userId) {
        try {
            const result = await this.userService.getById(userId);
            return user_response_mapper_1.UserResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateUser(userId, data) {
        try {
            const result = await this.userService.updateUser(userId, data);
            return user_response_mapper_1.UserResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async ban(userId, status) {
        const result = await this.userService.banStatus(userId, status);
        return user_response_mapper_1.UserResponseMapper.toDetailsDto(result);
    }
    async deleteUser(userId) {
        try {
            await this.userService.deleteUser(userId);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.MANAGER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: user_list_response_dto_1.UserListResponseDto,
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/user.list-response.dto").UserListResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_list_query_request_dto_1.UserListQueryRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.MANAGER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: user_details_response_dto_1.UserDetailsResponseDto,
    }),
    (0, common_1.Get)(':userId'),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/user.details-response.dto").UserDetailsResponseDto }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.MANAGER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER),
    (0, swagger_1.ApiOperation)({ summary: 'update user by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: user_update_response_dto_1.UserUpdateResponseDto,
    }),
    (0, common_1.Put)('update/:userId'),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/user.update-response.dto").UserUpdateResponseDto }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_update_request_dto_1.UserUpdateRequestDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.MANAGER, user_role_enum_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Banned or unbanned user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: user_details_response_dto_1.UserDetailsResponseDto,
    }),
    (0, common_1.Post)('ban/:userId'),
    openapi.ApiResponse({ status: 201, type: require("./dto/response/user.details-response.dto").UserDetailsResponseDto }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ban", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.MANAGER, user_role_enum_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
    }),
    (0, common_1.Delete)('delete/:userId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map