import { Incident } from '@/@types/incidents';
import { TableCell, TableRow } from '@/components/ui/table';
import { dateFormatter } from '@/utils/dateFormatter';

import { IncidentChangeStatusButton } from './incident-change-status-button';
import { IncidentStatus } from './incident-status';

interface IncidentTableRowProps {
  incident: Incident;
}

export function IncidentTableRow({ incident }: IncidentTableRowProps) {
  const { id, updatedAt, description, status, priority, assignedTo, openedBy } =
    incident;

  return (
    <TableRow>
      <TableCell className="font-mono text-xs font-medium">{id}</TableCell>
      <TableCell className="text-muted-foreground">
        {dateFormatter(updatedAt)}
      </TableCell>
      <TableCell>{priority}</TableCell>
      <TableCell>
        <IncidentStatus status={status} />
      </TableCell>
      <TableCell className="font-medium">{description}</TableCell>
      <TableCell className="font-medium">{openedBy}</TableCell>
      <TableCell className="font-medium">{assignedTo}</TableCell>
      <TableCell>
        {['open', 'in-analysis'].includes(status) && (
          <IncidentChangeStatusButton status={status} />
        )}
      </TableCell>
    </TableRow>
  );
}
