
var app = angular.module('dojoApp', ['firebase', 'ngRoute'])



$(document).ready({
    
});


app.controller('MainCtrl', function($scope, $firebase) {

    $scope.firstPlus = function() {
        $scope.dojo.team1 = parseInt($scope.dojo.team1) + 1;
    };

    $scope.firstMinus = function() {
        $scope.dojo.team1 = parseInt($scope.dojo.team1) - 1;
    };

    $scope.secondPlus = function() {
        $scope.dojo.team2 = parseInt($scope.dojo.team2) + 1;
    };

    $scope.secondMinus = function() {
        $scope.dojo.team2 = parseInt($scope.dojo.team2) - 1;
    };

    $scope.thirdPlus = function() {
        $scope.dojo.team3 = parseInt($scope.dojo.team3) + 1;
    };

    $scope.thirdMinus = function() {
        $scope.dojo.team3 = parseInt($scope.dojo.team3) - 1;
    };

    $scope.forthPlus = function() {
        $scope.dojo.team4 = parseInt($scope.dojo.team4) + 1;
    };

    $scope.forthMinus = function() {
        $scope.dojo.team4 = parseInt($scope.dojo.team4) - 1;
    };

    $scope.fifthPlus = function() {
        $scope.dojo.team5 = parseInt($scope.dojo.team5) + 1;
    };

    $scope.fifthMinus = function() {
        $scope.dojo.team5 = parseInt($scope.dojo.team5) - 1;
    };

    $scope.sixthPlus = function() {
        $scope.dojo.team6 = parseInt($scope.dojo.team6) + 1;
    };

    $scope.sixthMinus = function() {
        $scope.dojo.team6 = parseInt($scope.dojo.team6) - 1;
    };

    $scope.seventhPlus = function() {
        $scope.dojo.team7 = parseInt($scope.dojo.team7) + 1;
    };

    $scope.seventhMinus = function() {
        $scope.dojo.team7 = parseInt($scope.dojo.team7) - 1;
    };

    $scope.eighthPlus = function() {
        $scope.dojo.team8 = parseInt($scope.dojo.team8) + 1;
    };

    $scope.eighthMinus = function() {
        $scope.dojo.team8 = parseInt($scope.dojo.team8) - 1;
    };



    var ref = new Firebase("https://python-dojo.firebaseio.com");
    var sync = $firebase(ref);
    var syncObject = sync.$asObject();
    syncObject.$bindTo($scope, "dojo");

});



app.controller('QuestionsCtrl', ['$scope', '$location', '$anchorScroll',
    function($scope, $location, $anchorScroll) {
        $scope.scrollTo = function(locationName) {

            $location.hash(locationName);
            $anchorScroll();
        };

        $scope.hello = function(answer) {
            if (answer == 'Hello World') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.gcd = function(answer) {
            if (answer == 34) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.hailstone = function(answer) {
            if (answer == 112) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.flatten = function(answer) {
            if (answer == '[6, 4, 3, 8, 3, 8, 2, 5]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.largestprime = function(answer) {
            if (answer == 6857) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.evenfibonacci = function(answer) {
            if (answer == 4613732) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.multiples = function(answer) {
            if (answer == 233168) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.oddword = function(answer) {
            if (answer == 'what,si,the;gninaem,of:efil.') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.heronian = function(answer) {
            if (answer == 517) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.largestpalindrome = function(answer) {
            if (answer == 906609) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.smallestmultiple = function(answer) {
            if (answer == 232792560) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.reversewords = function(answer) {
            if (answer == 'Bub! you, Hey') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.pi = function(answer) {
            if (answer == '3.141592653589793238462643383279502884197169399375') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.zigzag = function(answer) {
            if (answer == '[24, 42, 60, 78, 96]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.harshad = function(answer) {
            if (answer == '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.zeckendorf = function(answer) {
            if (answer == 101010) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.fibonacci = function(answer) {
            if (answer == '[1, 1, 2, 4, 8, 16, 32, 64, 127, 253, 504, 1004, 2000, 3984, 7936]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.pernicious = function(answer) {
            if (answer == '[3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 31, 33, 34, 35, 36]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.caeser = function(answer) {
            if (answer == 'Esp bftnv mczhy qzi ufxapo zgpc esp wlkj ozrd') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.subsequenctial = function(answer) {
            if (answer == '[3, 5, 6, -2, -1, 4]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.nonsquares = function(answer) {
            if (answer == '[2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.digits = function(answer) {
            if (answer == 85744333) {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.factorials = function(answer) {
            if (answer == '[0, 1, 2, 4, 10, 34, 154, 874, 5914, 46234, 409114]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.abc = function(answer) {
            if (answer == 'true') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.happy = function(answer) {
            if (answer == '[1, 7, 10, 13, 19, 23, 28, 31]') {
                sweetAlert({
                    title: "Good job!",
                    text: "You have cracked this code! Go for another one...",
                    imageUrl: "thumbs-up.jpg"
                })
            } else {
                sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
            }
        };

        $scope.semiprime = function(answer) {
                    if (answer == '[4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49, 51, 55, 57, 58, 62, 65, 69, 74, 77, 82, 85, 86, 87, 91, 93, 94, 95]') {
                        sweetAlert({
                            title: "Good job!",
                            text: "You have cracked this code! Go for another one...",
                            imageUrl: "thumbs-up.jpg"
                        })
                    } else {
                        sweetAlert("Oops...", "Looks like you have a code in your bug!", "error");
                    }
                };

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