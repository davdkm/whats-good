function PostsController(posts, categories, $filter) {
  var ctrl = this;

  ctrl.posts = posts.data;
  ctrl.categories = categories.data;
  ctrl.filter = {};
  ctrl.filterByCategory = filterByCategory;

  function filterByCategory(post) {
    return ctrl.filter[post.category.name] || noFilter(ctrl.filter);
  };

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
}

PostsController.$inject = ['posts', 'categories', '$filter'];
angular
  .module('app')
  .controller('PostsController', PostsController)
