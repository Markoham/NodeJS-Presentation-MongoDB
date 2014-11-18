'user strict';

var editCompanyController = angular.module('editCompanyController', []);

editCompanyController.controller('editCompanyCtrl', function ($scope, $rootScope, $http, $location, $routeParams)
{
    $scope.master = {};
    $rootScope.setPageToHistory($location.path());
    $http({
        method: 'GET',
        url: '/company/' + $routeParams.id,
    }).success(function(data) {
        if(data.success)
        {
            $scope.company = data.company;
            $scope.company.takauksenvoimassaolo = moment(new Date($scope.company.takauksenvoimassaolo)).format('L');
            $scope.master = angular.copy(data.company);
        }
        else
        {
            $scope.errorMessage = data.message;
        }
    });
    
    $scope.update = function(company)
    {
        if(company !== undefined)
        {
            var parts = company.takauksenvoimassaolo.split('.');
            var orginalDate = company.takauksenvoimassaolo;
            company.takauksenvoimassaolo = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]));

            $http({
                method: 'PUT',
                url: '/company/edit/' + $routeParams.id,
                data: company,
                headers: {'Content-Type': 'application/json'}
            }).success(function(data) {
                if(data.success)
                {
                    company.takauksenvoimassaolo = orginalDate;
                    $scope.successMessage = data.message;
                }
                else
                {
                    $scope.errorMessage = data.message;
                }
            });
        }
    }
    
    $scope.remove = function()
    {
        $location.path('company/remove/' + $routeParams.id);
    }
    
    $scope.isUnchanged = function(company)
    {
        return angular.equals(company, $scope.master);
    }
    
    $scope.prevPage = function()
    {
        $rootScope.getPrevPage();
        $location.path($rootScope.getPrevPage());
    }
});