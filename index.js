angular.module('myApp', [])
.controller('myCtrl',
    ['$scope',
    function($scope) {
      var successMsg = "<strong>Well done!</strong> You successfully read this important alert message.";
      var infoMsg = "<strong>Heads up!</strong> This alert needs your attention, but it's not super important.";
      var warningMsg = "<strong>Warning!</strong> Best check yo self, you're not looking too good.";
      var dangerMsg = "<strong>Oh snap!</strong> Change a few things up and try submitting again.";

      $scope.alerts = [
        {message: successMsg,
          type: 'success'
        },
        {message: infoMsg,
          type: 'info'
        },
        {message: warningMsg,
          type: 'warning'
        },
        {message: dangerMsg,
          type: 'danger'
        },
      ];
    }]).directive('alert', [function() {
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

