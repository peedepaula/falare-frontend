import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPagamento } from './cadastrar-pagamento';

describe('CadastrarPagamento', () => {
  let component: CadastrarPagamento;
  let fixture: ComponentFixture<CadastrarPagamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarPagamento],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarPagamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
