import { Component, input } from '@angular/core';

@Component({
  selector: 'app-botao-criar',
  imports: [],
  templateUrl: './botao-criar.html',
  styleUrl: './botao-criar.scss',
})
export class BotaoCriar {
  textoBotao = input<string>('Botão')
}
