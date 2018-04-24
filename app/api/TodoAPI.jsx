var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos)) //JSON.stringify method will take the array and turns it into string because localStorage does not accept array
      return todos;
    }
  },
  getTodos: function () {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
        todos = JSON.parse(stringTodos); //JSON.Parse will convert the string into array
    } catch (e) {

    }
    return $.isArray(todos) ? todos : [];
    //same as the ternary above
    // if ($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  },
  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      }else{
        return 0;
      }
    });
    return filteredTodos;
  }

};
