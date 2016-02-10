(function () {
    angular.module('app').factory('UnitsService', UnitsService);

    function UnitsService() {
        return {
            parse: function (text) {
                if (!text)
                    return;

                var houseUnits = [];

                var unitsPerAreaArray = text
                    .replace(/ (routed-)?kn(,|\n|$)/ig, ' $1knight$2')
                    .replace(/ (routed-)?fm(,|\n|$)/ig, ' $1footman$2')
                    .replace(/ (routed-)?se(,|\n|$)/ig, ' $1siege$2')
                    .replace(/ (routed-)?sh(,|\n|$)/ig, ' $1ship$2')
                    .split('\n')

                angular.forEach(unitsPerAreaArray, function (unitsPerArea) {
                    var valueSplitted = unitsPerArea.split(': ');
                    var area = valueSplitted[0].toLowerCase().replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');
                    
                    if (valueSplitted[1] && valueSplitted[1].trim().length > 0) {                     
                        var units = valueSplitted[1].split(', ');

                        angular.forEach(units, function (unit) {
                            houseUnits.push({ unit: unit, area: area });
                        });
                    }
                });

                return houseUnits;
            }
        };
    }
})();
