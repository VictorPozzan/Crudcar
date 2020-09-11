import { Test, TestingModule } from '@nestjs/testing';
import { CrudcarService } from './crudcar.service';

describe('CrudcarService', () => {
  let service: CrudcarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrudcarService],
    }).compile();

    service = module.get<CrudcarService>(CrudcarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
