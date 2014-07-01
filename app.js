(function(sandbox) {
    'use strict';

    var module = sandbox.angular.module('app', []);

    module.controller('AppController', function ($scope, $http) {

        $http.get('data.json').success(function (contributions) {
            $scope.contributions = contributions;
        });

        $scope.showDetailsFor = {};
        $scope.order = {};

        $scope.star = function (contribution) {
            $scope.favorites.push(contribution);
            contribution.isFavorite = true;
        };

        $scope.unstar = function (contribution) {
            $scope.favorites.splice($scope.favorites.indexOf(contribution), 1);
            contribution.isFavorite = false;
        }

        $scope.toggleDetails = function (contrib) {
            $scope.showDetailsFor[contrib.href] = !$scope.showDetailsFor[contrib.href]
        };

        $scope.orderBy = function (property) {
            $scope.order.property = property;
            $scope.order.reverse = !$scope.order.reverse;
        };

        // sort

        $scope.favorites = [];

    });




    module.directive('contribution', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/contribution-tpl.html',
            link : function (scope, el, attrs) {
            }
        };
    });

}(this));