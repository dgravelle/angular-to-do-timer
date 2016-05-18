(function() {
  'use strict';

  angular
    .module('app', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/to-do-list.html',
          controller: 'ToDoController'
        })
        .otherwise({
          redirectTo: '/'
        })
    })


}());
