var app = angular.module("data-viewer", ["ngRoute", "datatables", "datatables.scroller"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/home.html",
        controller: "homeCtrl"
    })
    .when("/about", {
        templateUrl : "templates/about.html",
        controller: "aboutCtrl"
    });
});

app.controller("homeCtrl", function($scope, $rootScope, dataService, DTOptionsBuilder, $window) {
    $scope.dataService = dataService;
    $rootScope.pageTitle = "Home";

    $scope.dtOptions = DTOptionsBuilder.newOptions()
        .withScroller()
        .withOption('deferRender', true)
        .withOption('scrollY', 300);
});

app.controller("aboutCtrl", function($scope, $rootScope) {
    $rootScope.pageTitle = "About";
});

app.controller("headerCtrl", function($scope, $rootScope) {
    $rootScope.pageTitle = "Home";
})
