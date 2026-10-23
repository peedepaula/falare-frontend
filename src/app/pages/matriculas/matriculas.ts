import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { MatriculasLayout } from '../../layout/matriculas-layout/matriculas-layout';

@Component({
  selector: 'app-matriculas',
  imports: [Header, Nav, Card, MatriculasLayout],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.scss',
})
export class Matriculas {}
