import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAluno } from './visualizar-aluno';

describe('VisualizarAluno', () => {
  let component: VisualizarAluno;
  let fixture: ComponentFixture<VisualizarAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
