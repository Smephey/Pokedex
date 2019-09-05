import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [PokemonPageComponent, HomePageComponent],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PokedexModule { }
