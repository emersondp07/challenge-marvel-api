import { Module } from '@nestjs/common';
import { MarvelModule } from './crud-marvel/marvel.module';
import { HttpsModule } from './http/http.module';

@Module({
  imports: [MarvelModule, HttpsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
