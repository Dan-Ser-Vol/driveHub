import { MailerService } from '@nestjs-modules/mailer';
export declare class sendMailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    mail(email: any, context: any): Promise<void>;
}
