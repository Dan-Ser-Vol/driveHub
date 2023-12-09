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
exports.CarPostService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
const files_service_1 = require("../files/files.service");
const user_repository_1 = require("../user/user.repository");
const carPost_repository_1 = require("./carPost.repository");
let CarPostService = class CarPostService {
    constructor(carPostRepository, userRepository, filesService) {
        this.carPostRepository = carPostRepository;
        this.userRepository = userRepository;
        this.filesService = filesService;
    }
    async createPost(data, userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        const newPost = this.carPostRepository.create({
            ...data,
            user: user,
        });
        return await this.carPostRepository.save(newPost);
    }
    async getAll(query) {
        const posts = await this.carPostRepository.getAll(query);
        if (!posts) {
            throw new common_1.HttpException('no posts', common_1.HttpStatus.NOT_FOUND);
        }
        return posts;
    }
    async addImageToPost(postId, image) {
        try {
            const fileName = await this.filesService.createFile(image);
            const findPost = await this.carPostRepository.findOneBy({
                id: postId,
            });
            if (!findPost)
                throw new common_1.NotFoundException(`Car post with id ${postId} not found`);
            findPost.image.push(fileName);
            return await this.carPostRepository.save(findPost);
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getCarPostById(postId) {
        return await this.findCarPostByIdOrException(postId);
    }
    async getCarPostByUserId(userId) {
        const posts = await this.carPostRepository.find({
            where: { user: { id: userId } },
        });
        if (!posts.length) {
            throw new common_1.HttpException('This user has no posts yet', common_1.HttpStatus.NOT_FOUND);
        }
        return posts;
    }
    async updateCarPost(postId, dto) {
        const entity = await this.findCarPostByIdOrException(postId);
        this.carPostRepository.merge(entity, dto);
        return await this.carPostRepository.save(entity);
    }
    async deleteImageFromPost(postId, image) {
        try {
            const filePath = path.resolve(__dirname, '../../', 'static', image);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return;
            }
            else {
                throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteCarPostById(postId) {
        const findPost = await this.findCarPostByIdOrException(postId);
        if (!findPost) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        await this.carPostRepository.remove(findPost);
    }
    async findCarPostByIdOrException(carId) {
        const car = await this.carPostRepository.findOneBy({ id: carId });
        if (!car) {
            throw new common_1.UnprocessableEntityException('Car entity not found');
        }
        return car;
    }
};
exports.CarPostService = CarPostService;
exports.CarPostService = CarPostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [carPost_repository_1.CarPostRepository,
        user_repository_1.UserRepository,
        files_service_1.FilesService])
], CarPostService);
//# sourceMappingURL=carPost.service.js.map