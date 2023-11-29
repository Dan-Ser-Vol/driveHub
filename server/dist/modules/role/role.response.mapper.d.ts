import { RoleEntity } from '../../database/entities/role.entity';
import { RoleResponseDto } from './dto/response/role-response.dto';
export declare class RoleResponseMapper {
    static toDetailsListDto(data: RoleEntity[]): RoleResponseDto[];
    static toDetailsDto(data: RoleEntity): RoleResponseDto;
}
