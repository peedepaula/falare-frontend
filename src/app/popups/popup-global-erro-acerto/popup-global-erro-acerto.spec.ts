import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGlobalErroAcerto } from './popup-global-erro-acerto';

describe('PopupGlobalErroAcerto', () => {
  let component: PopupGlobalErroAcerto;
  let fixture: ComponentFixture<PopupGlobalErroAcerto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupGlobalErroAcerto],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupGlobalErroAcerto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
