module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/', // Add this line to ignore the dist directory
    '\\.d\\.ts$', // Add this line to ignore .d.ts files
  ],
};