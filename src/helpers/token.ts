const TOKEN_KEY = "token";

export const setTokenToLocalStorage = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeTokenFromLocalStorage = () => {
  return localStorage.removeItem(TOKEN_KEY);
};
