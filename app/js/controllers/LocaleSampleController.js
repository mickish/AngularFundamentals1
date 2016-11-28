'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale){

        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
        $scope.myShortFormat = $locale.DATETIME_FORMATS.shortDate;

        /*
           fullDate: "EEEE, MMMM d, y"
           longDate: "MMMM d, y"
             medium: "MMM d, y h:mm:ss a"
         mediumDate: "MMM d, y"
         mediumTime: "h:mm:ss a"
              short: "M/d/yy h:mm a"
          shortDate: "M/d/yy"
          shortTime: "h:mm a"
         */
        console.log($locale);

        // demo for overriding exception handler
        //throw {message: 'demo Overriding exception handler: error message'}
    }
);
