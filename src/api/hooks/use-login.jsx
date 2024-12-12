import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../actions';

const useLogin = () => {
  return useMutation({
    mutationFn: async ({ email, password }) => {
      try {
        const user = await loginUser({ email, password });
        localStorage.setItem('userInfo', JSON.stringify(user.user));
        localStorage.setItem('token', user.token);
      } catch (err) {
        console.log(err);
      }
    }
  });
};

export default useLogin;
