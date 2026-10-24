import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  nomeCampo = input<string>('nome')
  dadoCampo = input<string>('0')
}
