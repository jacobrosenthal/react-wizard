'use strict';
var React = require('react');

module.exports = {
  name: 'One',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({displayName: 'component',
    render: function(){
      return React.createElement('h4', null, 'I was told you tell you: ' + this.props.data.something);
    }
  })
};