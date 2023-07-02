import { Controller, Get, Param, Patch } from '@nestjs/common';
import { CrudMarvelService } from './crud-marvel.service';


@Controller('crud-marvel')
export class CrudMarvelController {
  constructor(private readonly crudMarvelService: CrudMarvelService) { }

  @Get('update-list')
  async listAll() {
    return await this.crudMarvelService.upgradeListDb();
  }

  @Get()
  async findAll() {
    return await this.crudMarvelService.findAllHeroes();
  }

  @Get('findOne/:name')
  async finOne(@Param('name') name: string) {
    return await this.crudMarvelService.findOne(name);
  }

  @Patch('add-favorite/:id')
  async updatePartial(@Param('id') id: number): Promise<any> {
    return await this.crudMarvelService.addFavorite(id);
  }

  @Get('all')
  async findAllFavorite() {
    return await this.crudMarvelService.favoriteList();
  }
}
