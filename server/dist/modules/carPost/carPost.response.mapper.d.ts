import { IList } from '../../common/interface/list.interface';
import { CarPostEntity } from '../../database/entities/carPost.entity';
import { CarPostBaseDto } from './dto/request/carPost-base.dto';
import { PostListQueryRequestDto } from './dto/request/post-list-query.request.dto';
import { CarPostDetailsResponseDto } from './dto/response/carPost-details-response.dto';
export declare class CarPostResponseMapper {
    static toDetailsListDto(data: CarPostEntity[]): any;
    static toListDto(data: IList<CarPostEntity>, query: PostListQueryRequestDto): any;
    static toListItemDto(data: CarPostEntity): CarPostDetailsResponseDto;
    static toDetailsDto(data: CarPostBaseDto): CarPostDetailsResponseDto;
}
