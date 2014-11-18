'user strict';

var indexController = angular.module('indexController', []);

indexController.controller('indexCtrl', function ($scope, $rootScope, $http, $location)
{
    $rootScope.clearHistory();
    $rootScope.setPageToHistory($location.path());
    $scope.showAlert = false;
    
    $scope.alertBox = function(title, text)
    {
        $scope.alertTitle = title;
        $scope.alertMessage = text;
        $scope.showAlert = true;
    }
    
    $scope.search = function(type)
    {
        switch(type)
        {
            case 'asiakasnumero':
                if($scope.sAsiakasnumero === undefined)
                    $scope.alertBox('Virhe!', 'Asiakasnumero puuttuu!');
                else
                    $location.path('search/asiakasnumero/' + $scope.sAsiakasnumero);
                break;
            case 'yrityksennimi':
                if($scope.sYrityksennimi === undefined)
                    $scope.alertBox('Virhe!', 'Yrityksen nimi puuttuu!');
                else
                    $location.path('search/yrityksennimi/' + $scope.sYrityksennimi);
                break;
            case 'ytunnus':
                if($scope.sYTunnus === undefined)
                    $scope.alertBox('Virhe!', 'Y-Tunnus puuttuu!');
                else
                    $location.path('search/ytunnus/' + $scope.sYTunnus);
                break;
            case 'kasittelija':
                if($scope.sKasittelija === undefined)
                    $scope.alertBox('Virhe!', 'Käsittelijä puuttuu!');
                else
                    $location.path('search/kasittelija/' + $scope.sKasittelija);
                break;
            case 'myyja':
                if($scope.sMyyja === undefined)
                    $scope.alertBox('Virhe!', 'Myyjä puuttuu!');
                else
                    $location.path('search/myyja/' + $scope.sMyyja);
                break;
        }
    }
});