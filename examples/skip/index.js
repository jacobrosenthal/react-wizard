var React   = require('react');
var Wizard = require('../../');
var Steps = require('./Steps');

React.render(React.createElement(Wizard, {start:1, steps: Steps}), document.body);
