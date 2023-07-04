import { Test, TestingModule } from '@nestjs/testing';
import { CrudMarvelController } from './marvel.controller';
import { CrudMarvelService } from './marvel.service';

describe('CrudMarvelController', () => {
  let controller: CrudMarvelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudMarvelController],
      providers: [CrudMarvelService],
    }).compile();

    controller = module.get<CrudMarvelController>(CrudMarvelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
