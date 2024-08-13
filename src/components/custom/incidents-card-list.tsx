import { IncidentStatusType } from '@/@types/incidents';
import { fetchIncidents } from '@/app/(dashboard)/@admin/incidents/actions/fetch-incidents';

import IncidentCard from './incident-card';

type IncidentsCardListProps = {
  title: string;
  status: IncidentStatusType;
};

const colorByStatus: Record<IncidentStatusType, string> = {
  open: 'text-slate-400',
  canceled: 'text-rose-500',
  ['in-analysis']: 'text-amber-500',
  resolved: 'text-emerald-500',
};

export async function IncidentsCardList({
  status,
  title,
}: IncidentsCardListProps) {
  const incidents = await fetchIncidents({ status });

  return (
    <div className="flex flex-col gap-4">
      <h2 className={`text-2xl font-bold ${colorByStatus[status]}`}>{title}</h2>
      {incidents.incidents.map((incident) => (
        <IncidentCard key={incident.id} incident={incident} />
      ))}
    </div>
  );
}
