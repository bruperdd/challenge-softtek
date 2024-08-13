import { Incident } from '@/@types/incidents';
import { TableBody } from '@/components/ui/table';

import { IncidentTableRow } from './incident-table-row';

interface IncidentTableBodyProps {
  incidents: Incident[];
}

export function IncidentTableBody({ incidents }: IncidentTableBodyProps) {
  return (
    <TableBody>
      {incidents.map((incident) => (
        <IncidentTableRow key={incident.id} incident={incident} />
      ))}
    </TableBody>
  );
}
