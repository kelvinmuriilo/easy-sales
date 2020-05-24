import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Cliente } from './servico/cliente';

//Servicos
import { ClienteServicoService } from './servico/cliente-servico.service';

//Terceiros
import { NgxSpinnerService } from "ngx-spinner";
import { ModalServicoService } from '../shared/modal/modal-servico.service';

//Constante
import { MENSAGEMERROCONEXAO } from '../shared/constantes';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  listaClientes: Cliente[] = [];
 
  constructor(
    private clienteServicoService: ClienteServicoService,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router,
    private modalServicoService: ModalServicoService,
  ) { }

  ngOnInit(): void {
    
  }

  mostrarTabelaCliente(): boolean{
    return this.listaClientes.length > 0;
  }

  pesquisarCliente(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.consultar(this.cliente.nome).subscribe(
      data => {
        this.listaClientes = data;
        this.ngxSpinnerService.hide();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(
          MENSAGEMERROCONEXAO
        );
      }
    );
  }

  incluirCliente(){
    this.router.navigate(['cliente/incluir']);
  }

  alterarCliente(cliente: Cliente){
    this.router.navigate([`/cliente/alterar/${cliente.nome}`])
  }

  excluirCliente(cliente: Cliente){
    this.ngxSpinnerService.show();
    this.clienteServicoService.remover(cliente).subscribe(
      data => {
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.ngxSpinnerService.hide();
      },
      error => {
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(
          MENSAGEMERROCONEXAO
        );
      }
    );
  }
}
