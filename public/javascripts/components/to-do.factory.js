(function() {
  'use strict';

  angular
    .module('app')
    .factory('ToDoFactory' ToDoFactory)

  function ToDoFactory($http) {
    return {
      getAll: $http.get('/api/to-do-list');
    }
  }
}());
