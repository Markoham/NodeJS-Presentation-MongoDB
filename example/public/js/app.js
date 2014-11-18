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
      controller: function($scope,$http) {
        $http({
            method: 'GET',
            url: '/api/person',
        }).success(function(data) {
            if(data.persons)
            {
                $scope.persons = data.persons;
                //$scope.successMessage = data.message;
            }
            else
            {
                //$scope.errorMessage = data.message;
            }
        });
          
          $scope.delete = function(person)
          {
              $http({
                  method: 'DELETE',
                  url: '/api/person',
                  data: person,
                  headers: {'Content-Type': 'application/json'}
              }).success(function(data) {
                  if(data.success)
                  {
                    $http({
                        method: 'GET',
                        url: '/api/person',
                    }).success(function(data) {
                        if(data.persons)
                        {
                            $scope.persons = data.persons;
                            //$scope.successMessage = data.message;
                        }
                        else
                        {
                            //$scope.errorMessage = data.message;
                        }
                    });
                  }
                  else
                  {
                      //$scope.errorMessage = data.message;
                  }
              });
          }
      }
    })
    .state('add', {
      url: "/add",
      templateUrl: "/view/add",
      controller: function($scope,$http) {
          
          $scope.add = function(person)
          {
              $http({
                  method: 'POST',
                  url: '/api/person',
                  data: person,
                  headers: {'Content-Type': 'application/json'}
              }).success(function(data) {
                  if(data.success)
                  {
                      
                      //$scope.successMessage = data.message;
                  }
                  else
                  {
                      //$scope.errorMessage = data.message;
                  }
              });
          }
      }
    })
    .state('bigdata', {
      url: "/bigdata",
      templateUrl: "/view/bigdata",
      controller: function($scope,$http) {
          $scope.search = function(q)
          {
              $http({
                  method: 'GET',
                  url: '/api/search/' + q
              }).success(function(data) {
                  $scope.datas = data.data;
              });
          }
      }
    });
});