export type IncidentStatusType =
  | 'open'
  | 'in-analysis'
  | 'resolved'
  | 'canceled';

export enum IncidentPriorityEnum {
  HIGH = 1,
  MEDIUM = 2,
  LOW = 3,
}

export type Incident = {
  id: string;
  status: IncidentStatusType;
  description: string;
  openedBy: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt: Date | null;
  canceledAt: Date | null;
  assignedTo: string | null;
  comments: string | null;
  priority: IncidentPriorityEnum;
};

export type GetIncidentsResponseType = {
  incidents: Incident[];
  meta: {
    totalCount: number;
    totalPages: number;
    pageIndex: number;
    perPage: number;
  };
};
