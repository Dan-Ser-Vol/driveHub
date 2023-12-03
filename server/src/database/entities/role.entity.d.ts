import { UserEntity } from './user.entity';
export declare class RoleEntity {
    id: string;
    value: string;
    description: string;
    users: UserEntity[];
}
