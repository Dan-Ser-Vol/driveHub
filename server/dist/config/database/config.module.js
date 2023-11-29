"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./configuration");
const configuration_service_1 = require("./configuration.service");
const process = require("process");
let CommonConfigModule = exports.CommonConfigModule = class CommonConfigModule {
};
exports.CommonConfigModule = CommonConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                envFilePath: [`environments/${process.env.NODE_ENV}.env`],
            }),
        ],
        providers: [config_1.ConfigService, configuration_service_1.CommonConfigService],
        exports: [config_1.ConfigService, configuration_service_1.CommonConfigService],
    })
], CommonConfigModule);
//# sourceMappingURL=config.module.js.map