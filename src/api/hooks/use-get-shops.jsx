import { useQuery } from '@tanstack/react-query';
import { getShops } from '../actions';
import useAuth from '../../hooks/use-auth';
import { API_TAGS } from '../api-tags';

const useShops = (userId) => {
  const { user } = useAuth();

  const query = useQuery({
    queryKey: [API_TAGS.GET_SHOPS, user?._id],
    queryFn: () => getShops(userId),
    enabled: Boolean(user?._id),
    refetchOnMount: true,
    staleTime: 0
  });

  return { ...query };
};

export default useShops;
