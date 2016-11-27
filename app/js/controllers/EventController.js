'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.sortorder = 'name';

        // We pass a callback to EventDataClassic.js
        //$scope.event = eventData.getEvent( function(event) {
        //    $scope.event = event;
        //});

        // EventData.js returns a promise we can use directly
        $scope.event = eventData.getEvent();
        console.log( "event is a promise:" );
        console.log( $scope.event );

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
