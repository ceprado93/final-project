const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [

    {
        title: 'Hainan bay',
        description: 'Riyue Bay is located 25km southwest of Wanning, along the coastal highway. The wave is visible from the highway. Home to the Surfing Hainan Club and contest site for 2012 World Women Longboarding Competition. WAVE DESCRIPTION: Fun left-hander point (up to 150m long) breaking at the feet of the cliff, on the northern end of the bay. Several sections after the sucky take-off aside the boil. Flat reef bottom. Most consistent spot in the Wanning Area. CONDITIONS: Riyue Bay works with E, SE and NE swells but gives its best during solid NE swells, with wave length exceeding 100m. Sheltered from the NE wind (side-off shore), this left can be surfed also during stormy winter swells and typhoons.',
        images: [{
            url: 'https://www.surfertoday.com/images/stories/hainanisland2.jpg',
            title: 'surfer today'
        }],
        location: {
            type: 'Point',
            coordinates: [18.630349, 110.222412]
        },
        region: 'Pacific Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 50,
        windDirections: 290,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'hebara',
        description: 'Hebara is a consistent beachbreak, and has thus been chosen as a WCT contest site',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?id=387156&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
            title: 'magicseaweed'
        }],
        location: {
            type: 'Point',
            coordinates: [35.164298, 140.334387]
        },
        region: 'Pacific Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 120,
        windDirections: 350,
        swellRange: '1-2',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Tuason',
        description: 'It takes about an hour to walk from General Luna to Cloud Nine and on the way there are several other good spots. Tuason Point is a seriously heavy left that breaks hard and hollow down the fringe of exposed reef',
        images: [{
            url: 'https://3.bp.blogspot.com/-9scVJmHv6Z0/WXtTjmGMINI/AAAAAAAAAVo/Blp5GuN7yH4UuTkbxvto84PYmPwttLDhQCLcBGAs/s1600/IMG_9340.JPG',
            title: 'local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [9.808862, 126.169936]
        },
        region: 'Pacific Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 50,
        windDirections: 290,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Fernando de noronha',
        description: 'Looking down from the mirantes (viewpoints), Cacimba do Padre appears as a picturesque tropical beach with perfect clean waves in crystal clear water, against the backdrop of the gnarled volcanic brothers known as the Dois Irmãoes. This is the most consistent spot on the island and the swell can be doubled in size here, reaching heights of up to 15ft (5m) offering huge, cavernous barrels, before shutting down hard on the fine-sand beach. With enough NW-N swell, it starts breaking on an outside shelf and rolls left through to the inside, getting meaner all the way. There are rights as well, but most of the action is concentrated on the longer, more makeable lefts. Smaller, peakier swells can see a high tide left, wedge off the base of the rocks, but no matter what the size, Cacimba is always hollow and powerful.',
        images: [{
            url: 'https://s3.amazonaws.com/blog.avt.prd/uploads/2019/07/03180507/surf.jpg',
            title: 'local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [-3.849079, -32.438521]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 10,
        windDirections: 190,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    }
]
    Waves
        .create(waves)
        .then(allWavesCreated => {
            console.log(`Created ${allWavesCreated.length} waves`)
            mongoose.connection.close();
        })
        .catch(err => console.log('Hubo un error,', err))