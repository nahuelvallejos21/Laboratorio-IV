import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: string, args?: any, arg2?: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

