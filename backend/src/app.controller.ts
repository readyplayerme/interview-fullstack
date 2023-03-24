import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req, @Res() res) {
    const data = this.appService.renderImage(req.query.id);

    data.data.pipe(res);
  }
}
