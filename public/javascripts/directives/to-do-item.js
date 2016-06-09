(function () {

  angular
    .module('app')
    .directive('toDoItem', toDoItem);

    function toDoItem($interval) {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/to-do-item.html',
        // scope: {
        //   taskId: '=id'
        // },
        link: function(scope, element, attrs) {
          var totalSeconds = 0;
          var timerID;

          scope.secondsDisplay = '00';
          scope.minutesDisplay = '00';

          scope.startTimer = function() {
            timerID = $interval(incrementTimer, 1000);
          }

          function incrementTimer() {
            ++totalSeconds;
            scope.secondsDisplay = scrub(totalSeconds % 60);
            scope.minutesDisplay = scrub(parseInt(totalSeconds / 60));
          }

          function scrub(time) {
            time = '' + time;
            if ( time.length < 2) {
              return time = '0' + time;
            }
            else {
              return time;
            }
          }

           scope.pauseTimer = function() {
            $interval.cancel(timerID);
          }

          function clearTimer() {
            $interval.cancel(timerID);
            totalSeconds = 0;
            secondsDisplay = "00";
            minutesDisplay = "00";
          }

        }
      }
    }

})()
