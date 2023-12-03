import { CanActivate, ExecutionContext } from '@nestjs/common';
import { RedisClient } from '@webeleon/nestjs-redis';
export declare class LogoutGuard implements CanActivate {
    private redisClient;
    constructor(redisClient: RedisClient);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
