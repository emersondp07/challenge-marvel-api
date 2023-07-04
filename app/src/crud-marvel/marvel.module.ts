import { Module, forwardRef } from '@nestjs/common';
import { HttpsModule } from '../http/http.module';
import { PrismaModule } from '../prisma/prisma.module';
import { MarvelController } from './marvel.controller';
import { MarvelService } from './marvel.service';


@Module({
  imports: [PrismaModule, forwardRef(() => HttpsModule)],
  controllers: [MarvelController],
  providers: [MarvelService],
})
export class MarvelModule { }
