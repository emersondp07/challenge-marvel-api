import { Module, forwardRef } from '@nestjs/common';

import { CrudMarvelModule } from './crud-marvel/crud-marvel.module';
import { HttpsModule } from './http/http.module';

@Module({
  imports: [forwardRef(() => CrudMarvelModule), forwardRef(() => HttpsModule),],
  controllers: [],
  providers: [],
})
export class AppModule { }
