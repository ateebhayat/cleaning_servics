import { useQuery } from '@tanstack/react-query';
import { getServices } from '../actions';
import useAuth from '../../hooks/use-auth';

const useShops = (userId) => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: ['Services', user?._id],
    queryFn: () => getServices(userId),
    enabled: Boolean(user?._id),
    refetchOnMount: true,
    staleTime: 0
  });

  return { ...query };
};

export default useShops;
