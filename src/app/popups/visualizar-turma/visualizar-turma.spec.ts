import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarTurma } from './visualizar-turma';

describe('VisualizarTurma', () => {
  let component: VisualizarTurma;
  let fixture: ComponentFixture<VisualizarTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
