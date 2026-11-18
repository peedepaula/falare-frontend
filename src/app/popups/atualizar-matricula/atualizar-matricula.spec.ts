import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarMatricula } from './atualizar-matricula';

describe('AtualizarMatricula', () => {
  let component: AtualizarMatricula;
  let fixture: ComponentFixture<AtualizarMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizarMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
