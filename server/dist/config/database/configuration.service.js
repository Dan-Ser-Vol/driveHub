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
exports.CommonConfigService = void 0;
const common_1 = require("@nestjs/common");
const configuration_1 = require("./configuration");
let CommonConfigService = exports.CommonConfigService = class CommonConfigService {
    constructor(postgresqlConfiguration) {
        this.postgresqlConfiguration = postgresqlConfiguration;
    }
    get host() {
        return this.postgresqlConfiguration.host;
    }
    get app_port() {
        return Number(this.postgresqlConfiguration.app_port);
    }
    get port() {
        return Number(this.postgresqlConfiguration.port);
    }
    get user() {
        return this.postgresqlConfiguration.user;
    }
    get password() {
        return this.postgresqlConfiguration.password;
    }
    get database() {
        return this.postgresqlConfiguration.database;
    }
    get redis_url() {
        return this.postgresqlConfiguration.redis_url;
    }
    get jwt_secret() {
        return this.postgresqlConfiguration.jwt_secret;
    }
    get jwt_expires_in() {
        return this.postgresqlConfiguration.jwt_expires_in;
    }
};
exports.CommonConfigService = CommonConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(configuration_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], CommonConfigService);
//# sourceMappingURL=configuration.service.js.map