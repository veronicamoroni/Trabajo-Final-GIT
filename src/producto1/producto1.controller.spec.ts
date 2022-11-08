import { Test, TestingModule } from '@nestjs/testing';
import { Producto1Controller } from './producto1.controller';

describe('Producto1Controller', () => {
  let controller: Producto1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Producto1Controller],
    }).compile();

    controller = module.get<Producto1Controller>(Producto1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
