'user strict';

var addCompanyController = angular.module('addCompanyController', []);

addCompanyController.controller('addCompanyCtrl', function ($scope, $rootScope, $http, $location)
{
    $scope.master = {};
    $scope.newcompany = {};
    $scope.newcompany.yritys = {}
    $scope.newcompany.yhteyshenkilo1 = {};
    $scope.newcompany.yhteyshenkilo2 = {};
    $scope.newcompany.s3 = {};
    $scope.newcompany.hinnasto = {};
    $scope.newcompany.takaaja1 = {};
    $scope.newcompany.takaaja2 = {};
    $scope.newcompany.takaaja3 = {};
    $scope.newcompany.takaaja4 = {};
    $scope.newcompany.takauksenvoimassaolo = moment(new Date()).format('L');

    $scope.add = function(newcompany)
    {
        if(newcompany !== undefined)
        {
            var parts = newcompany.takauksenvoimassaolo.split('.');
            var orginalDate = newcompany.takauksenvoimassaolo;
            newcompany.takauksenvoimassaolo = new Date(parseInt(parts[2]), parseInt(parts[1])-1, parseInt(parts[0]));

            $http({
                method: 'POST',
                url: '/company/add',
                data: newcompany,
                headers: {'Content-Type': 'application/json'}
            }).success(function(data) {
                if(data.success)
                {
                    newcompany.takauksenvoimassaolo = orginalDate;
                    $scope.successMessage = data.message;
                }
                else
                {
                    $scope.errorMessage = data.message;
                }
            });
        }
    }
    
    $scope.isUnchanged = function(newcompany)
    {
        return angular.equals(newcompany, $scope.master);
    }
    
    $scope.prevPage = function()
    {
        $location.path($rootScope.getPrevPage());
    }
});