export const getBaseUrl = (): string => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://study-nest-server.vercel.app/";
};
