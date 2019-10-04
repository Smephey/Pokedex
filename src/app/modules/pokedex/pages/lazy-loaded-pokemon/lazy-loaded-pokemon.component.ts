import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {IPokemonCard} from '../../types/IPokemon';

@Component({
  selector: 'lazy-loaded-pokemon-page',
  templateUrl: './lazy-loaded-pokemon.component.html',
  styleUrls: ['./lazy-loaded-pokemon.component.scss']
})
export class LazyLoadedPokemonComponent implements OnInit {

  allPokemon: Array<IPokemonCard>;

  @Output()
  public pokemonClicked = new EventEmitter<any>();

  private _pokemonService: PokemonService;
  private _offset = 0;
  private _limit = 50;

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  ngOnInit(): void {
    const offset = this._offset;
    const limit = this._limit;
    this._pokemonService.getPokemon(offset, limit)
      .subscribe((pokemonList) => {
        this.allPokemon = pokemonList;
      });

  }

  goToDetails($event: number) {
    console.log($event);
  }

  loadMorePokemon() {
    this._offset += 50;
    this._limit = 50;
    this._pokemonService.getPokemon(this._offset, this._limit)
      .subscribe((pokemonList) => {
        pokemonList.forEach((pokemon) => {
          this.allPokemon.push(pokemon);
        });
      });
  }
}
