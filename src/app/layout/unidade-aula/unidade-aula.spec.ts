import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeAula } from './unidade-aula';

describe('UnidadeAula', () => {
  let component: UnidadeAula;
  let fixture: ComponentFixture<UnidadeAula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadeAula],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadeAula);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
