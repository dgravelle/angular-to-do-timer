(function () {

  angular
    .module('app')
    .directive('toDoItem', toDoItem);

    function toDoItem($interval) {
      return {
        restrict: 'E',
        templateUrl: 'views/partials/to-do-item.html',
        scope: {
          taskId: '=id'
        },
        link: function(scope, element, attrs) {
          var totalSeconds = 0;

          scope.startTimer = function() {
            $interval(incrementTimer, 1000)
          }

          function incrementTimer() {
            console.log('going');
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
        }
      }
    }

})()
