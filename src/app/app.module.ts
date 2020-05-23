import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

//Servicos
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';

//Terceiros
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule, IConfig } from 'ngx-mask'

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SalesBuscaCepComponent } from './shared/sales-busca-cep/sales-busca-cep.component';
import { ProdutoComponent } from './produto/produto.component';
import { LayoutComponent } from './layout/layout.component';
import { VendaComponent } from './venda/venda.component';
import { SalesInputComponent } from './shared/sales-input/sales-input.component';
import { SalesButtonComponent } from './shared/sales-button/sales-button.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ModalMensagemComponent } from './shared/modal/modal-mensagem/modal-mensagem.component';
import { ModalConfirmacaoComponent } from './shared/modal/modal-confirmacao/modal-confirmacao.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';

const COMPONENTES = [
  AppComponent,
  ClienteComponent,
  SalesBuscaCepComponent,
  ProdutoComponent,
  LayoutComponent,
  VendaComponent,
  SalesInputComponent,
  SalesButtonComponent,
  ClienteManterComponent,
  ModalMensagemComponent,
  ModalConfirmacaoComponent,
  ProdutoManterComponent
];

@NgModule({
  declarations: COMPONENTES,
  exports: COMPONENTES,
  entryComponents: [
    ModalMensagemComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  providers: [
    ClienteServicoService,
    BsModalRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
