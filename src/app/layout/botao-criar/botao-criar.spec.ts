import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCriar } from './botao-criar';

describe('BotaoCriar', () => {
  let component: BotaoCriar;
  let fixture: ComponentFixture<BotaoCriar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCriar],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoCriar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
