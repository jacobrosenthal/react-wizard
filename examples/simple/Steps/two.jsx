var React = require('react');

module.exports = {
  name: 'Two',
  onSubmit: function (done){
    done();
  },
  component: React.createClass({
    render: function(){
      return <h4>Two</h4>
    }
  })
};