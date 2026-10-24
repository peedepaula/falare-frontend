import { Component, inject, OnInit } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-entrar',
  imports: [Header, RouterLink],
  templateUrl: './entrar.html',
  styleUrl: './entrar.scss',
})
export class Entrar implements OnInit{
  private router = inject(Router);
  isAdmin: boolean = false;
  typeUser: string = "professor";

  ngOnInit():void{
    this.isAdmin = this.router.url.includes('entrar-admin');
  }

  // Se for a rota for entrar-admin ele marca como true 
}
