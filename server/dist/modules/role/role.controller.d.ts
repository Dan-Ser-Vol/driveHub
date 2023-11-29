import { CreateRoleDto } from './dto/request/create-role.dto';
import { RoleValueDto } from './dto/request/role-value.dto';
import { RoleResponseDto } from './dto/response/role-response.dto';
import { RoleService } from './role.service';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(dto: CreateRoleDto): Promise<RoleResponseDto>;
    getByValue(value: RoleValueDto): Promise<RoleResponseDto>;
    addRoleById(userId: string, role: CreateRoleDto): Promise<string>;
    deleteUser(value: RoleValueDto): Promise<string>;
}
