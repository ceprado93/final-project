const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [

    {
        title: 'Mavericks',
        description: 'Mavericks in San Mateo is an exposed reef break that has consistent surf. Winter is the best time of year for surfing here. Works best in offshore winds from the east. Tends to receive distant groundswells and the ideal swell direction is from the west northwest. Primarily a right hand reef break, although a left is also possible.. Sometimes crowded. Beware of rips, rocks and sharks. ',
        images: [{
            url: 'https://www.singlequiver.com/enelpico/wp-content/uploads/2019/10/mavericks-surf.jpg',
            title: 'Ryan Craig'
        }],
        location: {
            type: 'Point',
            coordinates: [37.492816, -122.500312]
        },
        region: 'North America',
        continent: 'America',
        type: 'Slab',
        seaBed: 'Reef',
        swellDirections: 310,
        windDirections: 90,
        swellRange: '3-7+',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Rincon',
        description: 'World-famous, consistent, and classic. A long, perfect righthand point, usually very lined-up with several tube sections. Rides are possible from the very top of the point (above the rivermouth) all the way to the highway, but the swell has to be big enough and of the proper direction (W-NW) not to section off. Rincon can be good at all tides, but low provides the most hollow sections. The inner cove is generally a mushier, softer wave popular with longboarders, but it too can be screaming fast on the right day.',
        images: [{
            url: 'http://www.travelgrom.com/wp-content/uploads/Rincon.jpg',
            title: 'Todd Glasser'
        }],
        location: {
            type: 'Point',
            coordinates: [34.372518, -119.477499]
        },
        region: 'North America',
        continent: 'America',
        type: 'Pointbreak',

        swellDirections: 310,
        windDirections: 50,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Steamer Lane',
        description: 'Straight out from the access stairs and extending out and west towards the channel are several reefs, collectively called Middle Peak, then subdivided into First, Second, and Third reefs. Best during N-NW swells, each reef works at a different size, but each boast heavy elevator drops followed by a softer righthand shoulder. The lefts, however, are usually steeper and hollower, but they can leave you caught inside by the next set coming in off the Slot or the Point. Middle Peak handles any size, although it becomes more challenging to read the line-up as the peaks shift around, keeping the pack on the move.',
        images: [{
            url: 'http://galaxypro.s3.amazonaws.com/spot-media/270/steamerlane-970x970.jpg',
            title: '@Craig'
        }],
        location: {
            type: 'Point',
            coordinates: [36.950320, - 122.025957]
        },
        region: 'North America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 240,
        windDirections: 40,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Lowers',
        description: 'An often stellar cobblestone peak, Lowers provides occasional hollow, zippering lefts, but is more known for its long, fast, bowling rights. Best with SW swells up to double-overhead. Can be good at any tide.',
        images: [{
            url: 'https://fulcrumsurf.com/wp-content/uploads/2015/07/Lowers.jpg',
            title: 'Jeremiah Klein'
        }],
        location: {
            type: 'Point',
            coordinates: [33.382052, -117.588556]
        },
        region: 'North America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 50,
        swellRange: '0.5-3',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Outer banks',
        description: 'This famous break in front of the tallest lighthouse in the US (recently moved a few hundred feet back from the surf) is constantly changing from the heavy erosion at Cape Hatteras. Picks up most swells, NE being the best to line up the longer lefts. The ends of the battered jetties can get dredgy, but it all depends on where the sand is. Barrels one week, mushy the next. All tides, but best on low incoming.',
        images: [{
            url: 'https://www.wetsuitwearhouse.com/blog/wp-content/uploads/2019/02/S-Turns-Rodanthe-NC.jpg',
            title: 'Surfline'
        }],
        location: {
            type: 'Point',
            coordinates: [35.296931, -75.510629]
        },
        region: 'North America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 90,
        windDirections: 270,
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
        title: 'Puerto Escondido',
        description: 'Swells hit the Puerto Escondido sandbars at Zicatela Beach in such a way that the waves jack up in size, which is often emphasised by a backwash. Magazine photos of this place are misleading - the waves close-out often and the paddle-out can be severe. Usually the rights break best. The wave is fickle, and will often be blown out by 11am. There’s large numbers of skilled surfers in the water hoping for the bomb that stays open long enough to escape. Despite all this, it’s still a year-round Mecca for big barrel hunters!',
        images: [{
            url: 'https://olasperu.com/multimedia/publicaciones/59f08fb95e968.jpg',
            title: 'Edwin Morales'
        }],
        location: {
            type: 'Point',
            coordinates: [15.848466, -97.054697]
        },
        region: 'Central America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 30,
        swellRange: '1-6+',
        bestSeason: 'Summer',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Bocas del toro - Bluff',
        description: 'Furthest north from Bocas del Toro, is the consistent stretch of beach known as Bluff. Hollow & powerful waves break super close to the shore, plenty of which close out. Pick the right ones for a quick barrel at this spot that is ideally suited to bodyboards.',
        images: [{
            url: 'https://lp-cms-production.imgix.net/2019-06/df2ae2ab319c52431ebcb91ea2f1f25a-playa-bluff.jpg',
            title: 'Nacho Cosio'
        }],
        location: {
            type: 'Point',
            coordinates: [9.396509, -82.242656]
        },
        region: 'Central America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 40,
        windDirections: 230,
        swellRange: '1-2',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Roca bruja',
        description: 'Next door,along the 6km of Playa Naranjo is another world-class wave. This hollow beachbreak faces a huge rock called Roca Bruja meaning Witches Rock, which was deposited in the sea by an angry volcano 50k’s (30mi) away. Ultra-fast, zippy walls streak down the sand, needing higher tides to prevent the close-outs. Most surfers coagulate just south of the rivermouth, but there are always more peaks to the south. North of the rivermouth is usually smaller. The only effective way to reach these spots is by boat from Playa del Coco or by 4X4, but like most national parks, there’s no accommodation so camping is the only possibility.',
        images: [{
            url: 'https://vozdeguanacaste.com/wp-content/uploads/2018/01/playa_naranjo.jpg',
            title: 'Playa negra fotos'
        }],
        location: {
            type: 'Point',
            coordinates: [10.792251, -85.678153]
        },
        region: 'Central America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 30,
        swellRange: '1-3',
        bestSeason: 'Summer',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Popoyo',
        description: 'When talking about Popoyo it’s important to realise that it is 2 waves with very different personalities a bit like beauty and the beast. Beauty is the alluring symmetry of the reef and sand slab off Play Sardinas that peaks up and peels off predictably at a nice pace for vertical whacks and the odd crumbly cover-up. Better at low incoming tide, the peak will hold up to double overhead and and a considerable crowd as well. The Beast is The Outer Reef, with a capital T, found 400m offshore and is only really an option for the very bravest and skilled big wave riders. Looks deceptively perfect from distance but close inspection reveals shallow rocks, boils and riverine currents sculpting heaving, bloodthirsty barrels with a do or die end section. Easily handles 20ft faces at this higher tide spot and it gets scarier by the minute on the drop, which doesn’t deter the local hellmen that have it wired.',
        images: [{
            url: 'http://i.cdn-surfline.com/travel/summer-resort-guide/resorts/popoyo/popoyo_surf_lodge_nicaragua_wavehunters_image-7.jpg',
            title: 'Surfline'
        }],
        location: {
            type: 'Point',
            coordinates: [11.455353, -86.109852]
        },
        region: 'Central America',
        continent: 'America',
        type: 'Beachbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 30,
        swellRange: '1-5',
        bestSeason: 'Summer',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Cabo blanco',
        description: 'On a big N swell, world-class Cabo Blanco will wake up. It’s an excellent barrelling reefbreak that explodes dangerously close to exposed, board-chewing rocks with plenty of fast tubes. The take-offs are usually late, straight into a spacious cavern, then race off past the elbow of the reef and down towards the pier 100m away.',
        images: [{
            url: 'https://margruesa.com/wp-content/uploads/2019/01/cabo-blanco-surf-peru.jpg',
            title: 'Enrique Rodriguez'
        }],
        location: {
            type: 'Point',
            coordinates: [-4.249956, -81.232234]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 330,
        windDirections: 160,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },

];

Waves
    .create(waves)
    .then(allWavesCreated => {
        console.log(`Created ${allWavesCreated.length} waves`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))