'use client';
import { Search, X } from 'lucide-react';
import { Controller } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useIncidentFilter } from '@/hooks/useIncidentFilter';

export function IncidentTableFilters() {
  const { control, handleClearFilters, handleFilter, handleSubmit, register } =
    useIncidentFilter();

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span>Filtros:</span>
      <Input
        {...register('incidentId')}
        placeholder="ID do chamado"
        className="h-8 w-auto"
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Select onValueChange={onChange} value={value}>
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos status</SelectItem>
              <SelectItem value="open">Aberto</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="in-analysis">Em análise</SelectItem>
              <SelectItem value="resolved">Concluído</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <Button type="submit" variant="secondary" size="sm">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
