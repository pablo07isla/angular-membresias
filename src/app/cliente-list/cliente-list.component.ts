import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/cliente';
import { nitEmpresa } from '../modelos/nitEmpresa';
import { ClienteService } from '../servicios/cliente.service';
@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css'],
})
export class ClienteListComponent implements OnInit {
  public clientes: any;
  public empresas: any;
  filterCliente: '';

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  private getEmpleados() {
    this.clienteService.getClientesList().subscribe((data) => {
      this.clientes = data;
      console.log(data);
    });
  }
}
