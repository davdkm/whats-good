function HomeController(posts, categories, $scope, $state, $filter) {
  var ctrl = this;

  ctrl.posts = posts.data;
  ctrl.categories = categories.data;
  ctrl.filter = {};
  ctrl.filterByCategory = filterByCategory;

  ctrl.$state = $state
  ctrl.home = function () {
    return $state.current.name === 'home';
  }

  function filterByCategory(post) {
    return ctrl.filter[post.category.name] || noFilter(ctrl.filter);
  };

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
}

angular
  .module('app')
  .controller('HomeController', HomeController)
