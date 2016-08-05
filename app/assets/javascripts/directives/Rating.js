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
      post: '=',
      userId: '='
    },
    link: function (scope, elem, attrs) {
      scope.ratingConfig = {
        max: 5
      }
      var maxRange = angular.isDefined(attrs.max) ? scope.$eval(attrs.max) : scope.ratingConfig.max;

      scope.range = [];
      for(var i = 1; i <= maxRange; i++ ) {
        scope.range.push(i);
      }

      scope.$watch('value', function(newVal, oldVal) {
        if (newVal !== oldVal) {
          scope.val = newVal;
        }
      });

      scope.assign = function(value) {
        if (scope.userId && scope.userId.id) {
          scope.value = value;
          if (scope.post.user_post_review.id && scope.post.user_post_review.rating) {
            ReviewsService.editReview(scope.val, scope.post.user_post_review.id, scope.post.id)
          } else {
            ReviewsService.newReview(scope.val, scope.post.id, scope.userId.id);
          }
        } else {
          $state.go('home.login');
        }
      }

      scope.enter = function(value) {
        scope.val = value;
      }

      scope.reset = function(value) {
        if (scope.value === undefined) {
          scope.value = null;
        }
        scope.val = angular.copy(scope.value);
      }
      scope.reset();

    },
  }
}

angular
  .module('app')
  .directive('starRating', StarRating)
