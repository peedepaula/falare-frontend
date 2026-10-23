import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registrar } from './registrar';

describe('Registrar', () => {
  let component: Registrar;
  let fixture: ComponentFixture<Registrar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registrar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registrar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
