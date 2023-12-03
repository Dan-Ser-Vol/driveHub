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
exports.CarPostController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const account_type_decorator_1 = require("../../common/decorators/account-type.decorator");
const role_decorator_1 = require("../../common/decorators/role.decorator");
const account_type_guard_1 = require("../../common/guards/account-type.guard");
const role_guard_1 = require("../../common/guards/role.guard");
const user_role_enum_1 = require("../role/enum/user-role.enum");
const account_type_enum_1 = require("../user/enum/account-type.enum");
const carPost_response_mapper_1 = require("./carPost.response.mapper");
const carPost_service_1 = require("./carPost.service");
const carPost_create_dto_1 = require("./dto/request/carPost-create.dto");
const carPost_update_dto_1 = require("./dto/request/carPost-update.dto");
const image_dto_1 = require("./dto/request/image.dto");
const post_list_query_request_dto_1 = require("./dto/request/post-list-query.request.dto");
const carPost_details_response_dto_1 = require("./dto/response/carPost-details-response.dto");
let CarPostController = exports.CarPostController = class CarPostController {
    constructor(carPostService) {
        this.carPostService = carPostService;
    }
    async createCar(req, data) {
        try {
            const result = await this.carPostService.createPost(data, req.user.id);
            return carPost_response_mapper_1.CarPostResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            console.log(err);
        }
    }
    async getAllPost(query) {
        try {
            const result = await this.carPostService.getAll(query);
            return carPost_response_mapper_1.CarPostResponseMapper.toListDto(result, query);
        }
        catch (err) {
            throw new common_1.HttpException(err.massege, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async addImageToPost(postId, image) {
        try {
            const result = await this.carPostService.addImageToPost(postId, image);
            return carPost_response_mapper_1.CarPostResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async DeleteImageToPost(postId, image) {
        try {
            await this.carPostService.deleteImageFromPost(postId, image);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getPostById(postId) {
        try {
            const result = await this.carPostService.getCarPostById(postId);
            return carPost_response_mapper_1.CarPostResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async getPostByUserId(userId) {
        try {
            const result = await this.carPostService.getCarPostByUserId(userId);
            return carPost_response_mapper_1.CarPostResponseMapper.toDetailsListDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async updateCarPost(postId, body) {
        try {
            const result = await this.carPostService.updateCarPost(postId, body);
            return carPost_response_mapper_1.CarPostResponseMapper.toDetailsDto(result);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteCar(postId) {
        try {
            await this.carPostService.deleteCarPostById(postId);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Create new post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Post)('create'),
    openapi.ApiResponse({ status: 201, type: require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, carPost_create_dto_1.CarPostCreateDto]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "createCar", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_list_query_request_dto_1.PostListQueryRequestDto]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "getAllPost", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, account_type_decorator_1.AccountTypeDecorator)(account_type_enum_1.AccountTypeEnum.PREMIUM),
    (0, swagger_1.ApiOperation)({ summary: 'Add an image to the post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Post)('image/:postId'),
    openapi.ApiResponse({ status: 201, type: require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, image_dto_1.ImageDto]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "addImageToPost", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, account_type_decorator_1.AccountTypeDecorator)(account_type_enum_1.AccountTypeEnum.PREMIUM),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an image to the post' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
    }),
    (0, common_1.Delete)('image/:postId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Body)('image')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, image_dto_1.ImageDto]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "DeleteImageToPost", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Get post by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Get)(':postId'),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto }),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "getPostById", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.BUYER, user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN, user_role_enum_1.UserRoleEnum.MANAGER),
    (0, swagger_1.ApiOperation)({ summary: 'Get post by user id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful response',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Get)('user/:userId'),
    openapi.ApiResponse({ status: 200, type: [require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto] }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "getPostByUserId", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Update car post by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The post has been updated',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Put)('update/:postId'),
    openapi.ApiResponse({ status: 200, type: require("./dto/response/carPost-details-response.dto").CarPostDetailsResponseDto }),
    __param(0, (0, common_1.Param)('postId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, carPost_update_dto_1.CarPostUpdateDto]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "updateCarPost", null);
__decorate([
    (0, role_decorator_1.RolesDecorator)(user_role_enum_1.UserRoleEnum.SELLER, user_role_enum_1.UserRoleEnum.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete car post by id' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The post has been deleted',
        type: carPost_details_response_dto_1.CarPostDetailsResponseDto,
    }),
    (0, common_1.Delete)(':postId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarPostController.prototype, "deleteCar", null);
exports.CarPostController = CarPostController = __decorate([
    (0, swagger_1.ApiTags)('Cars Post'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)(), role_guard_1.RolesGuard, account_type_guard_1.AccountTypeGuard),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [carPost_service_1.CarPostService])
], CarPostController);
//# sourceMappingURL=carPost.controller.js.map