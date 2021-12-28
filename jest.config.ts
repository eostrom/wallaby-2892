import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "\\.(svg|png|jpg)$": "<rootDir>/test/__mocks__/imageMock.js",
  },
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
};
export default config;
