(function(sandbox) {
    'use strict';

    var module = sandbox.angular.module('app', []);

    module.controller('AppController', function ($scope, $http) {

        $http.get('data.json').success(function (contributions) {
            $scope.contributions = contributions;
        });

        $scope.showDetailsFor = {};
        $scope.order = {};


        $scope.unstar = function (contribution) {
            contribution.isFavorite = false;
        }

        $scope.toggleDetails = function (contrib) {
            $scope.showDetailsFor[contrib.href] = true;
        };

        $scope.orderBy = function (property) {
            $scope.order.property = property;
            $scope.order.reverse = !$scope.order.reverse;
        };

        $scope.getContributions = function () {
            return $scope.showOnlyFavorites ? $scope.getFavorites() : $scope.contributions;
        };

        $scope.getFavorites = function () {
            return $scope.contributions.filter(function (c) {
                return c.isFavorite;
            });
        };

    });


    module.directive('contribution', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/contribution-tpl.html'
        };
    });

}(this));
