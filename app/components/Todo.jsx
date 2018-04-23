var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {id, text, time, completed} = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/>
        {text} at {time}
      </div>
    )
  }
});

module.exports = Todo;
