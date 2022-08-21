/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
  constructor(private CatsService: CatsService) {}
  @Get()
  findAll(): Promise<Cat[]> {
    return this.CatsService.findAll();
  }
  @Post()
 async create(@Body() CreateCatDto:CreateCatDto) {
    this.CatsService.create(CreateCatDto)
  }

}
