var pingApp = angular.module('pingApp', ['ngRoute', 'pingpongControllers', 'pingpongDirectives', 'pingpongServices'])

pingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/welcome.html',
        controller: 'WelcomeCtrl'
      }).
      when('/:id', {
        templateUrl: 'partials/scorer.html',
        controller: 'ScorerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


