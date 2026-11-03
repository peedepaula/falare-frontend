import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPagamento } from './visualizar-pagamento';

describe('VisualizarPagamento', () => {
  let component: VisualizarPagamento;
  let fixture: ComponentFixture<VisualizarPagamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarPagamento],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarPagamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
