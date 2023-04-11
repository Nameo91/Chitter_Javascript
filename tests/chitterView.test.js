/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ChitterView = require('../src/views/chitterView');
const ChitterClient = require('../src/chitterClient.js');


require('jest-fetch-mock').enableMocks()