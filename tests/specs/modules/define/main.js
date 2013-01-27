
seajs.config({
  base: './define'
})


define(function(require) {

  var test = require('../../../test')

  test.assert(require('./a').name === 'a', 'define(id, deps, fn)')
  test.assert(require('./b').name === 'b', 'define(deps, fn)')
  test.assert(require('./c').name === 'c', 'define(fn)')
  test.assert(require('./d').name === 'd', 'define(id, fn)')
  test.assert(require('./e').name === 'e', 'define(id, object)')
  test.assert(require('./f').name === 'f', 'define(object)')
  test.assert(require('./g').name === 'g', 'define(id, deps, fn, more)')

  test.next()

});
