import { Controller, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SendgridService } from 'src/sendgrid/sendgrid.service'; // add this

@Controller('mail')
@ApiTags('mail')
export class MailController {
  constructor(
    private readonly sendgridService: SendgridService // into this
  ){}

  @Post('send-email/:email')
  async sendEmail(@Param() email) {
    const mail = {
      to: 'irabestverie@gmail.com',
      cc: 'mukezwa@gmail.com',
      bcc: 'irabestverie2016@gmail.com',
      subject: 'welcome message',
      from: 'irabestverie@gmail.com',
      text: 'Hello from Lunah, You have been invited to bring your company to  Lunah community, feel free to register your company!',
      html: '<h1>Hello from Lunah, You have been invited to bring your company to  Lunah community, feel free to register your company!</h1>',
    };

    return await this.sendgridService.send(mail);
  }
}
