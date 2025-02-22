import { decodedToken } from "@/utils/jwt";
import { getTokenFromLocalStorage } from "@/utils/local-storage";

export const getUserInfo = () => {
  const authToken = getTokenFromLocalStorage();
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};
