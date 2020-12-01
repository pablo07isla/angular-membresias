import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../modelos/cliente';
import { FechaVisita } from '../modelos/fechaVisita';
import { ClienteService } from '../servicios/cliente.service';
import { VisitaService } from '../servicios/visita.service';

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
    private route: ActivatedRoute, private visitaService:VisitaService, private router:Router
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.fechaHoy = Date.now();

    this.clienteservice.getClientById(this.id).subscribe(
      (data) => {
        this.cliente = data;
        this.idCliente = this.cliente.idCliente;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  guardarVisita(){
    this.visitaService.crearVisita(this.fechaVisita).subscribe((data)=>{

      console.log(data)
      console.log(this.fechaVisita);
      this.goToClientList()
    },
    (error) => console.log(error)
    );
  }

  goToClientList(){
    this.router.navigate(["/clientes"])
  }

  onSubmit() {
    this.fechaVisita.idCliente = this.cliente.idCliente;
    this.fechaVisita.fechaVisita = this.fechaHoy;
    this.guardarVisita()
    // console.log(this.fechaVisita);

  }
}
