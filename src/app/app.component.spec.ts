import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokedexModule } from './modules/pokedex/pokedex.module';
import { PokemonService } from './modules/pokedex/services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent, PokemonService
            ],
            imports: [PokedexModule],
            providers: [HttpClientModule]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Pokedex'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Pokedex');
    });
});
