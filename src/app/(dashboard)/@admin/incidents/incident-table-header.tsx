import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function IncidentTableHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="w-[140px]">Identificador</TableHead>
        <TableHead className="w-[180px]">Última atualização</TableHead>
        <TableHead className="w-[140px]">Prioridade</TableHead>
        <TableHead className="w-[140px]">Status</TableHead>
        <TableHead className="w-[960px]">Descrição</TableHead>
        <TableHead className="w-[140px]">Aberto por</TableHead>
        <TableHead className="w-[140px]">Atendido por</TableHead>
        <TableHead className="w-[164px]"></TableHead>
        <TableHead className="w-[132px]"></TableHead>
      </TableRow>
    </TableHeader>
  );
}
