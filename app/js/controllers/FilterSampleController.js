'use strict';

// Implementation #2, using the durationsFilter directly,
// without using the $filter service
eventsApp.controller('FilterSampleController',
    function FilterSampleController($scope, durationsFilter){

        $scope.data = {};

        // get the result of the 'durations' service in app/js/filters.js
        // for every possible input, and store on the 'data' model
        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

    }
);


// Implementation #1, relying on the $filter service to get to the 'durations' filter
// eventsApp.controller('FilterSampleController',
// 		     function FilterSampleController($scope, $filter){

// 			 $scope.data = {};

// 			 var durations = $filter('durations');
// 			 $scope.data.duration1 = durations(1);
// 			 $scope.data.duration2 = durations(2);
// 			 $scope.data.duration3 = durations(3);
// 			 $scope.data.duration4 = durations(4);

// 		     }
//  );
