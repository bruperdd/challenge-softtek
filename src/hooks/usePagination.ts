import { useCustomSearchParams } from './useCustomSearchParams';

export function usePagination() {
  const { setSearchParams } = useCustomSearchParams();

  function handlePageChange(pageIndex: number) {
    setSearchParams('page', String(pageIndex + 1));
  }

  return {
    handlePageChange,
  };
}
