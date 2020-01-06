(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var RETURN_VALUE = function(item) { return item; };

  nx.repeatBy = function(inItem, inCount, inCallback) {
    var callback = inCallback || RETURN_VALUE;
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
