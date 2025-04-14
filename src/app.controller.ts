import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Page } from './app/page';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly page: Page,
  ) {}

  @Get()
  getHello(): string {
    return this.page.render();
  }

  @Get('api')
  getApi(): string {
    return this.appService.getHello();
  }
}
