import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { MelhoresAlunos } from '../../layout/melhores-alunos/melhores-alunos';
import { PioresAlunos } from '../../layout/piores-alunos/piores-alunos';

@Component({
  selector: 'app-geral',
  imports: [Header, Nav, Card, MelhoresAlunos, PioresAlunos],
  templateUrl: './geral.html',
  styleUrl: './geral.scss',
})
export class Geral {}
