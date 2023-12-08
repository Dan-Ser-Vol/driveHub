import { MailerService } from '@nestjs-modules/mailer';
import { AppConfigService } from '../../config/appConfig/app-config.service';
export declare class MailService {
    private readonly mailerService;
    private readonly appConfig;
    constructor(mailerService: MailerService, appConfig: AppConfigService);
    mail(email: any, context: any): Promise<void>;
}
