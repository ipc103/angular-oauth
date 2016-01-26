var example = angular.module("example", ['ui.router', 'satellizer']);

example.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $authProvider.github({
    clientId: '5e528e5da49aaa4fb411'
  });

  $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('success', {
          url: '/success',
          templateUrl: 'templates/success.html',
          controller: 'SuccessController'
        })
    $urlRouterProvider.otherwise('/success');
});

example.controller("LoginController", function($scope, $auth) {

    $scope.login = function(provider) {
      $auth.authenticate(provider)
        .then(function(response){
          debugger;
        })
    };

});

example.controller("SuccessController", function($auth){
  debugger;
})
