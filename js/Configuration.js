/* global angular */
(function () {
    angular.module('app').factory('ConfigurationService', ConfigurationService);

    function ConfigurationService() {
        return {
            setVMFromConf: function (vm, conf) {
                vm.wildlingPower = parseInt(conf.wildlings);
                vm.round = parseInt(conf.round);
                vm.greywater = parseInt(conf.greywater);

                vm.tracks.it.positionsText = conf.ironThroneOrder;
                vm.tracks.f.positionsText = conf.fiefdomOrder;
                vm.tracks.kc.positionsText = conf.kingsCourtOrder;

                vm.garrisonsText = conf.garrisons;
                vm.supplyText = conf.supply;
                vm.victoryText = conf.victory;

                vm.tracks.f.token.isUsed = conf.vsbUsed === 'checked';
                vm.tracks.kc.token.isUsed = conf.ravenUsed === 'checked';

                angular.forEach(conf.decks, function (deck, key) {
                    vm.decks[key].cardsImages = conf.decks[key].cardsImages;
                    vm.decks[key].cardsTracking = conf.decks[key].cardsTracking;
                });

                angular.forEach(vm.houses, function (house) {
                    vm.houses[house._name].unitsText = conf.units[house._name];
                    vm.houses[house._name].ordersText = conf.orders[house._name];
                    vm.houses[house._name].ptsText = conf.powertokens[house._name];
                    vm.houses[house._name].cardsImages = conf.housecards[house._name];
                    vm.houses[house._name].cardsTracking = conf.housecardTracking[house._name];
                    vm.houses[house._name].ownedPowerTokens = parseInt(conf.availablePowertokens[house._name]);
                    vm.houses[house._name].maxPowerTokens = parseInt(conf.maxPowertokens);
                });
                
                vm.houseCardsStyle = conf.houseCardsStyle;
            },
            getConfFromVM: function (vm) {
                var conf = {
                    wildlings: vm.wildlingPower,
                    round: vm.round,
                    greywater: vm.greywater,
                    
                    ironThroneOrder: vm.tracks.it.positionsText,
                    fiefdomOrder: vm.tracks.f.positionsText,
                    kingsCourtOrder: vm.tracks.kc.positionsText,

                    garrisons: vm.garrisonsText,
                    supply: vm.supplyText,
                    victory: vm.victoryText
                };

                if (vm.tracks.f.token.isUsed) {
                    conf.vsbUsed = 'checked';
                }

                if (vm.tracks.kc.token.isUsed) {
                    conf.ravenUsed = 'checked';
                }

                conf.decks = vm.decks || {};

                angular.forEach(vm.decks, function (deck, key) {
                    conf.decks[key] = deck;
                });

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
                
                conf.houseCardsStyle = vm.houseCardsStyle;

                return conf;
            }
        };
    }
})();
