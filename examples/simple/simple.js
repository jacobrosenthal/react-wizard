/** @jsx React.DOM */
var React   = require('react');
var Wizard = require('../');
var Steps = require('./Steps');

React.render(React.createElement(Wizard, {steps: Steps}), document.getElementById('container'));
