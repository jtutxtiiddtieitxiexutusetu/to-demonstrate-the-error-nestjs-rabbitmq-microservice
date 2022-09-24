import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, Post, Put } from "@nestjs/common";
import { EventPattern, MessagePattern } from "@nestjs/microservices";
import { AppService } from "./app.service";


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('one_sent')
  async handleIt(data: Record<string, unknown>) {
    console.log('one_sent', data)
  }

}