const config = {
    testEnvironment: 'jsdom',
    transform: {"^.+\\.jsx?$": "babel-jest"},
    extensionsToTreatAsEsm: ['.jsx'],
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
  };
  
module.exports = config;