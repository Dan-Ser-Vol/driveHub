"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPostCreateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const carPost_base_dto_1 = require("./carPost-base.dto");
class CarPostCreateDto extends (0, swagger_1.PickType)(carPost_base_dto_1.CarPostBaseDto, [
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
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CarPostCreateDto = CarPostCreateDto;
//# sourceMappingURL=carPost-create.dto.js.map