import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMatricula } from './unidade-matricula';

describe('UnidadeMatricula', () => {
  let component: UnidadeMatricula;
  let fixture: ComponentFixture<UnidadeMatricula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeMatricula],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeMatricula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
