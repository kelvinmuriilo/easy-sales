import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Cep } from './cep';

@Injectable({
  providedIn: 'root'
})
export class BuscaCepServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultarCep(cep: number): Observable<Cep>{
    return this.httpClient.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
