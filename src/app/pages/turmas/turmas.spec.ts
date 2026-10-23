import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Turmas } from './turmas';

describe('Turmas', () => {
  let component: Turmas;
  let fixture: ComponentFixture<Turmas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turmas],
    }).compileComponents();

    fixture = TestBed.createComponent(Turmas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
