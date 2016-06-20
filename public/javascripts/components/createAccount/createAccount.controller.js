(function () {

  angular
    .module('app')
    .controller('CreateAccountController', CreateAccountController)

    function CreateAccountController($scope, $http) {

      $scope.form = {};

      $scope.handleCreateAccount = function(isValid) {
          if (isValid) {
            // alert('success');
            console.log($scope.form);
            $http
              .post('/users', $scope.form)
              .then(data => {
                console.log(data);
              })
          }
      }
    }
})()
