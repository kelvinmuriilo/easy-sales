import { Component, OnInit } from '@angular/core';

//Modelo
import { Cliente } from '../servico/cliente';
import { Router } from '@angular/router';

//Servico
import { ClienteServicoService } from '../servico/cliente-servico.service';

//Terceiro
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cliente-manter',
  templateUrl: './cliente-manter.component.html',
  styleUrls: ['./cliente-manter.component.scss']
})
export class ClienteManterComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  incluirCliente(){
    this.ngxSpinnerService.show();
    this.clienteServicoService.incluir(this.cliente).subscribe(
      data => {
        this.ngxSpinnerService.hide();
        alert(data['mensagem']);
        this.cliente = new Cliente();
      }
    );
  }

  voltar(){
    this.router.navigate(['/']);
  }

}
