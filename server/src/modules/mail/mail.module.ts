import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppConfigModule } from '../../config/appConfig/app-config.module';
import { MailConfiguration } from '../../config/mailConfig/mail-configuration';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRootAsync(MailConfiguration.config),
    AppConfigModule,
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
