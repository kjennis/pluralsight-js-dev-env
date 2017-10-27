//this file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before your tests run.
require('babel-register');

//Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function(){}; //just tread is like an empty function index.js line 1...
