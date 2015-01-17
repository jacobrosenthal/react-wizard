var React = require('react');

module.exports = {
  name: 'One',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({
    render: function(){
      return <h4>One</h4>
    }
  })
};