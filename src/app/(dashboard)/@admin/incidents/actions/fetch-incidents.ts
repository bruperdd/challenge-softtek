import {
  GetIncidentsResponseType,
  IncidentStatusType,
} from '@/@types/incidents';

export interface FetchIncidentsParams {
  page?: string;
  status?: IncidentStatusType;
  incidentId?: string;
}

export async function fetchIncidents(
  params?: FetchIncidentsParams
): Promise<GetIncidentsResponseType> {
  const { page, status, incidentId } = params || {};

  const url = new URL('http://localhost:3000/api/incidents');

  if (page) {
    url.searchParams.append('page', page);
  }

  if (status) {
    url.searchParams.append('status', status);
  }

  if (incidentId) {
    url.searchParams.append('incidentId', incidentId);
  }

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}
