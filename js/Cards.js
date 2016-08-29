/* global angular */
(function () {
    angular.module('app').factory('CardsService', CardsService);

    function CardsService() {
        var pattern = / src="([^"]*)"/;
        return {
            parse: function (text) {
                if (!text)
                    return;

                var cards = {};
                var count = 0;
                angular.forEach(text.split('\n'), function (card) {

                    var key = null;
                    if (card.indexOf('|') >= 0) {
                        var parts = card.split('|');
                        key = parts[0];
                        card = parts[1];
                    }

                    if (card.indexOf('<img') >= 0) {
                        card = card.match(pattern)[1];
                    }

                    cards[key || count++] = card;
                });
                
                return cards;
            }
        };
    }
})();
