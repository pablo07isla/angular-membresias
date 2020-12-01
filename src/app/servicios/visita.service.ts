import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FechaVisita } from '../modelos/fechaVisita';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private httpclient:HttpClient) { }

  crearVisita(fechavisita:FechaVisita):Observable<Object>{
    return this.httpclient.post('http://localhost:8082/visitas', fechavisita)
  }

}
