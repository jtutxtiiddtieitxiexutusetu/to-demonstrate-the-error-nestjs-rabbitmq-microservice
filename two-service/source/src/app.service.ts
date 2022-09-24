import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {

    constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) { }

    async publishTwoSent() {
        await this.client.emit('two_sent', { two_sent: 'two_sent' })
    }
    
}