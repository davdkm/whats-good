function PostsService($http) {
  var ctrl = this;

  ctrl.getPosts = function () {
    return $http.get('/posts.json');
  }
}

angular
  .module('app')
  .service('PostsService', PostsService)
