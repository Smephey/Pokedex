import {Injectable} from '@angular/core';
import {PokemonRepository} from './pokemon.repository';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this._pokemonRepository = pokemonRepository;
  }

  public getOriginal151Pokemon(): Observable<any> {
    return this._pokemonRepository.getOriginal151Pokemon();
  }

}
