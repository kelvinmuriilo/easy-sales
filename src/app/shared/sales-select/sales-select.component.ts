import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-select',
  templateUrl: './sales-select.component.html',
  
  styleUrls: ['./sales-select.component.scss']
})

/* 
*  Componente de select para template driven forms.
*  <sales-select
*    nome="Produto"
*    [model]="itemVenda.produto"
*    [listaValores]="listaProdutos"
*    (valorSelecionado)="itemVenda.produto=$event"
*  >
*  </sales-select>  
*   
* @Input nome - Nome para label do select.
* @Input mode - Representa o do input select. 
* @Input listaValores - Lista dos elementos que serão as opções do select.
* @Output valorSelecionado - Evento que emite o valor da opção selecionada.
*/
export class SalesSelectComponent implements OnInit {
  value: string;

  @Input('nome') nome: string;
  @Input('model') model: string;
  @Input('listaValores') listaValores: any[];

  @Output() valorSelecionado: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.valorSelecionado.emit(this.model);
  }

}
