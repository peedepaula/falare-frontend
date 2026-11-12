import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard'
import { Entrar } from './pages/entrar/entrar';
import { Geral } from './pages/geral/geral';
import { Aulas } from './pages/aulas/aulas';
import { Turmas } from './pages/turmas/turmas';
import { Alunos } from './pages/alunos/alunos';
import { Matriculas } from './pages/matriculas/matriculas';
import { Professores } from './pages/professores/professores';
import { Pagamentos } from './pages/pagamentos/pagamentos';
import { GeralAluno } from './pages/geral-aluno/geral-aluno';

export const routes: Routes = [
    // públicas
    { path: '', component: Entrar, pathMatch: 'full' },
    { path: 'entrar-admin', component: Entrar },

    // protegidas
  {
    path: '',
    canActivateChild: [authGuard],
    children: [
      { path: 'geral', component: Geral },
      { path: 'geral/aluno', component: GeralAluno },
      { path: 'aulas', component: Aulas },
      { path: 'turmas', component: Turmas },
      { path: 'alunos', component: Alunos },
      { path: 'professores', component: Professores },
      { path: 'matriculas', component: Matriculas },
      { path: 'pagamentos', component: Pagamentos },
    ],
  },

  { path: '**', redirectTo: '' }
];
