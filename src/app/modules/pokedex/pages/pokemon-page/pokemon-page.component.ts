import {Component, OnInit} from '@angular/core';
import {MOCK20POKEMONRESULT} from '../../../mockup-pokemon-results';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  pokemonList;
  private _pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  ngOnInit() {
    this.pokemonList = MOCK20POKEMONRESULT.results;
    this._pokemonService.getOriginal151Pokemon()
      .subscribe(response => console.log(response));
  }

}
