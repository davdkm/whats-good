function UserController(user) {
  var ctrl = this;

  ctrl.data = user.data;
}

angular
  .module('app')
  .controller('UserController', UserController)
