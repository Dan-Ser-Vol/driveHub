import { UserEntity } from '../../../../database/entities/user.entity';
import { BodyTypeEnum } from '../../enum/body-type.enum';
import { CarBrandsEnum } from '../../enum/car-brands.enum';
import { CurrencyEnum } from '../../enum/currensy.enum';
import { StatusCarEnum } from '../../enum/status.enum';
export declare class CarPostBaseDto {
    id: string;
    brand: CarBrandsEnum;
    model: string;
    year: number;
    image: string[];
    mileage: number;
    bodyType: BodyTypeEnum;
    status: StatusCarEnum;
    price: number;
    currency: CurrencyEnum;
    sold: boolean;
    region: string;
    description: string;
    user: UserEntity;
    createdAt: Date;
    updatedAt: Date;
}
