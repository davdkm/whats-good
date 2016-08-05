function StarRating(ReviewsService, $state) {
  return {
    restrict: 'EA',
    replace: 'true',
    template: [
      '<span ng-mouseleave="reset()">',
        '<i ng-repeat="number in range" ng-mouseenter="enter(number)" ng-click="assign(number)" ng-class="{\'glyphicon glyphicon-star\': number <= val, \'glyphicon glyphicon-star-empty\': number > val}">',
      '</i></span>'
    ].join(''),
    scope: {
      value: '=',
      postId: '=',
      userId: '='
    },
  }
}

angular
  .module('app')
  .directive('starRating', StarRating)
