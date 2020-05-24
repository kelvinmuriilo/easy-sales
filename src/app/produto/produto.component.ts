import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Produto } from './servico/produto';

//Servicos
import { ProdutoServicoService } from './servico/produto-servico.service';
import { ModalServicoService } from '../shared/modal/modal-servico.service';

//Terceiros
import { NgxSpinnerService } from 'ngx-spinner';

//Constante
import { MENSAGEMERROCONEXAO } from '../shared/constantes';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[] = [];

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisarProduto(){
    this.ngxSpinnerService.show();
    this.produtoServicoService.consultar(this.produto.nome).subscribe(
      data => {
        this.listaProdutos = data;
        this.ngxSpinnerService.hide();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
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
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirSucesso(data['mensagem']);
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  mostrarTabelaProduto(): boolean{
    return this.listaProdutos.length > 0;
  }
}
