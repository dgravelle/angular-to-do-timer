(function() {
  'use strict';

  angular
    .module('app')
    .controller('ToDoController', ToDoController)

  function ToDoController($scope, ToDoFactory) {
    $scope.vm = {}
    ToDoFactory.getAll.then((data) => {
      $scope.vm.toDoList = data.data;
    })
    .catch((err) => {
      console.log(err);
    })
  }
}());
