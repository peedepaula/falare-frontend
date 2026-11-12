import { Component, inject } from '@angular/core';
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

  mudarVisibilidadeMenu(){
    this.mostrarMenu = !this.mostrarMenu;
  }

  sair() {
    this.mostrarMenu = false;
    this.auth.logout();
  }
}
