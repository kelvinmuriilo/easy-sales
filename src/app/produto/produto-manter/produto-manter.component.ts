import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Modelos
import { Produto } from '../servico/produto';

//Servicos
import { ProdutoServicoService } from '../servico/produto-servico.service';
import { ModalServicoService } from 'src/app/shared/modal/modal-servico.service';

//Terceiros
import { NgxSpinnerService } from 'ngx-spinner';

//Constante
import { MENSAGEMERROCONEXAO } from 'src/app/shared/constantes';

@Component({
  selector: 'app-produto-manter',
  templateUrl: './produto-manter.component.html',
  styleUrls: ['./produto-manter.component.scss']
})
export class ProdutoManterComponent implements OnInit {
  operacao: string = "Cadastrar"
  produto: Produto = new Produto();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngxSpinnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
    let nomeProduto: string = this.activatedRoute.snapshot.params.nome;
    this.selecionarOperacao(nomeProduto);
  }

  incluirProduto(){
    this.ngxSpinnerService.show();
    this.produtoServicoService.incluir(this.produto).subscribe(
      data => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.produto = new Produto();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  alterarProduto(){
    this.ngxSpinnerService.show();
    this.produtoServicoService.alterar(this.produto).subscribe(
      data => {
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.ngxSpinnerService.hide();
        this.voltar();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  voltar(){
    this.router.navigate(['/produto']);
  }

  alterarBotaoCadastrarSalvar():boolean {
    return this.operacao === 'Cadastrar';;
  }

  private selecionarOperacao(nomeProduto: string){

    if(nomeProduto != null){
      this.operacao = 'Alterar';
      this.ngxSpinnerService.show();
      this.produtoServicoService.consultar(nomeProduto).subscribe(
        data => {
          this.produto = <Produto>data[0];
          this.ngxSpinnerService.hide();
        }
      );
    }
  }

}
