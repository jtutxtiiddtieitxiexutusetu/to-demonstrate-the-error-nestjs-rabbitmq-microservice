import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) { }

  @Cron('* * * * * *')
  async publishOneSent() {
    await this.client.emit('one_sent', { one_sent: 'one_sent' });
  }

}
