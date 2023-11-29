import { ConfigType } from '@nestjs/config';
import configuration from './configuration';
export declare class CommonConfigService {
    private postgresqlConfiguration;
    constructor(postgresqlConfiguration: ConfigType<typeof configuration>);
    get host(): string;
    get app_port(): number;
    get port(): number;
    get user(): string;
    get password(): string;
    get database(): string;
    get redis_url(): string;
    get jwt_secret(): string;
    get jwt_expires_in(): string;
}
