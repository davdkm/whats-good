function PostsService($http, $state, Flash) {
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
      ctrl.successAlert();
    })
    .error(function (err) {
      ctrl.errorAlert(err);
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
      ctrl.successAlert();
    })
    .error(function (err) {
      ctrl.errorAlert(err);
    });
    ctrl.title = '';
    ctrl.content = '';
  };

  ctrl.successAlert = function () {
    var message = '<strong>Post Successful</strong>';
    var id = Flash.create('success', message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
  }

  ctrl.errorAlert = function (err) {
    var message = '<strong>Oops!</strong> ' + err.data.error;
    var id = Flash.create('danger', message, 5000, {class: 'custom-class', id: 'custom-id'}, true);
  }
}

angular
  .module('app')
  .service('PostsService', PostsService)
