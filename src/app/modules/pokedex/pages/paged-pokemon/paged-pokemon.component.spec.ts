import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedPokemonComponent } from './paged-pokemon.component';

describe('PagedPokemonComponent', () => {
  let component: PagedPokemonComponent;
  let fixture: ComponentFixture<PagedPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
