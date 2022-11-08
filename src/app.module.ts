import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Producto1Controller } from './producto1/producto1.controller';
import { Producto1Service } from './producto1/producto1.service';
import { VendedoresController } from './vendedores/vendedores.controller';
import { VendedoresService } from './vendedores/vendedores.service';






@Module({
  imports: [],
  controllers: [AppController, Producto1Controller, VendedoresController],
  providers: [AppService, Producto1Service, VendedoresService],
})
export class AppModule {}
