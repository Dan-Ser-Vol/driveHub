"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_redis_1 = require("@webeleon/nestjs-redis");
const app_config_module_1 = require("../../config/appConfig/app-config.module");
const config_module_1 = require("../../config/database/config.module");
const configuration_service_1 = require("../../config/database/configuration.service");
const role_entity_1 = require("../../database/entities/role.entity");
const user_entity_1 = require("../../database/entities/user.entity");
const mail_module_1 = require("../mail/mail.module");
const mail_service_1 = require("../mail/mail.service");
const role_module_1 = require("../role/role.module");
const role_service_1 = require("../role/role.service");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const bearer_strategy_1 = require("./bearer.strategy");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            app_config_module_1.AppConfigModule,
            nestjs_redis_1.RedisModule,
            passport_1.PassportModule.register({
                defaultStrategy: 'bearer',
                property: 'user',
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, role_entity_1.RoleEntity]),
            nestjs_redis_1.RedisModule.forRootAsync({
                imports: [config_module_1.CommonConfigModule],
                useFactory: async (commonConfigService) => {
                    return {
                        url: commonConfigService.redis_url,
                    };
                },
                inject: [configuration_service_1.CommonConfigService],
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_module_1.CommonConfigModule],
                useFactory: async (commonConfigService) => ({
                    secret: commonConfigService.jwt_secret,
                    signOptions: {
                        expiresIn: commonConfigService.jwt_expires_in,
                    },
                }),
                inject: [configuration_service_1.CommonConfigService],
            }),
            role_module_1.RoleModule,
            mail_module_1.MailModule,
        ],
        providers: [auth_service_1.AuthService, bearer_strategy_1.BearerStrategy, role_service_1.RoleService, mail_service_1.MailService],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_service_1.AuthService, passport_1.PassportModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map