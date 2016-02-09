(function () {
    angular.module('app').controller('MainController', MainController);

    MainController.$inject = ['$scope', '$window',
        'ConfigurationService',
        'HouseService', 'TrackService', 'TrackTokenService',
        'GarrisonsService', 'OrdersService', 'UnitsService', 'TracksService', 'PTsService', 'CardsService', 'MarkersService'];

    function MainController($scope, $window,
        Configuration,
        House, Track, TrackToken,
        Garrisons, Orders, Units, Tracks, PTs, Cards, Markers) {

        var vm = this;

        vm.showUnits = true;
        vm.showOrders = true;
        vm.showPowerTokens = true;

        vm.round = 1;
        vm.wildlingPower = 2;
        vm.garrisons = [];

        vm.increaseWildlingPower = increaseWildlingPower;
        vm.increaseRound = increaseRound;

        initialize();
        initializeWatchers();

        readConfigFromUrl();

        function initialize() {
            vm.houses = {
                baratheon: new House('Baratheon'),
                greyjoy: new House('Greyjoy'),
                lannister: new House('Lannister'),
                martell: new House('Martell'),
                stark: new House('Stark'),
                tyrell: new House('Tyrell'),
            };

            vm.trackTokens = {
                IT: new TrackToken('Iron Throne', 'throne', false),
                vsb: new TrackToken('Valyrian Steel Blade', 'fiefdom', true),
                raven: new TrackToken('Raven', 'court', true),
            };

            vm.tracks = {
                it: new Track('Iron Throne', vm.trackTokens.IT),
                f: new Track('Fiefdoms', vm.trackTokens.vsb),
                kc: new Track('King\'s Court', vm.trackTokens.raven),
            };
        }

        function initializeWatchers() {
            angular.forEach(vm.houses, function (house) {
                $scope.$watch(
                    function () { return house.unitsText; },
                    function () {
                        house.setUnits(Units.parse(house.unitsText));
                        updateHash();
                    });

                $scope.$watch(
                    function () { return house.ordersText; },
                    function () {
                        house.setOrders(Orders.parse(house.ordersText));
                        updateHash();
                    });

                $scope.$watch(
                    function () { return house.ptsText; },
                    function () {
                        house.setPTs(PTs.parse(house.ptsText));
                        updateHash();
                    });

                $scope.$watch(
                    function () { return house.cardsImages; },
                    function () {
                        house.setCardImages(Cards.parse(house.cardsImages));
                        updateHash();
                    });
            });

            angular.forEach(vm.tracks, function (track) {
                $scope.$watch(
                    function () { return track.positionsText; },
                    function () {
                        track.positions = Tracks.parse(track.positionsText);
                        updateHash();
                    });
            });

            $scope.$watch(
                function () { return vm.garrisonsText; },
                function () {
                    vm.garrisons = Garrisons.parse(vm.garrisonsText);
                    updateHash();
                });

            $scope.$watch(
                function () { return vm.supplyText; },
                function () {
                    vm.supply = Markers.parse(vm.supplyText);
                    updateHash();
                });

            $scope.$watch(
                function () { return vm.victoryText; },
                function () {
                    vm.victory = Markers.parse(vm.victoryText);
                    updateHash();
                });
        }

        function readConfigFromUrl() {
            var hash = location.hash;
            if (hash.indexOf('#') === 0) {
                hash = hash.substr(1);
            }
            if (hash.length > 0) {
                var conf;
                try {
                    // try to see if we already have JSON (from older versions of the link)
                    conf = JSON.parse(decodeURIComponent(hash));

                } catch (e) {
                    // nope, lets do the decode and decompress routine
                    conf = JSON.parse(LZString.decompress(Base64.urlSafeDecode(hash)));
                }

                Configuration.setVMFromConf(vm, conf);
            } else {
                throw 'No Conf in hash';
            }
        }

        function increaseWildlingPower() {
            if (vm.wildlingPower < 12) {
                vm.wildlingPower += 2;
            } else {
                vm.wildlingPower = 0;
            }
        }

        function increaseRound() {
            if (vm.round < 10) {
                vm.round++;
            }
        }

        function updateHash() {
            var hash = Base64.urlSafeEncode(LZString.compress(JSON.stringify(Configuration.getConfFromVM(vm))));
            location.hash = hash;
            setShortLink(location.href);
        }

        function setShortLink(href) {
            var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
                str = '',
                charCnt = 20,
                uri;
                
            for (var i = 0; i < charCnt; i += 1) {
                str += characters[Math.floor(Math.random() * characters.length)];
            }
            
            uri = 'http://tinyurl.com/create.php?source=indexpage&url=' + encodeURIComponent(href) + '&alias=' + str;
            var img = angular.element('<img src="' + uri + '" style="height: 1px; width: 1px; position: absolute; z-index: -999; opacity: 0;" />');
            var body = angular.element($window.document.body);
            body.append(img);
            
            vm.shortLink = 'http://tinyurl.com/' + str;
        }
    }

})();




