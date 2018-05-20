(function () {
    'use strict';
    var injectParams = ['$scope'];
  
    function MenuController($scope) {      
    }
  
    MenuController.$inject = MenuController;
    angular.module('starter.controllers').controller('MenuController', MenuController);
  }());
  