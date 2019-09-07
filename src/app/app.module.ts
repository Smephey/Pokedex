import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PokedexModule} from './modules/pokedex/pokedex.module';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PokedexModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
