import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

//Modelo
import { Cep } from './servico/cep';
//Servico
import { BuscaCepServicoService } from './servico/busca-cep-servico.service';

//Terceiro
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalServicoService } from '../modal/modal-servico.service';

//Constante
import { MENSAGEMERROCEP } from '../constantes';

@Component({
  selector: 'sales-busca-cep',
  templateUrl: './sales-busca-cep.component.html',
  styleUrls: ['./sales-busca-cep.component.scss']
})
/* Componente utilizado para realizar a busca de um endereço brasileiro a partir de um CEP.
 * O mesmo recebe um valor do tipo string e consome o webservice https://viacep.com.br/
 * a partir do servico BuscaCepServicoService.
 * 
 * Exemplo de como utlizar:
 * <sales-busca-cep
      [valor]="cliente.cep"
      (valorRetornoCep)="cliente.cep=$event"
      (valorRetornoLogradouro)="cliente.endereco=$event"
      (valorRetornoCidade)="cliente.cidade=$event"
      (valorRetornoUf)="cliente.uf=$event"
    >
    </sales-busca-cep>
  
    @Inpunt valor = Representa o valor do input. Caso o atributo passado já tenha valor definido, o mesmo será
      exibido no input como um valor inicial.
    @Input valorRetornoCep - Evento que emite o valor do CEP para ser utilizado no formulário.
    @Input valorRetornoLogradouro - Evento que emite o valor do Logradouro para ser utilizado no formulário.
    @Input valorRetornoCidade - Evento que emite o valor da Cidade pra ser utilizado no formulário.
    @Input valorRetornoUf - Evento que emite o vaor da UF para ser utilizado no formulário.
 */

export class SalesBuscaCepComponent implements OnInit {
  cep: Cep;

  @Input('valor') valor: any;

  @Output('valorRetornoCep') valorRetornoCep: EventEmitter<string> = new EventEmitter();
  @Output('valorRetornoLogradouro') valorRetornoLogradouro: EventEmitter<string> = new EventEmitter();
  @Output('valorRetornoCidade') valorRetornoCidade: EventEmitter<string> = new EventEmitter();
  @Output('valorRetornoUf') valorRetornoUf: EventEmitter<string> = new EventEmitter();


  constructor(
    private buscaCepServico: BuscaCepServicoService,
    private ngxSpnnerService: NgxSpinnerService,
    private modalServicoService: ModalServicoService
  ) { }

  ngOnInit(): void {
  }

  consultarCep(){
    if(this.valor.toString().length >= 8){
      this.ngxSpnnerService.show();
      this.buscaCepServico.consultarCep(this.valor).subscribe(
        data => {
          this.cep = data;
          this.retornarCep();
          this.retornarCidade();
          this.retornarLogradouro();
          this.retornarUf();
          this.ngxSpnnerService.hide();
          this.verificaErroCep(data);
        },
        error =>{
          this.modalServicoService.exibirErro(
            MENSAGEMERROCEP
          );
          this.ngxSpnnerService.hide();
        }
      );
    }
  }

  guardarValorCep(valor){
    this.valor = valor
  }

  retornarCep(){
    this.valorRetornoCep.emit(this.cep.cep);
    this.valor = this.cep.cep;
  }

  retornarLogradouro(){
    this.valorRetornoLogradouro.emit(this.cep.logradouro);
  }

  retornarCidade(){
    this.valorRetornoCidade.emit(this.cep.localidade);
  }

  retornarUf(){
    this.valorRetornoUf.emit(this.cep.uf);
  }

  private verificaErroCep(data){
    if(data['erro']){
      this.modalServicoService.exibirErro(
        MENSAGEMERROCEP
      );
    }
  }

}
