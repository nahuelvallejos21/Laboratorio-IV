import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'siNo'
})
export class SiNoPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    
    console.log(value);
    if(value == "SI"){
      value = value.replace(value, '<font color =  "green">SI</font>');
    }
    else{
      value = value.replace(value, '<font color =  "red">NO</font>');
    }
    return value;
  }

}
