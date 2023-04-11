const ChitterClient = require('../src/chitterClient');

require('jest-fetch-mock').enableMocks()

describe('client class', () => {
  beforeEach(() => {
    fetch.resetMocks();   
  });
})