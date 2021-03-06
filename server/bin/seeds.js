const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [
    {
        title: 'Thurso east',
        description: 'Scotland’s premier righthand reefbreak and a world-class barrel on its day. In NW swells at mid tide a relatively simple drop leads into one of the longest, hollowest rides in Europe.',
        images: [{
            url: 'https://www.wavelengthmag.com/wp-content/uploads/2019/01/Thurso-1024x683.jpg',
            title: '@lugarts'
        }],
        location: {
            type: 'Point',
            coordinates: [58.602074, -3.507895]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 330,
        windDirections: 140,
        swellRange: '1-5',
        bestSeason: 'Autumn', // to do
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Bimms ness',
        description: 'Fickle, long, left point needs specific swell direction and light winds to work.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/images.php?id=343937&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
            title: '@BENJAMIN59'
        }],
        location: {
            type: 'Point',
            coordinates: [58.620647, -3.656371]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 340,
        windDirections: 180,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Empty',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Mullaghmore Head',
        description: 'Ireland’s premier big-wave spot. The Head is a savage, shallow, lefthand reefbreak only surfable on high tide. Handles any size swell, producing massive tubes, but needs to be well overhead to break clear of exposed rocks.',
        images: [{
            url: 'https://www.surfcantabria.com/media/k2/items/cache/b15e8a343e5728d8313eac39cd22374b_XL.jpg',
            title: '@conormaguiree'
        }],
        location: {
            type: 'Point',
            coordinates: [54.474148, -8.454962]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 300,
        windDirections: 190,
        swellRange: '3-7+',
        bestSeason: 'Winter',
        crowd: 'Empty',
        quality: 5,
        level: 'Pros',
        tide: 'High tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Bundoran - The peak',
        description: 'At low tide the flawless A-frame peak gives a short, hollow right and a longer, high-performance left. Always very crowded, unless it’s big. Look out for rocks, rips and poor water quality after rains (always!).',
        images: [{
            url: 'https://www.surfholidays.com/assets/images/blog/2016-06-15-ireland1.jpg',
            title: 'Mark Stephens'
        }],
        location: {
            type: 'Point',
            coordinates: [54.480887, -8.286585]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'A-frame',
        seaBed: 'Rocks',
        swellDirections: 280,
        windDirections: 150,
        swellRange: '1-5',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'All surfers',
        tide: 'Low to mid',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Aileens',
        description: 'Aileens in Clare is an exposed reef break that has inconsistent surf with no particular seasonal pattern.The best wind direction is from the east with some shelter here from east winds.Tends to receive a mix of groundswells and windswells and the best swell direction is from the west southwest',
        images: [{
            url: 'https://www.surfholidays.com/assets/images/blog/2015-11-10-Surifng%20Cliffs-of-Moher-in-County-Aileens_Mickey_Smith.jpg',
            title: 'Mickey Smith'
        }],
        location: {
            type: 'Point',
            coordinates: [52.980978, -9.432194]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 240,
        windDirections: 90,
        swellRange: '1-5',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4.5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Rileys',
        description: 'It´s the perfect set up for heavy, bowling, top to bottom left hand barrels, not a wave for the faint-hearted – it’s a powerful, pitching shallow spot that claims injuries and all time rides in almost equal measure.',
        images: [{
            url: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_5301,w_7952/c_fill,w_790,h_527/q_auto,f_auto/redbullcom/2020/5/4/rj0x6artbzgeumdggcpp/conor-maguire-rileys',
            title: 'Connor Flanagan'
        }],
        location: {
            type: 'Point',
            coordinates: [52.930938, -9.347559]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 270,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Pros',
        tide: 'Hight tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'Fistral Beach',
        description: 'Very consistent, beachbreak peak, that occasionally gets epic. Mainly rights that get hollow at lower tides. Likes W swell best. Usually a bit bigger than South Fistral.',
        images: [{
            url: 'https://cdn.familyfuncanada.com/wp-content/uploads/2016/05/Headland_aerial_Fistral.jpg',
            title: '@headland hotel'
        }],
        location: {
            type: 'Point',
            coordinates: [50.416154, -5.100316]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 100,
        swellRange: '0.5-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true

    },
    {
        title: 'St Agnes',
        description: 'Powerful, beachbreak peaks over a rocky beach. One of the few spots working in big SW swells and winds.',
        images: [{
            url: 'https://visitstagnes.com/wp-content/uploads/2019/02/activities-header-2.jpg',
            title: '@visitstagnes'
        }],
        location: {
            type: 'Point',
            coordinates: [50.301929, -5.235988]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3,
        level: 'All surfers',
        tide: 'Mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Porthleven',
        description: 'Fast, hollow, crowded reef peak to the west of the harbour. A short right barrel that gets very shallow on the inside and good lefts on certain swell directions. Cornwall’s best reefbreak is always busy when on with a large local crew, pros and media. Dangerous at high and low tide – experts only. Also another hollow right reef in front of the pier popular with lids.',
        images: [{
            url: 'https://www.surferrule.com/surferrule/wp-content/uploads/2017/02/Porthleven-1.jpg',
            title: '@Surfer rule'
        }],
        location: {
            type: 'Point',
            coordinates: [50.082297, -5.321046]
        },
        region: 'UK & Ireland',
        continent: 'Europe',
        type: 'A-frame',
        seaBed: 'Reef',
        swellDirections: 240,
        windDirections: 60,
        swellRange: '1-5',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Lacanau',
        description: ' Consistent surf, easily checked from the boardwalk at Plage Centrale before opting for a session at La Nord, La Sud or Super Sud among 14km of beaches ideal with a medium size W-NW swell. Handles more size thanks to the deep scalloped baines around the rock jetties that are there to hold the sand in place',
        images: [{
            url: 'https://www.surfingfrance.com/media/k2/items/cache/621e04774107f8d6d16119a4df4b377b_XL.jpg',
            title: 'Laurent Rondi'
        }],
        location: {
            type: 'Point',
            coordinates: [45.002002, -1.202693]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 90,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Culs nuls',
        description: 'The link between the normal beachbreaks to the north and the heavy shories of La Graviere. Usually better at mid to high tides with a moderate swell, because of the steeper beach angle. Powerful action close to shore.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2018/09/01074752/klein_france2015_19270-1560x1039.jpg',
            title: 'Jeremiah Klein'
        }],
        location: {
            type: 'Point',
            coordinates: [43.680217, -1.440469]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 290,
        windDirections: 90,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'La Graviere',
        description: 'Sited on an old gravel pit, this is the legendary Hossegor tube spot. Dredging the rivermouth has affected wave quality in the past, but it is back with a vengeance, hosting pro-surfing competitions in huge conditions, including the 2011 Quik Pro. Sometimes white-caps outside, rolls in and reforms, standing up over the shallow inside bars. Heavy, thick-lipped beasts, break perilously close to shore and often close-out, snapping more boards than just about anywhere.',
        images: [{
            url: 'https://www.surf-forecast.com/system/images/16457/large/La-Graviere.jpg?1467501246',
            title: '@Ego'
        }],
        location: {
            type: 'Point',
            coordinates: [43.670936, -1.441787]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 290,
        windDirections: 90,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'La piste',
        description: 'Perfect barrels are regularly on offer for those that can handle the packs of gifted locals and tube-hungry visitors. From low to mid tide is prime time, when the swell focuses on banks that seem to have a bit more punch and urgency than just about anywhere in Hossegor, so prepare for air drops and some solid floggings when it reaches headhigh plus.',
        images: [{
            url: 'https://i.pinimg.com/originals/59/b7/df/59b7df4261eb0e937ef21efca40a8711.jpg',
            title: 'Carole Braud'
        }],
        location: {
            type: 'Point',
            coordinates: [43.641952, -1.447120]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 110,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Anglet',
        description: 'Swell angle often dictates whether the longer rights or hollower lefts will be better and powerful tubes appear on the good days. May seem a bit easier to get out when the swell jumps and the jetty rips can help avoid a pounding',
        images: [{
            url: 'https://www.angletsurfinfo.com/admin/images/galeries/2013/02/galerie_1408_13418.jpg',
            title: 'Angletsurfphoto'
        }],
        location: {
            type: 'Point',
            coordinates: [43.499058, -1.544171]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Biarritz - Grand Plage',
        description: 'The Basque coast’s chic city beach receives less swell than Anglet, but handles a very large variety of conditions. Rocks on the south part of the beach contribute to the beauty of the site while shaping the banks and blocking S-SW winds. Sometimes the fat rolling peaks are fun and easy, other times they are sucky and close-out.',
        images: [{
            url: 'https://www.ultimatefrance.com/wp-content/uploads/2015/09/biarritz-surfing.jpg',
            title: 'drip&ju'
        }],
        location: {
            type: 'Point',
            coordinates: [43.486092, -1.557671]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 290,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3.5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Biarritz- Cote des Basque',
        description: 'The birthplace of Frances surfing scene remains popular with longboarders enjoying mellow walls sheltered from northern winds.Theres usually a peak close to the headland and another defined peak a bit further down the beach. While it is friendly and fun-loving for mals and beginners at knee to shoulder-high, there is a bit more energy at headhigh plus, especially if you drift south.',
        images: [{
            url: 'https://hushoots.com/wp-content/uploads/2019/01/Cote_des_Basques-compresse%CC%81e.jpg',
            title: 'hushoots'
        }],
        location: {
            type: 'Point',
            coordinates: [43.479836, -1.566772]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3.5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Parlamentia',
        description: 'The Guéthary terrace gives the best view of this Sunset-like right with a shifting peak and short shoulder that holds up to 6m faces on a clean, NW swell. The outside bombora style reef is quite deep, so the peak draws up a lot of water and only invites those on large, long, voluminous boards to get in early.',
        images: [{
            url: 'https://margruesa.com/wp-content/uploads/2019/11/guethary-olas-grandes.jpg',
            title: 'margruesa'
        }],
        location: {
            type: 'Point',
            coordinates: [43.427159, -1.608665]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 280,
        windDirections: 120,
        swellRange: '1-6',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3.5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Lafitenia',
        description: 'A beautiful righthand pointbreak, complete with steps in the steep take-off, that leads into a long wall and occasionally hollow inside section. After the excitement of the first steep section, the wall fattens up and allows repetitive cutbacks into the hook before the final race to the shorebreak close-out.',
        images: [{
            url: 'https://live.staticflickr.com/8591/16820656346_8e03991ea9_z.jpg',
            title: 'lafiteniaphoto'
        }],
        location: {
            type: 'Point',
            coordinates: [43.414333, -1.628112]
        },
        region: 'France',
        continent: 'Europe',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 295,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    // {
    //     title: 'La zurriola',
    //     description: 'Consistent, medium-quality beachbreak that can have good peaks depending on the sandbars. A lefthander peels towards the pier at low tide. Best on small swells; anything over about 5 closes out.',
    //     images: 'https://www.surfsearchspot.com/wp-content/uploads/2016/05/Surf-en-La-Zurriola-bY-Jonxa-4-1024x627.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-2',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Zarautz',
    //     description: 'Very consistent, good quality, beachbreak. Doesn’t need much swell to work, although W swells struggle to get in here. A long beach with several peaks, mostly performance orientated. Highly competitive in the water with a very high level of surfing.',
    //     images: 'https://lh3.googleusercontent.com/proxy/dMt7MGyYOuAQfHkkTw4nEnZlwPpVUxokkaQlAMVgXCIN0okG9y_JBMhIcNQCYd_dGBoZLubG3FY58ffM7J3n15j0hMjsF7_5DcBFZzfQwJJgNOm8H6xg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3.5,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Orrua - Roka Puta',
    //     description: 'Orrua in Pais Vasco is an exposed reef break that has fairly consistent surf. Autumn and winter are the favoured times of year for waves. The best wind direction is from the south southeast. Windswells and groundswells in equal measure and the best swell direction is from the northwest. No beach break here and a right hand reef break too.. Best around low tide. When the surf is up, crowds are likely Beware of rocks / rips and pollution.',
    //     images: 'https://2.bp.blogspot.com/-7BCk9YcEmLI/W6c0PTkonlI/AAAAAAABmnM/Gkn689bSVlgOvXW4mLoUQkk-fQlSKx-mQCLcBGAs/s1600/orrua.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Poinbreak',
    //     seaBed: 'Rocks',
    //     swellDirections: 310,
    //     windDirections: 160,
    //     swellRange: '1-7',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 5,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Deba',
    //     description: 'Deba in Pais Vasco is an exposed beach and reef break that does not work very often with no particular seasonal pattern. The best wind direction is from the south. Tends to receive a mix of groundswells and windswells and the best swell direction is from the northwest',
    //     images: 'https://lh3.googleusercontent.com/-RpzlmkrIjrU/Wm8tq1XvqWI/AAAAAAAATnk/MxHaQZZvAIErxOH2E7WvLJuyqpXKgB6lgCHMYCw/sorgin%252Betxe%252Bdeba%252Bdesde%252Bfoto%252Bdenisainz%252Bla%252Bcarretera.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand and rocks',
    //     swellDirections: 310,
    //     windDirections: 170,
    //     swellRange: '1-6',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'High tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Laga',
    //     description: 'Consistent, good to excellent beachbreak, sometimes producing barrels. OK on most tides although changes with sandbars.',
    //     images: 'https://cf.bstatic.com/images/hotel/max500/203/203748124.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-5',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: ' All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Mundaka',
    //     description: 'Mundaka is a dream lefthand barrel and possibly the best rivermouth wave in the world. A long triangular sandbank catches the stronger NW swells, creating a long flawless tube with rides of up to 150-200 meters possible. From the peak, the wave sucks up hard, making for steep challenging take-offs straight into a sick barrel section. The ensuing long, fast wall, allows a few turns if you are going close to warp speed.',
    //     images: 'https://www.singlequiver.com/enelpico/wp-content/uploads/2019/07/la-barra-mundaka.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-5',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 5,
    //     level: 'Experienced surfers',
    //     tide: 'Low tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Bakio',
    //     description: 'Very consistent, popular beachbreak. Can produce excellent waves with some barrel sections, depending on sandbar formations which change constantly.',
    //     images: 'https://lh3.googleusercontent.com/proxy/pMvoHHbbeM7DkP5QEEwCICwUG3x0-QdvtjeTEkA6_i-X-w8sF0MMA9oWJPFHQAbAxKK4s-0BzuGAEIO6az-XKDkeAWJKvCCWJpc75eQLVxmMFzzGEKxqtfQJVQ3gtwtIzScfoSzxgpfyaJT0kwWyg1dgPBxxbr2WpcG49y3yedSjf2iqtrkWXSkLNaliD8GHq5G30lIL8r4fxpLy7SnMe9GxIFfKZJp9sDtMY1AoSJw-8-Ev',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-5',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3.5,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Plentzia',
    //     description: 'Unconsistent lefthand rivermouth with some quality days.  Always very crowded. ',
    //     images: 'https://surfmocion.com/wp-content/uploads/2015/09/plentzia_Juanma-Billala-12-1.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-2',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Meñakoz',
    //     description: 'World-class, highly dangerous big-wave spot. One of the most powerful regularly-surfed waves in Europe. Starts breaking properly at about 12 foot. Hazards include razor-sharp rocks, very strong rips, shifting peaks, two-wave hold-downs, broken boards and broken bones.',
    //     images: 'https://willyuribe.files.wordpress.com/2011/11/wusph_0175.jpg?w=584',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Rocks',
    //     swellDirections: 310,
    //     windDirections: 170,
    //     swellRange: '2-6',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 5,
    //     level: ' Pros',
    //     tide: ' Hight tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Sopelana',
    //     description: 'Very consistent beachbreak with several peaks. Good semi-permanent high-tide peak at western end of beach. Works on small to medium swells.',
    //     images: 'https://www.moanasurfhostel.com/adminsurfhostel/wp-content/uploads/MG_0189-compressor.jpeg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-2',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'La salvaje',
    //     description: 'Consistent beach near sopelana, always very crowded. Can produce good sandbanks and hold bigger swell than Sopelana',
    //     images: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/e6/11/94/img-20160923-wa0008-largejpg.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'La galea',
    //     description: 'Premier big wave spot and home of the annual Big Wave World Tour event.',
    //     images: 'https://fotos02.deia.eus/2020/12/05/1024x341/surf.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Rocks',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '3-7+',
    //     bestSeason: 'Autumn',
    //     crowd: 'Empty',
    //     quality: 5,
    //     level: ' Pros',
    //     tide: ' All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'La arena',
    //     description: 'Long beach with several peaks, depending on sandbars. Works on most tides. Very consistent.',
    //     images: 'https://lh3.googleusercontent.com/nl1EDzpbZG5KJUOuYkxw4Wxletn_BQrhnqRscew_AGI=w1300-h667-no',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Laredo',
    //     description: 'Large circular bay with several beachbreak peaks. Good peak between middle and western end at high tide. Works on large winter swells, offshore on W and OK on NW winds.',
    //     images: 'https://www.singlequiver.com/enelpico/wp-content/uploads/2018/09/29744736_10211397644284433_2960710722623373962_o.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 240,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 4,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Berria',
    //     description: 'Quite long beach with several peaks, depending on sandbars and state of tide. Needs at least a medium swell to work. Moderately consistent.',
    //     images: 'https://www.watsaysurfschool.com/wp-content/uploads/2020/08/hacer-surf-en-berria.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'El brusco',
    //     description: 'Excellent-quality hollow beachbreak with A-frame peaks. Needs fair sized swell to work. Best at high tide. The stronger the offshore wind the better.',
    //     images: 'https://margruesa.com/wp-content/uploads/2015/12/el-brusco-pacotwo_MG_0660.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'High tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Ris',
    //     description: 'Playa de Ris in Cantabria is a reasonably exposed beach break that has fairly consistent surf, although summer tends to be mostly flat. The best wind direction is from the southeast. Tends to receive a mix of groundswells and windswells and the ideal swell direction is from the northwest. The beach break offers both left and right hand waves. Best around high tide. Likely to be crowded if working. Crowds may reach hazard levels at this break - consider wearing a lid.',
    //     images: 'http://www.masmar.net/var/masmar/storage/images/guias/playas/cantabria/playa-de-ris-noja/playa-de-ris-noja2/179140-1-esl-ES/Playa-de-Ris-Noja.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-2',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3.5,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Langre',
    //     description: 'Average beachbreak sheltered from strong SW and moderate W winds. Needs a reasonable swell to work. Low to mid tide only.',
    //     images: 'https://iniciativavecinalralm.org/wp-content/uploads/2020/08/langre-playa.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Santa Marina',
    //     description: 'World-class righthand reefbreak, breaking off the island of Santa Marina. Freight-train walls and barrel sections. Works from about 5 foot upwards. Best on the rare combination of a large swell and a E or NE wind, usually only a few times a year. OK on all tides but dangerous rocks in front of take-off at low tide.',
    //     images: 'http://www.escueladesurflaislasantamarina.es/wp/wp-content/uploads/2015/12/Surfista-Nano-Riego-Foto-Rafael-Gonzalez-Riancho.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand and rocks',
    //     swellDirections: 310,
    //     windDirections: 150,
    //     swellRange: '1-6',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 5,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Somo',
    //     description: 'Consistent beachbreak with good peaks, working during most tides. Best on small to medium swells.',
    //     images: 'https://i0.wp.com/www.todosurf.com/wp-content/uploads/2019/08/Playas-de-Somo-y-Loredo-1.jpeg?fit=1280%2C551&ssl=1',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'El sardinero',
    //     description: 'East-facing average-quality beachbreak. Works best in big storms with W or NW winds.',
    //     images: 'https://live.staticflickr.com/4111/5170312291_a398aaa20e_b.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 315,
    //     windDirections: 270,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'La vaca',
    //     description: 'Heavy big wave spot near Santander, only for very expirienced surfers',
    //     images: 'https://wipeoutsurfmag.com/wp-content/uploads/2016/11/la-vaca..jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Slab',
    //     seaBed: 'Rocks',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '2-7',
    //     bestSeason: 'Autumn',
    //     crowd: 'Empty',
    //     quality: 5,
    //     level: ' Pros',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Liencres',
    //     description: 'Excellent beachbreak with a series of peaks, depending on tide and sandbars. Very consistent.',
    //     images: 'https://www.surfcantabria.com/media/k2/items/cache/e83a79315cc06d4fda91a5651489679d_XL.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3.5,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Los locos',
    //     description: 'Excellent, consistent, west-facing beachbreak. Works during most tides and is sheltered from summer NE sea breezes by high cliffs.',
    //     images: 'https://www.surf-forecast.com/system/images/16610/large/Los-Locos.jpg?1470123425',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 90,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Playa de gerra',
    //     description: 'Good consistent beachbreak, works on most tides. Long stretch of beach with various peaks, depending on sandbars.',
    //     images: 'https://santanderalacarta.com/files/2016/06/playa_gerra_cantabria-1024x679.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Andrin',
    //     description: 'Playa de Andrin in Asturias is an exposed beach break that has very reliable surf and works all around the year. Offshore winds are from the south. Groundswells and windswells are equally likely and the best swell direction is from the northwest. The beach breaks offer lefts and rights. ',
    //     images: 'http://quemalavida.com/wp-content/uploads/2016/06/surf-asturias-4.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Playa de Vega',
    //     description: 'Long beach with several possible peaks picking up all available swell. More consistent than surrounding spots due to it’s NNW orientation. Handles the summer NE winds.',
    //     images: 'https://www.ruralia.com/uploads/imagecache/imagecache_portapapeles//uploads/s34wsx9amefgkp9gyyg8.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Rodiles',
    //     description: 'The best wave in Asturias. A world-class rivermouth lefthander similar to Mundaka but slightly shorter and handles less size. Two hours either side of low, preferably on the push. Needs a moderate swell to get going, usually best in winter.',
    //     images: 'http://galaxypro.s3.amazonaws.com/spot-media/322/322-rodiles-spain.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'Low tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'El mongol',
    //     description: 'Average-quality pointbreak, picks up a limited amount of swell but surfable during most tides. SW wind OK.',
    //     images: 'https://lh3.googleusercontent.com/-2-ogS1TzXk8/WHvPuo96SDI/AAAAAAAAQF8/ej9jDCkhPM4/el%25252Bmongol%25252Babriendo%25252Bperfecto....jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand and rocks',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-4',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'Mid to high tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Salinas',
    //     description: 'Stretching from Playa El Espartal to Salinas, this is one of the most popular surfing beaches in Asturias. Fast, barrelling, consistent beachbreak peaks, working during all tides. Smaller towards western end. Some shelter from summer NE sea breeze.',
    //     images: 'https://www.upsurfboard.com/wp-content/uploads/2019/04/Salinas.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Full',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Tapia de casariego',
    //     description: 'Good-quality, consistent beachbreak with semi-permanent, hollow lefthander, fed by a stream. Best mid to low tide, outgoing. Some shelter from NE sea breezes in summer, but it is a year-round wave.',
    //     images: 'https://as.com/deportes_accion/imagenes/2018/04/03/surf/1522746635_851948_1522747572_noticia_normal.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: 'Foz',
    //     description: 'Excellent quality rivermouth left only breaks on the biggest swells of the year. It’s fast, hollow and shallow and doesnt hold above about 8 ft.Low tide only.',
    //     images: 'https://www.upsurfboard.com/wp-content/uploads/2019/04/Foz.jpg',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'Low tide',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    {
        title: 'Pantin',
        description: 'The most popular surf spot in Galicia, home to an annual pro contest. Ultra consistent, Pantin hoovers up W-NW swell and can hold quite a bit of size. Both left and right peaks can line up and spitting barrels are common. Better low to mid but surfable on all tides. Strong rips with paddling channel at northern end.',
        images: [{
            url: 'https://surfcamp.es/wp-content/uploads/2020/04/surf-en-pantin-1-1024x768.jpg',
            title: '@todosurf'
        }],
        location: {
            type: 'Point',
            coordinates: [43.639533, -8.111995]
        },
        region: 'Spain',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 300,
        windDirections: 180,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 3,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Doniños',
        description: 'Most popular wave in the area, thanks to superior quality and consistency. 2km’s of swell sucking peaks that are hollowest at low to mid tide.',
        images: [{
            url: 'http://www.ferrolactivo.es/images/surf/luisrodriguez/lr.jpg',
            title: '@ferrolactivo'
        }],
        location: {
            type: 'Point',
            coordinates: [43.500205, -8.318757]
        },
        region: 'Spain',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 310,
        windDirections: 180,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 3,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Nazare',
        description: 'People are only just beginning to wake up to the potential of Nazaré. A finger of deep water points directly at the beach to the north of town and the result is similar to La Nord in Hossegor. Huge, heavy and hollow beach peaks for the brave.',
        images: [{
            url: 'https://www.surfholidays.com/assets/images/blog/2016-09-26-nazare-desinema-jpg',
            title: '@barcroftmedia'
        }],
        location: {
            type: 'Point',
            coordinates: [39.607931, -9.084569]
        },
        region: 'Portugal',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 90,
        swellRange: '1-10+',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Coxos',
        description: 'This European point/reefbreak gem peels down a series of rocky shelves and outcrops into a small bay. Coxos is long, fast and hollow when it hits the slabs just right. Power is the key word as swells unload out of deep water. It can handle big waves if the swells are clean and from the NW. When all the conditions come together you will see why this is Portugal’s best wave.',
        images: [{
            url: 'https://www.singlequiver.com/enelpico/wp-content/uploads/2019/08/coxos-ericeira.jpg',
            title: 'Jop Hermans'
        }],
        location: {
            type: 'Point',
            coordinates: [39.001342, -9.426550]
        },
        region: 'Portugal',
        continent: 'Europe',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 250,
        windDirections: 90,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'Low to mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Supertubos',
        description: 'The name speaks for itself! World-class spot and undoubtedly the best beachbreak in Portugal, Supertubos has become a favourite stop on the world pro tour and a perfect warm-up for Pipeline. Long, heavy, gas-filled tubes are guaranteed as well as a few shut-down close-outs, such is the speed of this wave. The lefts are usually better, but plenty of shorter rights peel off the main peak, especially in NW conditions. It’s at its best with NE winds, a decent SW swell and mid-tide, but these conditions don’t come around everyday.',
        images: [{
            url: 'http://www.boardrap.com/wp-content/uploads/2017/04/supertubos-wsl-contest-barrel-huge-crowds-peniche-portugal-surf-trip-guide.jpg',
            title: '@wsl'
        }],
        location: {
            type: 'Point',
            coordinates: [39.344340, -9.362887]
        },
        region: 'Portugal',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 260,
        windDirections: 90,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Beliche',
        description: 'The best beach in the Sagres area. It needs a hefty NW swell or a standard S to work and is offshore on N winds. When good it’s a classy left wedge that handles up to double overhead. It’s very hollow and fast and overrun with hot locals.',
        images: [{
            url: 'https://lh3.googleusercontent.com/proxy/6Ry2BF_3kQSMPPLp1j06ZiWoO2gsWr9AYkc0Z7qFnYI85BiEWXiVu4ssDde8u46cFer5FnSrVybh302sIaDWZfmYBoEPh2CJk6iNv25Jb-qZQN7LvG9cJLMFd6csYtggfBt-XMrWZg',
            title: '@atlanticsurfroute'
        }],
        location: {
            type: 'Point',
            coordinates: [37.025802, -8.965570]
        },
        region: 'Portugal',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 200,
        windDirections: 40,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'All surfers',
        tide: 'Low to mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Yerbabuena',
        description: 'La Yerbabuena in Andalucia is a fairly exposed point/rivermouth break that has unreliable waves. Summer in particular tends to be flat. The best wind direction is from the northeast. Most of the surf here comes from groundswells and the ideal swell angle is from the southwest. Often Crowded. Take special care here if it gets very crowded.',
        images: [{
            url: 'https://www.surferrule.com/wp-content/uploads/2018/12/Captura-de-pantalla-2018-12-12-a-las-12.36.12-e1544615139694.png',
            title: '@surferrule'
        }],
        location: {
            type: 'Point',
            coordinates: [36.178087, -5.974051]
        },
        region: 'Spain',
        continent: 'Europe',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 200,
        windDirections: 350,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Unstad',
        description: 'Beachbreak that suffers a bit of swell shadow compared to the two pointbreaks that flank it. Breaks over sand and some scattered boulders but is fine for beginners and the local surf school.',
        images: [{
            url: 'https://uploads-ssl.webflow.com/5aa276d9013ff400018dd29d/5c28953732e9aa36e1a5afd9__40A4352.jpg',
            title: '@bourksteer'
        }],
        location: {
            type: 'Point',
            coordinates: [68.268330, 13.580922]
        },
        region: 'Spain',
        continent: 'Europe',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 250,
        windDirections: 100,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    }
    // {
    //     title: '',
    //     description: '',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },
    // {
    //     title: '',
    //     description: '',
    //     images: [{
    //         url: '',
    //         title: ''
    //     }],
    //     location: {
    //         type: 'Point',
    //         coordinates: []
    //     },
    //     region: 'Spain',
    //     continent: 'Europe',
    //     type: 'Beachbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 310,
    //     windDirections: 180,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 3,
    //     level: 'All surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa', 
    //isAccepted: true
    // },



];

// then(()=>{
//to do drop
db.sequelize.sync({ force: true })
Waves
    .create(waves)
    .then(allWavesCreated => {
        console.log(`Created ${allWavesCreated.length} waves`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))
//})