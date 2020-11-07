import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import { nitEmpresa } from '../modelos/nitEmpresa';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  // private url = 'http://localhost:8082/clientes';

  constructor(private httpclient: HttpClient) {}

  getClientesList(): Observable<Cliente[]> {
    return this.httpclient.get<Cliente[]>('http://localhost:8082/clientes');
  }
}
