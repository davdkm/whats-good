function HomeController(posts) {
  var ctrl = this;

  ctrl.posts = posts.data;
}

angular
  .module('app')
  .controller('HomeController', HomeController)
