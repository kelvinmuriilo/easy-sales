import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelo
import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultarCep(cep: string): Observable<Cep>{
    return this.httpClient.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
