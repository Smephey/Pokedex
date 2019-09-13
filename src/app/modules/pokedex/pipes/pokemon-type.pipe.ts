import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonType'
})
export class PokemonTypePipe implements PipeTransform {
    transform(pokemonNumber: number, extension: string = '#'): any {
        if (pokemonNumber >= 0 && pokemonNumber <= 9) {
            return (`${extension}00${pokemonNumber}`);
        } else if (pokemonNumber >= 10 && pokemonNumber <= 99) {
            return (`${extension}0${pokemonNumber}`);
        } else if (pokemonNumber >= 100 && pokemonNumber <= 1000) {
            return (`${extension}${pokemonNumber}`);
        }
    }
}
