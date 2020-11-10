import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any = ''): any {
    if (arg == '') {
      return value;
    } else {
      console.log(value);
      console.log(arg);
      const resultClientes: any = [];

      value.forEach((e) => {
        let clienteId = e.idCliente;
        console.log(clienteId);
        if (clienteId == arg) {
          resultClientes.push(e);
        }
      });
      console.log(resultClientes);
      return resultClientes;
    }
  }
}
