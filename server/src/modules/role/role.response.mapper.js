"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleResponseMapper = void 0;
class RoleResponseMapper {
    static toDetailsListDto(data) {
        return data.map(this.toDetailsDto);
    }
    static toDetailsDto(data) {
        return {
            value: data.value,
            description: data.description,
        };
    }
}
exports.RoleResponseMapper = RoleResponseMapper;
//# sourceMappingURL=role.response.mapper.js.map