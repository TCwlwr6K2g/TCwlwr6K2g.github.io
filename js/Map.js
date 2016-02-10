(function() {
    angular.module('app').factory('MapService', MapService);

    function MapService() {
        var map = {
            'castleblack': {
                name: 'Castle Black',
                top: 11,
                left: 46,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'winterfell': {
                name: 'Winterfell',
                top: 31,
                left: 33,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'winterfell-harbor': {
                name: 'Winterfell - Port',
                top: 17,
                left: 21,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'bayofice'
            },
            'karhold': {
                name: 'Karhold',
                top: 19,
                left: 58,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'stonyshore': {
                name: 'The Stony Shore',
                top: 29,
                left: 22,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'whiteharbor': {
                name: 'White Harbor',
                top: 28,
                left: 44,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'whiteharbor-harbor': {
                name: 'White Harbor - Port',
                top: 36,
                left: 46,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'narrowsea'
            },
            'widowswatch': {
                name: 'Widow\'s Watch',
                top: 28,
                left: 54,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'flintsfinger': {
                name: 'Flint\'s Finger',
                top: 39,
                left: 18,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'greywaterwatch': {
                name: 'Greywater Watch',
                top: 38,
                left: 26,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'moatcailin': {
                name: 'Moat Cailin',
                top: 42,
                left: 33,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'dragonstone': {
                name: 'Dragonstone',
                top: 60,
                left: 67,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'dragonstone-harbor': {
                name: 'Dragonstone - Port',
                top: 65,
                left: 71,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'shipbreakerbay'
            },
            'kingswood': {
                name: 'King\'s Wood',
                top: 71,
                left: 54,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'bayofice': {
                name: 'Bay of Ice',
                top: 32,
                left: 5,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'shiveringsea': {
                name: 'The Shivering Sea',
                top: 27,
                left: 64,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'narrowsea': {
                name: 'Narrow Sea',
                top: 41,
                left: 70,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'shipbreakerbay': {
                name: 'Shipbreaker Bay',
                top: 74,
                left: 70,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'sunsetsea': {
                name: 'Sunset Sea',
                top: 67.5,
                left: 7,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'goldensound': {
                name: 'The Golden Sound',
                top: 61,
                left: 8,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'lannisport': {
                name: 'Lannisport',
                top: 60,
                left: 20,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 2
            },
            'lannisport-harbor': {
                name: 'Lannisport - Port',
                top: 59,
                left: 14,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'goldensound'
            },
            'stoneysept': {
                name: 'Stoneysept',
                top: 59,
                left: 32,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'harrenhal': {
                name: 'Harrenhal',
                top: 58,
                left: 40,
                crown: 1,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'riverrun': {
                name: 'Riverrun',
                top: 53,
                left: 31,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'searoadmarches': {
                name: 'Searoad Marches',
                top: 66,
                left: 19,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'blackwater': {
                name: 'Blackwater',
                top: 66,
                left: 39,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 2
            },
            'reach': {
                name: 'The Reach',
                top: 74,
                left: 29,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'seagard': {
                name: 'Seagard',
                top: 48,
                left: 30,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'ironmansbay': {
                name: 'Ironman\'s Bay',
                top: 53,
                left: 7,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'pyke': {
                name: 'Pyke',
                top: 47,
                left: 12,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'pyke-harbor': {
                name: 'Pyke - Port',
                top: 47,
                left: 18,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'ironmansbay'
            },
            'highgarden': {
                name: 'Highgarden',
                top: 77,
                left: 20,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 2
            },
            'dornishmarches': {
                name: 'Dornish Marches',
                top: 79,
                left: 29,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'oldtown': {
                name: 'Oldtown',
                top: 84,
                left: 16,
                crown: 0,
                castle: 0,
                stronghold: 1,
                barrel: 0
            },
            'oldtown-harbor': {
                name: 'Oldtown - Port',
                top: 81,
                left: 10,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'redwynestraights'
            },
            'redwynestraights': {
                name: 'Redwyne Straights',
                top: 87,
                left: 6,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'sunspear': {
                name: 'Sunspear',
                top: 89,
                left: 58,
                crown: 1,
                castle: 0,
                stronghold: 1,
                barrel: 1
            },
            'sunspear-harbor': {
                name: 'Sunspear - Port',
                top: 90,
                left: 67,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'eastsummersea'
            },
            'saltshore': {
                name: 'Salt Shore',
                top: 92,
                left: 43,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'seaofdorne': {
                name: 'Sea of Dorne',
                top: 85,
                left: 60,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'blackwaterbay': {
                name: 'Black Water Bay',
                top: 64,
                left: 58,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'eastsummersea': {
                name: 'East Summer Sea',
                top: 96,
                left: 69,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'westsummersea': {
                name: 'West Summer Sea',
                top: 74,
                left: 5,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'arbor': {
                name: 'The Arbor',
                top: 94,
                left: 9,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'boneway': {
                name: 'The Boneway',
                top: 81,
                left: 41,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'princespass': {
                name: 'Prince\'s Pass',
                top: 84,
                left: 29,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 2
            },
            'yronwood': {
                name: 'Yronwood',
                top: 88,
                left: 40,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'stormsend': {
                name: 'Storm\'s End',
                top: 77,
                left: 53,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'stormsend-harbor': {
                name: 'Storm\'s End - Port',
                top: 77,
                left: 60,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 0,
                surroundingSea: 'shipbreakerbay'
            },
            'starfall': {
                name: 'Starfall',
                top: 92,
                left: 32,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 1
            },
            'stoneyshore': {
                name: 'Stoney Shore',
                top: 32,
                left: 18,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'twins': {
                name: 'The Twins',
                top: 47,
                left: 38,
                crown: 1,
                castle: 0,
                stronghold: 0,
                barrel: 0
            },
            'fingers': {
                name: 'The Fingers',
                top: 44,
                left: 51,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'mountainsofthemoon': {
                name: 'Mountains Of The Moon',
                top: 48,
                left: 57,
                crown: 0,
                castle: 0,
                stronghold: 0,
                barrel: 1
            },
            'eyrie': {
                name: 'Eyrie',
                top: 53,
                left: 56,
                crown: 1,
                castle: 1,
                stronghold: 0,
                barrel: 1
            },
            'crackclawpoint': {
                name: 'Crackclaw Point',
                top: 60,
                left: 51,
                crown: 0,
                castle: 1,
                stronghold: 0,
                barrel: 0
            },
            'kingslanding': {
                name: 'King\'s Landing',
                top: 67,
                left: 48,
                crown: 2,
                castle: 0,
                stronghold: 1,
                barrel: 0
            },
            'threetowers': {
                name: 'Three Towers',
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
