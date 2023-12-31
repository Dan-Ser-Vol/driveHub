"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const type_orm_configuration_1 = require("../config/database/type-orm-configuration");
const auth_module_1 = require("./auth/auth.module");
const carPost_module_1 = require("./carPost/carPost.module");
const files_module_1 = require("./files/files.module");
const role_module_1 = require("./role/role.module");
const user_module_1 = require("./user/user.module");
const mail_module_1 = require("./mail/mail.module");
const mail_config_module_1 = require("../config/mailConfig/mail-config.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync(type_orm_configuration_1.TypeOrmConfiguration.config),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            carPost_module_1.CarPostModule,
            files_module_1.FilesModule,
            mail_module_1.MailModule,
            mail_config_module_1.MailConfigModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map