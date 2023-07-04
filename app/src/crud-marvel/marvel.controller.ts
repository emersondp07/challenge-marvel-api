import { Controller, Get, Param, Patch } from '@nestjs/common';
import { MarvelService } from './marvel.service';



@Controller('crud-marvel')
export class MarvelController {
  constructor(private readonly marvelService: MarvelService) { }

  @Get('update-list')
  async listAll() {
    return await this.marvelService.upgradeListDb();
  }

  @Get()
  async findAll() {
    return await this.marvelService.findAllHeroes();
  }

  @Get('findOne/:name')
  async finOne(@Param('name') name: string) {
    return await this.marvelService.findOne(name);
  }

  @Patch('add-favorite/:id')
  async updatePartial(@Param('id') id: number): Promise<any> {
    return await this.marvelService.addFavorite(id);
  }

  @Get('all')
  async findAllFavorite() {
    return await this.marvelService.favoriteList();
  }
}
