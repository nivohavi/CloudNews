'use strict';

// Declare static level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.signin',
  'myApp.signup'
])
    .config([
              '$routeProvider', function($routeProvider) {

        $routeProvider
            .otherwise({redirectTo: '/home'});
      }]);
