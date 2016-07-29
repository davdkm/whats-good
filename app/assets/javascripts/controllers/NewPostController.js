function NewPostController($scope, PostsService) {
  var ctrl = $scope;
  ctrl.post = {};

  ctrl.createPost = function () {
    PostsService.addPost(ctrl.post);
  };
}

angular
  .module('app')
  .controller('NewPostController', NewPostController);
