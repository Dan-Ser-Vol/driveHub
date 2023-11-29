import { IList } from '../../common/interface/list.interface';
import { UserEntity } from '../../database/entities/user.entity';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
import { UserDetailsResponseDto } from './dto/response/user.details-response.dto';
import { UserListItemResponseDto, UserListResponseDto } from './dto/response/user.list-response.dto';
export declare class UserResponseMapper {
    static toListDto(data: IList<UserEntity>, query: UserListQueryRequestDto): UserListResponseDto;
    static toListItemDto(data: UserEntity): UserListItemResponseDto;
    static toDetailsDto(data: UserEntity): UserDetailsResponseDto;
}
