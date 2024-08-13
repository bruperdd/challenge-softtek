import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useCustomSearchParams } from './useCustomSearchParams';

const incidentFiltersSchema = z.object({
  incidentId: z.string().optional(),
  status: z
    .enum(['all', 'open', 'in-analysis', 'canceled', 'resolved'])
    .optional(),
});

export type IncidentFiltersSchema = z.infer<typeof incidentFiltersSchema>;

export function useIncidentFilter() {
  const { setSearchParams, deleteSearchParams } = useCustomSearchParams();

  const { register, control, handleSubmit, reset, resetField } =
    useForm<IncidentFiltersSchema>({
      defaultValues: {
        incidentId: '',
        status: 'all',
      },
      resolver: zodResolver(incidentFiltersSchema),
    });

  async function handleFilter({ incidentId, status }: IncidentFiltersSchema) {
    if (incidentId) {
      setSearchParams('incidentId', incidentId);
      setSearchParams('page', '1');
      resetField('incidentId');
    } else {
      deleteSearchParams('incidentId');
    }

    if (status) {
      setSearchParams('page', '1');

      if (status !== 'all') {
        setSearchParams('status', status);
      } else {
        deleteSearchParams('status');
      }
    }
  }

  const handleClearFilters = useCallback(() => {
    deleteSearchParams('page');
    deleteSearchParams('incidentId');
    deleteSearchParams('status');
    reset();
  }, [deleteSearchParams, reset]);

  return {
    handleClearFilters,
    handleFilter,
    register,
    control,
    handleSubmit,
  };
}
