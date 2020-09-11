import { Test, TestingModule } from '@nestjs/testing';
import { CrudcarController } from './crudcar.controller';

describe('CrudcarController', () => {
  let controller: CrudcarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrudcarController],
    }).compile();

    controller = module.get<CrudcarController>(CrudcarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
