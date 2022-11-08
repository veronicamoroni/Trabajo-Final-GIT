import { Test, TestingModule } from '@nestjs/testing';
import { Producto1Service } from './producto1.service';

describe('Producto1Service', () => {
  let service: Producto1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Producto1Service],
    }).compile();

    service = module.get<Producto1Service>(Producto1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
