"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseMapper = void 0;
const carPost_response_mapper_1 = require("../carPost/carPost.response.mapper");
const role_response_mapper_1 = require("../role/role.response.mapper");
class UserResponseMapper {
    static toListDto(data, query) {
        return {
            data: data.entities.map(this.toListItemDto),
            total: data.total,
            ...query,
        };
    }
    static toListItemDto(data) {
        return {
            id: data.id,
            username: data.username,
            email: data.email,
            createdAt: data.createdAt,
        };
    }
    static toDetailsDto(data) {
        return {
            id: data.id,
            username: data.username,
            email: data.email,
            phone: data.phone,
            roles: data.roles
                ? role_response_mapper_1.RoleResponseMapper.toDetailsListDto(data.roles)
                : null,
            posts: data.posts
                ? carPost_response_mapper_1.CarPostResponseMapper.toDetailsListDto(data.posts)
                : null,
            accountType: data.accountType,
            banned: data.banned,
            token: data.token,
            password: data.password,
            updatedAt: data.updatedAt,
            createdAt: data.createdAt,
        };
    }
}
exports.UserResponseMapper = UserResponseMapper;
//# sourceMappingURL=user.response.mapper.js.map