'use strict';
var React = require('react');

module.exports = {
  name: 'Two',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({displayName: 'component',
    render: function(){
      return React.createElement('h4', null, 'Two roads diverged in a yellow wood');
    }
  })
};