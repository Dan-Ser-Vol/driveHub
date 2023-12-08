import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { AppConfigService } from '../../config/appConfig/app-config.service';
import { allTemplates } from './constants/mail.constant';
import { EEmailActions } from './enum/mail.-action.enum';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly appConfig: AppConfigService,
  ) {}

  public async mail(email, context) {
    const { templateName, subject } = allTemplates[EEmailActions.REGISTER];
    context.frontUrl = this.appConfig.frontUrl;
    await this.mailerService.sendMail({
      to: email,
      subject,
      template: templateName,
      context,
    });
  }
}
