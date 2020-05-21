import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';


const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full' 
  },
  {
    path:'venda',
    component: VendaComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
