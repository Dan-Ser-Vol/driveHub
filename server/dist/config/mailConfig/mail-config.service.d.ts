import { ConfigType } from '@nestjs/config';
import configuration from './configuration';
export declare class MailConfigService {
    private mailConfiguration;
    constructor(mailConfiguration: ConfigType<typeof configuration>);
    get from(): string;
    get service(): string;
    get auth(): Record<string, string>;
}
