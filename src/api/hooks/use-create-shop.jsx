import { useMutation } from '@tanstack/react-query';
import { createShop } from '../actions';

const useCreateShop = () => {
  return useMutation({
    mutationFn: async ({ body }) => {
      try {
        await createShop(body);
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export default useCreateShop;
