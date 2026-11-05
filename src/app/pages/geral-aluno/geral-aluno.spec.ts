import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeralAluno } from './geral-aluno';

describe('GeralAluno', () => {
  let component: GeralAluno;
  let fixture: ComponentFixture<GeralAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeralAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(GeralAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
