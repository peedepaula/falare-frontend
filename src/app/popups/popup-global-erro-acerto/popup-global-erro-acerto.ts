import { Component, inject, Input } from '@angular/core';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-popup-global-erro-acerto',
  imports: [],
  templateUrl: './popup-global-erro-acerto.html',
  styleUrl: './popup-global-erro-acerto.scss',
})
export class PopupGlobalErroAcerto {
  popup = inject(PopupService)


}
