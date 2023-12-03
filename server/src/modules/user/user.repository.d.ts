import { DataSource, Repository } from 'typeorm';
import { IList } from '../../common/interface/list.interface';
import { UserEntity } from '../../database/entities/user.entity';
import { UserListQueryRequestDto } from './dto/request/user-list-query.request.dto';
export declare class UserRepository extends Repository<UserEntity> {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    getAll(query: UserListQueryRequestDto): Promise<IList<UserEntity>>;
}
