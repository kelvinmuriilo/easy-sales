import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-button',
  templateUrl: './sales-button.component.html',
  styleUrls: ['./sales-button.component.scss']
})
export class SalesButtonComponent implements OnInit {
  @Input() classeHabilitado: string;
  @Input() classeDesabilitado: string = 'btn-secondary'
  @Input() nome: string;
  @Input() liberado: boolean = true;

  @Output() enventoClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  bindClick(){
    this.enventoClick.emit();
  }

  isBloqueado(): boolean{
    console.log(this.liberado)
    return this.liberado === true;
  }

  alterarEstilo(): string{
    if(this.liberado){
      return this.classeHabilitado;
    }
   return this.classeDesabilitado;
  }


}
