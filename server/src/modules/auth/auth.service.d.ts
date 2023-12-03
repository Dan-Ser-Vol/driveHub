import { JwtService } from '@nestjs/jwt';
import { RedisClient } from '@webeleon/nestjs-redis';
import { Repository } from 'typeorm';
import { IToken } from '../../common/interface/token.interface';
import { UserEntity } from '../../database/entities/user.entity';
import { RoleService } from '../role/role.service';
import { UserLoginDto } from './dto/request/user.login-request.dto';
import { UserRegisterRequestDto } from './dto/request/user.register-request.dto';
export declare class AuthService {
    private readonly userRepository;
    private readonly roleService;
    private readonly redisClient;
    private readonly jwtService;
    constructor(userRepository: Repository<UserEntity>, roleService: RoleService, redisClient: RedisClient, jwtService: JwtService);
    register(dto: UserRegisterRequestDto): Promise<UserEntity>;
    login(data: UserLoginDto): Promise<IToken>;
    signIn(data: any): string;
    validateUser(data: any): Promise<UserEntity>;
    decode(token: string): Promise<any>;
    comparePassword(newPassword: string, oldPassword: string): Promise<boolean>;
}
