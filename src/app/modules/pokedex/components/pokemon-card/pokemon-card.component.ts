import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPokemonCard, IPokemonType} from '../../types/IPokemon';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: IPokemonCard;

  @Output() pokemonClicked: EventEmitter<number> = new EventEmitter<number>();

  public typeOne: IPokemonType;
  public typeTwo: IPokemonType;

  ngOnInit() {

    this.pokemon.types.map((type) => {
      if (type.slot === 1) {
        this.typeOne = type;
      } else if (type.slot === 2) {
        this.typeTwo = type;
      }
    });
  }

  goToDetails() {
    this.pokemonClicked.emit(this.pokemon.id);
  }
}
