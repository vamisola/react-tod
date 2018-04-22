var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {id, text, time} = this.props;

    return (
      <div>
        {id}. {text} at {time}
      </div>
    )
  }
});

module.exports = Todo;
