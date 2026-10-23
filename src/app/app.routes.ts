import { Routes } from '@angular/router';
import { Entrar } from './pages/entrar/entrar';
import { Geral } from './pages/geral/geral';
import { Aulas } from './pages/aulas/aulas';
import { Turmas } from './pages/turmas/turmas';
import { Alunos } from './pages/alunos/alunos';
import { Matriculas } from './pages/matriculas/matriculas';
import { Professores } from './pages/professores/professores';
import { Pagamentos } from './pages/pagamentos/pagamentos';

export const routes: Routes = [
    {
        path: "entrar",
        component: Entrar
    },
    {
        path: "geral",
        component: Geral
    },
    {
        path: "aulas",
        component: Aulas
    },
    {
        path: "turmas",
        component: Turmas
    },
    {
        path: "alunos",
        component: Alunos
    },
    {
        path: "professores",
        component: Professores
    },
    {
        path: "matriculas",
        component: Matriculas
    },
    {
        path: "pagamentos",
        component: Pagamentos
    }
];
