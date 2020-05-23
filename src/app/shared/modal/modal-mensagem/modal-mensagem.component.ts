import { Component, OnInit } from '@angular/core';

//Terceiros
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-mensagem',
  templateUrl: './modal-mensagem.component.html',
  styleUrls: ['./modal-mensagem.component.scss']
})
export class ModalMensagemComponent implements OnInit {
  titulo;
  mensagem;
  classeComplementar;
  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  fecharModal(){
    this.bsModalRef.hide();
  }

}
