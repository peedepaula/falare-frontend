import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAlunoFinanceiro } from './visualizar-aluno-financeiro';

describe('VisualizarAlunoFinanceiro', () => {
  let component: VisualizarAlunoFinanceiro;
  let fixture: ComponentFixture<VisualizarAlunoFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAlunoFinanceiro],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAlunoFinanceiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
