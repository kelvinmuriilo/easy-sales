import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelo
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultar(codigoProduto: string): Observable<Venda[]>{
    return this.httpClient.get<Venda[]>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/${codigoProduto}`);
  }

  incluir(venda: Venda): Observable<Venda>{
    return this.httpClient.post<Venda>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir`, venda);
  }

  alterarParcial(venda: Venda): Observable<Venda>{
    return this.httpClient.patch<Venda>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial`, venda);
  }

  remover(venda: Venda): Observable<Venda>{
    return this.httpClient.post<Venda>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover`, venda);
  }
}
