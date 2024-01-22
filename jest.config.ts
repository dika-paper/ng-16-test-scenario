import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   'src/**/{component,service}/**/*.{component,service}.ts',
  // ],
  coveragePathIgnorePatterns: ['src/main.ts'],
};

export default config;
