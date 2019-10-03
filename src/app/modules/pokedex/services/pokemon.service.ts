import {Injectable} from '@angular/core';
import {PokemonRepository} from './pokemon.repository';
import {Observable} from 'rxjs';
import {IPokemonCard} from '../types/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private _pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this._pokemonRepository = pokemonRepository;
  }

  public getOriginal151Pokemon(): Observable<Array<IPokemonCard>> {
    return this._pokemonRepository.getOriginal151Pokemon();
  }

  public getPokemon(offset: number, limit: number): Observable<Array<IPokemonCard>> {
    return this._pokemonRepository.getPokemon(offset, limit);
  }

}
