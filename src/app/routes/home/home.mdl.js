(function () {
  'use strict';

  angular.module('learnApp.home', [
    'ui.router',
    'angular-storage',
    'learnApp.svc.randomArticles'
  ])

  .config(function ($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      templateUrl: 'build/html/routes/home/home.html'
    });
  });
})();
