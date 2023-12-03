import { MailConfigService } from './mail-config.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailConfigModule } from './mail-config.module';
export declare class MailConfiguration {
    static get config(): {
        imports: (typeof MailConfigModule)[];
        useFactory: (mailConfigService: MailConfigService) => {
            transport: {
                from: string;
                service: string;
                auth: Record<string, string>;
            };
            template: {
                dir: string;
                adapter: HandlebarsAdapter;
                options: {
                    strict: boolean;
                };
            };
        };
        inject: (typeof MailConfigService)[];
    };
}
