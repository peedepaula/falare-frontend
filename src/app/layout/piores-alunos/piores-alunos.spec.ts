import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PioresAlunos } from './piores-alunos';

describe('PioresAlunos', () => {
  let component: PioresAlunos;
  let fixture: ComponentFixture<PioresAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PioresAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(PioresAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
