import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudMarvelDto } from './create-crud-marvel.dto';

export class UpdateCrudMarvelDto extends PartialType(CreateCrudMarvelDto) {}
