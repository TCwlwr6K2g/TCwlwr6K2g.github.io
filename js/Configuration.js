(function () {
    angular.module('app').factory('ConfigurationService', ConfigurationService);

    function ConfigurationService() {
        return {
            setVMFromConf: function (vm, conf) {
                vm.wildlingPower = parseInt(conf.wildlings);
                vm.round = parseInt(conf.round);

                vm.tracks.it.positionsText = conf.ironThroneOrder;
                vm.tracks.f.positionsText = conf.fiefdomOrder;
                vm.tracks.kc.positionsText = conf.kingsCourtOrder;

                vm.garrisonsText = conf.garrisons;
                vm.supplyText = conf.supply;
                vm.victoryText = conf.victory;

                vm.tracks.f.token.isUsed = conf.vsbUsed === 'checked';
                vm.tracks.kc.token.isUsed = conf.ravenUsed === 'checked';

                angular.forEach(vm.houses, function (house) {
                    vm.houses[house._name].unitsText = conf.units[house._name];
                    vm.houses[house._name].ordersText = conf.orders[house._name];
                    vm.houses[house._name].ptsText = conf.powertokens[house._name];
                    vm.houses[house._name].cardsImages = conf.housecards[house._name];
                    vm.houses[house._name].cardsTracking = conf.housecardTracking[house._name];
                    vm.houses[house._name].ownedPowerTokens = parseInt(conf.availablePowertokens[house._name]);
                    vm.houses[house._name].maxPowerTokens = parseInt(conf.maxPowertokens);
                });
            },
            getConfFromVM: function (vm) {
                var conf = {
                    wildlings: vm.wildlingPower,
                    round: vm.round,

                    ironThroneOrder: vm.tracks.it.positionsText,
                    fiefdomOrder: vm.tracks.f.positionsText,
                    kingsCourtOrder: vm.tracks.kc.positionsText,

                    garrisons: vm.garrisonsText,
                    supply: vm.supplyText,
                    victory: vm.victoryText,
                };

                if (vm.tracks.f.token.isUsed) {
                    conf.vsbUsed = 'checked';
                }

                if (vm.tracks.kc.token.isUsed) {
                    conf.ravenUsed = 'checked';
                }

                conf.units = {};
                conf.orders = {};
                conf.powertokens = {};
                conf.housecards = {};
                conf.housecardTracking = {};
                conf.availablePowertokens = {};
                conf.maxPowertokens = {};

                angular.forEach(vm.houses, function (house) {
                    conf.units[house._name] = vm.houses[house._name].unitsText;
                    conf.orders[house._name] = vm.houses[house._name].ordersText;
                    conf.powertokens[house._name] = vm.houses[house._name].ptsText;
                    conf.housecards[house._name] = vm.houses[house._name].cardsImages;
                    conf.housecardTracking[house._name] = vm.houses[house._name].cardsTracking;
                    conf.availablePowertokens[house._name] = vm.houses[house._name].ownedPowerTokens;
                    conf.maxPowertokens = vm.houses[house._name].maxPowerTokens;
                });

                return conf;
            }
        }
    }
})();
