import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Modulos
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SalesBuscaCepComponent } from './shared/sales-busca-cep/sales-busca-cep.component';
import { ProdutoComponent } from './produto/produto.component';
import { LayoutComponent } from './layout/layout.component';
import { VendaComponent } from './venda/venda.component';
import { SalesInputTextComponent } from './shared/sales-input-text/sales-input-text.component';
import { SalesButtonComponent } from './shared/sales-button/sales-button.component';

const COMPONENTES = [
  AppComponent,
  ClienteComponent,
  SalesBuscaCepComponent,
  ProdutoComponent,
  LayoutComponent,
  VendaComponent,
  SalesInputTextComponent,
  SalesButtonComponent
];

@NgModule({
  declarations: COMPONENTES,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
