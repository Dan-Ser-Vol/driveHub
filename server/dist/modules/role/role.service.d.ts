import { Repository } from 'typeorm';
import { RoleEntity } from '../../database/entities/role.entity';
import { UserEntity } from '../../database/entities/user.entity';
import { CreateRoleDto } from './dto/request/create-role.dto';
import { RoleValueDto } from './dto/request/role-value.dto';
import { RoleResponseDto } from './dto/response/role-response.dto';
export declare class RoleService {
    private readonly roleRepository;
    private readonly userRepository;
    constructor(roleRepository: Repository<RoleEntity>, userRepository: Repository<UserEntity>);
    createRole(dto: CreateRoleDto): Promise<RoleResponseDto>;
    getRoleByValue(value: any): Promise<RoleEntity>;
    addRoleToUserBy(userId: string, newRole: CreateRoleDto): Promise<void>;
    deleteRoleByValue(value: RoleValueDto): Promise<void>;
}
