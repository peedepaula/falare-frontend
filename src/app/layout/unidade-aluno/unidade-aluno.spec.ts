import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAluno } from './unidade-aluno';

describe('UnidadeAluno', () => {
  let component: UnidadeAluno;
  let fixture: ComponentFixture<UnidadeAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeAluno],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
