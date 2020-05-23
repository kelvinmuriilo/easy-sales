import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { ClienteManterComponent } from './cliente/cliente-manter/cliente-manter.component';
import { ProdutoManterComponent } from './produto/produto-manter/produto-manter.component';


const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:nome',
    component: ClienteManterComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full' 
  },
  {
    path: 'produto/incluir',
    component: ProdutoManterComponent,
    pathMatch: 'full' 
  },
  {
    path: 'produto/alterar/:nome',
    component: ProdutoManterComponent,
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
