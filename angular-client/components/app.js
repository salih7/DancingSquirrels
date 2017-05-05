angular.module('app')
  .directive('app', function() {
    return {
      //scope: {},
      restrict: 'E',
      // controllerAs: 'ctrl',
      // bindToController: true,
      templateUrl: 'templates/app.html'
    };
  });