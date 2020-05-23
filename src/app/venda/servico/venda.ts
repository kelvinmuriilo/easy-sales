import { Cliente } from 'src/app/cliente/servico/cliente';
import { itemVenda } from './itemVenda';

export class Venda{
    codigo: string;
    data: Date;
    cliente: Cliente
    listaVendaItem: itemVenda[];
}

