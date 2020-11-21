import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { ClienteService } from '../servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-description',
  templateUrl: './cliente-description.component.html',
  styleUrls: ['./cliente-description.component.css'],
})
export class ClienteDescriptionComponent implements OnInit {
  id: number;
  cliente: Cliente = new Cliente();

  constructor(
    private clienteservice: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteservice.getClientById(this.id).subscribe(
      (data) => {
        this.cliente = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  crearVisita(id: number) {
    this.router.navigate(['crear-visita', id]);
  }
}
