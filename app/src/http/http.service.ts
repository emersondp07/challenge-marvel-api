import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import * as crypto from 'crypto';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class HttpsServices {
  private readonly logger = new Logger(HttpsServices.name);
  constructor(private readonly httpService: HttpService) { }

  async findAllHero(): Promise<any> {
    const timestamp = Date.now().toString();
    const hash = crypto
      .createHash('md5')
      .update(timestamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
      .digest('hex');

    const { data } = await firstValueFrom(
      this.httpService
        .get<any>(`${process.env.URL_MARVEL_API}`, {
          params: {
            ts: timestamp,
            apikey: process.env.PUBLIC_KEY,
            hash: hash,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data?.data?.results;
  }

  async findOneHero(name: string): Promise<any> {
    const timestamp = Date.now().toString();
    const hash = crypto
      .createHash('md5')
      .update(timestamp + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
      .digest('hex');

    const { data } = await firstValueFrom(
      this.httpService
        .get<any>(`${process.env.URL_MARVEL_API}/1011136`, {
          params: {
            ts: timestamp,
            apikey: process.env.PUBLIC_KEY,
            hash: hash,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data;
  }
}
