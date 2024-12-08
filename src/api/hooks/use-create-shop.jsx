import { useMutation } from '@tanstack/react-query';
import { createShop } from '../actions';
import { queryClient } from '../../utils/react-query-client';
import useAuth from '../../hooks/use-auth';

const useCreateShop = () => {
  const { user } = useAuth();
  return useMutation({
    mutationFn: async ({ body }) => {
      try {
        await createShop(body);
      } catch (err) {
        console.log(err);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [API_TAGS.GET_SHOPS, user?._id]
      });
    }
  });
};

export default useCreateShop;
