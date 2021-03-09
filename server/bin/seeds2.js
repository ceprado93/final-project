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
        swellDirections: 270,
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
    {
        title: 'Pipeline',
        description: 'The most famous and infamous peak on the planet explodes onto an uneven, lava-slab reef a scant 80m offshore, forming the benchmark by which all other waves are measured. The left at Pipe is best awakened by swells with a generous helping of W in them, as too much N will cause a grisly shutdown over the dangerous, cave-pocked section of the reef. Outer reefs filter, bend and reform arriving swells, focusing energy and extra height on the peak, before abruptly releasing a lip that guillotines mercilessly along the first section until the explosion of spit heralds the shoulder and room for a turn or two.',
        images: [{
            url: 'https://images.squarespace-cdn.com/content/v1/527c03e4e4b03247a686bb74/1560538123984-M5KSWS0S6VA1SA80D4N8/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/pipeline+GloryA.JPG?format=1000w',
            title: 'Brent Bielmann'
        }],
        location: {
            type: 'Point',
            coordinates: [21.660013 - 1.58056870]
        },
        region: 'North',
        continent: 'Pacific',
        type: 'A-frame',
        seaBed: 'Reef',
        swellDirections: 320,
        windDirections: 160,
        swellRange: '1-6',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Teahupoo',
        description: 'Every once in a while a new spot bursts into the surf worlds psyche and totally redefines what is possible and where the limits are.Teahupoo has roared out of the deep blue and gobbled up all contenders snatching the belt and the crown for the Worlds Heaviest Wave. Many surfers will remember their first glimpse of this freak of nature, most probably encapsulated by the infamous Laird Hamilton tow-in shots that graced the cover of many surf mags in 2000. What sets Teahupoo aside is the sheer power and ferocity of the incoming S swell that throws more out than up, once it reaches the overhead range. Maximum size is a moot point as it makes a mockery of most face measurements, containing a lip a few feet thick and a shape more rectangular than almond. More S in the swell will calm the beast slightly, but it is the straight on SWers that slam the reef and open up the caverns along the short 75-100m run for your life line- up.',
        images: [{
            url: 'https://cdn1.theinertia.com/wp-content/gallery/teahupoo/ben1.jpg',
            title: 'Ben Thouard'
        }],
        location: {
            type: 'Point',
            coordinates: [-17.866758, -149.253647]
        },
        region: 'South',
        continent: 'Pacific',
        type: 'Slab',
        seaBed: 'Reef',
        swellDirections: 210,
        windDirections: 80,
        swellRange: '1-7+',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
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
        region: 'North',
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
        region: 'Central',
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
        region: 'South',
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
        title: 'The Box',
        description: 'Mutant Margaret River righthand slab that earns its name from the square-shaped pits, just across the bay from Surfers Point. Make the air-drop then negotiate the dry sucks, boils or stepped faces to claim serious shack time. The lip is so thick and loves nothing better than to hurl the pit-jockeys onto the shelf, with or without a few inches of water.',
        images: [{
            url: 'https://www.margaretrivermail.com.au/images/transform/v1/crop/frm/wXRNchq95bZhpeysFncAhm/3793ca2b-eb1e-4dd5-b80e-ba70f61b83c6.jpg/r0_0_3667_2362_w1200_h678_fmax.jpg',
            title: 'margaret river mail'
        }],
        location: {
            type: 'Point',
            coordinates: [-33.971608, 114.979458]
        },
        region: 'West OZ',
        continent: 'AustraliaNZ',
        type: 'Slab',
        seaBed: 'Reef',
        swellDirections: 210,
        windDirections: 80,
        swellRange: '1-3',
        bestSeason: 'Autumn',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Pros',
        tide: 'High tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Main break',
        description: 'Sitting 10km (6mi) west of the town of Margaret River, the famous Margaret River lefts known as Surfers Point can be found, grinding down the reef. It is a peak in swells up to 6ft (2m) but Margaret’s is all about size and the lefts will handle plenty of that. Heartstopping drops, lumpy bowls and cutback walls are all part of the waves’ personality and it can handle a healthy dose of onshore wind, maintaining shape and some face smoothness for long, swooping turns. Watch out for speed bumps when cranking off the bottom and keep an eye on the horizon. Getting caught inside is no fun and positively dangerous if taking on the rights. Best conditions will be solid W swell, skimpy E wind and mid to high tide to create those picture perfect barrel, wall, barrel, shoulder rides that you see TC riding in the movies.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2018/04/06165023/01-Lineup-MargaretRiver-20170330-2_SLOANE.jpg',
            title: 'Ed Sloane'
        }],
        location: {
            type: 'Point',
            coordinates: [-33.976752, 114.982059]
        },
        region: 'West OZ',
        continent: 'AustraliaNZ',
        type: 'A-frame',
        seaBed: 'Rocks',
        swellDirections: 210,
        windDirections: 80,
        swellRange: '1-5',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
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
        seaBed: 'Sand and Rocks',
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
        title: 'Bells beach',
        description: 'Victoria’s most famous surf spot is a classic and consistent right point that breaks on almost any tide, any wind and any decent swell from SE-SW. It’s a long wave broken into 3 sections (which may just link up in huge swells), starting outside at Rincon, leading into Bells Bowl and finishing in the beach shorebreak.Power is always associated with this wave and few escape the flogging of an outside set on the head and gruelling paddle outs as it grows beyond double overhead.When small it is playful and ripable, offering endless carve and cutback corners along a lengthy platform reef that is prone to some long, unmakeable sections.Will be at it best in wrapping SW swell and NW winds, but will still have takers in ugly onshore conditions as well. ',
        images: [{
            url: 'https://d3qf8nvav5av0u.cloudfront.net/image/280223ca1763a2ad66032a29b7a40918.jpg?&x=1280&y=720&icq=74&sig=99896af8378ad41ea468a99b67c12b9d',
            title: 'Ed Sloane'
        }],
        location: {
            type: 'Point',
            coordinates: [-38.371679, 144.283252]
        },
        region: 'South OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 180,
        windDirections: 340,
        swellRange: '1-5',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Mid to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Winkipop',
        description: 'Directly next door to Bells is Winkipop, a long, fast and hollow, point- style reefbreak that can handle solid swells, over the shallow reef.Higher tides, 6 - 8ft(2 - 2.5m) and NW winds will create warp speed walls with impossibly long, makeable barrel sections that the locals hunt and slay with consummate ease.Like Bells, it breaks up into sections with the obvious Uppers and Lowers denoting where along the 400 odd meters of rocky shelf you may be sitting or more likely paddling against the constant sweep of the rip.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?id=325092&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
            title: 'Ed Sloane'
        }],
        location: {
            type: 'Point',
            coordinates: [-38.368406, 144.287398]
        },
        region: 'South OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand and rocks',
        swellDirections: 210,
        windDirections: 350,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'Mid to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Shipstern Bluff',
        description: 'Shipstern Bluff or Fluffys, an ironic tribute to its power, has become one of the worlds iconic waves, often being compared with Jaws and Teahupoo for out - and - out gnarliness.When the proper 4m + SW swells arrive, it is rarely ridden by paddle surfers and is the domain of a few crazy tow-in crews.Swells abruptly hit the granite ledge, only a few metres off a spectacular boulder - piled headland, creating a crazily difficult ride that features below sea - level surges, massive steps in the face and two - storey, double barrels with a malevolent nature.Its invaluable to have the whip in to the first peak, which then briefly draws breath before exhaling deeply over the dreaded step where being strapped is even more essential. Even Kelly Slater got caught out paddling this beast.',
        images: [{
            url: 'https://img.redbull.com/images/c_crop,x_0,y_0,h_3456,w_5184/c_fill,w_790,h_527/q_auto,f_auto/redbullcom/2018/07/26/5e719e49-c77a-4b35-a9bf-4912449c0fe5/tyler-holmer-cross-2014',
            title: 'Andrew Chisholm'
        }],
        location: {
            type: 'Point',
            coordinates: [-43.209519, 147.753236]
        },
        region: 'South OZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 210,
        windDirections: 350,
        swellRange: '1-5',
        bestSeason: 'Winter',
        crowd: 'Empty',
        quality: 5,
        level: 'Pros',
        tide: 'High tide',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Aussie Pipe',
        description: 'The main reason to hang around Jervis Bay and Booderee National Park is to surf the all-time classic reefbreak Black Rock (aka Aussie Pipe, Wreck Bay or Summercloud Bay). It is one of the hollowest and most photogenic waves in Australia, breaking intensely over a shallow cunjevoi and urchin-infested bottom. As the land went back to its traditional owners in 1955, Pipeline is also the unofficial home of Indigenous surfing and the local surfers can be protective, especially when the crowd appears on S swells and NE seabreezes at mid tide.',
        images: [{
            url: 'https://images.squarespace-cdn.com/content/v1/55dfeba5e4b079b5c6ef78bc/1448776657392-4PXSZENPO6WSS0NX1ZV3/ke17ZwdGBToddI8pDm48kKV0nEQLrZCZyN20-sdpYlF7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ivq7Q1ckvJa8MA8qNUlEOZ5IGU-1O_EUPktdRWJqBeswtSHa-_ZlYvzXGRIA25Fyg/image-asset.jpeg?format=1500w',
            title: 'Surf sail roam'
        }],
        location: {
            type: 'Point',
            coordinates: [-35.177277, 150.688464]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Slab',
        seaBed: 'Reef',
        swellDirections: 160,
        windDirections: 10,
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
        title: 'Little Avalon',
        description: 'Super-sucky, slab-hugging, righthand pit that peels off below the cliffs to the south of the main beach. Lurches onto the ledge so quickly that air-drops are inevitable and it has become the haunt of serious bodyboarders, looking to thread the cavernous barrels beneath thicker than normal lips.',
        images: [{
            url: 'https://ec2-im-1.msw.ms/md/image.php?id=317634&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
            title: 'Sol davey'
        }],
        location: {
            type: 'Point',
            coordinates: [-33.640203, 151.333586]
        },
        region: 'East OZ',
        continent: 'AustraliaNZ',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 160,
        windDirections: 220,
        swellRange: '1-2',
        bestSeason: 'Autumn',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'Mid tide',
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
        region: 'NZ',
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
        title: 'Raglan',
        description: 'Best left in NZ. Covering the famous point from indicators and including Whale Bay and Manu Bay',
        images: [{
            url: 'https://www.greenwaveraglan.com/wp-content/uploads/2016/01/Rag-lineup-1200x695.jpg',
            title: 'Zennor Wenham'
        }],
        location: {
            type: 'Point',
            coordinates: [-37.820828, 174.812378]
        },
        region: 'NZ',
        continent: 'AustraliaNZ',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 210,
        windDirections: 140,
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
        region: 'NZ',
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
        region: 'NZ',
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
        region: 'NZ',
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
    },
    {
        title: 'Jaws',
        description: 'The most notorious spot on Maui is a wave most surfers are extremely unlikely to ride. With the development of tow-in surfing in the early 90s, Jaws burst onto the scene, amazing the world with the sheer magnitude of the waves that were being ridden there by a select group of windsurfing and surfing hell- men.As big wave surfing has developed, Jaws has maintained the biggest and baddest tag, even providing 4 of the 5 nominations for the XXL awards and winning biggest wave in ‘03, ’04, ’05 and ’10 plus monster paddle(x2), tube and ride categories in 2011(and 2012).Takes any N swell, with more W favouring the long lefts, but it is the perfect, house - sized right tubes that most people associate with Jaws.Other waves have been discovered that challenge Jaws on height supremacy, but few can match its steroidal perfection.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2017/10/26171851/klein_maui_jaws_feb2016_015453.jpg',
            title: 'Klein'
        }],
        location: {
            type: 'Point',
            coordinates: [20.943720, -156.298181]
        },
        region: 'North',
        continent: 'Pacific',
        type: 'A-frame',
        seaBed: 'Rocks',
        swellDirections: 340,
        windDirections: 180,
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
        title: 'Sunset Beach',
        description: 'Past Kammieland, a fun near-shore peak opposite Kammies Market, the famous Sunset Beach starts its curve northwards.Incorporating Vals, Inside Bowl, West Peak, Middles and Sunset Point on the inside, this break has more personalities than reality TV.Under headhigh, NE windswell will still break at The Point, then overhead, W- NW swells start popping up over the fingers of reef at Middles, before double - overhead awakens Inside Bowl and maybe West Peak on a long period W - NW swell.Sunsets default mode is unpredictable as N swells will break up along the ragged hem of reef, while W will launch threatening slabs from wide, punishing the reckless in the turbulent inside. When the long, roller-coaster rights lead into the hollow Inside Bowl, board, leash and body snapping power is apparent, with many shutdowns and unmakeable sections before the wave fattens out into the channel. ',
        images: [{
            url: 'https://www.perfectwavetravel.com/wp-content/uploads/2019/12/USA-Hawaii-sunsetbeach.jpg',
            title: 'Brent Bielmann'
        }],
        location: {
            type: 'Point',
            coordinates: [21.678018, -158.040857]
        },
        region: 'North',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 330,
        windDirections: 180,
        swellRange: '1-7',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Honolua',
        description: 'Classical outer island perfection that often makes it into the top 5 waves in the world list. Its combination of length and ultra round cylindrical sections set in the beautiful amphitheatre of the cliff- lined Honolua Bay make it a perennial favourite of all who are lucky enough to surf it.The first section, Coconuts, breaks in front of the cliffs with the most size, accompanied by the most wind as the trades are funnelled down the valley.It then wraps into the bay where it hits Outside, the next hollow section.Itll either result in a classic barrel or the lip will slam down and propel the unlucky towards the infamous Cave stretch, where many a surfboard met an untimely end in the pre-leash days! Cave is the hollowest and most crowded section, despite being a fair bit smaller than Coconuts and leads into the inner Keiki Bowl.',
        images: [{
            url: 'https://www.theinertia.com/wp-content/uploads/2015/01/Spot-Check-Honolua-4-of-15.jpg',
            title: 'The inertia'
        }],
        location: {
            type: 'Point',
            coordinates: [21.016863, -156.640141]
        },
        region: 'North',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 350,
        windDirections: 80,
        swellRange: '1-5',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 4,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Cortes Bank',
        description: 'Cortez Bank in San Diego County is a reef break that has quite reliable surf. Offshore winds are from the east. The ideal swell direction from the west. Unlikely to be too crowded, even when the surf is up. Beware of rocks and sharks.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2019/08/13133118/AERIAL-1.jpg',
            title: 'Larry Moore'
        }],
        location: {
            type: 'Point',
            coordinates: [32.465979, -119.165781]
        },
        region: 'North',
        continent: 'Pacific',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 270,
        windDirections: 80,
        swellRange: '4-8+',
        bestSeason: 'Winter',
        crowd: 'Empty',
        quality: 4,
        level: 'Pros',
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