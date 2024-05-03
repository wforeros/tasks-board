import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@fnd/(.*)$': '<rootDir>/src/infrastructure/$1'
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-node'
};

export default config;
