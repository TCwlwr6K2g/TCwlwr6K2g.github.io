/* global angular */
(function () {
    angular.module('app').factory('DeckService', DeckService);

    function DeckService() {
        return (function () {
            function Deck(name) {
                this.name = name;
                
                this.cardsImages = null;
                this.cardsTracking = null;
            }
            
            Deck.prototype.setCardImages = function (cards) {
                this.cards = cards;
            };

            return Deck;
        })();
    }
})();

