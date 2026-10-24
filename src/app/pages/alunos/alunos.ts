import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AlunosLayout } from '../../layout/alunos-layout/alunos-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';

@Component({
  selector: 'app-alunos',
  imports: [Header, Nav, Card, AlunosLayout, BotaoCriar],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class Alunos {}
