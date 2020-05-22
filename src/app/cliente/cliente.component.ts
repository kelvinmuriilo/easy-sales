import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelos
import { Cliente } from './servico/cliente';
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

  pesquisarCliente(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.consultar(this.cliente.nome).subscribe(
      data => {
        this.listaClientes = data;
        this.ngxSpinnerService.hide();
        console.log(this.listaClientes);
      }
    );
  }

  adicionarCliente(){
    this.router.navigate(['cliente/adicionar']);
  }

  mostrarTabelaCliente(): boolean{
    return this.listaClientes.length > 0;
  }

}
