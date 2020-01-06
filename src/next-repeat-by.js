(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var RETURN_VALUE = function(item) { return item; };

  nx.repeatBy = function(inItem, inCount, inCallback) {
    var callback = inCallback || RETURN_VALUE;
    var list = [];
    for (var i = 0; i < inCount; i++) {
      list.push(inItem);
    }
    return callback(list);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.repeatBy;
  }
})();
