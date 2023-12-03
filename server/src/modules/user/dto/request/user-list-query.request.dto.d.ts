import { PaginationQueryDto } from '../../../../common/dto/pagination.query.dto';
import { OrderEnum } from '../../../../common/enum/order.enum';
import { UserListOrderFieldEnum } from '../../enum/user-list-order-field.enum';
export declare class UserListQueryRequestDto extends PaginationQueryDto {
    order?: OrderEnum;
    orderBy?: UserListOrderFieldEnum;
    search?: string;
}
