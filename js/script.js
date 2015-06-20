
var app = angular.module('CodePunch', ['firebase', 'ngRoute'])

$(document).ready({
    
});


app.controller('MainCtrl', function($scope, $firebase) {

    var ref = new Firebase("https://python-dojo.firebaseio.com");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "something");

});

app.config(function($routeProvider) {
    $routeProvider
    // ----------- Landing Page -----------
        .when('/', {
            templateUrl: 'home.html',
            controller: 'IndexCtrl'
        })
        .when('/list', {
            templateUrl: 'list.html',
            controller: 'ListCtrl'
        })
        .when('/game', {
            templateUrl: 'game.html',
            controller: 'GameCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});