const useAuth = () => {
  // Check if the token exists in localStorage
  const token = localStorage.getItem('token');

  // Get the user type from localStorage, it could be 'admin' or 'seller'
  const user = JSON.parse(localStorage.getItem('userInfo'));

  // Determine if the user is authenticated based on the presence of the token
  const isAuthenticated = !!token;

  return {
    isAuthenticated,
    userType: user?.userType,
    token,
    user
  };
};

export default useAuth;
