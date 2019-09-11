import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonPageComponent} from './pages/pokemon-page/pokemon-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MainNavigationComponent} from './components/main-navigation/main-navigation.component';
import {PokemonCardComponent} from './components/pokemon-card/pokemon-card.component';
import {PageBorderComponent} from './components/page-border/page-border.component';
import {HttpClientModule} from '@angular/common/http';
import {PokeNoPipe} from './pipes/pokeno.pipe';


@NgModule({
  declarations: [
    PokemonPageComponent,
    HomePageComponent,
    MainNavigationComponent,
    PokemonCardComponent,
    PageBorderComponent,
    PokeNoPipe
  ],
  exports: [
    HomePageComponent,
    PageBorderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
  ]
})
export class PokedexModule {
}
