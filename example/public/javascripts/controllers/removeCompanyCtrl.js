'user strict';

var removeCompanyController = angular.module('removeCompanyController', []);

removeCompanyController.controller('removeCompanyCtrl', function ($scope, $rootScope, $timeout, $http, $location, $routeParams)
{
    $http({
        method: 'GET',
        url: '/company/' + $routeParams.id,
    }).success(function(data) {
        if(data.success)
        {
            $scope.company = data.company;
        }
        else
        {
            $scope.errorMessage = data.message;
        }
    });
    
    $scope.remove = function()
    {
        $http({
            method: 'DELETE',
            url: '/company/remove/' + $routeParams.id
        }).success(function(data) {
            if(data.success)
            {
                $scope.successMessage = data.message;
                $timeout(function() { $location.path('/'); }, 2000);
            }
            else
            {
                $scope.errorMessage = data.message;
            }
        });
    }
    
    $scope.prevPage = function()
    {
        $location.path($rootScope.getPrevPage());
    }
});