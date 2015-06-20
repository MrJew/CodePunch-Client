
var app = angular.module('CodePunch', ['firebase', 'ngRoute'])


$(document).ready(function(){

    var objectives = [
    {"name": "FizzBuzz",
     "description": "Please write a function when given a number is should print \"fizz\" for every number divisible by 3 and \"buzz\" for every number divisible by 5 and \"fizzbuzz\" for every number divisible on both"},
    {"name": "Fibonacci",
     "description" : "Please write a function when given a number will print a list with the fibonacci series up to that number"},
    {"name": "Digits",
     "description" : "Please write a function when given a number will create an array with all digits of that number"},
    {"name" : "Primes",
     "description" : "Please write a function when given a number it will create an array of all prime numbers up to that number"}
    ];

    function getObjective(name, description){
        var objective = "<div class=\"panel-heading\" role=\"tab\" id=\"headingOne\"><h4 class=\"panel-title\"><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">"+name+"</a></h4></div><div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\"><div class=\"panel-body\">"+description+"</div></div>";
        return objective;
    };

    jQuery.each(objectives, function() {
        $("#objectiveContainer").append(getObjective(this["name"],this["description"]));
    });  

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