/* global angular */
(function () {
    angular.module('app').factory('CardsService', CardsService);

    function CardsService() {
        var pattern = / src="([^"]*)"/;
        return {
            parse: function (text) {
                if (!text)
                    return;

                var cards = [];

                angular.forEach(text.split('\n'), function (card) {
                    if (card.indexOf('<img') >= 0) {
                        card = card.match(pattern)[1];
                    }

                    cards.push(card);
                });
                
                return cards;
            }
        };
    }
})();
