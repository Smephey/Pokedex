import { Component, Input, OnInit } from '@angular/core';
import { IPokemonCard } from '../../types/IPokemon';

@Component({
    selector: 'pokemon-card',
    templateUrl: './pokemon-card.component.html',
    styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

    @Input() pokemon: IPokemonCard;

    constructor() {
    }

    ngOnInit() {
    }

}
