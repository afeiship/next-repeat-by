/*!
 * name: @jswork/next-repeat-by
 * description: Repeat by for next.
 * homepage: https://github.com/afeiship/next-repeat-by
 * version: 1.0.0
 * date: 2020-11-22 17:57:37
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.repeatBy = function (inItem, inCount, inCallback) {
    var callback = inCallback || nx.stubValue;
    var result = [];
    for (var i = 0; i < inCount; i++) {
      result.push(callback(inItem));
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.repeatBy;
  }
})();
