function PostController(post, Auth) {
  var ctrl = this;

  ctrl.data = post.data;

  var currentUser;

  Auth.currentUser().then(function (user) {
    ctrl.currentUser = user
  })
}

angular
  .module('app')
  .controller('PostController', PostController)
