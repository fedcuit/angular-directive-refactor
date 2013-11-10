angular.module('myApp', [])
.controller('myCtrl',
    ['$scope',
    function($scope) {
      $scope.successMsg = "<strong>Well done!</strong> You successfully read this important alert message.";
      $scope.infoMsg = "<strong>Heads up!</strong> This alert needs your attention, but it's not super important.";
      $scope.warningMsg = "<strong>Warning!</strong> Best check yo self, you're not looking too good.";
      $scope.dangerMsg = "<strong>Oh snap!</strong> Change a few things up and try submitting again.";
    }
    ]).directive('alert', [function() {
        return {
          restrict: 'EA',
          replace: true,
          templateUrl: 'alert.html',
          scope: {
            message: "@",
            type: "@"
          },
          link: function() { }
        };
      }]);

