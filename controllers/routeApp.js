angular.module('app').config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'views/home.html'
    })
        .when("/page1", {
           templateUrl: 'views/page1.html'
        })
        .when("/page2", {
           templateUrl: 'views/page2.html'
        })
        .when("/page3", {
           templateUrl: 'views/page3.html'
        })
        .otherwise({
            templateUrl: 'views/pageNotFound.html'
        });// if page not found
});