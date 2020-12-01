import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente';
import { FechaVisita } from '../modelos/fechaVisita';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  // private url = 'http://localhost:8082/clientes';

  constructor(private httpclient: HttpClient) {}

  getClientesList(): Observable<Cliente[]> {
    return this.httpclient.get<Cliente[]>('http://localhost:8082/clientes');
  }

  getClientById(id: number): Observable<Cliente> {
    return this.httpclient.get<Cliente>('http://localhost:8082/clientes/' + id);
  }

 

}
