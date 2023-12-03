import { CarPostBaseDto } from '../request/carPost-base.dto';
declare const CarPostDetailsResponseDto_base: import("@nestjs/common").Type<Pick<CarPostBaseDto, "user" | "region" | "image" | "year" | "createdAt" | "updatedAt" | "id" | "description" | "brand" | "model" | "mileage" | "bodyType" | "status" | "price" | "currency" | "sold">>;
export declare class CarPostDetailsResponseDto extends CarPostDetailsResponseDto_base {
}
export {};
