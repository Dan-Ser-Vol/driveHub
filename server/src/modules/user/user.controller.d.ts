import { UserUpdateRequestDto } from './dto/request/user.update-request.dto';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UserDetailsResponseDto } from './dto/response/user.details-response.dto';
import { UserListResponseDto } from './dto/response/user.list-response.dto';
import { UserUpdateResponseDto } from './dto/response/user.update-response.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getAllUsers(query: UserListQueryRequestDto): Promise<UserListResponseDto>;
    getById(userId: string): Promise<UserDetailsResponseDto>;
    updateUser(userId: string, data: UserUpdateRequestDto): Promise<UserUpdateResponseDto>;
    ban(userId: string, status: string): Promise<UserDetailsResponseDto>;
    deleteUser(userId: string): Promise<void>;
}
