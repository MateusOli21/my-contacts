/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/e2e/cypress'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],

  moduleDirectories: ['node_modules', '<rootDir>'],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['<rootDir>/src/app/configs/jest-setup.ts'],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            decorators: true,
          },
          target: 'es2017',
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
            react: {
              runtime: 'automatic',
            },
          },
          baseUrl: 'src',
          paths: {
            '@app/*': ['app/*'],
            '@ui/*': ['ui/*'],
            '@domains/*': ['domains/*'],
            '@infra/*': ['infra/*'],
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tests/lib/assetsTransformer.ts',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
};
