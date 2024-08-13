import { Incident, IncidentStatusType } from '@/@types/incidents';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { dateFormatter } from '@/utils/dateFormatter';

import { Badge } from '../ui/badge';

interface IncidentCardProps {
  incident: Incident;
}

const priorityMap = {
  1: 'Alta',
  2: 'Média',
  3: 'Baixa',
};

const badgeColorMap: Record<
  number,
  'destructive' | 'default' | 'secondary' | 'outline' | null | undefined
> = {
  1: 'destructive',
  2: 'default',
  3: 'secondary',
};

const borderColorByStatus: Record<IncidentStatusType, string> = {
  open: 'dark:border-t-slate-400 border-t-slate-500',
  canceled: 'dark:border-t-rose-400 border-t-rose-500',
  ['in-analysis']: 'dark:border-t-amber-400 border-t-amber-500',
  resolved: 'dark:border-t-emerald-400 border-t-emerald-500',
};

export default function IncidentCard({ incident }: IncidentCardProps) {
  return (
    <Card
      className={`border-t-4 ${borderColorByStatus[incident.status]}`}
      key={incident.id}
    >
      <CardHeader>
        <CardDescription className="text-lg">
          {incident.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {incident.assignedTo && (
          <p>
            <span className="text-sm">Atribuído para: </span>
            {incident.assignedTo}
          </p>
        )}
        <p className="text-sm text-slate-500">
          {dateFormatter(incident.createdAt)}
        </p>
      </CardContent>
      <CardFooter>
        <Badge className="ml-auto" variant={badgeColorMap[incident.priority]}>
          {priorityMap[incident.priority]}
        </Badge>
      </CardFooter>
    </Card>
  );
}
