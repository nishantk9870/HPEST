// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.aboutus', {
        url: '/aboutus',
        views: {
          'menuContent': {
            templateUrl: 'templates/aboutus.html'
          }
        }
      })
      .state('app.contactus', {
        url: '/contactus',
        views: {
          'menuContent': {
            templateUrl: 'templates/contactus.html',
            controller: 'contactusCtrl'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl',
            cache: false
          }
        }
      })
      .state('app.ants', {
        url: '/ants',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/ants.html'
          }
        }
      })
      .state('app.bats', {
        url: '/bats',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/bats.html',
            controller: 'batsCtrl'
          }
        }
      })
      .state('app.bedBugs', {
        url: '/bedBugs',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/bedBugs.html',
            controller: 'bedBugsCtrl'
          }
        }
      })
      .state('app.boxElderBugs', {
        url: '/boxElderBugs',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/boxElderBugs.html',
            controller: 'boxElderBugsCtrl'
          }
        }
      })
      .state('app.fruitFlies', {
        url: '/fruitFlies',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/fruitFlies.html',
            controller: 'fruitFliesCtrl'
          }
        }
      })
      .state('app.mosquitoes', {
        url: '/mosquitoes',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/mosquitoes.html',
            controller: 'mosquitoesCtrl'
          }
        }
      })
      .state('app.residentialPestControl', {
        url: '/residentialPestControl',
        views: {
          'menuContent': {
            templateUrl: 'templates/Services/residentialPestControl.html',
          }
        }
      })
      .state('app.commercialPestControl', {
        url: '/commercialPestControl',
        views: {
          'menuContent': {
            templateUrl: 'templates/Services/commercialPestControl.html',
          }
        }
      })
      .state('app.environmentallyFriendly', {
        url: '/environmentallyFriendly',
        views: {
          'menuContent': {
            templateUrl: 'templates/Services/environmentallyFriendly.html',
          }
        }
      })
      .state('app.flies', {
        url: '/flies',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/flies.html',
            controller: 'fliesCtrl'
          }
        }
      })
      .state('app.millipedes', {
        url: '/millipedes',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/millipedes.html',
            controller: 'millipedesCtrl'
          }
        }
      })
      .state('app.snakes', {
        url: '/snakes',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/snakes.html',
            controller: 'snakesCtrl'
          }
        }
      })
      .state('app.cockroach', {
        url: '/cockroach',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/cockroach.html'
          }
        }
      })
      .state('app.fleas', {
        url: '/fleas',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/fleas.html',
            controller: 'fleasCtrl'
          }
        }
      })
      .state('app.mites', {
        url: '/mites',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/mites.html',
            controller: 'mitesCtrl'
          }
        }
      })
      .state('app.stinkBugs', {
        url: '/stinkBugs',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/stinkBugs.html',
            controller: 'stinkBugsCtrl'
          }
        }
      })
      .state('app.lizards', {
        url: '/lizards',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/lizards.html'
          }
        }
      })
      .state('app.termites', {
        url: '/termites',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/termites.html',
            controller: 'termitesCtrl'
          }
        }
      })
      .state('app.earwing', {
        url: '/earwing',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/earwing.html',
            controller: 'earwingCtrl'
          }
        }
      })
      .state('app.gnats', {
        url: '/gnats',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/gnats.html',
            controller: 'gnatsCtrl'
          }
        }
      })
      .state('app.rats', {
        url: '/rats',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/rats.html',
            controller: 'ratsCtrl'
          }
        }
      })
      .state('app.weevils', {
        url: '/weevils',
        views: {
          'menuContent': {
            templateUrl: 'templates/pests/weevils.html',
            controller: 'weevilsCtrl'
          }
        }
      })
      .state('app.bookNow', {
        url: '/bookNow',
        views: {
          'menuContent': {
            templateUrl: 'templates/bookNow.html',
            controller: 'bookNowCtrl'
          }
        }
      })
      .state('app.freeInspection',{
        url:'/freeInspection',
        views:{
          'menuContent': {
            templateUrl: 'templates/freeInspection.html',
            controller: 'freeInspectionCtrl'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
