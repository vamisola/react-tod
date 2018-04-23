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
          timeSet: 'at 2pm',
          completed: false
        },{
          id: uuid(),
          text: 'Clean the yard',
          timeSet: '4pm',
          completed: true
        }, {
          id: uuid(),
          text: 'Watch tv show',
          timeSet: '6pm',
          completed: true
        }, {
          id: uuid(),
          text: 'Cook dinner',
          timeSet: '7pm',
          completed: false
        }
      ]
    };
  },
  handleToggle: function (id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  },
  handleAddTodo: function (text) {
  this.setState({
    todos: [
      ...this.state.todos,
      {
        id: uuid(),
        text: text,
        completed: false
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
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
