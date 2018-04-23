var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          timeSet: 'at 2pm'
        },{
          id: uuid(),
          text: 'Clean the yard',
          timeSet: '4pm'
        }, {
          id: uuid(),
          text: 'Watch tv show',
          timeSet: '6pm'
        }, {
          id: uuid(),
          text: 'Cook dinner',
          timeSet: '7pm'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
      }
    ]
  })
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch ={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
