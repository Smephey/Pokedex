import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonPageComponent } from '../../pages/pokemon-page/pokemon-page.component';

describe('PokemonCardComponent', () => {
    let component: PokemonCardComponent;
    let fixture: ComponentFixture<PokemonCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonCardComponent, PokemonPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
