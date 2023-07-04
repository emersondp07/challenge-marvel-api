import { Test, TestingModule } from '@nestjs/testing';
import { CrudMarvelService } from './crud-marvel.service';

describe('CrudMarvelService', () => {
  let service: CrudMarvelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudMarvelService],
    }).compile();

    service = module.get<CrudMarvelService>(CrudMarvelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
