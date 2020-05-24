import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelo
import { Venda } from '../servico/venda';
import { Cliente } from '../../cliente/servico/cliente';
import { Produto } from 'src/app/produto/servico/produto';
import { ItemVenda } from '../servico/itemVenda';

//Servicos
import { VendaServicoService } from '../servico/venda-servico.service';
import { ClienteServicoService } from 'src/app/cliente/servico/cliente-servico.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProdutoServicoService } from 'src/app/produto/servico/produto-servico.service';
import { ModalServicoService } from 'src/app/shared/modal/modal-servico.service';

//Constante
import { MENSAGEMERROCONEXAO } from '../../shared/constantes';

@Component({
  selector: 'app-venda-manter',
  templateUrl: './venda-manter.component.html',
  styleUrls: ['./venda-manter.component.scss']
})
export class VendaManterComponent implements OnInit {
  venda: Venda = new Venda();
  itemVenda: ItemVenda = new ItemVenda();
  listaClientes: Cliente[] = [];
  listaProdutos: Produto[] = [];

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService,
    private produtoServicoService: ProdutoServicoService,
  ) { }

  ngOnInit(): void {
    this.preencherListaClientes();
    this.preencherListaProdutos();
  }

  adicionarItemVenda(){
    this.venda.listaVentaItem.push(this.itemVenda);
    this.itemVenda = new ItemVenda();
  }

  removerItemVenda(itemVenda: ItemVenda){
    this.venda.listaVentaItem = this.venda.listaVentaItem.filter((element) =>{
      return element !== itemVenda;
    });
  }

  incluirVenda(){
    console.log(this.venda)
    this.ngxSpinnerService.show();
    this.vendaServicoService.incluir(this.venda).subscribe(
      data => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.venda = new Venda();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  voltar(){
    this.router.navigate(['/venda'])
  }

  aumentarQuantidade(){
    this.itemVenda.quantidade++;
  }
  
  diminuirQuantidade(){
    if(this.itemVenda.quantidade > 0){
      this.itemVenda.quantidade--;
    }
  }

  liberarBotaoAdicionarItemVenda(): boolean{
    return this.itemVenda.produto != undefined && this.itemVenda.quantidade > 0;
  }

  calcularValorTotalVenda(): number{
    return this.venda.listaVentaItem.reduce((total, item) => {
      return total + (item.produto.valor * item.quantidade)
    }, 0.0);
  }

  mostrarTabelaItemVenda(){
    return this.venda.listaVentaItem.length > 0;
  }

  private preencherListaClientes(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.consultar('').subscribe(
      data => {
        this.listaClientes = data;
        this.ngxSpinnerService.hide();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  private preencherListaProdutos(){
    this.ngxSpinnerService.show();
    this.produtoServicoService.consultar('').subscribe(
      data => {
        this.listaProdutos =  data;
        this.ngxSpinnerService.hide();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

}