import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

//Componentes
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { SalesBuscaCepComponent } from './shared/sales-busca-cep/sales-busca-cep.component';
import { LayoutComponent } from './layout/layout.component';

const COMPONENTES = [
  AppComponent,
  ClienteComponent,
  SalesBuscaCepComponent,
  LayoutComponent
];

@NgModule({
  declarations: COMPONENTES,
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
