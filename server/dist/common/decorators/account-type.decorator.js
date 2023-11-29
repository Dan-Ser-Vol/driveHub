"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountTypeDecorator = exports.ACCOUNT_TYPE_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ACCOUNT_TYPE_KEY = 'accountType';
const AccountTypeDecorator = (...accountType) => (0, common_1.SetMetadata)(exports.ACCOUNT_TYPE_KEY, accountType);
exports.AccountTypeDecorator = AccountTypeDecorator;
//# sourceMappingURL=account-type.decorator.js.map