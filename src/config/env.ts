type Environment = {
  API_BASE_URL: string;
  APP_ENV: "development" | "production";
  ENABLE_LOGS: boolean;
};

export const ENV: Environment = {
  API_BASE_URL: "https://mock-api.amrutam.dev",
  APP_ENV: __DEV__ ? "development" : "production",
  ENABLE_LOGS: __DEV__,
};
