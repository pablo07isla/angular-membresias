import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  private getEmpleados() {
    this.clienteService.getClientesList().subscribe((data) => {
      this.clientes = data;
      console.log(data);
    });
  }

  clienteDescription(id: number) {
    this.router.navigate(['cliente', id]);
  }
}
