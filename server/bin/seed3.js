const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [

    {
        title: 'Jeffreys bay',
        description: 'The longest, most perfect righthand pointbreak on the planet, consists of no less than 10 different sections including Kitchen Windows, Magnatubes, Boneyards, Supertubes, Impossibles, Salad Bowls, Coins, Tubes, The Point and finally Albatross. Fingers of basalt hold the sand uniformly, creating the perfect bathymetry for 1km long rides between Boneyards and The Point when the swell is just the right size and perfectly lined up. Supertubes is the stellar section, where the pro competitions are held and the crew are most combative, while Point and Albatross are slower, more manageable walls for intermediates and longboarders. Maintaining high speed and a high line is critical for threading the multiple tube sections and cutting back is rarely a good idea. SW-W is offshore for most of the sections, while NW-NE Berg (or Devil) winds descend from the mountains, blowing into the barrels and creating a nasty chop that is hard to handle on a wave where speed is king.',
        images: [{
            url: 'https://www.jbaysurfview.com/wp-content/uploads/2016/10/jbaysurfview-j-bay-surf-view-jeffreysbay-13.jpg',
            title: 'Tim Bonython'
        }],
        location: {
            type: 'Point',
            coordinates: [-34.034147, 24.935264]
        },
        region: 'Southern Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 180,
        windDirections: 240,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Dungeons',
        description: 'One of the most challenging big waves in the world with double-up drops followed by long speed walls that can close-out. Spooky, sharky outside reef.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?key=IMG_6435.jpg&type=EE_COVER&resize_type=COVER',
            title: 'Tony Butt'
        }],
        location: {
            type: 'Point',
            coordinates: [-34.063913, 18.337320]
        },
        region: 'Southern Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 180,
        windDirections: 10,
        swellRange: '2-7+',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'Low tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'St leu',
        description: 'The famous lefts of St-Leu provide a truly world-class wave when stronger SW swells hit, usually in winter. It starts with a quick drop and open face wall, ideal for carving big turns, before bending sharply round the reef into a couple of bowly, hollow sections that throw out a shallow tube. Needs to be overhead to start linking up for the full 300m ride, but will work in sections when it is smaller. Experienced surfers only, despite the easy paddle-out and be respectful of the local pecking order.',
        images: [{
            url: 'https://d3qf8nvav5av0u.cloudfront.net/image/f7bb55583dd66ce01333a8a6c234da5e.jpg?&x=1280&y=720&icq=74&sig=456806e80bcf77711bb08e3b4a78658f',
            title: 'Peter Wilson'
        }],
        location: {
            type: 'Point',
            coordinates: [-21.165421, 55.284023]
        },
        region: 'Southern Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 200,
        windDirections: 40,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Tamarin bay',
        description: 'A moderate to big SW swell has to wrap heavily to break along the famous reef at Tamarin Bay. Hypnotic, cultured barrels tour the NW-facing reef when a moderate to large SW swell tacks in and long tube time is logged by the mix of locals and lucky holidaymakers. This long, perfectly formed, barrelling left becomes ultra-shallow at low tide, so higher tides are safer. Tuck-ins and speed slashes are the order of the day so lesser surfers should stick to the inside reform or beachbreak. Humourless crowds, urchins, sharp reef, currents and sharks.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?key=maur3.jpeg&type=EE_COVER&resize_type=COVER',
            title: 'Local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [-20.327172, 57.372121]
        },
        region: 'Southern Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 180,
        windDirections: 40,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'Low to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'P-pass',
        description: 'Waves break out on the barrier reef or near a reef pass, so it’s boat access only and it’s always shallow on the inside. Up to 4ft (1.2m), the waves are user-friendly, but once the surf gets bigger, things get serious quickly. Late take-offs, fast down-the-line rides, and hollow barrels are what most surfed spots offer and the best of them is P-Pass (Palikir Pass). This wave has become the star of the Western Pacific by occasionally churning out impossibly perfect righthand pits, attracting pros and chargers to this remote island when the forecast looks right. It takes any swell from W-NE, with straight N being the best direction to avoid close-outs from the NW or missing the reef from the NE. P-Pass works with no winds or with light NE-E trades, which blow dead offshore as the swell lines wrap around the reef. These rights can be surfed at any tide, but it does get very shallow on a full low tide.',
        images: [{
            url: 'https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2015/01/07/1331698261939_2/p-pass-el-mejor-dia',
            title: 'Ted Gambreau'
        }],
        location: {
            type: 'Point',
            coordinates: [6.981853, 158.127147]
        },
        region: 'South',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 350,
        windDirections: 90,
        swellRange: '1-5',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Cloudbreak',
        description: 'Once the exclusive domain of well-heeled surfers able to pay the hefty daily rate to stay at the Tavarua Island surf resort, the Fijian government recently changed the law which allowed the resort to control access to this now legendary reef pass. While the perfect pictures of Cloudbreak suggest flawless left barrels for one and all, this is a tricky wave with multiple sections and a malevolent side that keeps even the best surfers on their toes. The outside section at the top Point of the reef holds plenty of size and the vertiginous roll-ins lead into a flying wall section where speed carves are possible. Middles is where turns are less useful and the barrel starts to wind up, covering a lot of distance in a short time. Insides, or Shish-kabobs, is where the reef gets extremely shallow and the tubes get extremely... extreme! Less confident surfers thinking they can pick off a few on the inside are not going to find any easy rides here and the fingers of razor sharp reef are far less uniform than further out. The 3 sections rarely link up, but when they do, usually on a long period, SSW swell of epic proportions, it is one of the seven wonders of the surf world.',
        images: [{
            url: 'https://i.pinimg.com/originals/0a/6c/5f/0a6c5f12437673e22b1e5933e112a7c0.jpg',
            title: 'surfer mag'
        }],
        location: {
            type: 'Point',
            coordinates: [-17.888051, 177.185387]
        },
        region: 'South',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 200,
        windDirections: 90,
        swellRange: '1-6+',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Restaurants',
        description: 'Restaurants is the iconic wave that breaks off the resort island of Tavarua in full view of the diners and is the perfect back-up wave to big brother Cloudbreak. Always a bit smaller, but the utter predictability of the lip as it peels off means barrels and lip-smashing fun in equal measure. S to SW swell will wrap around the reef and S-SE winds will iron out the surface.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2019/04/05133834/WINER_GTE_RESTAURANTS44488.jpg',
            title: 'Surfline'
        }],
        location: {
            type: 'Point',
            coordinates: [-17.852646, 177.200551]
        },
        region: 'South',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 220,
        windDirections: 120,
        swellRange: '1-2',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'Mid to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
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
        windDirections: 2900,
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
    },
    Waves
        .create(waves)
        .then(allWavesCreated => {
            console.log(`Created ${allWavesCreated.length} waves`)
            mongoose.connection.close();
        })
        .catch(err => console.log('Hubo un error,', err))