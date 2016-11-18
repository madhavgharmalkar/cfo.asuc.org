app.service('dataService', function($http) {
    this.headers = [];
    this.data = [];

    var that = this;

    $http.get('data/data.csv').then(function(response){
        var parseResult = $.csv.toArrays(response.data);
        that.headers = parseResult[0];
        that.data = parseResult.slice(1);
    });
});
