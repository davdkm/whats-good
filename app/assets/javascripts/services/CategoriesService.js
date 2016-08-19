function CategoriesService($http) {
  var ctrl = this;

  ctrl.getCategories = function () {
    return $http.get('/categories.json');
  }
}

angular
  .module('app')
  .service('CategoriesService', CategoriesService)
