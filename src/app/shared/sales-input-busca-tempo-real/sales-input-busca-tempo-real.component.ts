import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sales-input-busca-tempo-real',
  templateUrl: './sales-input-busca-tempo-real.component.html',
  styleUrls: ['./sales-input-busca-tempo-real.component.scss']
})
export class SalesInputBuscaTempoRealComponent implements OnInit {
  selecionado: any;
  valorInicial: any;

  @Input('titulo') titulo: string;
  @Input('tipo') tipo: string = 'text';
  @Input('placeholder') placeholder?: string;
  @Input('servico') servico: any;
  @Input('listaOpcoes') listaOpcoes: any[] = [];
  
  @Output('retornaValorConsulta') retornaValorConsulta: EventEmitter<any> = new EventEmitter();
  @Output('retornaValorSelecionado') retornaValorSelecionado: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  consultarValor(valor){
    if(valor){
      this.listaOpcoes = [];
    }
    this.retornaValorConsulta.emit(valor);
  }
  selecionarOpcao(opcao){
    console.log(opcao)
    this.selecionado = opcao;
    this.valorInicial = opcao.nome;
    this.retornaValorSelecionado.emit(opcao);
    this.listaOpcoes = [];
  }

  mostrarAreaSelecao(): boolean{
    return this.listaOpcoes.length > 0;
  } 

}
