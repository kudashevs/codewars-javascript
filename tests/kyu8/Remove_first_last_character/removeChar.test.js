const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;
const removeChar = require('codewars/katas/kyu8/Remove_first_last_character/removeChar');

describe('Tests', () => {
  it('Fixed Tests', () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
