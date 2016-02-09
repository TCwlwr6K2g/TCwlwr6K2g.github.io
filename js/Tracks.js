(function () {
    angular.module('app').factory('TracksService', TracksService);

    function TracksService() {
        return {
            parse: function (text) {
                if (!text)
                    return;

                var trackPositions = [];
                var positions = text.split('\n');

                angular.forEach(positions, function (houseName) {
                    trackPositions.push(houseName.toLowerCase());
                });

                return trackPositions;
            }
        };
    }
})();
