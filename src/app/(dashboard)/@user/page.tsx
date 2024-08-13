import { IncidentsCardList } from '@/components/custom/incidents-card-list';

export default async function UserDashboard() {
  return (
    <div className="p-4 grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 m-3 justify-items-center">
      <IncidentsCardList status="open" title="Em aberto" />
      <IncidentsCardList status="in-analysis" title="Em análise" />
      <IncidentsCardList status="resolved" title="Concluído" />
      <IncidentsCardList status="canceled" title="Cancelado" />
    </div>
  );
}
