import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { allTemplates } from './constants/mail.constant';
import { EEmailActions } from './enum/mail.-action.enum';

@Injectable()
export class sendMailService {
  constructor(private readonly mailerService: MailerService) {}

  public async mail(email, context) {
    const { templateName, subject } = allTemplates[EEmailActions.REGISTER];
    await this.mailerService.sendMail({
      to: email,
      subject,
      template: templateName,
      context,
    });
  }
}
