var React = require('react');

module.exports = {
  name: 'Three',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({displayName: "component",
    render: function(){
      return React.createElement("h4", null, "Three")
    }
  })
};