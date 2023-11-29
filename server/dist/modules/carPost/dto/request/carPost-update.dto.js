"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPostUpdateDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const carPost_base_dto_1 = require("./carPost-base.dto");
class CarPostUpdateDto extends (0, swagger_1.PickType)(carPost_base_dto_1.CarPostBaseDto, [
    'brand',
    'model',
    'year',
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
exports.CarPostUpdateDto = CarPostUpdateDto;
//# sourceMappingURL=carPost-update.dto.js.map