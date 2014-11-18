'user strict';

var searchCompanyController = angular.module('searchCompanyController', []);

searchCompanyController.controller('searchCompanyCtrl', function ($scope, $rootScope, $http, $location, $routeParams)
{
    $rootScope.setPageToHistory($location.path());
    
    $scope.predicate = '-yritys.name';
    $scope.companys = [];
    $scope.totalPage = [];
    $scope.currentPage = 1;
    $scope.perPage = 5;
    $scope.maxSize = 9;
    $scope.limit = -5;
    $scope.today = new Date();
    
    $scope.compare = function(date1, date2)
    {
        var test = (new Date(date1) < date2);
        return test;
    }
    
    $scope.search = function(type, _search)
    {
        $http({
            method: 'GET',
            url: 'companys' + (type !== undefined ? '/' + type + (_search !== undefined ? '/' + _search : '') : '')
        }).success(function(data) {
            $scope.totalPage = [];
            $scope.companies = data.companies;
            var tot = data.companies.length / $scope.perPage;
            
            if(tot - parseInt(tot) > 0)
                tot += 1 - (tot - parseInt(tot));
            
            for(var i = 1; i <= tot; i++)
            {
                $scope.totalPage.push(i);
            }
        });
    }
    
    $scope.setPage = function(page)
    {
        $scope.currentPage = page;
        if($scope.currentPage < 1)
            $scope.currentPage = 1;
        if($scope.currentPage > $scope.totalPage.length)
            $scope.currentPage = $scope.totalPage.length;
        
        $scope.limit = (($scope.currentPage == ($scope.totalPage.length)) ? (-(($scope.companies.length-1) % $scope.perPage) -1) : -5);
    }
        
    switch($routeParams.type)
    {
        case 'asiakasnumero':
            $scope.search('asiakasnumero', $routeParams.search);
            break;
        case 'yrityksennimi':
            $scope.search('yrityksennimi', $routeParams.search);
            break;
        case 'ytunnus':
            $scope.search('ytunnus', $routeParams.search);
            break;
        case 'kasittelija':
            $scope.search('kasittelija', $routeParams.search);
            break;
        case 'myyja':
            $scope.search('myyja', $routeParams.search);
            break;
        case 'myohassa':
            $scope.search('myohassa', undefined);
            break;
        default:
            $scope.search(undefined, undefined);
            break;
    }
    
    $scope.prevPage = function()
    {
        $rootScope.getPrevPage();
        $location.path($rootScope.getPrevPage());
    }
});