function ReviewsService($http) {
  var ctrl = this;

  ctrl.newReview = function (value, postId, userId) {
    var review = {
      rating: value,
      post_id: postId,
      user_id: userId
    };
    return $http.post('/posts/' + postId + '/reviews.json', review)
  };
}

angular
  .module('app')
  .service('ReviewsService', ReviewsService);
