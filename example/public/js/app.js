'user strict';

var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "/view/main",
      controller: function($scope) {
      }
    })
    .state('list', {
      url: "/list",
      templateUrl: "/view/list",
      controller: function($scope) {
        
      }
    })
    .state('add', {
      url: "/add",
      templateUrl: "/view/add",
      controller: function($scope) {
      }
    })
    .state('bigdata', {
      url: "/bigdata",
      templateUrl: "/view/bigdata",
      controller: function($scope) {
      }
    });
});