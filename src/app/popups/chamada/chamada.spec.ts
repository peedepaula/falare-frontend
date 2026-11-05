import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chamada } from './chamada';

describe('Chamada', () => {
  let component: Chamada;
  let fixture: ComponentFixture<Chamada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chamada],
    }).compileComponents();

    fixture = TestBed.createComponent(Chamada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
