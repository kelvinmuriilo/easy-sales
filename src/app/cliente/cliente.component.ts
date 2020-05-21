import { Component, OnInit } from '@angular/core';

//Modelos
import { Cliente } from './servico/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit(): void {
    
  }

  liberarBotao(): boolean{
    return true;
  }

  enviarDados(cadastro){
    console.log(cadastro.form)
    alert(this.cliente.nome);
  }

}
