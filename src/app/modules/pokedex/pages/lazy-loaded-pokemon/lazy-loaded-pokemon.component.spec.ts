import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedPokemonComponent } from './lazy-loaded-pokemon.component';

describe('LazyLoadedPokemonComponent', () => {
  let component: LazyLoadedPokemonComponent;
  let fixture: ComponentFixture<LazyLoadedPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
