import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpsServices } from './http.service';

@Module({
  imports: [HttpModule],
  providers: [HttpsServices],
  exports: [HttpsServices],
})
export class HttpsModule { }
