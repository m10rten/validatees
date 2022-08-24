import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  preset: "ts-jest",
};

export default config;
