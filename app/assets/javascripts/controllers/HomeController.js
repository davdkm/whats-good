function HomeController(posts, $state) {
  var ctrl = this;

  ctrl.posts = posts.data;
  
  ctrl.$state = $state
  ctrl.home = function () {
    return $state.current.name === 'home';
  }
}

angular
  .module('app')
  .controller('HomeController', HomeController)
