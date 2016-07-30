function PostController(post, Auth, PostsService, $stateParams) {
  var ctrl = this;

  if (post) {
    ctrl.data = post.data;
  }

  var currentUser;

  Auth.currentUser().then(function (user) {
    ctrl.currentUser = user
  })

  ctrl.editPost = function () {
    if (ctrl.currentUser.id === ctrl.data.author.id) {
      return true;
    } else {
      return false;
    }
  }

  ctrl.save = function () {
    if ($stateParams.id && ctrl.editPost()) {
      PostsService.updatePost($stateParams.id, ctrl.data);
    } else {
      PostsService.addPost(ctrl.data)
    }
  }
}

angular
  .module('app')
  .controller('PostController', PostController)
