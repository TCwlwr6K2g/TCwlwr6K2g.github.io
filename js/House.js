/* global angular */
(function () {
    angular.module('app').factory('HouseService', HouseService);

    function HouseService() {
        return (function () {
            function House(name, capital) {
                this._name = name.toLowerCase();
                this.name = name;
                this.capital = capital;

                this.ownedPowerTokens = 5;
                this.maxPowerTokens = 20;

                this.units = [];
                this.unitsText = null;

                this.orders = [];
                this.ordersText = null;

                this.consolidatedAreas = [];
                this.ptsText = null;
                
                this.cardsImages = null;
                this.cardsTracking = null;
            }
            House.prototype.leftPowertokens = function () {
                var countConsolidatedAreas = (this.consolidatedAreas && this.consolidatedAreas.length) || 0;
                
                return this.maxPowerTokens - this.ownedPowerTokens -countConsolidatedAreas;
            };
            House.prototype.spendPowerToken = function () {
                if (this.ownedPowerTokens <= 0)
                    return;

                this.ownedPowerTokens--;
            };
            House.prototype.gainPowerToken = function (pts) {
                if (pts <= 0)
                    return;
                    
                this.ownedPowerTokens = Math.min(this.maxPowerTokens, this.ownedPowerTokens + pts);
            };

            House.prototype.setUnits = function (units) {
                var house = this;
                house.units = [];

                angular.forEach(units, function (unit) {
                    house.units.push({area: unit.area, unit: unit.unit.toLowerCase()});
                });
            };

            House.prototype.setOrders = function (orders) {
                var house = this;
                house.orders = [];

                angular.forEach(orders, function (order) {
                    house.orders.push({area: order.area, order: order.order.toLowerCase()});
                });
            };

            House.prototype.setPTs = function (areas) {
                this.consolidatedAreas = areas;
            };
            
            House.prototype.setCardImages = function (cards) {
                this.cards = cards;
            };

            return House;
        })();
    }
})();

