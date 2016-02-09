(function () {
    angular.module('app').factory('MarkersService', MarkersService);

    function MarkersService() {
        return {
            parse: function (text) {
                if (!text)
                    return;

                var supply = [];

                var value = text.split('\n');

                for (var i = 0; i < value.length; i += 1) {
                    var valueSplitted = value[i].toLowerCase().split(':');
                    var house = valueSplitted[0].replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');
                    var count = valueSplitted[1];

                    supply.push({ house: house, count: parseInt(count) });
                }

                return supply;
            }
        };
    }
})();
