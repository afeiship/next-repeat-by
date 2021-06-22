(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.repeatBy string', function () {
      var res = nx.repeatBy('a', 3);
      expect(res).toEqual(['a', 'a', 'a']);
    });

    test('repeat obj', ()=>{
      var obj = { data:'2021-06-22', time:'22:27:34'}
      var res = nx.repeatBy(obj, 3);

      expect(res).toEqual([
        { data: '2021-06-22', time: '22:27:34' },
        { data: '2021-06-22', time: '22:27:34' },
        { data: '2021-06-22', time: '22:27:34' }
      ]);
    })
  });
})();
