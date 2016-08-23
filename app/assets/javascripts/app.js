angular
  .module('app', [
    'ui.router',
    'templates',
    'Devise',
    'ngMessages'
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
            },
            categories: function (CategoriesService) {
              return CategoriesService.getCategories();
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
            },
            categories: function () {}
          }
        })
        .state('home.newPost', {
          url: '/posts/new',
          templateUrl: 'home/posts/_form.html',
          controller: 'PostController as post',
          resolve: {
            post: function () {},
            categories: function (CategoriesService) {
              return CategoriesService.getCategories();
            }
          },
          onEnter: ['$state', 'Auth', function ($state, Auth) {
            if (Auth.isAuthenticated() === false) {
              $state.go('home.login');
            }
          }]
        })
        .state('home.editPost', {
          url: '/posts/:id/edit',
          templateUrl: 'home/posts/_form.html',
          controller: 'PostController as post',
          resolve: {
            post: function (PostsService, $stateParams) {
              return PostsService.getPost($stateParams.id);
            },
            categories: function (CategoriesService) {
              return CategoriesService.getCategories();
            }
          },
          onEnter: ['$state', 'Auth', function ($state, Auth) {
            if (Auth.isAuthenticated() === false) {
              $state.go('home.login');
            }
          }]
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
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function ($state, Auth) {
            Auth.currentUser().then(function () {
              $state.go('home');
            })
          }]
        })
        .state('home.register', {
          url: '/register',
          templateUrl: 'home/auth/_register.html',
          controller: 'AuthController',
          onEnter: ['$state', 'Auth', function ($state, Auth) {
            Auth.currentUser().then(function () {
              $state.go('home');
            })
          }]
        });

      $urlRouterProvider.otherwise('home');
    }
  ])
