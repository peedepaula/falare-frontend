import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAlunoFrequencia } from './visualizar-aluno-frequencia';

describe('VisualizarAlunoFrequencia', () => {
  let component: VisualizarAlunoFrequencia;
  let fixture: ComponentFixture<VisualizarAlunoFrequencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAlunoFrequencia],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAlunoFrequencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
