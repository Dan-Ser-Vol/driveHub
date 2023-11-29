"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDetailsResponseDto = void 0;
const openapi = require("@nestjs/swagger");
class UserDetailsResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, username: { required: true, type: () => String }, email: { required: true, type: () => String }, phone: { required: true, type: () => String }, accountType: { required: true, type: () => String, enum: require("../../enum/account-type.enum").AccountTypeEnum.BASIC }, posts: { required: true, type: () => [require("../../../carPost/dto/response/carPost-details-response.dto").CarPostDetailsResponseDto] }, roles: { required: true, type: () => [require("../../../role/dto/response/role-response.dto").RoleResponseDto] }, banned: { required: true, enum: require("../../enum/ban-status.enum").BanStatusEnum }, password: { required: true, type: () => String }, token: { required: false, type: () => String }, updatedAt: { required: true, type: () => Date }, createdAt: { required: true, type: () => Date } };
    }
}
exports.UserDetailsResponseDto = UserDetailsResponseDto;
//# sourceMappingURL=user.details-response.dto.js.map