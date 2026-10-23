import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresAlunos } from './melhores-alunos';

describe('MelhoresAlunos', () => {
  let component: MelhoresAlunos;
  let fixture: ComponentFixture<MelhoresAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MelhoresAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(MelhoresAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
