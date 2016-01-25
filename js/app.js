var example = angular.module("example", ['ui.router']);

example.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        })
        .state('secure', {
            url: '/secure',
            templateUrl: 'templates/secure.html',
            controller: 'SecureController'
        });
    $urlRouterProvider.otherwise('/login');
});

example.controller("LoginController", function($scope) {

    $scope.login = function() {
        window.location.href = "https://github.com/login/oauth/authorize?client_id=" + "5e528e5da49aaa4fb411"
    }

});

example.controller("SecureController", function($scope) {
    debugger;
    $scope.accessToken = JSON.parse(window.localStorage.getItem("github")).oauth.access_token;

});
