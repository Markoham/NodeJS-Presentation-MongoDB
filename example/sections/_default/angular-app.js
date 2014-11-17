/* jslint node: true */
'use strict';
var di = require('di');
var angular = require('angular');
require('angular-resource');

var app = angular.module('example', [
    'ngResource',
    require('angular-ui-router')
    ]);
app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('main', {
      url: "/",
      templateUrl: "partials/main.html"
    })
    .state('add', {
      url: "/add",
      templateUrl: "partials/add.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "partials/list.html"
    })
    .state('bigdata', {
      url: "/gigdata",
      templateUrl: "partials/gigdata.html"
    });
});

var uiModules = {
  angular   : [ 'value', angular ],
  app       : [ 'value', app ]
};
uiModules.uiModules = [ 'value', uiModules ];

var injector = new di.Injector([uiModules]);

/* modules browserify */
