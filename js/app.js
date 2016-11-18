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

app.controller("homeCtrl", function($scope, $rootScope, dataService, DTOptionsBuilder, $window, infoService) {
    $scope.dataService = dataService;
    $rootScope.pageTitle = "Home";

    $scope.row = {};

    $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withScroller()
    .withOption('deferRender', true)
    .withOption('rowCallback', rowCallback)
    .withOption('scrollY', 300);


    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        $scope.$apply(function() {
            $('td', nRow).unbind('click');

            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    $scope.row.name = aData[0];
                    $scope.row.description = infoService.data[aData[0]] || 'Sorry, No information available';
                    // console.log(aData[0]);
                })
            });

        });

        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)

        // return nRow;
    }

});

app.controller("aboutCtrl", function($scope, $rootScope) {
    $rootScope.pageTitle = "About";
});

app.controller("headerCtrl", function($scope, $rootScope) {
    $rootScope.pageTitle = "Home";
})
