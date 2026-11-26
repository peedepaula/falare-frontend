import { Component, inject, OnInit, signal } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Nav } from '../../layout/nav/nav';
import { Card } from '../../layout/card/card';
import { AuthService } from '../../core/services/auth.service';
import { RouterLink } from '@angular/router';
import { AnalyticsService } from '../../core/services/analytics.service';
import { PopupService } from '../../core/services/popup.service';

interface AnalyticsDadosGeral {
  totalAulas: number;
  totalAlunos: number;
  totalTurmas: number;
}

@Component({
  selector: 'app-geral',
  imports: [Header, Nav, Card, RouterLink],
  templateUrl: './geral.html',
  styleUrl: './geral.scss',
})
export class Geral implements OnInit{
  private analyticsService = inject(AnalyticsService);
  private popup = inject(PopupService);

  auth = inject(AuthService);
  usuario = this.auth.usuario;
  
  tipoUsuario = localStorage.getItem('tipoUsuario')
  
  mostrarMenu: boolean = false;
  trocarManuMobile(menu: boolean){
    this.mostrarMenu = menu;
  }

  ngOnInit(): void {
    this.buscarAnalytics();
  }

  analyticsDados = signal<AnalyticsDadosGeral | null>(null);

  buscarAnalytics(){
    this.analyticsService.buscarAnalyticsGeral().subscribe({
      next: (res) => {
          this.analyticsDados.set(res);
          console.log("o que chega: ", this.analyticsDados)
      },
      error: (err) => {
        console.log('Erro ao tentar bsucar Analytics Geral', err);
        this.popup.erro("Erro ao tentar buscar Analytics");
      }
    })
  }
}
