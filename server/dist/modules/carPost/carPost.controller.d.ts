import { CarPostService } from './carPost.service';
import { CarPostCreateDto } from './dto/request/carPost-create.dto';
import { CarPostUpdateDto } from './dto/request/carPost-update.dto';
import { ImageDto } from './dto/request/image.dto';
import { PostListQueryRequestDto } from './dto/request/post-list-query.request.dto';
import { CarPostDetailsResponseDto } from './dto/response/carPost-details-response.dto';
export declare class CarPostController {
    private carPostService;
    constructor(carPostService: CarPostService);
    createCar(req: any, data: CarPostCreateDto): Promise<CarPostDetailsResponseDto>;
    getAllPost(query: PostListQueryRequestDto): Promise<CarPostDetailsResponseDto>;
    addImageToPost(postId: string, image: ImageDto): Promise<CarPostDetailsResponseDto>;
    DeleteImageToPost(postId: string, image: ImageDto): Promise<void>;
    getPostById(postId: string): Promise<CarPostDetailsResponseDto>;
    getPostByUserId(userId: string): Promise<CarPostDetailsResponseDto[]>;
    updateCarPost(postId: string, body: CarPostUpdateDto): Promise<CarPostDetailsResponseDto>;
    deleteCar(postId: string): Promise<void>;
}
