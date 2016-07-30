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
    .success(function (res) {
      $state.go('home.post', { id: res.id });
    });
    ctrl.title = '';
    ctrl.content = '';
  };

  ctrl.updatePost = function (id, post) {
    return $http.patch('/posts/' + id + '.json', post)
    .success(function (res) {
      $state.go('home.post', { id: res.id });
    });
    ctrl.title = '';
    ctrl.content = '';
  };
}

angular
  .module('app')
  .service('PostsService', PostsService)
