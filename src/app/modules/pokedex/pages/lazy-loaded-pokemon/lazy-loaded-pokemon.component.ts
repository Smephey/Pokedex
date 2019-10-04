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

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  ngOnInit(): void {
    this._pokemonService.getPokemon(0, 50)
      .subscribe((pokemonList) => {
        this.allPokemon = pokemonList;
      });

  }

  goToDetails($event: number) {
    console.log($event);
  }


  loadMore() {
    this._pokemonService.getPokemon(0, 150)
      .subscribe((pokemonList) => {
        console.log(pokemonList);
        this.allPokemon = pokemonList;
      });
  }
}
