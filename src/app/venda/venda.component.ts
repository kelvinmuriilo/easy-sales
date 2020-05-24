import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Modelo
import { Venda } from './servico/venda';

//Servicos
import { VendaServicoService } from './servico/venda-servico.service';
import { ModalServicoService } from '../shared/modal/modal-servico.service';

//Terceiros
import { NgxSpinnerService } from 'ngx-spinner';

//Constante
import { MENSAGEMERROCONEXAO } from '../shared/constantes';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {
  venda: Venda = new Venda();
  listaVendas: Venda[] = [];

  constructor(
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService,
    private vendaServicoService: VendaServicoService,
    private modalServicoService: ModalServicoService,
  ) { }

  ngOnInit(): void {
  }

  pesquisarVenda(){
    this.ngxSpinnerService.show();
    this.vendaServicoService.consultar(this.venda.codigo).subscribe(
      data => {
        this.listaVendas = data;
        this.ngxSpinnerService.hide();
      },
      error =>{
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  incluirVenda(){
    this.router.navigate(['venda/incluir']);
  }

  removerVenda(venda: Venda){
    this.ngxSpinnerService.show();
    this.vendaServicoService.remover(venda).subscribe(
      data => {
        this.modalServicoService.exibirSucesso(data['mensagem']);
        this.ngxSpinnerService.hide();
      },
      error =>{
        this.ngxSpinnerService.hide();
        this.modalServicoService.exibirErro(MENSAGEMERROCONEXAO);
      }
    );
  }

  detalhesVenda(codigoVenda: string){
    this.router.navigate([`venda/detalhes/${codigoVenda}`]);
  }

  mostrarTabelaVendas(): boolean {
    return this.listaVendas.length > 0;
  }
}
