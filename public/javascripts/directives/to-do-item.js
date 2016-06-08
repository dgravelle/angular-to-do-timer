(function () {

  angular
    .module('app')
    .directive('toDoItem', toDoItem);

    function toDoItem() {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/to-do-item.html'
      }
    }

})()
