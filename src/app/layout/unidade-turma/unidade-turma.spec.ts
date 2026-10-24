import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeTurma } from './unidade-turma';

describe('UnidadeTurma', () => {
  let component: UnidadeTurma;
  let fixture: ComponentFixture<UnidadeTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
