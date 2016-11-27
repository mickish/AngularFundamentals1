eventsApp.factory('eventData', function($q, $resource) {

    var eventResource = $resource("/data/event/:id.json", {id: '@id'});

    return {

        //getEvent: function() {
        //    return $resource('/data/event/:id.json', {id:'@id'}).get({id:1});
        //}

        getEvent: function() {
            var deferred = $q.defer();
            eventResource
                .get(
                    {id: 1},
                    function (event) {
                        deferred.resolve(event);
                    },
                    function (response) {
                        deferred.reject(response);
                    });

            return deferred.promise;
        },

        save: function(event) {
            var deferred = $q.defer();
            event.id = 999;
            eventResource.save(event,
                function(response) { deferred.resolve(response); },
                function(response) { deferred.reject(response); }
            );
            return deferred.promise;
        }
    }
});
