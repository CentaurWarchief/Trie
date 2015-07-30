/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 *
 * @param   {Object} tree
 * @param   {String} root
 * @returns {Object}
 */
function computeD3Tree(tree, root) {
  var node = {
    children: [],
    name: root || ''
  };

  if (Object.keys(tree).length) {
    for (var key in tree) {
      node.children.push(this.computeD3Tree(
        tree[key],
        key
      ));
    }
  }

  return node;
};
