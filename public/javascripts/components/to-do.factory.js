(function() {
  'use strict';

  angular
    .module('app')
    .factory('ToDoFactory', ToDoFactory)

  function ToDoFactory($http) {
    return {
      getAll: function() {
        return $http.get('/api/todolist')
      },
      createToDo: function(newItem) {
        console.log(newItem);
        return $http.post('/api/todolist', newItem);
      },
      deleteToDo: function(toDo) {
        return $http.delete('/api/todolist/' + toDo.id);
      }
    }
  }
}());
