import { useMutation } from '@tanstack/react-query';
import { deleteService } from '../actions';

const useDeleteService = () => {
  return useMutation({
    mutationFn: async ({ id }) => {
      try {
        await deleteService(id);
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export default useDeleteService;
