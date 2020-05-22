import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-input',
  templateUrl: './sales-input.component.html',
  styleUrls: ['./sales-input.component.scss']
})
/**
 * Componente de input de texto feito para ser utilizado com
 * template driven forms.
 * 
 * Exemplo de como utilizar:
 * <sales-input-text
    titulo="Nome"
    tipo="text"
    [valorInicial]="cliente.nome"
    (valorRetorno)="cliente.nome=$event"
  >
  </sales-input-text>

 * 
 * @Input titulo - O titulo dado ao label do input. Uso opcional, por padrão é ''.
 * @Input tipo - O tipo do input. Por padrão é o text, mas pode ser number, date e demais suportados pelo HTML.
 * @Input placeholder - Placeholder do input. Uso opcional, por padrão é ''.
 * @Input valorInicial- É o valor inicial do input. Uso obrigatório.
 *    Caso o atributo passado já possua valor, o mesmo será inserido no value do input.
 *    O tipo é any pois podem ser passados valores de qualquer tipo, permitindo a sua utilização em qualquer cenário.
 * @Output valorRetorno - Evento que emite o valor do campo toda vez que o mesmo é alterado. Uso obrigatório.
 */
export class SalesInputComponent implements OnInit {

  @Input('titulo') titulo: string = '';
  @Input('tipo') tipo: string = 'text';
  @Input('placeholder') placeholder: string = '';
  @Input('valorInicial') valorInicial: any;

  @Output('valorRetorno') valorRetorno: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }

}
