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
exports.BearerStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_http_bearer_1 = require("passport-http-bearer");
const nestjs_redis_1 = require("@webeleon/nestjs-redis");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
let BearerStrategy = exports.BearerStrategy = class BearerStrategy extends (0, passport_1.PassportStrategy)(passport_http_bearer_1.Strategy, 'bearer') {
    constructor(redisClient, jwtService, authService) {
        super();
        this.redisClient = redisClient;
        this.jwtService = jwtService;
        this.authService = authService;
    }
    async validate(token) {
        let user = null;
        try {
            if (!(await this.redisClient.exists(token))) {
                throw new common_1.UnauthorizedException();
            }
            await this.jwtService.verifyAsync(token);
            const tokenPayload = this.jwtService.decode(token);
            user = await this.authService.validateUser(tokenPayload);
        }
        catch (err) {
            common_1.Logger.error(err);
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
exports.BearerStrategy = BearerStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_redis_1.InjectRedisClient)()),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        auth_service_1.AuthService])
], BearerStrategy);
//# sourceMappingURL=bearer.strategy.js.map