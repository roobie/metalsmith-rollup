(function () {
'use strict';

// This function isn't used anywhere, so
// Rollup excludes it from the bundle...


// This function gets included
function cube(x) {
  // rewrite this as `square( x ) * x`
  // and see what happens!
  return x * x * x;
}

console.log(cube(5));

}());
