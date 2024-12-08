import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../actions';

const useRegister = () => {
  return useMutation({
    mutationFn: async ({ email, password, role }) => {
      try {
        return await registerUser({ email, password, role });
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export default useRegister;
