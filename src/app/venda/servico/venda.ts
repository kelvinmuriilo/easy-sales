import { Cliente } from 'src/app/cliente/servico/cliente';
import { ItemVenda } from './itemVenda';

export class Venda{
    codigo: string = '';
    data: Date;
    cliente: Cliente;
    listaVentaItem: ItemVenda[] = [];
}

