const Test = require('@codewars/test-compat');
const Node = require('codewars/katas/kyu7/convert_linked_list_to_string/Node');
const stringify = require('codewars/katas/kyu7/convert_linked_list_to_string/stringifyRecursion');

describe('stringify()', () => {
  // prettier-ignore
  it('should pass the example tests as shown in the Description', () => {
        Test.assertDeepEquals(
            stringify(new Node(1, new Node(2, new Node(3)))),
            '1 -> 2 -> 3 -> null'
        );
        Test.assertDeepEquals(
            stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
            '0 -> 1 -> 4 -> 9 -> 16 -> null'
        );
        Test.assertDeepEquals(
            stringify(null),
            'null'
        );
    });
});
