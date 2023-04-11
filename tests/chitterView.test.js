/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const PeepModel = require('../src/models/peepModel');
const ChitterView = require('../src/views/chitterView');

describe('ChitterView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })
  
  it('displays a peep', () => {
    const model = new PeepModel();
    const view = new ChitterView(model);
    this.mockedData = [{
      "id": 3,
      "body": "my first peep :)",
      "created_at": "2023-04-11T13:21:23.317Z",
      "updated_at": "2023-04-11T13:21:23.317Z",
      "user": { "id": 1, "handle": "maker" },
      "likes": [{ "user": { "id": 1, "handle": "maker" } }]
    }]  

    model.addPeep(this.mockedData[0]);
  
    view.displayPeeps();

    expect(document.querySelectorAll('.peep').length).toBe(1);
    expect(document.querySelectorAll('.peep-body')[0].textContent).toBe('my first peep :) @maker');
  })
})