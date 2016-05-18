(function() {
  'use strict';

  angular
    .module('app')
    .factory('ToDoFactory', ToDoFactory)

  function ToDoFactory($http) {
    return {
      getAll: $http.get('/api/todolist'),
      createTask: function(newItem) {
        console.log('posting');
        return $http({
          method: 'POST',
          url: 'api/todolist',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: newItem
        })
      }
    }
  }
}());
