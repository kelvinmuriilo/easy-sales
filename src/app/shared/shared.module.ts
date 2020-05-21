import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import{ SalesBuscaCepComponent } from './sales-busca-cep/sales-busca-cep.component';
import { SalesButtonComponent } from './sales-button/sales-button.component';

//Servicos
import { BuscaCepServicoService } from './sales-busca-cep/servico/busca-cep-servico.service';

const COMPONENTES = [
  SalesButtonComponent
];

@NgModule({
  declarations: COMPONENTES,
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    BuscaCepServicoService
  ]
})
export class SharedModule { }
