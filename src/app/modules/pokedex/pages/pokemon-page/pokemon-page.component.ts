import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {IPokemonCard} from '../../types/IPokemon';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  allPokemon: Array<IPokemonCard>;
  private _pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  ngOnInit(): void {
    this._pokemonService.getOriginal151Pokemon()
      .subscribe((pokemonList) => {
        this.allPokemon = pokemonList;
      });
  }

}
