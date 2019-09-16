import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pokemonGender'
})
export class PokemonGenderPipe implements PipeTransform {
  transform(pokemonName: string): any {
    console.log(pokemonName);
    console.log(pokemonName.slice(-2));
    if (pokemonName.slice(-2) === '-f') {
      return pokemonName.slice(0, -2);
    } else if (pokemonName.slice(-2) === '-m') {
      return pokemonName.slice(0, -2);
    }

    return pokemonName;
  }
}
