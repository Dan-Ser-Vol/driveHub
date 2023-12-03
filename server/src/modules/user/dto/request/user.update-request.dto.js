"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const user_base_request_dto_1 = require("./user.base-request.dto");
class UserUpdateRequestDto extends (0, swagger_1.PickType)(user_base_request_dto_1.UserBaseRequestDto, [
    'username',
    'email',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UserUpdateRequestDto = UserUpdateRequestDto;
//# sourceMappingURL=user.update-request.dto.js.map