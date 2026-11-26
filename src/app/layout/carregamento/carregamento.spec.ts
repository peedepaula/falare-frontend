import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carregamento } from './carregamento';

describe('Carregamento', () => {
  let component: Carregamento;
  let fixture: ComponentFixture<Carregamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carregamento],
    }).compileComponents();

    fixture = TestBed.createComponent(Carregamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
