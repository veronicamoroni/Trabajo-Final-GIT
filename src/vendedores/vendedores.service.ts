import { Injectable } from '@nestjs/common';

@Injectable()
export class VendedoresService {
    getVendedores(): string {
        return "Lista Vendedores";
    }
}
