(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.repeatBy', function () {
      var res = nx.repeatBy('a', 3);
      expect(res).toEqual(['a', 'a', 'a']);
    });
  });
})();
