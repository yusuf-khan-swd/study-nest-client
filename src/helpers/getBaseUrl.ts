export const getBaseUrl = (): string => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://career-nest-server-web.vercel.app";
};
