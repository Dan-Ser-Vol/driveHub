import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailConfigModule } from './mail-config.module';
import { MailConfigService } from './mail-config.service';
export declare class MailConfiguration {
    static get config(): {
        imports: (typeof MailConfigModule)[];
        useFactory: (mailConfigService: MailConfigService) => {
            transport: {
                from: string;
                service: string;
                auth: Record<string, string>;
                secure: boolean;
            };
            template: {
                dir: string;
                adapter: HandlebarsAdapter;
                options: {
                    partials: string;
                };
            };
        };
        inject: (typeof MailConfigService)[];
    };
}
