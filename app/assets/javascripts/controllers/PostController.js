function PostController(post) {
  var ctrl = this;

  ctrl.data = post.data
}

angular
  .module('app')
  .controller('PostController', PostController)
