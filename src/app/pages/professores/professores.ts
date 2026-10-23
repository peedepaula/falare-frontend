import { Component } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { ProfessoresLayout } from '../../layout/professores-layout/professores-layout';

@Component({
  selector: 'app-professores',
  imports: [Header, Nav, Card, ProfessoresLayout],
  templateUrl: './professores.html',
  styleUrl: './professores.scss',
})
export class Professores {}
