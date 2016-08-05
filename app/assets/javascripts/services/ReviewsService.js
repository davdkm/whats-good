function ReviewsService($http) {
  var ctrl = this;

  ctrl.newReview = function (value, postId, userId) {
    var review = {
      rating: value,
      post_id: postId,
      user_id: userId
    };
    return $http.post('/posts/' + postId + '/reviews.json', review);
  };

  ctrl.editReview = function (value, reviewId, postId) {
    var review = {
      rating: value,
      id: reviewId
    };
    return $http.patch('/posts/' + postId + '/reviews/' + reviewId + '.json', review);
  }
}

angular
  .module('app')
  .service('ReviewsService', ReviewsService);
