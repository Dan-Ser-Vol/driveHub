import { Controller, Post } from '@nestjs/common';
import { sendMailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailerService: sendMailService) {}
  @Post()
  mail() {
    this.mailerService.mail();
  }
}
