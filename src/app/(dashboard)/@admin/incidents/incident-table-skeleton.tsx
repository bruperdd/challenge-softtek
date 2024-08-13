import { Skeleton } from '@/components/ui/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export function IncidentTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Skeleton className="h-4 max-w-[140px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[180px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[140px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[140px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[960px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[140px]" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 max-w-[140px]" />
      </TableCell>
    </TableRow>
  ));
}
