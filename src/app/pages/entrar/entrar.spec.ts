import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrar } from './entrar';

describe('Entrar', () => {
  let component: Entrar;
  let fixture: ComponentFixture<Entrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Entrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
