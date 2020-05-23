import { Component, OnInit } from '@angular/core';

//Modelo
import { Cliente } from '../servico/cliente';
import { Router, ActivatedRoute } from '@angular/router';

//Servico
import { ClienteServicoService } from '../servico/cliente-servico.service';

//Terceiro
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalServicoService } from 'src/app/shared/modal/modal-servico.service';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.scss']
})
export class ClienteManterComponent implements OnInit {
  operacao: string = "Cadastrar";
  cliente: Cliente = new Cliente();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteServicoService: ClienteServicoService,
    private ngxSpinnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService
  ) { }

  ngOnInit(): void {
    let nomeCliente: string = this.activatedRoute.snapshot.params.nome;
    this.selecionarOperacao(nomeCliente);
  }

  incluirCliente(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.incluir(this.cliente).subscribe(
      data => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.cliente = new Cliente();
      }
    );
  }

  voltar(){
    this.router.navigate(['/']);
  }

  alterarCliente(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.alterar(this.cliente).subscribe(
      data => {
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.ngxSpinnerService.hide();
        this.voltar();
      }
    )
  }

  alterarBotaoCadastrarSalvar(): boolean{
    return this.operacao === 'Cadastrar';
  }

  private selecionarOperacao(nomeCliente: string){
    if(nomeCliente != null){
      this.operacao = 'Alterar';
      this.ngxSpinnerService.show();
      this.clienteServicoService.consultar(nomeCliente).subscribe(
        data => {
          this.cliente = (<Cliente>data[0]);
          this.ngxSpinnerService.hide();
        }
      );
    }
  }

}
