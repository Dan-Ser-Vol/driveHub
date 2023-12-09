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
exports.RoleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const role_guard_1 = require("../../common/guards/role.guard");
const create_role_dto_1 = require("./dto/request/create-role.dto");
const role_value_dto_1 = require("./dto/request/role-value.dto");
const role_response_dto_1 = require("./dto/response/role-response.dto");
const user_role_enum_1 = require("./enum/user-role.enum");
const role_service_1 = require("./role.service");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(dto) {
        return this.roleService.createRole(dto);
    }
    getByValue(value) {
        return this.roleService.getRoleByValue(value);
    }
    async addRoleById(userId, role) {
        await this.roleService.addRoleToUserBy(userId, role);
        return `The role ${role.value} has been added`;
    }
    async deleteUser(value) {
        try {
            await this.roleService.deleteRoleByValue(value);
            return `The role ${value} has been deleted `;
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new role' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: role_response_dto_1.RoleResponseDto,
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./dto/response/role-response.dto").RoleResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get role by value' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: role_response_dto_1.RoleResponseDto,
    }),
    (0, common_1.Get)('/:value'),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/role-response.dto").RoleResponseDto }),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_value_dto_1.RoleValueDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "getByValue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add new role to user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response' }),
    (0, common_1.Post)('/:userId'),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "addRoleById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Delete the role' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Successful response' }),
    (0, common_1.Delete)('delete/:value'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_value_dto_1.RoleValueDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "deleteUser", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, common_1.Controller)('roles'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), role_guard_1.RolesGuard),
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map