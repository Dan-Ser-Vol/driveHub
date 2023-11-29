import { PaginationQueryDto } from '../../../../common/dto/pagination.query.dto';
import { OrderEnum } from '../../../../common/enum/order.enum';
import { PostListOrderFieldEnum } from '../../enum/post-list-order-field.enum';
export declare class PostListQueryRequestDto extends PaginationQueryDto {
    order?: OrderEnum;
    orderBy?: PostListOrderFieldEnum;
    search?: string;
}
