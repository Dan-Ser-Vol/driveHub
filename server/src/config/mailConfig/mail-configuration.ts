import { MailConfigService } from './mail-config.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailConfigModule } from './mail-config.module';

export class MailConfiguration {
  static get config() {
    console.log('Configuration');
    return {
      imports: [MailConfigModule],
      useFactory: (mailConfigService: MailConfigService) => ({
        transport: {
          from: mailConfigService.from,
          service: mailConfigService.service,
          auth: mailConfigService.auth,
        },
        template: {
          dir: __dirname + '/email-templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [MailConfigService],
    };
  }
}
