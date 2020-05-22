import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelos
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultar(nomeCliente: string = ''):Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/consultar/${nomeCliente}`);
  }
  
  incluir(cliente: Cliente):Observable<Cliente>{
    return this.httpClient.post<Cliente>(`https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/cliente/incluir`, cliente);
  }
}
