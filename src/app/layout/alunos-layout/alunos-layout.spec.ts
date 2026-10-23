import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosLayout } from './alunos-layout';

describe('AlunosLayout', () => {
  let component: AlunosLayout;
  let fixture: ComponentFixture<AlunosLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlunosLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(AlunosLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
