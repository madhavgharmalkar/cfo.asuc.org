app.service('infoService', function($http) {
    this.data = {};

    var that = this;

    $http.get('data/info.json').then(function(response){
        that.data = response.data;
    });
});
