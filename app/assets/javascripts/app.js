angular
  .module('app', [
    'ui.router',
    'templates'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'HomeController as home',
          resolve: {
            posts: function (PostsService) {
              return PostsService.getPosts();
            }
          }
        })
        .state('post', {
          url: '/posts/:id',
          templateUrl: 'posts/_post.html',
          controller: 'PostController as post',
          resolve: {
            post: function (PostsService, $stateParams) {
              return PostsService.getPost($stateParams.id)
            }
          }
        });

      $urlRouterProvider.otherwise('home');
    }
  ])
