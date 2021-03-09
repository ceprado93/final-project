const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [

    {
        title: 'Sandspit',
        description: 'A rare, Kirra-style righthand barrel over an extremely shallow sand bottom, created by the Army Corps of Engineers when the breakwater was built to protect Santa Barbara Harbor. The wave is hard-hitting and dredging, beginning with a huge backwash coming out at an angle to the wave from the breakwater. Gets very crowded and very dangerous – expert surfers with tuberiding experience only. Needs big W swells and low tide. Tom Curren got the all-time longest California tuberide here.',
        images: [{
            url: 'https://i0.heartyhosting.com/www.surfer.com/wp-content/uploads/2016/08/Woodworth_Sandspit_SantaBarbara_POTD.jpg?resize=1200%2C600&ssl=1',
            title: 'Woody Woodworth'
        }],
        location: {
            type: 'Point',
            coordinates: [34.405249, -119.687428]
        },
        region: 'North America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 80,
        swellRange: '1-2',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Salina cruz',
        description: 'The Salina Cruz area on the coast of Oaxaca is a mixed bag of points, sandy beach breaks, and jetty spots on an undeveloped sandy coastline. It’s a remote area and there will be little or no crowds. Many of the surf spots are best accessed by boat. Surf camps and local surf guides are a popular way to explore the area. Salina Cruz works best on a direct south-southwest swell.',
        images: [{
            url: 'https://www.surferrule.com/wp-content/uploads/2019/07/puntaconejoo.jpg',
            title: 'The inertia'
        }],
        location: {
            type: 'Point',
            coordinates: [16.135472, -95.247397]
        },
        region: 'Central America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 30,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'El pelado',
        description: 'Perfect and strong wave with amazing tubes.Very sensitive to south or southwest swells, can break with a strong north too. Low tide is best. This site is located 14 kms. from General Villamil Playas taking the road to Engabao until you find a dirt detour on the left side.',
        images: [{
            url: 'https://www.surf-forecast.com/system/images/10986/large/El-Pelado.jpg?1403674198',
            title: 'Andes Fernandez'
        }],
        location: {
            type: 'Point',
            coordinates: [-2.630553, -80.448143]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 20,
        swellRange: '1-3',
        bestSeason: 'Spring',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Indijup',
        description: 'The point at Injidup needs a sizeable SW or moderate W swell to wrap around before the lumbering lefts get going. Steep, open faces, interrupted by ill-tempered slabs of rock, bringing down sections and messing with the flow to the channel. Tidally sensitive and protected from S winds its often fat and far less appealing than the car park reefs.',
        images: [{
            url: 'https://i.ytimg.com/vi/P4x2V4sPBNI/maxresdefault.jpg',
            title: 'max res'
        }],
        location: {
            type: 'Point',
            coordinates: [-33.699376, 114.987853]
        },
        region: 'West OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 250,
        windDirections: 130,
        swellRange: '1-3',
        bestSeason: 'Spring',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Crescent Head',
        description: 'Solid wave, offers protection in southerly winds',
        images: [{
            url: 'http://www.visitingnsw.com/wp-content/uploads/2016/05/Crescent_Head_Surfing.jpg',
            title: 'Visit NSW'
        }],
        location: {
            type: 'Point',
            coordinates: [-31.185750, 152.982818]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 160,
        windDirections: 240,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },

    {
        title: 'Angourie Point',
        description: 'Angourie Point on the North Coast is an exposed point break that has quite reliable surf Offshore winds are from the southwest. Waves just as likely from local windswells as from distant groundswells and the best swell direction is from the east northeast. Sometimes crowded. Take care of rocks, sharks and locals.',
        images: [{
            url: 'https://assets.atdw-online.com.au/images/73a5de47e4e35aec03b507925f81fbb0.jpeg?rect=154,0,2048,1536&w=745&h=559&',
            title: 'Visit NSW'
        }],
        location: {
            type: 'Point',
            coordinates: [-29.482971, 153.368299]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 80,
        windDirections: 200,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Lennox Head',
        description: 'In February 1962, two Kiwis stumbled upon Lennox Head, now generally regarded as Australia’s finest righthand point. The first photos were published in Surfing World in 1966, followed by a sealed road in 1972, and since then surfers have flocked to the break, including hard-core riders from the surrounding countryside that keep a long pintail under the house for big Lennox days. Few waves compare for speed, barrel sections, length of ride and an ability to handle the biggest NE-S swells. While a NE swell meeting a SW wind is considered primo, Lennox will also bend a S to its will, hitting a number of launch sites along the half kilometre headland. Along that rocky ride, expect full-throttle, ruler-edged walls to gusset multiple times and envelop those fast and canny enough to hold the right line. Holds proper size when the prospect of leaping off the rocks looks suicidal and the current running down the point is likely to challenge the strongest paddlers.',
        images: [{
            url: 'https://www.lowpressure.co.uk/surftravelplanner/images/Far%20North%20Coast.jpg',
            title: 'Storm surfers'
        }],
        location: {
            type: 'Point',
            coordinates: [-28.806510, 153.605621]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 140,
        windDirections: 240,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'The pass',
        description: 'The Pass on the North Coast is a quite exposed point break that has consistent surf The best wind direction is from the southeast. Tends to receive a mix of groundswells and windswells and the ideal swell direction is from the east northeast. Good surf at all stages of the tide. Often Crowded. Watch out for rips, rocks, man-made danger (buoys etc...) and locals.',
        images: [{
            url: 'https://i.pinimg.com/originals/48/1a/09/481a09246ceb71c4742d14b66f22a1bc.jpg',
            title: 'Byron'
        }],
        location: {
            type: 'Point',
            coordinates: [-28.636447, 153.627842]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 100,
        windDirections: 180,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    }

];

Waves
    .create(waves)
    .then(allWavesCreated => {
        console.log(`Created ${allWavesCreated.length} waves`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))