(function () {
    angular.module('app').factory('OrdersService', OrdersService);

    OrdersService.$inject = ['MapService']

    function OrdersService(Map) {
        
        var orderNames = {
            'power-1': 'CP',
            'power-2': 'CP*',
            'march-0': 'M-1',
            'march-1': 'M+0',
            'march-2': 'M+1',
            'raid-1': 'R',
            'raid-2': 'R*',
            'defend-1': 'D',
            'defend-2': 'D+2',
            'support-1': 'S',
            'support-2': 'S*'
        };
        
        return {
            parse: function (text) {
                if (!text)
                    return;

                var orders = [];

                var ordersPerAreaArray = text
                    .replace(/ cp(\n|$)/ig, ' power-1$1')
                    .replace(/ cp\*(\n|$)/ig, ' power-2$1')
                    .replace(/ m-1(\n|$)/ig, ' march-0$1')
                    .replace(/ m\+0(\n|$)/ig, ' march-1$1')
                    .replace(/ m(\+1)?\*?(\n|$)/ig, ' march-2$2')
                    .replace(/ r(aid)?(\n|$)/ig, ' raid-1$2')
                    .replace(/ r(aid)?\*(\n|$)/ig, ' raid-2$2')
                    .replace(/ d(efend)?(\+1)?(\n|$)/ig, ' defend-1$3')
                    .replace(/ d(efend)?(\+2)?\*?(\n|$)/ig, ' defend-2$3')
                    .replace(/ s(upport)?(\n|$)/ig, ' support-1$2')
                    .replace(/ s(upport)?(\+1)?\*?(\n|$)/ig, ' support-2$3')
                    .split('\n')

                angular.forEach(ordersPerAreaArray, function (ordersPerArea) {
                    var valueSplitted = ordersPerArea.split(': ');
                    var area = valueSplitted[0].toLowerCase().replace(/ - port$/, '-harbor').replace(/([' ]|^the )/g, '');
                    var order = valueSplitted[1];

                    if (order)
                        orders.push({ order: order, area: area });
                });

                return orders;
            },
            toText: function(orders) {
                if (!orders || orders.length == 0)
                    return '';
                
                return _.reduce(orders, function(text, token) {
                    if (token == null || token.area == null || token.area.trim().length == 0)
                        return text;
                        
                    var area = Map[token.area];
                    return text + (text.length > 0 ? '\n' : '') + area.name + ': ' + (token.order ? orderNames[token.order] : '');
                }, '');
            }
        };
    }
})();
