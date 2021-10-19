const Test = require('@codewars/test-compat');
const inArray = require('codewars/katas/kyu6/which_are_in/inArrayConcat');

describe('Tests', () => {
  it('test', () => {
    let a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
    let a1 = ['xyz', 'live', 'strong'];
    Test.assertSimilar(inArray(a1, a2), ['live', 'strong']);
    a1 = ['live', 'strong', 'arp'];
    Test.assertSimilar(inArray(a1, a2), ['arp', 'live', 'strong']);
    a1 = ['tarp', 'mice', 'bull'];
    Test.assertSimilar(inArray(a1, a2), []);
  });
});
