import { CarPostBaseDto } from './carPost-base.dto';
declare const CarPostUpdateDto_base: import("@nestjs/common").Type<Pick<CarPostBaseDto, "region" | "year" | "description" | "brand" | "model" | "mileage" | "bodyType" | "status" | "price" | "currency" | "sold">>;
export declare class CarPostUpdateDto extends CarPostUpdateDto_base {
}
export {};
