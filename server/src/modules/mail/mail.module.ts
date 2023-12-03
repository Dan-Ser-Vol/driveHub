import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import { sendMailService } from './mail.service';
import { ConfigModule } from '@nestjs/config';
import { MailConfigModule } from '../../config/mailConfig/mail-config.module';
import { MailConfiguration } from '../../config/mailConfig/mail-configuration';

@Module({
  imports: [
    ConfigModule,
    MailConfigModule,
    MailerModule.forRootAsync(MailConfiguration.config),
  ],
  controllers: [MailController],
  providers: [sendMailService],
  exports: [sendMailService],
})
export class MailModule {}
