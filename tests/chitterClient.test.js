const ChitterClient = require('../src/chitterClient');

require('jest-fetch-mock').enableMocks()

describe('client class', () => {
  beforeEach(() => {
    fetch.resetMocks();   
  });

  it('calls fetch and loads all peeps', (done) => {
    const client = new ChitterClient();
    fetch.mockResponseOnce(JSON.stringify({
      "id": 3,
      "body": "my first peep :)"
    }));
    
    client.loadPeeps((returnedData) => {
      expect(returnedData).toEqual({ 
        "id": 3, 
        "body": "my first peep :)" 
      });

      done();
    });
  });
})