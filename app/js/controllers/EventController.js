'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $anchorScroll, eventData) {

        $scope.sortorder = 'name';

        // We pass a callback to EventDataClassic.js
        //$scope.event = eventData.getEvent( function(event) {
        //    $scope.event = event;
        //});

        // EventDataPromise.js returns a promise that the view can use directly
        //$scope.event = eventData.getEvent();

        // This style installs callbacks on the promise
        $scope.event = eventData.getEvent();
        $scope.event.then(
            function(event) {console.log(event); },
            function(response) {console.log(response); }
        );

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);
