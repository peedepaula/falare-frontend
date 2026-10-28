import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAula } from './criar-aula';

describe('CriarAula', () => {
  let component: CriarAula;
  let fixture: ComponentFixture<CriarAula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarAula],
    }).compileComponents();

    fixture = TestBed.createComponent(CriarAula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
