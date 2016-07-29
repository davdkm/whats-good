function PostsService($http, $state) {
  var ctrl = this;

  ctrl.getPosts = function () {
    return $http.get('/posts.json');
  };

  ctrl.getPost = function (id) {
    return $http.get('/posts/' + id + '.json');
  };

  ctrl.addPost = function (post) {
    return $http.post('/posts.json', post)
    .then(function (res) {
      $state.go('home.post', {id: res.data.id});
    });
  }
}

angular
  .module('app')
  .service('PostsService', PostsService)
