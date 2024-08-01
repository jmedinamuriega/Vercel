// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['<rootDir>/setupTest.ts'],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//     '^.+\\.jsx?$': 'babel-jest',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   moduleNameMapper: {
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//   },
// };
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};

