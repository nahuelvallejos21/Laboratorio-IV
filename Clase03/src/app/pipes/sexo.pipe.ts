import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let retorno : string  = "Otro";
    if(value == "M")
    {
      retorno = "Masculino"
    }
    else if(value == "F")
    {
      retorno = "Femenino";
    }
     return retorno;
  }

}
