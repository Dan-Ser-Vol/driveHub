"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPostDetailsResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const carPost_base_dto_1 = require("../request/carPost-base.dto");
class CarPostDetailsResponseDto extends (0, swagger_1.PickType)(carPost_base_dto_1.CarPostBaseDto, [
    'id',
    'brand',
    'model',
    'year',
    'image',
    'mileage',
    'bodyType',
    'status',
    'price',
    'currency',
    'sold',
    'region',
    'description',
    'createdAt',
    'user',
    'updatedAt',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CarPostDetailsResponseDto = CarPostDetailsResponseDto;
//# sourceMappingURL=carPost-details-response.dto.js.map