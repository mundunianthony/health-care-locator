import { useAuth0 } from "@auth0/auth0-react";
import Toast from "../components/Toast";

const useAuthCheck = () => {
  const { isAuthenticated } = useAuth0();

  const validateLogin = () => {
    if (!isAuthenticated) {
      Toast.show({
        type: "error",
        text1: "Please Login first",
        position: "bottom",
      });
      return false;
    }
    return true;
  };

  return { validateLogin };
};

export default useAuthCheck;