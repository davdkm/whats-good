function PostController(post, Auth, PostsService, $stateParams, categories, Flash) {
  var ctrl = this;

  if (post) {
    ctrl.data = post.data;
  }

  if (categories) {
    ctrl.categories = categories.data;
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
    } else if (!$stateParams.id) {
      PostsService.addPost(ctrl.data)
    } else {
      var message = "Oops, you can't do that!";
      var id = Flash.create('danger', message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
    }
  }
}

angular
  .module('app')
  .controller('PostController', PostController)
