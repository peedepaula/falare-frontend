import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasLayout } from './matriculas-layout';

describe('MatriculasLayout', () => {
  let component: MatriculasLayout;
  let fixture: ComponentFixture<MatriculasLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(MatriculasLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
