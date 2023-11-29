"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPostResponseMapper = void 0;
class CarPostResponseMapper {
    static toDetailsListDto(data) {
        return data.map(this.toDetailsDto);
    }
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
            brand: data.brand,
            model: data.model,
            year: data.year,
            image: data.image,
            mileage: data.mileage,
            bodyType: data.bodyType,
            status: data.status,
            price: data.price,
            currency: data.currency,
            sold: data.sold,
            region: data.region,
            description: data.description,
            user: data.user,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
    }
    static toDetailsDto(data) {
        return {
            id: data.id,
            brand: data.brand,
            model: data.model,
            year: data.year,
            image: data.image,
            mileage: data.mileage,
            bodyType: data.bodyType,
            status: data.status,
            price: data.price,
            currency: data.currency,
            sold: data.sold,
            region: data.region,
            description: data.description,
            user: data.user,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        };
    }
}
exports.CarPostResponseMapper = CarPostResponseMapper;
//# sourceMappingURL=carPost.response.mapper.js.map