import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
    constructor(
        private readonly configService: ConfigService
    ){
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_KEY'));
    }

    async send(mail:SendGrid.MailDataRequired){
        // try{
            console.log("maillllllllllll", mail)
        const transport = await SendGrid.send(mail);
        console.log(`E-Mail sent to ${mail.to}`);
        return transport;
        // }catch(error){
        //    throw new BadRequestException(error.message)
        // }
            
    }
}
