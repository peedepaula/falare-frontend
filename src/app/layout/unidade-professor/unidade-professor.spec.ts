import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeProfessor } from './unidade-professor';

describe('UnidadeProfessor', () => {
  let component: UnidadeProfessor;
  let fixture: ComponentFixture<UnidadeProfessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeProfessor],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeProfessor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
