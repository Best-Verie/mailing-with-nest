import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service'; // add this

@Controller('mail')
export class MailController {
  constructor(
    private readonly sendgridService: SendgridService // into this
  ){}

  @Post('send-email')
  async sendEmail(@Query('email') email) {
    const mail = {
      to: email,
      subject: 'welcome message',
      from: 'irabestverie@gmail.com',
      text: 'Hello from Lunah, You have been invited to bring your company to  Lunah community, feel free to register your company!',
      html: '<h1>Hello from Lunah, You have been invited to bring your company to  Lunah community, feel free to register your company!</h1>',
    };

    return await this.sendgridService.send(mail);
  }
}
