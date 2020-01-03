import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonPageComponent} from './pages/pokemon-page/pokemon-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AppRoutingModule} from '../../app-routing.module';
import {MainNavigationComponent} from './components/main-navigation/main-navigation.component';
import {PokemonCardComponent} from './components/pokemon-card/pokemon-card.component';
import {HttpClientModule} from '@angular/common/http';
import {PokeNoPipe} from './pipes/pokeno.pipe';
import {PokemonTypePipe} from './pipes/pokemon-type.pipe';
import {SvgIconComponent} from './components/svg-icon/svg-icon.component';
import {PokemonDetailPageComponent} from './pages/pokemon-detail-page/pokemon-detail-page.component';
import {PokemonGenderPipe} from './pipes/pokemon-gender.pipe';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    PokemonPageComponent,
    HomePageComponent,
    MainNavigationComponent,
    PokemonCardComponent,
    PokeNoPipe,
    PokemonTypePipe,
    SvgIconComponent,
    PokemonDetailPageComponent,
    PokemonGenderPipe,
  ],
  exports:
    [
      HomePageComponent,
    ],
  imports:
    [
      CommonModule,
      AppRoutingModule,
      HttpClientModule,
      InfiniteScrollModule,
    ]
})

export class PokedexModule {
}
