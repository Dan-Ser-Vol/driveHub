import { AccountTypeEnum } from '../../modules/user/enum/account-type.enum';
import { BanStatusEnum } from '../../modules/user/enum/ban-status.enum';
import { CarPostEntity } from './carPost.entity';
import { CreateUpdateModel } from './common/create.update.entity';
import { RoleEntity } from './role.entity';
export declare class UserEntity extends CreateUpdateModel {
    id: string;
    username: string;
    email: string;
    phone: string;
    password: string;
    accountType: AccountTypeEnum.BASIC;
    banned: BanStatusEnum;
    token?: string;
    posts: CarPostEntity[];
    roles: RoleEntity[];
}
