import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './modules/pokedex/pages/pokemon-page/pokemon-page.component';
import { HomePageComponent } from './modules/pokedex/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { PagedPokemonComponent } from './modules/pokedex/pages/paged-pokemon/paged-pokemon.component';

const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'pokemon', component: PokemonPageComponent },
    { path: 'pagedpokemon', component: PagedPokemonComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: HomePageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
