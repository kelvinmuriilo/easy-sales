import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-button',
  templateUrl: './sales-button.component.html',
  styleUrls: ['./sales-button.component.scss']
})

/* Componente de botão. 
  Exemplo de como utilizar:
  <sales-button
    nome="Adicionar"
    classeIcone= "fa fa-plus"
    classeHabilitado="btn btn-primary"
    [liberado]="liberarBotaoAdicionarItemVenda()"
    (enventoClick)="adicionarItemVenda()"
  >
  </sales-button> 

  @Input classeHailitado - Classe aplicada ao botão quando estiver habilitado para uso.
  @Input  classeDesabilitado - Classe aplicada ao botão quando estiver desabilitado.
  @Input nome - Nome exibido no botão.
  @Input liberado- Função que representa o status do botão, se liberado ou bloqueado.
  @Input classeIcone = Classe fontawesome para exibição de ícone no botão.
  @Output eventoClick - Evento que emite a ação de click no botão.
*/

export class SalesButtonComponent implements OnInit {
  @Input('classeHabilitado') classeHabilitado: string;
  @Input('classeDesabilitado') classeDesabilitado: string = 'btn-secondary'
  @Input('nome') nome: string;
  @Input('liberado') liberado: boolean = true;
  @Input('classeIcone') classeIcone: string;

  @Output() enventoClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  bindClick(){
    this.enventoClick.emit();
  }

  isBloqueado(): boolean{
    return this.liberado === false;
  }

  alterarEstilo(): string{
    if(this.liberado){
      return this.classeHabilitado;
    }
   return this.classeDesabilitado;
  }


}
