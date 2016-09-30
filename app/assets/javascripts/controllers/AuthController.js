function AuthController($scope, $state, Auth, Flash) {
  $scope.login = function () {
    Auth.login($scope.user).then(function () {
      $state.go('home');
      $scope.successAlert();
    }, function (error) {
      $scope.errorAlert(error);
    });
  };

  $scope.register = function () {
    Auth.register($scope.user).then(function successCallback() {
      $state.go('home');
      $scope.successAlert();
    }, function errorCallback(err) {
      $scope.errorAlert(err);
    });
  };

  $scope.successAlert = function () {
      var message = '<strong>Success!</strong>';
      var id = Flash.create('success', message, 5000);
  }

  $scope.errorAlert = function (error) {
      var message = '<strong>Oops!</strong> Something went wrong.';
      var id = Flash.create('danger', message, 5000);
    }
}

AuthController.$inject = ['$scope', '$state', 'Auth', 'Flash'];
angular
  .module('app')
  .controller('AuthController', AuthController);
