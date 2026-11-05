import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTurma } from './cadastrar-turma';

describe('CadastrarTurma', () => {
  let component: CadastrarTurma;
  let fixture: ComponentFixture<CadastrarTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
