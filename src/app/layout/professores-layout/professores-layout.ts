import { Component, EventEmitter, inject, OnInit, Output, signal } from '@angular/core';
import { UnidadeProfessor } from '../unidade-professor/unidade-professor';
import { ProfessorService } from '../../core/services/professor.service';
import { PopupService } from '../../core/services/popup.service';

@Component({
  selector: 'app-professores-layout',
  imports: [UnidadeProfessor],
  templateUrl: './professores-layout.html',
  styleUrl: './professores-layout.scss',
})
export class ProfessoresLayout implements OnInit {
  private popup = inject(PopupService);

  private ProfessorService = inject(ProfessorService);
  @Output() mostrar = new EventEmitter<void>();

  mostrarPopup(professor: any){
    this.mostrar.emit(professor);
  }

  professores = signal<any[]>([]);

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores(){
    this.ProfessorService.buscarProfessores().subscribe({
      next: (res) => {
        this.professores.set(res);
        console.log('Professores', this.professores());
      },
      error: (err) => {
        console.error('Erro ao buscar Professores:', err);
        this.popup.erro('Erro ao tentar buscar Professores.')
      }
    })
  }
}
