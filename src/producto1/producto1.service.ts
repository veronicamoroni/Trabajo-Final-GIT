import { Injectable } from '@nestjs/common';

@Injectable()
export class Producto1Service {  
getProducto1(): string {
    return 'Perfumina vivere';     
    }
postProducto1(): string {
    return 'Perfumina limon';
    }
}
