var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog',
          time: 'at 2pm'
        },{
          id: 2,
          text: 'Clean the yard',
          time: '4pm'
        }, {
          id: 3,
          text: 'Watch tv show',
          time: '6pm'
        }, {
          id: 4,
          text: 'Cook dinner',
          time: '7pm'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
