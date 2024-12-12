import { useQuery } from '@tanstack/react-query';
import { getService } from '../actions';
import useAuth from '../../hooks/use-auth';

const useGetSingleService = (id) => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ['Service', user?._id],
    queryFn: () => getService(id),
    enabled: Boolean(user?._id),
    refetchOnMount: true,
    staleTime: 0
  });

  return { ...query };
};

export default useGetSingleService;
