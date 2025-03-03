const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Ensure Jest resolves '@/' correctly
      },
      moduleDirectories: ['src', 'node_modules'], // Prioritize 'src' over 'node_modules'
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'],
    },
  },
};
