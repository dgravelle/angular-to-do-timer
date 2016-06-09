(function () {

  angular
    .module('app')
    .directive('toDoItem', toDoItem);

    function toDoItem($interval) {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/to-do-item.html',
        scope: {
          task: '=task',
          updateTask: '=updateTask',
          deleteTask: '=deleteTask'
        },
        link: function(scope, element, attrs) {
          var totalSeconds = 0;
          var timerID;

          if (scope.task.timeElapsed === null) {
            scope.secondsDisplay = '--';
            scope.minutesDisplay = '--';
          }
          else {
            totalSeconds = scope.task.timeElapsed;
            scope.secondsDisplay = scrub(totalSeconds % 60);
            scope.minutesDisplay = scrub(parseInt(totalSeconds / 60));
          }

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
            if (time.length < 2) {
              return time = '0' + time;
            }
            else {
              return time;
            }
          }

          scope.pauseTimer = function() {
            scope.task.timeElapsed = totalSeconds;
            scope.updateTask(scope.task)
            $interval.cancel(timerID);
          }

          function clearTimer() {
            $interval.cancel(timerID);
            totalSeconds = 0;
            secondsDisplay = "--";
            minutesDisplay = "--";
          }

        }
      }
    }

})()
