const mongoose = require('mongoose');
const Waves = require('../models/wave.model');

const dbName = 'mongodb+srv://evavirsedasanz:popinothebest@cluster0.by1bk.mongodb.net/final-project';
mongoose.connect(`${dbName}`);
const waves = [
    {
        title: 'El quemao',
        description: 'Known as Pipelines Atlantic sister.Lefts and rights reel down a short and shallow reef with intense power and ferocity.W swell makes the lefts more makeable than the rights, which resemble Backdoor by closing out on the sharp lava reef.When it’s on, it’s packed with the best of the islands stand- up and bodyboarders and a Coliseum atmosphere pervades.',
        images: [{
            url: 'https://img.redbull.com/images/c_crop,w_960,h_640,x_0,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2016/01/26/1331772997398_2/quemao-class-2016-gines-diaz',
            title: 'Gines dias'
        }],
        location: {
            type: 'Point',
            coordinates: [29.110241, -13.667197]
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 2700,
        windDirections: 150,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'El Fronton',
        description: 'Only a few rivals as the heaviest wave in the world. Totally slab. Only ridden by local bodyboarders who dont tolerate visitors. More perfect right but the left is sick also, depending on the swell direction. Square, mutant tubes that quickly shut down on the shelf.',
        images: [{
            url: 'https://www.hellocanaryislands.com/sites/default/files/resource/el_fronton-gran_canaria.jpg',
            title: 'Rayco Confital'
        }],
        location: {
            type: 'Point',
            coordinates: [28.165598, -15.653847]
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 310,
        windDirections: 180,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'El confital',
        description: 'Considered one of the best righthanders in Europe, thanks to it’s wedging barrels and fast walls. Localism remains but not as heavy as years ago. Venue for the WQS circuit.',
        images: [{
            url: 'https://margruesa.com/wp-content/uploads/2015/10/confital-pacotwo_J2G3734.jpg',
            title: 'Pacotwo'
        }],
        location: {
            type: 'Point',
            coordinates: [28.158563, -15.434671]
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 310,
        windDirections: 150,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Safi',
        description: 'Safi’s “Garden” remained semi-secret for a long time, with those in the know understandably protective of the long, ultra-fast, throaty barrels that fire down the point north of Safi. Unfortunately, it is very fickle, only breaking in big swells at low tide. There are more rights in the area under similar conditions.',
        images: [{
            url: 'http://www.surfsafi.com/data1/images/surf_safi_scool__03_.jpg',
            title: 'safi surf school'
        }],
        location: {
            type: 'Point',
            coordinates: []
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 270,
        windDirections: 160,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Low tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Imsouane',
        description: 'Last stop before Tarhazoute, Immesouane remained authentic until the modern fishing port was built. Fortunately the long, mellow rights keep wrapping into the well-protected south-facing bay, while several well-defined peaks grace the cathedral side.',
        images: [{
            url: 'https://i0.wp.com/www.todosurf.com/wp-content/uploads/2019/10/Imsouane.png?fit=1342%2C812&ssl=1',
            title: 'travel morocco'
        }],
        location: {
            type: 'Point',
            coordinates: [30.837402, -9.821941]
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 240,
        windDirections: 30,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Empty',
        quality: 4,
        level: 'All surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Anchor Point',
        description: 'A medium to large, long period NW swell is what’s needed to light-up this world-class right, first surfed by Aussies in the 1960’s. From the steep take-off at the outside peak, a seemingly endless succession of speed walls and cutback hooks present themselves. Occasional emerald green rooms appear on the sandy sections down the point. It’s easier to come in at one of the coves and walk back to jump off at the end between sets. Works on all but high tides, unless it’s huge, which is when it may be possible to ride back to Tarhazoute.',
        images: [{
            url: 'https://www.surfholidays.com/assets/images/blog/2019-11-06-anchor-point-1-jpg.jpg',
            title: 'Salt shots'
        }],
        location: {
            type: 'Point',
            coordinates: []
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 270,
        windDirections: 60,
        swellRange: '1-4',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'All surfers',
        tide: 'Low to mid tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Meteorites',
        description: ' If you’re not familiar with Mauritania, it is a country on the Atlantic coastline of West Africa, sandwiched between Western Sahara, Morocco and Senegal, not a known place for travelling surfers and until then was completely off the surfing grid.John Callahan (Hawaiian born surf photographer ), Thierry Vergnol (a French surfer born and raised in Mauritania) and Sam Bleakley (UK born travel writer/surfer) stumbled across old shipwrecks that had run a ground right in the middle of a long right hander labelled ‘Meteorites’ on a recent trip to Mauritania . Thierry claims “If it wasn’t for the shipwrecks this wave could’ve been one of the longest righthanders in northern Africa”',
        images: [{
            url: 'https://www.garagemovies.com/articles/wp-content/uploads/2015/07/emi_mauritania_CIMG6024_.jpg',
            title: 'John Callahan'
        }],
        location: {
            type: 'Point',
            coordinates: [19.138069, -16.276876]
        },
        region: 'North Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 280,
        windDirections: 140,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Empty',
        quality: 4,
        level: 'All surfers',
        tide: 'Low to mid tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Skeleton Bay',
        description: 'Skeleton Bay in Swakopmund is an exposed point break that has inconsistent surf.One of the longest lefts in Africa. Winter is the best time of year for surfing here. Offshore winds blow from the northeast and there is no shelter here from cross shore breezes. Light onshore winds ruin the qulaity Groundswells more frequent than windswells and the ideal swell angle is from the southwest. Good surf at all stages of the tide. When the surf is up, it can get quite busy in the water.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?key=skeleton-bay-cover.jpg&type=EE_COVER&resize_type=COVER',
            title: 'Matt Rhodes'
        }],
        location: {
            type: 'Point',
            coordinates: [-22.937464, 14.419000]
        },
        region: 'Southern Africa',
        continent: 'Africa',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 80,
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
        title: 'Cokes',
        description: 'Another 30 minutes sail north, the last pass is the safari boat favourite because it catches more S swell (and wind unfortunately!). Coke’s (or Cola’s, depending on your taste) has often been rated as the hardest breaking wave in North Male with a vert take-off, high barrel factor and nice shape over the shallow reef. 2 new guest-houses and local crew add to the often crowded vibe and there’s strong currents on the tide drop – experienced, fit surfers only.',
        images: [{
            url: 'https://nomadsurfers.com/wp-content/uploads/2016/01/slide1-6.jpg',
            title: 'Nomad surfers'
        }],
        location: {
            type: 'Point',
            coordinates: [4.370586, 73.655893]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 160,
        windDirections: 310,
        swellRange: '1-3',
        bestSeason: 'Summer',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Cloud 9',
        description: 'Cloud Nine is a perfect, top to bottom, barrelling peak that’s short but sweet when the conditions align. Ideal swell direction is NE, as too much E tends to by-pass Cloud 9 a bit and focus on the adjacent reef of Quicksilver, while too much N can slam it shut. Higher tides also improve makeability as the coral lurks challengingly close to the open air. W wind holds up the coveted rights nicely and although the lefts are shorter, they are just as hollow off the peak, before quickly shutting down. Sucks in the swell and can handle pretty large faces before maxing out. Confident, nimble, experienced surfers will love it, while intermediates may struggle.',
        images: [{
            url: 'https://www.surftotal.com/en/media/k2/items/cache/ba5d081149227997da787630c1f7a90b_XL.jpg',
            title: 'Tim Bennet'
        }],
        location: {
            type: 'Point',
            coordinates: [9.813731, 126.166957]
        },
        region: 'Pacific Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 40,
        windDirections: 270,
        swellRange: '1-3',
        bestSeason: 'Spring',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Mid to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Red Bluff',
        description: 'Red Bluff in North West is an exposed reef break that has dependable surf The best wind direction is from the east southeast. Groundswells more frequent than windswells and the best swell direction is from the southwest. A reef breaks left. Best around mid tide. Unlikely to be too crowded, even when the surf is up. Hazards include urchins, rips, rocks and sharks.',
        images: [{
            url: 'http://galaxypro.s3.amazonaws.com/spot-media/181/gnaraloo-970x970.jpg',
            title: 'Keby Brown'
        }],
        location: {
            type: 'Point',
            coordinates: [-24.031099, 113.440478]
        },
        region: 'West OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 210,
        windDirections: 80,
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
        title: 'Cactus',
        description: 'Just on the other side of the spooky, shark infested channel is Caves, a phenomenal right which is the locals favourite and regarded as the best spot in the Cactus area. With morning offshores and a decent swell, it can become a reeling world-class, voluminous barrel breaking over a shallow ledge. Caves holds a good size, prefers lower tides and must be offshore NE. There’s also a localism factor to take into account, as guys have settled down here purely to surf this spot and they enforce strict laws about wave priority.',
        images: [{
            url: 'https://www.theinertia.com/wp-content/uploads/2015/09/Cactus.jpg',
            title: 'John Witzig'
        }],
        location: {
            type: 'Point',
            coordinates: [-32.080385, 132.977004]
        },
        region: 'South OZ',
        continent: 'AustraliaNZ',
        type: 'Slab',
        seaBed: 'Reef',
        swellDirections: 210,
        windDirections: 30,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Empty',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Snapper Rocks',
        description: 'Snapper has had a personality make-over ever since the sand started flowing from the Tweed and is no longer second fiddle to Kirra when it comes to dredgy barrels. It starts from behind the rock, where just a few locals have dialled the launch into a square, thick-lipped pit before the backwash hits and twists the barrel just as it emerges out into the sandy expanses of what has been dubbed the Superbank. A frothing pack of rippers and longboarders then pounce on anything that moves, slashing and mainly burning any surfer perceived to be weak or undeserving. It then opens up to 2 parts wall 1 part barrel as it progresses 200m down towards the next rocks at Little Marley, before traversing Rainbow Bay down to Greenmount for a further 400m of cruise and crack',
        images: [{
            url: 'https://img.redbull.com/images/c_crop,x_0,y_90,h_719,w_1279/c_fill,w_860,h_573/q_auto,f_auto/redbullcom/2016/01/06/1331768866796_3/a-photo-we-love-heaven-and-hell-at-the-superbank',
            title: 'Andrew Shield'
        }],
        location: {
            type: 'Point',
            coordinates: [-28.161844, 153.549429]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 90,
        windDirections: 230,
        swellRange: '1-3',
        bestSeason: 'Spring',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
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
    //     region: 'North',
    //     continent: 'Pacific',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 210,
    //     windDirections: 80,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa',
    //     isAccepted: true
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
    //     region: 'South',
    //     continent: 'Pacific',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 210,
    //     windDirections: 80,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa',
    //     isAccepted: true
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
    //     region: 'North',
    //     continent: 'America',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 210,
    //     windDirections: 80,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa',
    //     isAccepted: true
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
    //     region: 'Central',
    //     continent: 'America',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 210,
    //     windDirections: 80,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa',
    //     isAccepted: true
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
    //     region: 'South',
    //     continent: 'America',
    //     type: 'Pointbreak',
    //     seaBed: 'Sand',
    //     swellDirections: 210,
    //     windDirections: 80,
    //     swellRange: '1-3',
    //     bestSeason: 'Autumn',
    //     crowd: 'Fairly crowded',
    //     quality: 4,
    //     level: 'Experienced surfers',
    //     tide: 'All tides',
    //     createdBy: '603d1af4e72dca32acd44dfa',
    //     isAccepted: true
    // }
];

Waves
    .create(waves)
    .then(allWavesCreated => {
        console.log(`Created ${allWavesCreated.length} waves`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))