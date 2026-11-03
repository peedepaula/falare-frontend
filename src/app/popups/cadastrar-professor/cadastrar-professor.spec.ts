import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProfessor } from './cadastrar-professor';

describe('CadastrarProfessor', () => {
  let component: CadastrarProfessor;
  let fixture: ComponentFixture<CadastrarProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarProfessor],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
