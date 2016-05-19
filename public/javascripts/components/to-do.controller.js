(function() {
  'use strict';

  angular
    .module('app')
    .controller('ToDoController', ToDoController)

  function ToDoController($scope, $location, ToDoFactory) {
    $scope.vm = {}

    $scope.vm.getToDos = function() {
      return ToDoFactory.getAll().then((data) => {
        console.log(data);
        $scope.vm.toDoList = data.data;
      })
      .catch((err) => {
        console.log(err);
      })
    }

    $scope.vm.getToDos();

    $scope.vm.createToDo = function() {
      if (!$scope.addToDo.$valid) {
        return console.log('oops');
      }

      ToDoFactory.createToDo({ title: addToDo.title.value }).then((data) => {
        console.log(data);
        $scope.vm.getToDos()
      })
      .catch((err) => {
        console.log('error', err);
      });
    }

    $scope.vm.updateToDo = function(toDo) {
      ToDoFactory.updateToDo(toDo).then((data) => {
        console.log(data);
        $location.path('/');
      })
      .catch((err) => {
        console.log(err);
      })
    }

    $scope.vm.deleteToDo = function(toDo) {
      ToDoFactory.deleteToDo(toDo).then((data) => {
        console.log(data);
        $scope.vm.getToDos()
      })
      .catch((err) => {
        console.log('err', err);
        $scope.vm.getToDos()
      })
    }
  }

}());
