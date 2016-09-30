function UserController(user) {
  var ctrl = this;

  ctrl.data = user.data;
}

UserController.$inject = ['user'];
angular
  .module('app')
  .controller('UserController', UserController)
