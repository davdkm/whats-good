angular
  .module('app', [
    'ui.router',
    'templates',
    'Devise'
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
        .state('home.post', {
          url: '/posts/:id',
          templateUrl: 'home/posts/_post.html',
          controller: 'PostController as post',
          resolve: {
            post: function (PostsService, $stateParams) {
              return PostsService.getPost($stateParams.id)
            }
          }
        })
        .state('home.user', {
          url: '/users/:id',
          templateUrl: 'home/users/_user.html',
          controller: 'UserController as user',
          resolve: {
            user: function (UsersService, $stateParams) {
              return UsersService.getUser($stateParams.id);
            }
          }
        })
        .state('home.login', {
          url: '/login',
          templateUrl: 'home/auth/_login.html',
          controller: 'AuthController'
        });

      $urlRouterProvider.otherwise('home');
    }
  ])
