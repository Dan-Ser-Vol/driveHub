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
exports.LogoutGuard = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("@webeleon/nestjs-redis");
let LogoutGuard = class LogoutGuard {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (request.headers && request.headers.authorization) {
            const token = request.headers.authorization.split(' ');
            if (token[0] == 'Bearer' && token[1] != '') {
                const jwtToken = token[1];
                if (!(await this.redisClient.exists(jwtToken))) {
                    return false;
                }
                else {
                    await this.redisClient.del(jwtToken);
                    return true;
                }
            }
        }
        return false;
    }
};
exports.LogoutGuard = LogoutGuard;
exports.LogoutGuard = LogoutGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_redis_1.InjectRedisClient)()),
    __metadata("design:paramtypes", [Object])
], LogoutGuard);
//# sourceMappingURL=logout.guard.js.map