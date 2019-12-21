import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {IPokemonCard} from '../../types/IPokemon';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  allPokemon: Array<IPokemonCard>;

  @Output()
  public pokemonClicked = new EventEmitter<any>();

  private _pokemonService: PokemonService;

  constructor(pokemonService: PokemonService) {
    this._pokemonService = pokemonService;
  }

  ngOnInit(): void {
    this._pokemonService.getOriginal151Pokemon()
      .subscribe((list) => this.allPokemon = list);
  }


  goToDetails($event: number) {
    console.log($event);
  }
}
