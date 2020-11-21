import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { FechaVisita } from '../modelos/fechaVisita';
import { ClienteService } from '../servicios/cliente.service';

@Component({
  selector: 'app-crear-visita',
  templateUrl: './crear-visita.component.html',
  styleUrls: ['./crear-visita.component.css'],
})
export class CrearVisitaComponent implements OnInit {
  id: number;
  cliente: Cliente = new Cliente();
  fechaVisita: FechaVisita = new FechaVisita();
  idCliente: number;
  fechaHoy: number;

  constructor(
    private clienteservice: ClienteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteservice.getClientById(this.id).subscribe(
      (data) => {
        this.cliente = data;
        this.idCliente = this.cliente.idCliente;
        this.fechaHoy = Date.now();
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.fechaVisita.idCliente = this.cliente.idCliente;
    this.fechaVisita.fechaVisita = this.fechaHoy;
    console.log(this.fechaVisita);
  }
}
