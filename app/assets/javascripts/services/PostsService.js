function PostsService($http, $state) {
  var ctrl = this;

  ctrl.getPosts = function () {
    return $http.get('/posts.json');
  };

  ctrl.getPost = function (id) {
    return $http.get('/posts/' + id + '.json');
  };

  ctrl.addPost = function (post) {
    var postData = {
      title: post.title,
      content: post.content,
      category_id: post.category
    };
    return $http.post('/posts.json', postData)
    .success(function (res) {
      $state.go('home.post', { id: res.id });
    });
    ctrl.title = '';
    ctrl.content = '';
  };

  ctrl.updatePost = function (id, post) {
    var postData = {
      title: post.title,
      content: post.content,
      category_id: post.category
    };
    return $http.patch('/posts/' + id + '.json', postData)
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
