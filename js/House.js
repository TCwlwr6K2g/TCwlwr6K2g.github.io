(function () {
    angular.module('app').factory('HouseService', HouseService);

    function HouseService() {
        return (function () {
            function House(name) {
                this._name = name.toLowerCase();
                this.name = name;

                this.ownedPowerTokens = 5;
                this.maxPowerTokens = 20;

                this.units = [];
                this.unitsText = null;

                this.orders = [];
                this.ordersText = null;

                this.ptsText = null;
                this.cardsImages = null;
                this.cardsTracking = null;
            }
            House.prototype.leftPowertokens = function () {
                return this.maxPowerTokens - this.ownedPowerTokens;
            };
            House.prototype.spendPowerToken = function () {
                if (this.ownedPowerTokens <= 0)
                    return;

                this.ownedPowerTokens--;
            };
            House.prototype.gainPowerToken = function (pts) {
                pts = pts || 1;

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
                var house = this;
                house.handledPTs = [];

                angular.forEach(areas, function (area) {
                    house.handledPTs.push('powertoken-' + house._name + ' pos-' + area);
                });
            }
            
            House.prototype.setCardImages = function (cards) {
                this.cards = cards;
            }

            return House;
        })();
    }
})();

