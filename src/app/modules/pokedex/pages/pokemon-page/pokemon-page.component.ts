import { Component, OnInit } from '@angular/core';
import { MOCK20POKEMONRESULT } from '../../../mockup-pokemon-results';

@Component({
    selector: 'pokemon-page',
    templateUrl: './pokemon-page.component.html',
    styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

    pokemonList;

    constructor() {
    }

    ngOnInit() {
        this.pokemonList = MOCK20POKEMONRESULT.results;
    }

}
