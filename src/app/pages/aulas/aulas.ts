import { Component } from '@angular/core';
import { Card } from '../../layout/card/card';
import { Nav } from '../../layout/nav/nav';
import { Header } from '../../layout/header/header';
import { AulasLayout } from '../../layout/aulas-layout/aulas-layout';

@Component({
  selector: 'app-aulas',
  imports: [Nav, Header, Card, AulasLayout],
  templateUrl: './aulas.html',
  styleUrl: './aulas.scss',
})
export class Aulas {}
