export function formatarData(data: string | Date | null | undefined): string {
  if (!data) return '';

  // Postgres manda "2026-11-19 20:16:31.318548+00" (espaço, microssegundos, "+00").
  // Normalizamos para um formato que o JavaScript entende bem.
  let valor = data instanceof Date ? data.toISOString() : data;

  valor = valor
    .replace(' ', 'T')                 // espaço -> T
    .replace(/(\.\d{3})\d+/, '$1')     // microssegundos -> milissegundos
    .replace(/([+-]\d{2})$/, '$1:00'); // "+00" -> "+00:00"

  const date = new Date(valor);
  if (isNaN(date.getTime())) return '';

  return date.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
}