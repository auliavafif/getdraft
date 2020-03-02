// const esModules = ['next/link', 'ngx-bootstrap'].join('|');

module.exports = {
  displayName: 'GetDraft',
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  modulePaths: ['<rootDir>/src'],
  transformIgnorePatterns: [`/node_modules/(?!${'next'})`],

};
