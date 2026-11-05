import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMatricula } from './cadastrar-matricula';

describe('CadastrarMatricula', () => {
  let component: CadastrarMatricula;
  let fixture: ComponentFixture<CadastrarMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
