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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanUserGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const ban_decorator_1 = require("../decorators/ban.decorator");
let BanUserGuard = exports.BanUserGuard = class BanUserGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        let userTypeAllowed = this.reflector.get(ban_decorator_1.BAN_KEY, context.getHandler());
        if (!userTypeAllowed) {
            userTypeAllowed = this.reflector.get(ban_decorator_1.BAN_KEY, context.getClass());
            if (!userTypeAllowed) {
                return true;
            }
        }
        const user = request.user;
        if (!userTypeAllowed.includes(user.banned)) {
            throw new common_1.HttpException('Access denied. You have been banned by the administrator!', common_1.HttpStatus.FORBIDDEN);
        }
        return true;
    }
};
exports.BanUserGuard = BanUserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], BanUserGuard);
//# sourceMappingURL=ban.guard.js.map