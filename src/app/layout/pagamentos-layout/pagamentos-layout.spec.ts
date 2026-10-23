import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosLayout } from './pagamentos-layout';

describe('PagamentosLayout', () => {
  let component: PagamentosLayout;
  let fixture: ComponentFixture<PagamentosLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagamentosLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(PagamentosLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
