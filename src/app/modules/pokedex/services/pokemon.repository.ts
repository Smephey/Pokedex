import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, publishReplay, refCount } from 'rxjs/operators';
import { PokemonMapper } from '../mappers/pokemon-mapper';

@Injectable({
    providedIn: 'root'
})
export class PokemonRepository {
    public _original151PokemonList;

    private _httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    public getOriginal151Pokemon(): Observable<any> {

        let mappedResponse;

        if (!this._original151PokemonList) {
            this._original151PokemonList = this._httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=30')
                .pipe(
                    map((response) => {
                        mappedResponse = PokemonMapper.mapOriginalList(response);
                    }),
                    mergeMap(() => {
                        let array: Array<any> = [];
                        mappedResponse.pokemonResults.map((individualPokemon) => {
                            array = [...array, this.getPokemonDetails(individualPokemon.url)];
                        });

                        console.log(array);
                        return forkJoin(array);
                    }),
                    publishReplay(1),
                    refCount()
                );
        }
        console.log('')
        return this._original151PokemonList;
    }

    public getPokemonDetails(apiUrl: any): Observable<any> {
        return this._httpClient.get(apiUrl);
    }

    public clearCache() {
        this._original151PokemonList = null;
    }

}
