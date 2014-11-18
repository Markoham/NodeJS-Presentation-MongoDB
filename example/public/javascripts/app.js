'user strict';
moment.locale('fi');

var crmApp = angular.module('crmApp', ['mm.foundation', 'angularPikaday', 'ngRoute', 'indexController', 'searchCompanyController', 'companyController', 'addCompanyController', 'editCompanyController', 'removeCompanyController']).run(['$http', '$rootScope', function($http, $rootScope)
{
    $rootScope.pageHistory = [];
    
    $rootScope.setPageToHistory = function(page)
    {
        if($rootScope.pageHistory[($rootScope.pageHistory.length - 1)] !== page)
        {
            $rootScope.pageHistory.push(page);
        }
    }
    
    $rootScope.getPrevPage = function()
    {
        if($rootScope.pageHistory.length < 1)
            return "/";
        
        return $rootScope.pageHistory.pop();
    }
    
    $rootScope.clearHistory = function()
    {
        $rootScope.pageHistory = [];
    }
}]);

crmApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'index',
                controller: 'indexCtrl'
            }).
            when('/search', {
                templateUrl: 'search',
                controller: 'searchCompanyCtrl'
            }).
            when('/search/:type/:search?', {
                templateUrl: 'search',
                controller: 'searchCompanyCtrl'
            }).
            when('/company/add', {
                templateUrl: 'company/add',
                controller: 'addCompanyCtrl'
            }).
            when('/company/edit/:id', {
                templateUrl: 'company/edit',
                controller: 'editCompanyCtrl'
            }).
            when('/company/remove/:id', {
                templateUrl: 'company/remove',
                controller: 'removeCompanyCtrl'
            }).
            when('/company/:id', {
                templateUrl: 'company',
                controller: 'companyCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);