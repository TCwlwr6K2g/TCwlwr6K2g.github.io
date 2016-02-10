(function() {
    angular.module('app').factory('MapService', MapService);

    function MapService() {
        var map = {
            'castleblack': {
                top: 11,
                left: 46,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'winterfell': {
                top: 31,
                left: 33,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'winterfell-harbor': {
                top: 17,
                left: 21,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'bayofice'
            },
            'karhold': {
                top: 19,
                left: 58,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'stonyshore': {
                top: 29,
                left: 22,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'whiteharbor': {
                top: 28,
                left: 44,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'whiteharbor-harbor': {
                top: 36,
                left: 46,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'narrowsea'
            },
            'widowswatch': {
                top: 28,
                left: 54,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'flintsfinger': {
                top: 39,
                left: 18,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'greywaterwatch': {
                top: 38,
                left: 26,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'moatcailin': {
                top: 42,
                left: 33,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'dragonstone': {
                top: 60,
                left: 67,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'dragonstone-harbor': {
                top: 65,
                left: 71,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'shipbreakerbay'
            },
            'kingswood': {
                top: 71,
                left: 54,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'bayofice': {
                top: 32,
                left: 5,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'shiveringsea': {
                top: 27,
                left: 64,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'narrowsea': {
                top: 41,
                left: 70,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'shipbreakerbay': {
                top: 74,
                left: 70,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'sunsetsea': {
                top: 67.5,
                left: 7,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'goldensound': {
                top: 61,
                left: 8,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'lannisport': {
                top: 60,
                left: 20,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 2
            },
            'lannisport-harbor': {
                top: 59,
                left: 14,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'goldensound'
            },
            'stoneysept': {
                top: 59,
                left: 32,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'harrenhal': {
                top: 58,
                left: 40,
                crown: 1,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'riverrun': {
                top: 53,
                left: 31,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'searoadmarches': {
                top: 66,
                left: 19,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'blackwater': {
                top: 66,
                left: 39,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 2
            },
            'reach': {
                top: 74,
                left: 29,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'seagard': {
                top: 48,
                left: 30,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'ironmansbay': {
                top: 53,
                left: 7,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'pyke': {
                top: 47,
                left: 12,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'pyke-harbor': {
                top: 47,
                left: 18,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'ironmansbay'
            },
            'highgarden': {
                top: 77,
                left: 20,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 2
            },
            'dornishmarches': {
                top: 79,
                left: 29,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'oldtown': {
                top: 84,
                left: 16,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 0
            },
            'oldtown-harbor': {
                top: 81,
                left: 10,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'redwynestraights'
            },
            'redwynestraights': {
                top: 87,
                left: 6,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'sunspear': {
                top: 89,
                left: 58,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'sunspear-harbor': {
                top: 90,
                left: 67,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'eastsummersea'
            },
            'saltshore': {
                top: 92,
                left: 43,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'seaofdorne': {
                top: 85,
                left: 60,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'blackwaterbay': {
                top: 64,
                left: 58,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'eastsummersea': {
                top: 96,
                left: 69,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'westsummersea': {
                top: 74,
                left: 5,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'arbor': {
                top: 94,
                left: 9,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'boneway': {
                top: 81,
                left: 41,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'princespass': {
                top: 84,
                left: 29,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 2
            },
            'yronwood': {
                top: 88,
                left: 40,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'stormsend': {
                top: 77,
                left: 53,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'stormsend-harbor': {
                top: 77,
                left: 60,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'shipbreakerbay'
            },
            'starfall': {
                top: 92,
                left: 32,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 1
            },
            'stoneyshore': {
                top: 32,
                left: 18,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'twins': {
                top: 47,
                left: 38,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'fingers': {
                top: 44,
                left: 51,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'mountainsofthemoon': {
                top: 48,
                left: 57,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'eyrie': {
                top: 53,
                left: 56,
                crown: 1,
                castle: 1,
                stronghold: 0,
                barrel: 1
            },
            'crackclawpoint': {
                top: 60,
                left: 51,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'kingslanding': {
                top: 67,
                left: 48,
                crown: 2,
                castle: 0,
                stronghold: 1,
                barrel: 0
            },
            'threetowers': {
                top: 88,
                left: 22,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            }
        };

        return map;
    }
})();
