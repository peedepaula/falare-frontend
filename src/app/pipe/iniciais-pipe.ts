import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iniciais' })
export class IniciaisPipe implements PipeTransform {
  transform(nome: string | null | undefined): string {
    if (!nome?.trim()) return '';

    const partes = nome.trim().split(/\s+/);

    return partes
      .slice(0, 2)
      .map(p => p[0].toUpperCase())
      .join('.');
  }
}