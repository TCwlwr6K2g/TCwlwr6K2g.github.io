/* global angular */
/* global _ */
(function () {
    angular.module('app').factory('DeckService', DeckService);

    function DeckService() {
        return (function () {
            function Deck(name) {
                this.name = name;
                
                this.cardsImages = null;
                this.cardsTracking = null;
            }
            
            Deck.prototype.setCards = function (cards) {
                this.cards = cards;
            };

            Deck.prototype.getBGGRoll = function () {
                var cardsTracking = this.cardsTracking;
                var exp = '1custom';
                var allKeys = _(this.cards)
                    .map(function(card, key) { return key; })
                    .filter(function(key) { 
                        return !(key in cardsTracking) || !cardsTracking[key];
                    })
                    .value();
                
                exp += allKeys.length;
                exp += '{' + allKeys.join(';') + '}';

                var updateMapMessage = '\nYou may copy the text below to paste in the thread:';
                prompt(updateMapMessage, exp);
            };

            return Deck;
        })();
    }
})();

