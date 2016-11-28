'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout){

        //// angular set timeout
        //var promise = $timeout(function(){
        //    $scope.name = "John Doe";
        //}, 3000);

        // javascript set timeout
        // The name won't display until you write something in the text box
        // because this change occurs outside the angular world, and angular
        // doesn't know about it.
         setTimeout(function(){
             $scope.name = "John Doe";
         }, 3000);

        // Cancels the promise created above
        $scope.cancel = function(){
            $timeout.cancel(promise);
        };

    }
);
