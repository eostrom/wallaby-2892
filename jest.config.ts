import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    "\\.(svg|png|jpg)$": "<rootDir>/test/__mocks__/imageMock.js",
  },
  setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
};
export default config;
