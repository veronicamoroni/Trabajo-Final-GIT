import { Controller, Get } from '@nestjs/common';
import { VendedoresService } from './vendedores.service';


@Controller('api/edi')
export class VendedoresController {
    constructor(private readonly vendedoresService: VendedoresService) {}

  @Get()
  getVendedores(): string {
    return this.vendedoresService.getVendedores();
  }
}