function CategoriesController(category) {
  var ctrl = this;

  ctrl.category = category.data;
}

CategoriesController.$inject = ['category'];
angular
  .module('app')
  .controller('CategoriesController', CategoriesController)
