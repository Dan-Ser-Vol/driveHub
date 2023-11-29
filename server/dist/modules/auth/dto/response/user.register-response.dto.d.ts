import { CarPostDetailsResponseDto } from '../../../carPost/dto/response/carPost-details-response.dto';
import { RoleResponseDto } from '../../../role/dto/response/role-response.dto';
export declare class UserRegisterResponseDto {
    id: string;
    username: string;
    email: string;
    posts: CarPostDetailsResponseDto[];
    roles: RoleResponseDto[];
    createdAt: Date;
}
