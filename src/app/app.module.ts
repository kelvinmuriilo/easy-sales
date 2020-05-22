import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Modulos
import { AppRoutingModule } from './app-routing.module';

//Servicos
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';

//Terceiros
import { NgxSpinnerModule } from "ngx-spinner";

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

const COMPONENTES = [
  AppComponent,
  ClienteComponent,
  SalesBuscaCepComponent,
  ProdutoComponent,
  LayoutComponent,
  VendaComponent,
  SalesInputComponent,
  SalesButtonComponent,
  ClienteManterComponent
];

@NgModule({
  declarations: COMPONENTES,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    ClienteServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
