import { IncidentStatusType } from '@/@types/incidents';

interface IncidentStatusProps {
  status: IncidentStatusType;
}

const incidentStatusMap: Record<IncidentStatusType, string> = {
  open: 'Aberto',
  canceled: 'Cancelado',
  ['in-analysis']: 'Em análise',
  resolved: 'Concluído',
};

export function IncidentStatus({ status }: IncidentStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'open' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'in-analysis' && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      {status === 'resolved' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {incidentStatusMap[status]}
      </span>
    </div>
  );
}
