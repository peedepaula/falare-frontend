import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAlunoNotas } from './visualizar-aluno-notas';

describe('VisualizarAlunoNotas', () => {
  let component: VisualizarAlunoNotas;
  let fixture: ComponentFixture<VisualizarAlunoNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAlunoNotas],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAlunoNotas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
