import { Module, forwardRef } from '@nestjs/common';
import { HttpsModule } from '../http/http.module';
import { PrismaModule } from '../prisma/prisma.module';
import { CrudMarvelController } from './crud-marvel.controller';
import { CrudMarvelService } from './crud-marvel.service';

@Module({
  imports: [PrismaModule, forwardRef(() => HttpsModule)],
  controllers: [CrudMarvelController],
  providers: [CrudMarvelService],
})
export class CrudMarvelModule { }
