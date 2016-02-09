(function () {
    angular.module('app').factory('GarrisonsService', GarrisonsService);

    function GarrisonsService() {
        return {
            parse: function (text) {
                if (!text)
                    return;

                var garrisons = [];

                var value = text.split('\n');

                for (var i = 0; i < value.length; i += 1) {
                    var valueSplitted = value[i].toLowerCase().split(':');
                    var area = valueSplitted[0].replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');
                    var str = valueSplitted[1];

                    garrisons.push({ area: area, str: str });
                }

                return garrisons;
            }
        };
    }
})();
