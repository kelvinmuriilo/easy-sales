import { Produto } from 'src/app/produto/servico/produto';

export class ItemVenda{
    codigo: string;
    produto: Produto;
    quantidade: number = 0;
}