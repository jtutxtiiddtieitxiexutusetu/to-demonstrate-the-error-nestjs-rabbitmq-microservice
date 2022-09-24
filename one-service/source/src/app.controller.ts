import { Controller, FileTypeValidator, Get, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiProperty, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('two_sent')
  async handleIt(data: Record<string, unknown>) {
    console.log('two_sent', data)
  }

}