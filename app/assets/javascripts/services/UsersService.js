function UsersService($http) {
  var ctrl = this;

  ctrl.getUser = function (id) {
    return $http.get('/users/' + id + '.json');
  };
}

UsersService.$inject = ['$http'];
angular
  .module('app')
  .service('UsersService', UsersService);
