angular.module('myApp', [])
.controller('myCtrl',
    ['$scope',
    function($scope) {
      $scope.successMsg = "<strong>Well done!</strong> You successfully read this important alert message.";
      $scope.infoMsg = "<strong>Heads up!</strong> This alert needs your attention, but it's not super important.";
      $scope.warningMsg = "";
      $scope.dangerMsg = "";
    }
    ]);

