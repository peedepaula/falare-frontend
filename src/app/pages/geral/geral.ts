import { Component, inject } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-geral',
  imports: [Header, Nav, Card, RouterLink],
  templateUrl: './geral.html',
  styleUrl: './geral.scss',
})
export class Geral {
  auth = inject(AuthService);
  usuario = this.auth.usuario;
  
  tipoUsuario = localStorage.getItem('tipoUsuario')
  
  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }
}
