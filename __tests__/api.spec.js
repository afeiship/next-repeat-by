const nx = require('@feizheng/next-js-core2');
require('../src/next-repeat-by');

describe('api.basic test', () => {
  test('nx.repeatBy', function() {
    var res = nx.repeatBy('a', 3);
    expect(res).toEqual(['a', 'a', 'a']);
  });
});
