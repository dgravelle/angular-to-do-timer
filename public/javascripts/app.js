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
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginController'
        })
        .when('/create', {
          templateUrl: 'views/create-account.html',
          controller: 'CreateAccountController'
        })
        .otherwise({
          redirectTo: '/'
        })
    })


}());
