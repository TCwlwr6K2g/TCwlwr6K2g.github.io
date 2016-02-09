(function () {
    angular.module('app').factory('TrackTokenService', TrackTokenService);

    function TrackTokenService() {
        return (function () {
            function TrackToken(name, className, isUsable) {
                this.name = name;
                this.className = className;
                this.isUsable = isUsable;
                this.isUsed = false;
            }
            TrackToken.prototype.invert = function (area) {
                this.isUsed = !this.isUsed;
            }
            return TrackToken;
        })();
    }
})();



