
var app = angular.module('CodePunch', ['firebase', 'ngRoute'])



$(document).ready({
    
});


app.controller('MainCtrl', function($scope, $firebase) {

    var ref = new Firebase("https://python-dojo.firebaseio.com");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "something");

});



app.controller('QuestionsCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) ,{
        
    }
]);

app.config(function($routeProvider) {
    $routeProvider
    // ----------- Landing Page -----------
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/questions', {
            templateUrl: 'views/questions.html',
            controller: 'QuestionsCtrl'
        })
        .when('/slides', {
            templateUrl: 'views/slides.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});