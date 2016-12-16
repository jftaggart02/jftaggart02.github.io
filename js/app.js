angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('dinos', {
                url: '/dinos',
                templateUrl: 'templates/dinos.html'
            })
            .state('weapons', {
                url: '/weapons',
                templateUrl: 'templates/weapons.html'
            })
            .state('maps', {
                url: '/maps',
                templateUrl: 'templates/maps.html'
            })
            .state('mods', {
                url: '/mods',
                templateUrl: 'templates/mods.html'
            });

        $urlRouterProvider.otherwise('/home');

    })
    .directive('skrollr', function() {

        function link(scope, element, attrs) {
            var s = skrollr.get();
            s.refresh();
        }

        return {
            restrict: 'EA',
            link: link
        }
    })
    .controller('appCtrl', function($scope){

    });