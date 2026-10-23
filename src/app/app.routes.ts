import { Routes } from '@angular/router';
import { Entrar } from './pages/entrar/entrar';
import { Geral } from './pages/geral/geral';
import { Aulas } from './pages/aulas/aulas';

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
    }
];
