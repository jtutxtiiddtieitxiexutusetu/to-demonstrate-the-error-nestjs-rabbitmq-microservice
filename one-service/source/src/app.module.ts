import { Module, ModuleMetadata } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'GREETING_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://rabbitmq:5672'],
        queue: 'books_queue',
        queueOptions: {
          durable: false
        }
      }
    }]),
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
