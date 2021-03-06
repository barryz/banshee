/**
 * Created by Panda on 16/1/13.
 */
var app = angular.module('banshee.layout', [])
  /*@ngInject*/
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('/', '/admin/team')
      .when('', '/admin/team')
      .otherwise('/admin/team');

    $stateProvider.state('banshee', {
      url: '',
      abstract: true,
      views: {
        '@': {
          templateUrl: 'modules/layout/index.html',
          controller: 'MainCtrl'
        },
        'header@banshee': {
          templateUrl: 'modules/layout/header.html',
          controller: 'HeaderCtrl'
        },
        'navigation@banshee': {
          templateUrl: 'modules/layout/navigation.html',
          controller: 'NavigationCtrl'
        },
        'footer@banshee': {
          templateUrl: 'modules/layout/footer.html',
          controller: 'FooterCtrl'
        }
      }
    });
  })
  .controller('MainCtrl', require('./MainCtrl'))
  .controller('HeaderCtrl', require('./HeaderCtrl'))
  .controller('FooterCtrl', require('./FooterCtrl'))
  .controller('NavigationCtrl', require('./NavigationCtrl'));

module.exports = app.name;
