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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const ban_status_enum_1 = require("./enum/ban-status.enum");
const user_repository_1 = require("./user.repository");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll(query) {
        return await this.userRepository.getAll(query);
    }
    async getById(userId) {
        await this.findUserOrException(userId);
        return await this.userRepository.findOne({
            where: { id: userId },
            relations: { posts: true, roles: true },
        });
    }
    async updateUser(userId, data) {
        const findUser = await this.findUserOrException(userId);
        await this.userRepository.merge(findUser, data);
        return this.userRepository.save(findUser);
    }
    async deleteUser(userId) {
        const findUser = await this.findUserOrException(userId);
        await this.userRepository.remove(findUser);
    }
    async banStatus(userId, status) {
        const user = await this.findUserOrException(userId);
        try {
            switch (status) {
                case 'active':
                    user.banned = ban_status_enum_1.BanStatusEnum.ACTIVE;
                    break;
                case 'inactive':
                    user.banned = ban_status_enum_1.BanStatusEnum.INACTIVE;
                    break;
            }
        }
        catch (err) {
            throw new common_1.HttpException(err.message, common_1.HttpStatus.BAD_REQUEST);
        }
        await this.userRepository.save(user);
        return user;
    }
    async findUserOrException(userId) {
        const findUser = await this.userRepository.findOneBy({ id: userId });
        if (!findUser) {
            throw new common_1.UnprocessableEntityException('User entity not found');
        }
        return findUser;
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map