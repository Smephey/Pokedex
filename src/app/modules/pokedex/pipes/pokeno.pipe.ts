import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokeNo'
})
export class PokeNoPipe implements PipeTransform {
  transform(value): any {
    console.log(value);
  }
}
