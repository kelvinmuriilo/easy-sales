import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Cliente } from './servico/cliente';

//Servicos
import { ClienteServicoService } from './servico/cliente-servico.service';
import { ModalServicoService } from '../shared/modal/modal-servico.service';

//Terceiros
import { NgxSpinnerService } from "ngx-spinner";

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
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
    
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
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
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
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  mostrarTabelaCliente(): boolean{
    return this.listaClientes.length > 0;
  }
}
