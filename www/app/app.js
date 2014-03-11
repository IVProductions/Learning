
var Learning = angular.module("Learning", ["ngRoute"]).run(function() {
    FastClick.attach(document.body);
}); //add ngRoute ($routeProvider) as a dependency for the app, and init fastclick on body


<!--Routing-->
Learning.config(function ($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app/partials/splash.html",
        controller:"mainCtrl"
    }).when("/main",{
            templateUrl:"app/partials/main.html",
            controller:"mainCtrl"
        }).when("/splash",{
            templateUrl:"app/partials/splash.html",
            controller:"mainCtrl"
        }).when("/word",{
            templateUrl:"app/partials/word.html",
            controller:"wordCtrl"
        }).otherwise({
            redirectTo:"/"
        })
});