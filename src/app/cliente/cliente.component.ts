import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Cliente } from './servico/cliente';

//Servicos
import { ClienteServicoService } from './servico/cliente-servico.service';

//Terceiros
import { NgxSpinnerService } from "ngx-spinner";

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
    private router: Router
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
      }
    );
  }

  adicionarCliente(){
    this.router.navigate(['cliente/adicionar']);
  }

  alterarCliente(cliente: Cliente){
    console.log(cliente)
    this.router.navigate([`/cliente/alterar/${cliente.nome}`])
  }

  excluirCliente(cliente: Cliente){
    this.ngxSpinnerService.show();
    this.clienteServicoService.remover(cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.ngxSpinnerService.hide();
      }
    );
  }

}
