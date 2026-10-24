import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { MatriculasLayout } from '../../layout/matriculas-layout/matriculas-layout';
import { BotaoCriar } from '../../layout/botao-criar/botao-criar';
import { UnidadeMatricula } from '../../layout/unidade-matricula/unidade-matricula';

@Component({
  selector: 'app-matriculas',
  imports: [Header, Nav, Card, MatriculasLayout, BotaoCriar],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.scss',
})
export class Matriculas {}
