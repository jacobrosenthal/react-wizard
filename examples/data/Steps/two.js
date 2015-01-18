'use strict';
var React = require('react');
var Input = require('react-bootstrap').Input;

module.exports = {
  name: 'Two',
  onSubmit: function (done){
    if(!this.props.data.name){
      return done(new Error('but.. You MUST enter your name.'));
    }
    done();
  },
  component: React.createClass({displayName: 'component',
    onNameChange: function(e){
      this.props.data.name = e.target.value;
    },
    render: function(){
      return React.createElement(Input,
        {
          type: 'text',
          label: 'Enter your name',
          onChange: this.onNameChange
        });
    }
  })
};