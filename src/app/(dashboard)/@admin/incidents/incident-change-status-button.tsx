'use client';

import { ArrowRight } from 'lucide-react';

import { IncidentStatusType } from '@/@types/incidents';
import { Button } from '@/components/ui/button';

const actionButtonText = {
  open: 'Analisar',
  ['in-analysis']: 'Concluir',
};

interface IncidentChangeStatusButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  status: IncidentStatusType;
}

export function IncidentChangeStatusButton({
  status,
  ...props
}: IncidentChangeStatusButtonProps) {
  return (
    <Button variant="outline" size="sm" onClick={() => {}} {...props}>
      <ArrowRight className="mr-2 h-3 w-3" />
      {actionButtonText[status as keyof typeof actionButtonText]}
    </Button>
  );
}
