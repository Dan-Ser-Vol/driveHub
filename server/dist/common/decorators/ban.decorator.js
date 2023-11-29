"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BanDecorator = exports.BAN_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.BAN_KEY = 'banned';
const BanDecorator = (...banned) => (0, common_1.SetMetadata)(exports.BAN_KEY, banned);
exports.BanDecorator = BanDecorator;
//# sourceMappingURL=ban.decorator.js.map