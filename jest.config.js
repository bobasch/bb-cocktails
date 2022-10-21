/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "/src/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
};
