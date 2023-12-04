import { Controller, Post } from '@nestjs/common';


import { sendMailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailerService: sendMailService) {}
  @Post()
  public async mail() {
    const email = 'danservoll1984@gmail.com';
    const context = {
      name: 'Sergiy',
      actionToken: 'sdsdgsdgrtstgsdgsgr',
    };
    await this.mailerService.mail(email, context);
  }
}
