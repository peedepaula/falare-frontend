import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopupGlobalErroAcerto } from './popups/popup-global-erro-acerto/popup-global-erro-acerto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopupGlobalErroAcerto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('falare-frontend');
}
