var Item = {
  restrict: 'E',
  templateUrl: 'home/posts/_item.html',
  bindings: {
    id: '='
  },
  controllerAs: 'item',
  controller: ['PostsService', function (PostsService) {
    var ctrl = this;

    PostsService.getPost(this.id)
      .then(function (res) {
        ctrl.data = res.data;
      });
  }]
}

angular
  .module('app')
  .component('item', Item);
