(function() {
  'use strict';

  angular
    .module('app')
    .controller('ToDoController', ToDoController)

  function ToDoController($scope, $location, ToDoFactory) {
    $scope.vm = {}

    $scope.vm.createToDo = function() {
      if (!$scope.addToDo.$valid) {
        return console.log('oops');
      }
      ToDoFactory.createTask(addToDo.title.value).then((data) => {
        $location.path('/');
        console.log(data);
      })
      .catch((err) => {
        console.log('error', err);
      });
    }

    ToDoFactory.getAll.then((data) => {
      $scope.vm.toDoList = data.data;
    })
    .catch((err) => {
      console.log(err);
    })

  }
}());
