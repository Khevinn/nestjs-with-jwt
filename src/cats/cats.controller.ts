import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findlAll(): string {
    return 'This action returns all cats';
  }
}
