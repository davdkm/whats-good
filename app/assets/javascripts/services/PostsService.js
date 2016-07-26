function PostsService($http) {
  var ctrl = this;

  ctrl.getPosts = function () {
    return $http.get('/posts.json');
  }

  ctrl.getPost = function (id) {
    return $http.get('/posts/' + id + '.json');
  }
}

angular
  .module('app')
  .service('PostsService', PostsService)
