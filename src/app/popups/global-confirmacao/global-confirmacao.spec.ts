import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfirmacao } from './global-confirmacao';

describe('GlobalConfirmacao', () => {
  let component: GlobalConfirmacao;
  let fixture: ComponentFixture<GlobalConfirmacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalConfirmacao],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalConfirmacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
