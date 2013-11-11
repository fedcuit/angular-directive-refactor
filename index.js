angular.module('myApp', [])
.controller('myCtrl',
    ['$scope',
    function($scope) {
      var successMsg = " Well done! You successfully read this important alert message.";
      var infoMsg = " Heads up! This alert needs your attention, but it's not super important.";
      var warningMsg = " Warning! Best check yo self, you're not looking too good.";
      var dangerMsg = " Oh snap! Change a few things up and try submitting again.";

      $scope.alerts = [
        {
          message: successMsg,
          type: 'success'
        },
        {
          message: infoMsg,
          type: 'info'
        },
        {
          message: warningMsg,
          type: 'warning'
        },
        {
          message: dangerMsg,
          type: 'danger'
        }
      ];
      $scope.close = function(index) {
        console.log(index);
        $scope.alerts.splice(index, 1);
      };
    }
    ]).directive('alert', [function() {
        return {
          restrict: 'EA',
          template: '<div class="alert alert-{{type}}"><div ng-bind="message"></div><button type="button" class="close" data-dismiss="alert" aria-hidden="true" ng-click="close()">&times;</button></div>',
          replace: true,
          scope: {
            message: "@",
            type: "@",
            close: "&"
          },
          link: function() { }
        };
      }]);

