/** @jsx React.DOM */
'use strict';

var React = require('react');
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var ListGroup = require('react-bootstrap').ListGroup;
var Alert = require('react-bootstrap').Alert;

var Step = React.createClass({displayName: "Step",
  getInitialState: function(){
    return {
      advanceDisabled: false,
      retreatDisabled: false,
    };
  },
  onAdvance: function(err){
    if(err){
      this.setState({
        advanceDisabled: false,
        retreatDisabled: false,
        currentError: err
      });
    }else{
      this.props.onAdvance();
    }
  },
  onSubmit: function(){
    this.setState({
      advanceDisabled: true,
      retreatDisabled: true
    });
    this.props.onSubmit.apply(this, [this.onAdvance]);
  },
  onBack: function(){
    if(this.props.onBack){
      this.props.onBack.apply(this, [this.props.onRetreat]);
    }else{
      this.props.onRetreat();
    }
  },
  render: function(){

    var AdvanceButton;
    if(!this.props.lastStep){
      AdvanceButton = React.createElement(Button, {
        onClick: this.onSubmit,
        disabled: this.state.advanceDisabled,
        bsStyle:'primary'
      },'Onward');
    }

    var RetreatButton;
    if(!this.props.lastStep){
      RetreatButton = React.createElement(Button, {
        onClick: this.onBack,
        disabled: this.props.firstStep || this.state.retreatDisabled,
      },'back');
    }

    var ComponentClass = this.props.component;

    var Error;
    if(this.state.currentError){
      Error = React.createElement(Alert, {bsStyle: "danger"}, 
                React.createElement("p", null, this.state.currentError.message)
              );
    }

    return React.createElement("div", {className: "step"}, 
              React.createElement(ComponentClass, {data: this.props.data}), 
              React.createElement(ButtonToolbar, null, 
                RetreatButton, 
                AdvanceButton
              ), 
              Error
           );
  }
});

var Wizard = React.createClass({displayName: "Wizard",
  getInitialState: function(){
    return {
      currentStep: this.props.start || 0,
      currentError: null,
      data: this.props,
      advanceDisabled: false,
      retreatDisabled: false
    };
  },
  getDefaultProps: function(){
    return {
      steps: []
    };
  },
  advance: function(e){
    var self = this;
    self.setState({
      advanceDisabled: true,
      retreatDisabled: true
    });
  },
  retreat: function(e){
    var self = this;
    self.setState({
      currentStep: self.state.currentStep-1,
    });
  },
  navigate: function(e){
    console.log(e);
  },
  render: function() {

    var self = this;

    var items = this.props.steps.map(function(step, idx){
      return (React.createElement(ListGroupItem, {key: 'nav' + idx, onClick: self.navigate, active: idx === self.state.currentStep ? 'active' : ''}, step.name));
    });

    var step = this.props.steps[this.state.currentStep];
    var Component = React.createElement(Step, {
      key: 'step' + this.state.currentStep,
      onSubmit: step.onSubmit,
      onBack: step.onBack,
      onAdvance: function(){
        self.setState({
          currentError: null,
          currentStep: self.state.currentStep+1
        });
      }, 
      onRetreat: function(){
        self.setState({
          currentError: null,
          currentStep: self.state.currentStep-1
        });
      },
      component: step.component,
      data: this.state.data,
      firstStep: this.state.currentStep === 0,
      lastStep: this.state.currentStep === this.props.steps.length-1
    });

    return React.createElement("div", {className: "wizard"}, 
            React.createElement("div", {className: "wizard-nav col-xs-2"}, 
              React.createElement(ListGroup, null, 
                items
              )
            ), 
            React.createElement("div", {className: "wizard-content col-xs-4"}, 
              Component
            )
           );
  }
});

module.exports = Wizard;