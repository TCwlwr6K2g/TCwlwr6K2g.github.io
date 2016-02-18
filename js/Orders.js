(function () {
    angular.module('app').factory('OrdersService', OrdersService);

    OrdersService.$inject = ['MapService']

    function OrdersService(Map) {

        var ordersDict = {
            'power-1': { preferedName: 'CP', max: 2, patternCheck: / cp(\n|$)/ig, patternReplace: ' power-1$1' },
            'power-2': { preferedName: 'CP*', max: 1, patternCheck: / cp\*(\n|$)/ig, patternReplace: ' power-2$1' },
            'march-0': { preferedName: 'M-1', max: 1, patternCheck: / m-1(\n|$)/ig, patternReplace: ' march-0$1' },
            'march-1': { preferedName: 'M+0', max: 1, patternCheck: / m\+0(\n|$)/ig, patternReplace: ' march-1$1' },
            'march-2': { preferedName: 'M+1', max: 1, patternCheck: / m(\+1)?\*?(\n|$)/ig, patternReplace: ' march-2$2' },
            'raid-1': { preferedName: 'R', max: 2, patternCheck: / r(aid)?(\n|$)/ig, patternReplace: ' raid-1$2' },
            'raid-2': { preferedName: 'R*', max: 1, patternCheck: / r(aid)?\*(\n|$)/ig, patternReplace: ' raid-2$2' },
            'defend-1': { preferedName: 'D', max: 2, patternCheck: / d(efend)?(\+1)?(\n|$)/ig, patternReplace: ' defend-1$3' },
            'defend-2': { preferedName: 'D+2', max: 1, patternCheck: / d(efend)?(\+2)?\*?(\n|$)/ig, patternReplace: ' defend-2$3' },
            'support-1': { preferedName: 'S', max: 2, patternCheck: / s(upport)?(\n|$)/ig, patternReplace: ' support-1$2' },
            'support-2': { preferedName: 'S*', max: 1, patternCheck: / s(upport)?(\+1)?\*?(\n|$)/ig, patternReplace: ' support-2$3' }
        };

        return {
            dict: ordersDict,
            parse: function (text) {
                if (!text)
                    return;

                var orders = [];

                angular.forEach(ordersDict, function (order) {
                    text = text.replace(order.patternCheck, order.patternReplace);
                });
                
                var ordersPerAreaArray = text.split('\n')

                angular.forEach(ordersPerAreaArray, function (ordersPerArea) {
                    var valueSplitted = ordersPerArea.split(': ');
                    var area = valueSplitted[0].toLowerCase().replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');
                    var order = valueSplitted[1];

                    if (order)
                        orders.push({ order: order, area: area });
                });

                return orders;
            },
            toText: function (orders) {
                if (!orders || orders.length == 0)
                    return '';

                return _.reduce(orders, function (text, token) {
                    if (token == null || token.area == null || token.area.trim().length == 0)
                        return text;

                    var area = Map[token.area];
                    return text + (text.length > 0 ? '\n' : '') + area.name + ': ' + (token.order ? ordersDict[token.order].preferedName : '');
                }, '');
            }
        };
    }
})();
