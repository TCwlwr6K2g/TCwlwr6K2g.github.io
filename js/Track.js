(function () {
    angular.module('app').factory('TrackService', TrackService);

    function TrackService() {
        return (function () {
            function Track(name, token) {
                this.name = name;
                this.token = token;
                
                this.positionsText = null;
                this.positions = [];
            }
            return Track;
        })();
    }
})();
