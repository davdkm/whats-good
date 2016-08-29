function CategoriesService($http) {
  var ctrl = this;

  ctrl.getCategories = function () {
    return $http.get('/categories.json');
  }

  ctrl.getCategory = function (id) {
    return $http.get('/categories/' + id + '.json')
  }
}

angular
  .module('app')
  .service('CategoriesService', CategoriesService)
