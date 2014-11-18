'user strict';

var companyController = angular.module('companyController', []);

companyController.controller('companyCtrl', function ($scope, $rootScope, $http, $location, $routeParams)
{
    $rootScope.setPageToHistory($location.path());
    $http({
        method: 'GET',
        url: '/company/' + $routeParams.id,
    }).success(function(data) {
        if(data.success)
        {
            $scope.company = data.company;
            $scope.company.takauksenvoimassaolo = moment(new Date($scope.company.takauksenvoimassaolo)).format('L');
        }
        else
        {
            $scope.errorMessage = data.message;
        }
    });
        
    $scope.localTime = function(time)
    {
        var d = new Date(time);
        return moment(d).format('L HH:mm:ss');
    }
    
    $scope.prevPage = function()
    {
        $rootScope.getPrevPage();
        $location.path($rootScope.getPrevPage());
    }
});