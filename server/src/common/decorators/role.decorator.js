"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesDecorator = exports.ROLES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const RolesDecorator = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.RolesDecorator = RolesDecorator;
//# sourceMappingURL=role.decorator.js.map