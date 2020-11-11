import { nitEmpresa } from './nitEmpresa';

export class Cliente {
  idCliente: number;
  nombreApellTit: string;
  celular: string;
  email: string;
  nitEmpresa: nitEmpresa;
  listBeneficiarios: any;
  listFechasVisita: any;
}
