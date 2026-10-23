import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmasLayout } from './turmas-layout';

describe('TurmasLayout', () => {
  let component: TurmasLayout;
  let fixture: ComponentFixture<TurmasLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurmasLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(TurmasLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
