/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */
function computeTrie(values) {
  var trie = {};
  var key;

  for (var i = 0, l = values.length; i < l; i += 1) {
    var node = trie;

    for (var j = 0; j < values[i].length; j += 1) {
      key = values[i][j];

      if (! node[key]) {
        node[key] = {};
      }

      node = node[key];
    }
  }

  return trie;
};
