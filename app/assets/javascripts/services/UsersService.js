function UsersService($http) {
  var ctrl = this;

  ctrl.getUser = function (id) {
    return $http.get('/users/' + id + '.json');
  };
}

angular
  .module('app')
  .service('UsersService', UsersService);
