import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export function useCustomSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const getSearchParams = useCallback(
    (key: string) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  const setSearchParams = useCallback(
    (key: string, value: string) => {
      params.set(key, value);

      return router.push(pathname + '?' + params.toString());
    },
    [pathname, router, params]
  );

  const deleteSearchParams = useCallback(
    (key: string) => {
      params.delete(key);
      return router.push(pathname + '?' + params.toString());
    },
    [pathname, router, params]
  );

  return {
    setSearchParams,
    getSearchParams,
    deleteSearchParams,
  };
}
