import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonPageComponent} from './pages/pokemon-page/pokemon-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AppRoutingModule} from '../../app-routing.module';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';


@NgModule({
  declarations: [PokemonPageComponent, HomePageComponent, MainNavigationComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PokedexModule {
}
