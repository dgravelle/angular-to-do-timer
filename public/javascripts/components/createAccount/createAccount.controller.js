(function () {

  angular
    .module('app')
    .controller('CreateAccountController', CreateAccountController)

    function CreateAccountController($scope, $http) {

      $scope.form = {};

      $scope.form.handleCreateAccount = function(isValid) {
          if (isValid) {
            alert('success');

          }
      }
    }
})()
