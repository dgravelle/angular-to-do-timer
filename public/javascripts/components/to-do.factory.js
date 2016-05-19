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
      createTask: function(newItem) {
        console.log('posting');
        console.log(newItem);
        return $http({
          method: 'POST',
          url: 'api/todolist',
          headers: {'Content-Type': 'application/json'},
          data: { title: newItem }
        })
      }
    }
  }
}());
