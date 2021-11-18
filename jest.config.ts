const jestConfig = {
  name: 'ScarinciHollenbeck',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/coverage/',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'text', 'text-summary', 'lcov', 'html-spa'],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}', // include JavaScript and TypeScript (w/ JSX)
    '!**/*.config.{js,ts}', // ignore config files
    '!**/.*rc.js', // ignore eslint and babelrc
    '!**/*.d.ts', // ignore TypeScript types files
    '!**/__mock__/*.{js,ts}', // ignore mocks
    '!**/descriptor.{js,ts}', // ignore descriptors
    '!**/*.stories.{ts,tsx}', // ignore stories
    '!**/__test__/**/*.{js,jsx,ts,tsx}', // ignore test and test cases
  ],

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/coverage/',
    '/cypress/',
    '/.storybook/',
    '/docker/',
    '/scripts/', // those are utils not connected to prod code
    '/storybook-static/', // those are utils not connected to prod code
    '/storybook-utils/', // those are utils not connected to prod code
    '/test-utils/', // those are utils not connected to prod code
  ],

  coverageThreshold: {
    global: {
      lines: 4, // lines of coverage is our primary, we want to get this to 80%
      branches: 3,
    },
  },

  // extensions
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    // TODO update this mapping whenever updating paths in tsconfig.json
    '~/(.*)': '<rootDir>/$1',
  },
  moduleDirectories: ['.', 'node_modules'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/coverage/', '/cypress/'],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)$',

  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
}

export default jestConfig