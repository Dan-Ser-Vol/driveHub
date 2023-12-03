import { RedisClient } from '@webeleon/nestjs-redis';
import { UserEntity } from '../../database/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
declare const BearerStrategy_base: new (...args: any[]) => any;
export declare class BearerStrategy extends BearerStrategy_base {
    readonly redisClient: RedisClient;
    private readonly jwtService;
    private readonly authService;
    constructor(redisClient: RedisClient, jwtService: JwtService, authService: AuthService);
    validate(token: string): Promise<UserEntity>;
}
export {};
