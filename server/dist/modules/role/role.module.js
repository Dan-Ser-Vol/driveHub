"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../../config/database/config.module");
const configuration_service_1 = require("../../config/database/configuration.service");
const role_entity_1 = require("../../database/entities/role.entity");
const user_entity_1 = require("../../database/entities/user.entity");
const user_module_1 = require("../user/user.module");
const user_service_1 = require("../user/user.service");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
let RoleModule = class RoleModule {
};
exports.RoleModule = RoleModule;
exports.RoleModule = RoleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forFeature([role_entity_1.RoleEntity, user_entity_1.UserEntity]),
            passport_1.PassportModule.register({
                defaultStrategy: 'bearer',
                property: 'user',
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
        ],
        providers: [role_service_1.RoleService, user_service_1.UserService],
        controllers: [role_controller_1.RoleController],
        exports: [role_service_1.RoleService],
    })
], RoleModule);
//# sourceMappingURL=role.module.js.map