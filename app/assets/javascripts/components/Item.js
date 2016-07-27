var Item = {
  restrict: 'E',
  templateUrl: 'posts/_item.html',
  bindings: {
    id: '='
  },
  controllerAs: 'item',
  controller: function (PostsService) {
    var ctrl = this;
    
    PostsService.getPost(this.id)
      .then(function (res) {
        ctrl.data = res.data;
      });
  }
}

angular
  .module('app')
  .component('item', Item);
