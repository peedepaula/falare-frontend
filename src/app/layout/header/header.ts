import { Component, EventEmitter, inject, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService  } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private auth = inject(AuthService);
  mostrarMenu: boolean = false;
  mostrarMenuMobile: boolean = false;
  @Output() mostrarMenuMobileEmit = new EventEmitter<boolean>();

  estaLogado = localStorage.getItem('token');

  mudarVisibilidadeMenu(){
    this.mostrarMenu = !this.mostrarMenu;
    this.mostrarMenuMobile = !this.mostrarMenuMobile;
    this.mostrarMenuMobileEmit.emit(this.mostrarMenuMobile);
  }

  sair() {
    this.mostrarMenu = false;
    this.auth.logout();
  }
}
