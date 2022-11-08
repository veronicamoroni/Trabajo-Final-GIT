import { Controller, Get, Post } from '@nestjs/common';
import { Producto1Service } from './producto1.service';

@Controller('producto1')
export class Producto1Controller {
    constructor(private readonly producto1Service: Producto1Service) {}

    @Get()
    getProducto1(): string {
    return this.producto1Service.getProducto1();
    }

    @Post()
    postProducto1(): string {
    return this.producto1Service.postProducto1();
    }
}