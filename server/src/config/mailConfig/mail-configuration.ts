import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

import { MailConfigModule } from './mail-config.module';
import { MailConfigService } from './mail-config.service';

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
          secure: true,
        },
        template: {
          dir: path.resolve('src', 'modules', 'mail', 'templates', 'views'),
          adapter: new HandlebarsAdapter(),
          options: {
            partials: path.resolve(
              'src',
              'modules',
              'mail',
              'templates',
              'partials',
            ),
          },
        },
      }),
      inject: [MailConfigService],
    };
  }
}
