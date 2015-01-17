var React = require('react');

module.exports = {
  name: 'Three',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({
    render: function(){
      return <h4>Three</h4>
    }
  })
};