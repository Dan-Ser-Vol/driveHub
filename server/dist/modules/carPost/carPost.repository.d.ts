import { DataSource, Repository } from 'typeorm';
import { IList } from '../../common/interface/list.interface';
import { CarPostEntity } from '../../database/entities/carPost.entity';
import { PostListQueryRequestDto } from './dto/request/post-list-query.request.dto';
export declare class CarPostRepository extends Repository<CarPostEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getAll(query: PostListQueryRequestDto): Promise<IList<CarPostEntity>>;
}
