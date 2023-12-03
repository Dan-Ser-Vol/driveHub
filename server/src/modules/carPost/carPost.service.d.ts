import { IList } from '../../common/interface/list.interface';
import { CarPostEntity } from '../../database/entities/carPost.entity';
import { FilesService } from '../files/files.service';
import { UserRepository } from '../user/user.repository';
import { CarPostRepository } from './carPost.repository';
import { CarPostCreateDto } from './dto/request/carPost-create.dto';
import { CarPostUpdateDto } from './dto/request/carPost-update.dto';
import { ImageDto } from './dto/request/image.dto';
import { PostListQueryRequestDto } from './dto/request/post-list-query.request.dto';
import { CarPostDetailsResponseDto } from './dto/response/carPost-details-response.dto';
export declare class CarPostService {
    private readonly carPostRepository;
    private readonly userRepository;
    private readonly filesService;
    constructor(carPostRepository: CarPostRepository, userRepository: UserRepository, filesService: FilesService);
    createPost(data: CarPostCreateDto, userId: string): Promise<CarPostDetailsResponseDto>;
    getAll(query: PostListQueryRequestDto): Promise<IList<CarPostEntity>>;
    addImageToPost(postId: string, image: ImageDto): Promise<CarPostDetailsResponseDto>;
    getCarPostById(postId: string): Promise<CarPostDetailsResponseDto>;
    getCarPostByUserId(userId: string): Promise<CarPostDetailsResponseDto[]>;
    updateCarPost(postId: string, dto: CarPostUpdateDto): Promise<CarPostDetailsResponseDto>;
    deleteImageFromPost(postId: string, image: any): Promise<void>;
    deleteCarPostById(postId: string): Promise<void>;
    private findCarPostByIdOrException;
}
