import { BodyTypeEnum } from '../../modules/carPost/enum/body-type.enum';
import { CarBrandsEnum } from '../../modules/carPost/enum/car-brands.enum';
import { CurrencyEnum } from '../../modules/carPost/enum/currensy.enum';
import { StatusCarEnum } from '../../modules/carPost/enum/status.enum';
import { CreateUpdateModel } from './common/create.update.entity';
import { UserEntity } from './user.entity';
export declare class CarPostEntity extends CreateUpdateModel {
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
    createdAt: Date;
    updatedAt: Date;
    user: UserEntity;
}
