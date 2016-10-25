var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
$(document).foundation();

require('style!css!sass!appStyles');


// ReactDOM.render(
//   <h1>Boilerplate 3 Project</h1>,
//   document.getElementById('app')
// );

// require('./redux-examples');
require('./redux-example-todos');