import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadePagamento } from './unidade-pagamento';

describe('UnidadePagamento', () => {
  let component: UnidadePagamento;
  let fixture: ComponentFixture<UnidadePagamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadePagamento],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadePagamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
