import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasLayout } from './aulas-layout';

describe('AulasLayout', () => {
  let component: AulasLayout;
  let fixture: ComponentFixture<AulasLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AulasLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(AulasLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
