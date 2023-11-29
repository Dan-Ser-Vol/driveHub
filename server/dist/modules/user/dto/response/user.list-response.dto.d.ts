import { UserListQueryRequestDto } from '../request/user-list-query.request.dto';
export declare class UserListResponseDto extends UserListQueryRequestDto {
    data: UserListItemResponseDto[];
    total: number;
}
export declare class UserListItemResponseDto {
    id: string;
    username: string;
    email: string;
    createdAt: Date;
}
