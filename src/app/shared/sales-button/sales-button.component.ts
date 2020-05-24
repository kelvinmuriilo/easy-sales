import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-button',
  templateUrl: './sales-button.component.html',
  styleUrls: ['./sales-button.component.scss']
})
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
