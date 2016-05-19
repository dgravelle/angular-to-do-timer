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
        $scope.getToDos()
        $location.path('/');
      })
      .catch((err) => {
        console.log('error', err);
      });
    }

    $scope.getToDos = function() {
      return ToDoFactory.getAll().then((data) => {
        console.log(data);
        $scope.toDoList = data.data;
      })
      .catch((err) => {
        console.log(err);
      })
    }
    $scope.getToDos();
  }
}());
