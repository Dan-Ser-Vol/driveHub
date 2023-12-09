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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_redis_1 = require("@webeleon/nestjs-redis");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../../database/entities/user.entity");
const mail_service_1 = require("../mail/mail.service");
const user_role_enum_1 = require("../role/enum/user-role.enum");
const role_service_1 = require("../role/role.service");
const account_type_enum_1 = require("../user/enum/account-type.enum");
let AuthService = class AuthService {
    constructor(userRepository, roleService, mailService, redisClient, jwtService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.mailService = mailService;
        this.redisClient = redisClient;
        this.jwtService = jwtService;
    }
    async register(dto) {
        const findUser = await this.userRepository.findOneBy({
            email: dto.email,
        });
        if (findUser) {
            throw new common_1.HttpException('User already exist', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        const role = await this.roleService.getRoleByValue(user_role_enum_1.UserRoleEnum.ADMIN);
        const hashPassword = await bcrypt.hash(dto.password, 5);
        const newUser = await this.userRepository.create({
            ...dto,
            accountType: account_type_enum_1.AccountTypeEnum.BASIC,
            roles: [role],
            password: hashPassword,
        });
        const token = this.signIn({ email: newUser.email });
        await this.redisClient.setEx(token, 10000, token);
        newUser.token = token;
        const context = {
            username: newUser.username,
            actionToken: token,
        };
        await this.mailService.mail(newUser.email, context);
        return await this.userRepository.save(newUser);
    }
    async login(data) {
        try {
            const findUser = await this.userRepository.findOne({
                where: { email: data.email },
            });
            const isMatched = await this.comparePassword(data.password, findUser.password);
            if (!isMatched) {
                throw new common_1.HttpException('Email or Password is wrong', common_1.HttpStatus.FORBIDDEN);
            }
            const token = this.signIn({ email: findUser.email });
            await this.redisClient.setEx(token, 1000000, token);
            return { token };
        }
        catch (err) {
            throw new common_1.HttpException('Email or password is wrong!', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    signIn(data) {
        return this.jwtService.sign(data);
    }
    async validateUser(data) {
        const findUser = await this.userRepository.findOne({
            where: {
                email: data.email,
            },
            relations: { roles: true, posts: true },
        });
        if (!findUser) {
            throw new common_1.UnprocessableEntityException('User entity not found');
        }
        return findUser;
    }
    async decode(token) {
        try {
            return this.jwtService.decode(token);
        }
        catch (err) {
            common_1.Logger.error(err);
        }
    }
    async comparePassword(newPassword, oldPassword) {
        return await bcrypt.compare(newPassword, oldPassword);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, nestjs_redis_1.InjectRedisClient)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        role_service_1.RoleService,
        mail_service_1.MailService, Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map