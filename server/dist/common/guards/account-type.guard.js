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
exports.AccountTypeGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const account_type_decorator_1 = require("../decorators/account-type.decorator");
let AccountTypeGuard = class AccountTypeGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        let userTypeAllowed = this.reflector.get(account_type_decorator_1.ACCOUNT_TYPE_KEY, context.getHandler());
        if (!userTypeAllowed) {
            userTypeAllowed = this.reflector.get(account_type_decorator_1.ACCOUNT_TYPE_KEY, context.getClass());
            if (!userTypeAllowed) {
                return true;
            }
        }
        const user = request.user;
        if (!userTypeAllowed.includes(user.accountType)) {
            throw new common_1.HttpException('Access denied! Because you have basic account!', common_1.HttpStatus.FORBIDDEN);
        }
        return true;
    }
};
exports.AccountTypeGuard = AccountTypeGuard;
exports.AccountTypeGuard = AccountTypeGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], AccountTypeGuard);
//# sourceMappingURL=account-type.guard.js.map