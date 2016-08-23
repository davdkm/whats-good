function HomeController($scope, $state) {
  var ctrl = this;

  ctrl.$state = $state
  ctrl.home = function () {
    return $state.current.name === 'home';
  }
}

angular
  .module('app')
  .controller('HomeController', HomeController)
