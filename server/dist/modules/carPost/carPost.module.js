"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPostModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const carPost_entity_1 = require("../../database/entities/carPost.entity");
const auth_module_1 = require("../auth/auth.module");
const files_module_1 = require("../files/files.module");
const files_service_1 = require("../files/files.service");
const user_module_1 = require("../user/user.module");
const carPost_controller_1 = require("./carPost.controller");
const carPost_repository_1 = require("./carPost.repository");
const carPost_service_1 = require("./carPost.service");
let CarPostModule = class CarPostModule {
};
exports.CarPostModule = CarPostModule;
exports.CarPostModule = CarPostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([carPost_entity_1.CarPostEntity]),
            passport_1.PassportModule.register({
                defaultStrategy: 'bearer',
                property: 'user',
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            files_module_1.FilesModule,
        ],
        controllers: [carPost_controller_1.CarPostController],
        providers: [carPost_service_1.CarPostService, carPost_repository_1.CarPostRepository, files_service_1.FilesService],
        exports: [carPost_service_1.CarPostService, carPost_repository_1.CarPostRepository],
    })
], CarPostModule);
//# sourceMappingURL=carPost.module.js.map