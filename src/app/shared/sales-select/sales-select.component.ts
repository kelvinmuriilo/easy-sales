import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-select',
  templateUrl: './sales-select.component.html',
  styleUrls: ['./sales-select.component.scss']
})
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
