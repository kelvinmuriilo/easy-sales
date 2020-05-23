import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Produto } from './servico/produto';

//Servicos
import { ProdutoServicoService } from './servico/produto-servico.service';

//Terceiros
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalServicoService } from '../shared/modal/modal-servico.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];

  constructor(
    private produtoServicoService: ProdutoServicoService,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router,
    private modalServicoService: ModalServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisarProduto(){
    this.ngxSpinnerService.show();
    this.produtoServicoService.consultar(this.produto.nome).subscribe(
      data => {
        this.listaProdutos = data;
        this.ngxSpinnerService.hide();
      }
    );
  }

  incluirProduto(){
    this.router.navigate(['/produto/incluir']);
  }

  alterarProduto(produto: Produto){
    this.router.navigate([`/produto/alterar/${produto.nome}`]);
  }

  removerProduto(produto: Produto){
    this.ngxSpinnerService.show();
    this.produtoServicoService.remover(produto).subscribe(
      data => {
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.ngxSpinnerService.hide();
      }
    );
  }

  mostrarTabelaProduto(): boolean{
    return this.listaProdutos.length > 0;
  }
}
