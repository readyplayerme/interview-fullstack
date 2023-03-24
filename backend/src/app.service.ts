import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  renderImage(data: string): any {
    return this.httpService.axiosRef.get(
      'https://api.readyplayer.me/v1/avatars/' + data + '.png',
      {
        responseType: 'stream',
      },
    );
  }
}
