import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AlunosLayout } from '../../layout/alunos-layout/alunos-layout';

@Component({
  selector: 'app-alunos',
  imports: [Header, Nav, Card, AlunosLayout],
  templateUrl: './alunos.html',
  styleUrl: './alunos.scss',
})
export class Alunos {}
