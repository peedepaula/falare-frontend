import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Professores } from './professores';

describe('Professores', () => {
  let component: Professores;
  let fixture: ComponentFixture<Professores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Professores],
    }).compileComponents();

    fixture = TestBed.createComponent(Professores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
