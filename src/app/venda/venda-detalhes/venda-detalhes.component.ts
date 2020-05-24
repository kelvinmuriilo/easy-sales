import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Modelo
import { Venda } from '../servico/venda';

//Servicos
import { VendaServicoService } from '../servico/venda-servico.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-venda-detalhes',
  templateUrl: './venda-detalhes.component.html',
  styleUrls: ['./venda-detalhes.component.scss']
})
export class VendaDetalhesComponent implements OnInit {
  venda: Venda = new Venda();

  constructor(
    private activatedRoute: ActivatedRoute,
    private vendaServicoService: VendaServicoService,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let codigoVenda = this.activatedRoute.snapshot.params.codigo;
    this.carregarVenda(codigoVenda);
  }
  
  calcularValorTotalVenda(): number{
    return this.venda.listaVentaItem.reduce((total, item) => {
      return total + (item.produto.valor * item.quantidade)
    }, 0.0);
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

  private carregarVenda(codigoVenda: string){
    this.ngxSpinnerService.show();
    this.vendaServicoService.consultar(codigoVenda).subscribe(
      data => {
        this.venda = <Venda>data[0];
        this.ngxSpinnerService.hide();
      }
    );
  }

}
