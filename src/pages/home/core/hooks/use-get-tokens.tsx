import { useQuery } from '@tanstack/react-query';

import { QUERIES_KEYS } from 'helpers/crud-helper/consts';

import { getTokens } from '../_requests';

function useGetTokens() {
  const { data, isLoading, isFetching, error } = useQuery({ queryKey: [QUERIES_KEYS.TOKENS], queryFn: getTokens });
  return { data, isLoading, isFetching, error };
}

export default useGetTokens;
