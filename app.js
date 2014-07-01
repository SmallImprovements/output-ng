(function(sandbox) {
    'use strict';

    sandbox.angular.module('app', [])
    .controller('AppController', AppController);

    function AppController($scope) {
        $scope.movies = [
            {name: 'From Dusk till Dawn'},
        ]
    }


}(this));
