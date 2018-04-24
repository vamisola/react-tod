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
  }
};
