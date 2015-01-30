'use strict';
var React = require('react');

module.exports = {
  name: 'Three',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({displayName: 'component',
    render: function(){
      return React.createElement('h4', null, 'This is the end. My only friend, the End. (you should probably put a link or button here')
    }
  })
};