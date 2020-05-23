import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelo
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultar(nomeProduto: string): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/consultar/${nomeProduto}`);
  }

  incluir(produto: Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/incluir`, produto);
  }

  alterar(produto: Produto): Observable<Produto>{
    return this.httpClient.patch<Produto>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/alterarparcial`, produto);
  }

  remover(produto: Produto): Observable<Produto>{
    return this.httpClient.post<Produto>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/produto/remover`, produto);
  }
}
