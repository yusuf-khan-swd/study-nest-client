import { removeTokenFromLocalStorage } from "@/helpers/token";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useHandleLogout = async () => {
  const { logout } = useAuth();
  try {
    await logout();
    toast.success("Logout success");
    removeTokenFromLocalStorage();
  } catch (error) {
    toast.error("Logout failed");
    console.log("Error: ", error);
  }
};

export default useHandleLogout;
