import { Component, OnInit } from '@angular/core';

//Terceiros
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {
  classeComplementar;
  titulo;
  funcaoConfirmado;
  mensagem;
  constructor(
    private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  fecharModal(){
    this.bsModalRef.hide();
  }

}
