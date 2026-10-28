import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarAula } from './visualizar-aula';

describe('VisualizarAula', () => {
  let component: VisualizarAula;
  let fixture: ComponentFixture<VisualizarAula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarAula],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
