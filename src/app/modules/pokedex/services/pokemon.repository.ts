import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonRepository {
  private _httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  public getOriginal151Pokemon(): Observable<any> {
    return this._httpClient.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

}
