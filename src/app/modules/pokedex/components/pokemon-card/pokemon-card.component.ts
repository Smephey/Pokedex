import { Component, Input, OnInit } from '@angular/core';
import { IPokemonCard, IPokemonType } from '../../types/IPokemon';

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

    @Input() pokemon: IPokemonCard;

    public typeOne: IPokemonType;
    public typeTwo: IPokemonType;

    public ngOnInit(): void {

        this.pokemon.types.map((type) => {
            if (type.slot === 1) {
                this.typeOne = type;
            } else if (type.slot === 2) {
                this.typeTwo = type;
            }
        });
    }

}
