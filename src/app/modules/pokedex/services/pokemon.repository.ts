import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {map, mergeMap, publishReplay, refCount} from 'rxjs/operators';
import {PokemonMapper} from '../mappers/pokemon-mapper';
import {IPokemonCard} from '../types/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonRepository {
  public _original151PokemonList;

  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getOriginal151Pokemon(): Observable<Array<IPokemonCard>> {

    let mappedResponse;

    if (!this._original151PokemonList) {
      this._original151PokemonList = this._httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .pipe(
          map(response => mappedResponse = PokemonMapper.mapOriginalList(response)),
          mergeMap(() => {
            let listOfPokemon: Array<any> = [];
            mappedResponse.pokemonResults.map((individualPokemon) => {
              listOfPokemon = [...listOfPokemon, this.getPokemonDetails(individualPokemon.url)];
            });

            return forkJoin(listOfPokemon);
          }),
          publishReplay(1),
          refCount()
        );
    }
    return this._original151PokemonList;
  }

  public getPokemon(offset: number, limit: number): Observable<Array<IPokemonCard>> {

    let mappedResponse;

    // if (!this._original151PokemonList) {
    this._original151PokemonList = this._httpClient.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(
        map(response => mappedResponse = PokemonMapper.mapOriginalList(response)),
        mergeMap(() => {
          let listOfPokemon: Array<any> = [];
          mappedResponse.pokemonResults.map((individualPokemon) => {
            listOfPokemon = [...listOfPokemon, this.getPokemonDetails(individualPokemon.url)];
          });

          return forkJoin(listOfPokemon);
        }),
        publishReplay(1),
        refCount()
      );
    // }
    return this._original151PokemonList;
  }

  public getPokemonDetails(apiUrl: string): Observable<IPokemonCard> {
    return this._httpClient.get(apiUrl)
      .pipe(
        map(pokemonDetails => PokemonMapper.mapPokemonCard(pokemonDetails))
      );
  }
}
