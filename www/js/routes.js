angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.businessprofile', {
    url: '/business-profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/business-profile.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.userprofile', {
    url: '/user-profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/user-profile.html',
        controller: 'settingsCtrl'
      }
    }
  })
  
  .state('menu.usersignup', {
    url: '/signup',
    views: {
      'side-menu21': {
        templateUrl: 'templates/user-views/user-signup.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.adminaccountmanagement', {
    url: '/admin-manage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/admin-views/admin-account-management.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.admincreateaccount', {
    url: '/admin-create-account',
    views: {
      'side-menu21': {
        templateUrl: 'templates/admin-views/admin-create-new.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.providermainview', {
    url: '/provider-main-view',
    views: {
      'side-menu21': {
        templateUrl: 'templates/provider-views/provider-home.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.providercreatenew', {
    url: '/provider-create-new',
    views: {
      'side-menu21': {
        templateUrl: 'templates/provider-views/provider-create-new.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.providerpropertyedit', {
    url: '/provider-property-edit',
    views: {
      'side-menu21': {
        templateUrl: 'templates/provider-views/provider-property-edit.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.adminmodifyexisting', {
    url: '/admin-modify-existing',
    views: {
      'side-menu21': {
        templateUrl: 'templates/admin-views/admin-modify-existing.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.adminmodifyuser', {
    url: '/admin-modify-user',
    views: {
      'side-menu21': {
        templateUrl: 'templates/admin-views/admin-modify-user.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.userlogin', {
    url: '/login',
    views: {
      'side-menu21': {
        templateUrl: 'templates/user-views/user-login.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')



});
