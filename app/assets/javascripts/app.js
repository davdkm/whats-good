angular
  .module('app', [
    'ui.router',
    'templates',
    'Devise',
    'ngMessages',
    'ngFlash',
    'angularUtils.directives.dirPagination'
  ])
  .config([
    '$httpProvider',
    '$stateProvider',
    '$urlRouterProvider',
    function ($httpProvider, $stateProvider, $urlRouterProvider) {
      $httpProvider
        .defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'HomeController as home'
        })
        .state('home.category', {
          url: '/categories/:id',
          templateUrl: 'home/categories/index.html',
          controller: 'CategoriesController as categories',
          resolve: {
            category: ['CategoriesService', '$stateParams', function (CategoriesService, $stateParams) {
              return CategoriesService.getCategory($stateParams.id);
            }
          }]
        })
        .state('home.posts', {
          url: '/posts',
          templateUrl: 'home/posts/index.html',
          controller: 'PostsController as posts',
          resolve: {
            posts: ['PostsService', function (PostsService) {
              return PostsService.getPosts();
            }],
            categories: ['CategoriesService', function (CategoriesService) {
              return CategoriesService.getCategories();
            }]
          }
        })
        .state('home.post', {
          url: '/posts/:id',
          templateUrl: 'home/posts/_post.html',
          controller: 'PostController as post',
          resolve: {
            post: ['PostsService', '$stateParams', function (PostsService, $stateParams) {
              return PostsService.getPost($stateParams.id)
            }],
            categories: function () {}
          }
        })
        .state('home.newPost', {
          url: '/posts/new',
          templateUrl: 'home/posts/_form.html',
          controller: 'PostController as post',
          resolve: {
            post: function () {},
            categories: ['CategoriesService', function (CategoriesService) {
              return CategoriesService.getCategories();
            }]
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
            post: ['PostsService', '$stateParams', function (PostsService, $stateParams) {
              return PostsService.getPost($stateParams.id);
            }],
            categories: ['CategoriesService', function (CategoriesService) {
              return CategoriesService.getCategories();
            }]
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
            user: ['UsersService', '$stateParams', function (UsersService, $stateParams) {
              return UsersService.getUser($stateParams.id);
            }]
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
