import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPageComponent } from './pokemon-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('PokemonPageComponent', () => {
    let component: PokemonPageComponent;
    let fixture: ComponentFixture<PokemonPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonPageComponent],
            providers: [HttpClientModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PokemonPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
