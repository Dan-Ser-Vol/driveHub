import { sendMailService } from './mail.service';
export declare class MailController {
    private mailerService;
    constructor(mailerService: sendMailService);
    mail(): Promise<void>;
}
