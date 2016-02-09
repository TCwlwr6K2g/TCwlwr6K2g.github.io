(function () {
    angular.module('app').factory('PTsService', PTsService);

    function PTsService() {
        return {
            parse: function (text) {
                if (!text)
                    return;

                var pts = [];
                var ptsPerAreaArray = text.split('\n');

                angular.forEach(ptsPerAreaArray, function (ptsPerArea) {
                    var area = ptsPerArea.toLowerCase().replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');

                    if (area)
                        pts.push(area);
                });
                
                return pts;
            }
        };
    }
})();
