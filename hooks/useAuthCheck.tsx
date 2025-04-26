import { useAuth0 } from 'react-native-auth0';
import Toast from 'react-native-toast-message';

const useAuthCheck = () => {
  const { user } = useAuth0(); // use `user` or any custom logic to check auth

  const validateLogin = (): boolean => {
    if (!user) {
      Toast.show({
        type: 'error',
        text1: 'Please login first',
        position: 'bottom',
      });
      return false;
    }
    return true;
  };

  return { validateLogin };
};

export default useAuthCheck;
