import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';

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

        if (!this._original151PokemonList) {
            this._original151PokemonList = this._httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .pipe(
                    publishReplay(1),
                    refCount()
                );
        }
        return this._original151PokemonList;
    }

    public getPokemonDetails(name: string): Observable<any> {
        return this._httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

    public clearCache() {
        this._original151PokemonList = null;
    }

}
