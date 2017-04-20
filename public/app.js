angular.module('myApp', ['ui.router'])
    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('jane', {
                url: '/jane',
                template: '<jane></jane>',
                component: 'jane'
            })
            .state('bob', {
                url: '/bob',
                template: '<bob></bob>',
                component: 'bob'
            });
        $urlRouterProvider.otherwise('/');
    })
