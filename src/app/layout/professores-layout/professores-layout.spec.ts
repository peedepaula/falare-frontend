import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresLayout } from './professores-layout';

describe('ProfessoresLayout', () => {
  let component: ProfessoresLayout;
  let fixture: ComponentFixture<ProfessoresLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessoresLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfessoresLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
