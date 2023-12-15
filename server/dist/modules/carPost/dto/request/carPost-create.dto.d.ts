import { CarPostBaseDto } from './carPost-base.dto';
declare const CarPostCreateDto_base: import("@nestjs/common").Type<Pick<CarPostBaseDto, "brand" | "model" | "year" | "image" | "mileage" | "bodyType" | "status" | "price" | "currency" | "sold" | "region" | "description">>;
export declare class CarPostCreateDto extends CarPostCreateDto_base {
}
export {};
