import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Geral } from './geral';

describe('Geral', () => {
  let component: Geral;
  let fixture: ComponentFixture<Geral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Geral],
    }).compileComponents();

    fixture = TestBed.createComponent(Geral);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
