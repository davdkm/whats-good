function CategoriesController(category) {
  var ctrl = this;

  ctrl.category = category.data;
}

angular
  .module('app')
  .controller('CategoriesController', CategoriesController)
