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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../../database/entities/role.entity");
const user_entity_1 = require("../../database/entities/user.entity");
let RoleService = class RoleService {
    constructor(roleRepository, userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }
    async createRole(dto) {
        const findRole = await this.getRoleByValue(dto.value);
        if (findRole) {
            throw new common_1.HttpException('Such role already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const role = await this.roleRepository.create(dto);
        return await this.roleRepository.save(role);
    }
    async getRoleByValue(value) {
        return await this.roleRepository.findOne({ where: { value } });
    }
    async addRoleToUserBy(userId, newRole) {
        const role = await this.getRoleByValue(newRole.value);
        if (!role) {
            throw new common_1.NotFoundException(`Role with value ${newRole.value} not found`);
        }
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: { roles: true },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        console.log(user.roles);
        const roleExists = user.roles.some((item) => item.value === role.value);
        if (roleExists) {
            throw new common_1.HttpException('This user already has this role', common_1.HttpStatus.BAD_REQUEST);
        }
        if (role && user) {
            user.roles = [...user.roles, role];
        }
        await this.userRepository.save(user);
    }
    async deleteRoleByValue(value) {
        const role = await this.getRoleByValue(value);
        if (!role) {
            throw new common_1.NotFoundException(`Role with value ${value} not found`);
        }
        await this.roleRepository.remove(role);
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.RoleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map