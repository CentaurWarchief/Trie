/**
 * @author Andrey K. Vital <andreykvital@gmail.com>
 */

/**
 * @param   {String} format
 * @returns {String}
 */
function sprintf(format) {
  var i    = 0;
  var args = Array.prototype.slice.call(arguments, 1);

  return format.replace(/%s/g, function() {
    return args[i++];
  });
};
