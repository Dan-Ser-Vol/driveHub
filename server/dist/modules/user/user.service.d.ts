import { IList } from '../../common/interface/list.interface';
import { UserEntity } from '../../database/entities/user.entity';
import { UserUpdateRequestDto } from './dto/request/user.update-request.dto';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAll(query: UserListQueryRequestDto): Promise<IList<UserEntity>>;
    getById(userId: string): Promise<UserEntity>;
    updateUser(userId: string, data: UserUpdateRequestDto): Promise<UserEntity>;
    deleteUser(userId: string): Promise<void>;
    banStatus(userId: string, status: string): Promise<UserEntity>;
    findUserOrException(userId: string): Promise<UserEntity>;
}
