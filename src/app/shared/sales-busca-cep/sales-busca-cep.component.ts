import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BuscaCepServicoService } from './servico/busca-cep-servico.service';
import { Cep } from './servico/cep';

@Component({
  selector: 'sales-busca-cep',
  templateUrl: './sales-busca-cep.component.html',
  styleUrls: ['./sales-busca-cep.component.scss']
})
export class SalesBuscaCepComponent implements OnInit {
  cep: Cep;

  @Input('valor') valor: any;

  @Output('valorRetorno') valorRetorno: EventEmitter<number> = new EventEmitter();
  constructor(
    private buscaCepServico: BuscaCepServicoService
  ) { }

  ngOnInit(): void {
  }

  consultarCep(cep: number){
    if(cep.toString().length === 8){
      this.buscaCepServico.consultarCep(cep).subscribe(
        data => {
          this.cep = data;
          console.log(this.cep);
        }
      );
    }
  }

}
