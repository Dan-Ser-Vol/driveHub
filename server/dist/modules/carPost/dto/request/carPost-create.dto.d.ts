import { CarPostBaseDto } from './carPost-base.dto';
declare const CarPostCreateDto_base: import("@nestjs/common").Type<Pick<CarPostBaseDto, "region" | "image" | "year" | "description" | "brand" | "model" | "mileage" | "bodyType" | "status" | "price" | "currency" | "sold">>;
export declare class CarPostCreateDto extends CarPostCreateDto_base {
}
export {};
