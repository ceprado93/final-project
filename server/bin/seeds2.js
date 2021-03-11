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
    {
        title: 'Chicama',
        description: 'Chicama is to be found halfway between Lima and the border of Ecuador. The landscape around Chicama is extremely arid, the water is unusually cold and sea fog often shrouds the extensive line-up. Ask any surf traveller where the longest wave in the world is and the answer is invariably Chicama. The actual distance between the furthest take-off point and the fishing jetty where the wave ends is 4km (2.5 mi), although to be fair no one has actually ridden it for that distance. On good days most people end up catching 3-5 different waves on a journey down the point, surfing through 4 defined breaks and using the constant current to drift down to the next take-off point. Furthest out on the tip is El Cape aka Malpaso, which is always the biggest, but not necessarily the best. It draws off a cluster of rocks and starts fast and sucky before hitting the sandier shallows inside the point and backing off into what will become a familiar scene - long sections of slightly tapered, lip-feathering walls that demand a repetitive approach of drive, lip bash, float and snap until a temporary shoulder gives respite for a roundhouse or two.',
        images: [{
            url: 'https://i.nextmedia.com.au/Utils/ImageResizer.ashx?n=https%3A%2F%2Fi.nextmedia.com.au%2FNews%2F3910a2aa8d732fe98940c5313ce71397.jpg&h=630&w=1120&c=1&s=1',
            title: 'Ben Simon'
        }],
        location: {
            type: 'Point',
            coordinates: [-7.704584, -79.452362]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 230,
        windDirections: 60,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'All surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Pico Alto',
        description: 'Big wave spot that breaks 500m offshore. Check Senoritas, Caballeros and Playa Norte too',
        images: [{
            url: 'https://cosasbucket.s3.amazonaws.com/wp-content/uploads/2018/08/24115250/PICO-ALTO-3.jpg',
            title: 'Raul Cachay'
        }],
        location: {
            type: 'Point',
            coordinates: [-12.396169, -76.797579]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Sand',
        swellDirections: 230,
        windDirections: 60,
        swellRange: '2-7+',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Arica',
        description: 'Sometimes nicknamed the Chilean Pipeline, El Gringo is another tubular A-frame crashing close to the shore with serious power. It’s a fast wave too, pushing surfers to go for broke and score a great barrel or get slammed on the reef. The left is the real deal with compression tubes and a more predictable rate of speed and openness, once the lurching air-drop has been negotiated. Paddling out to the left is fraught with nose-crunching duck dives and currents that can hold you in the impact zone for an eternity. Meanwhile, the symmetry-balancing right holds a bigger SW swell and throws wide before triangulating the wall into deeper water that provides a far safer paddling channel back to the peak. Tide is dependant on size, as it is usually the small swells that lure victims onto the barely watered rocky platform.',
        images: [{
            url: 'https://totalsurfcamp.com/sites/default/files/surfcamps/%5Btitle-raw%5D/arica-surf-camp-chile.jpg',
            title: 'Arica surf'
        }],
        location: {
            type: 'Point',
            coordinates: []
        },
        region: 'South America',
        continent: 'America',
        type: 'Slab',
        seaBed: 'Rocks',
        swellDirections: 230,
        windDirections: 100,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Pros',
        tide: 'High tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Punta de lobos',
        description: 'Proclaimed The best left pointbreak in Chile by local big-wave maestro Ramon Navarro and few could argue when witnessing a monster SW swell detonating way outside the iconic rocks that guard the entrance to the bay. Lobos is not just for XXL days either, with a ripable, sand-bottomed section known as Diamante on the inside for the groms and the pilots. Further up the point, the El Mirador section has summer peelers rotating past the shoreline rock clusters, or muscle-bound walls linking from the rocks all the way to the beach sections in a lined-up SW-W swell. Too much S swell will ramp up the current, while W will shut down the outside barrels so SW @ 235º should be perfect. Prefers lower tides, but will break right through. The paddle-out from the island rocks (Los Morros) has achieved legendary status for sketchiness - dashing across the slippery shelf from a hiding place in the rocks when there is a lull has caught many out. Experts only when it gets above double-overhead.',
        images: [{
            url: 'https://www.fmdos.cl/wp-content/uploads/2017/11/punta-lobs-1.jpg',
            title: 'Rodrigo Farias'
        }],
        location: {
            type: 'Point',
            coordinates: [-34.423839, -72.049381]
        },
        region: 'South America',
        continent: 'America',
        type: 'Pointbreak',
        seaBed: 'Rocks',
        swellDirections: 235,
        windDirections: 120,
        swellRange: '2-7+',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Pros',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Sultans',
        description: 'Impressive, point-style, righthand reefbreak that forms half of the Thamburudhoo Island double act along with Honky’s. Sultans regularly delivers the biggest, longest waves in North Male and is one of only 3 righthanders that will work when the SW monsoon blows throughout the middle months of the year. It starts with a swift, steep, yet manageable drop into a carving wall that throws some nice hooks on the faster inside reef, a full 300m down the line on big SE swells. Handles as much size as this corner of the Indian Ocean can muster, when waiting for a tip to tail bomb will be extremely worth it.',
        images: [{
            url: 'https://1.bp.blogspot.com/-lFU_funiLwk/X7JPL_LqURI/AAAAAAAB4-4/lnN5sUvEZuQr7PS6lqu8qNg3EYJDeDupwCLcBGAsYHQ/s0/sultans-Thanburudhoo.jpg',
            title: 'Surf 30'
        }],
        location: {
            type: 'Point',
            coordinates: [4.312835, 73.585865]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 150,
        windDirections: 240,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Nias',
        description: 'It’s been called many things including Nias, Lagundri, Sorake and most often just The Point, but whatever name is used, it always ends up in the world’s top 10 waves. Here’s why; the paddle out through the keyhole is dry hair simplicity, the take-off is predictable, the barrel is a flawless almond shape that peels with precision at the perfect speed for up to 10 seconds, the reef is well covered, even though the recent up-thrust has made it barrel harder from waist high up to double overhead and beyond, plus the light seaward current from the channel deposits you nicely back at the peak, ironing out any shoulder bump on the way. It’s all tides, all (light) winds, all year (with luck) and all too easy to stay encamped in one of the many losmens or hotels that line Sorake Beach. Negatives include the crowd, some localism, flying boards, sea-lice, the crowd…. Losers in the new reef levels include Kiddieland, which has been replaced by a softer inside section of the point and The Machine, an ultra hollow left that now needs spring high tides and a macking swell.',
        images: [{
            url: 'https://i1.wp.com/www.todosurf.com/wp-content/uploads/2018/08/4369.jpg?fit=1160%2C754&ssl=1',
            title: 'Local photograher'
        }],
        location: {
            type: 'Point',
            coordinates: [0.569096, 97.733515]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 180,
        windDirections: 350,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Hollow trees',
        description: 'Lance’s Right (or HT’s) is the pin-up centrefold for the Mentawai islands, bringing a new machine-like level to the word perfection. At the top of the coral platform, The Office section breathes in sharply, scooping up the next lucky expert who is hoping to be there when it exhales deeply, then launches through the Main Peak and into the inside where the shallowness of the Surgeons Table awaits. Size determines whether these 3 link and if any turns can be attempted. Perfection arrives with 6-8ft of S-SW swell, light W or no wind and at least 2hrs of tide. It’s surprisingly consistent considering the swell refraction required and the afternoon land breezes can clean it up quickly. Dangers are coral heads appearing, trying to duck dive when caught inside and being pushed too deep by the entrenched crowd. Answers are don’t fall, go in over reef to deep paddling channel and surf somewhere else!',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2019/05/04152017/image1.jpeg',
            title: 'surfline'
        }],
        location: {
            type: 'Point',
            coordinates: [-2.375632, 99.859400]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 190,
        windDirections: 240,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'Mid to high tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Macaronis',
        description: 'Machine-like, fun park left with all the rides. Barrel-riding, lip-smacking, air-popping and wall-gouging are religiously practiced by the hordes who come to ride the Mentawai’s most ripable and apparently the world’s funnest wave. The coral platform curves alluringly into the deep bay and the speed at which Macca’s peels is fairly predictable, starting with a perfect pipe section and often ending with a ruler-edge quarter pipe wall. Jostling at the take-off is a given and it is easy to get pushed too deep when it’s smaller. Looking further up the reef it sometimes looks doable and unlikely stories of pros making it right down the reef exist. The reef is sharp and shallow, but somehow less threatening than comparable depth spots. Getting caught inside will usually result in being flushed to the end if the sets are pouring through. Best at head and a half of SW swell, mid tide and E wind, it maxes out at double overhead, when the tubes go square, but will still be fun if there is a direct onshore SW wind. There’s a land camp, good anchorage, viewing tower and a constant supply of hungry surfers wanting their own plate of carbs!',
        images: [{
            url: 'https://i.ytimg.com/vi/EYDYS6h_XFY/maxresdefault.jpg',
            title: 'max res'
        }],
        location: {
            type: 'Point',
            coordinates: [-2.788390, 99.990002]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 240,
        windDirections: 90,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Gland',
        description: 'All arrivals for the G-Land surf camps hit the beach north of the point, allowing expectant newbies their first glimpse of the unfurling barrels from a side-on perspective. Not until you stand on the reef looking front-on does the scale of the wave become apparent. Furthest out to the far left is Kong’s, which is often the messiest section of the reef, peaking up in a slightly haphazard way and capable of more shiftiness. West swell will see it slab and barrel while S will wall and shoulder more. It is the call when swell drops below headhigh (very rare) and the extra water depth makes it less sketchy than other sections. Still has enough power to snap boards on the smallest days, it’s hard to stay lined-up and it’s a long walk or endless paddle.Money Trees is the default setting for most G-Land sessions, attracting the bulk of the campers to what looks like perfect peeling barrels for 2-300m. Depending on the tide and swell direction, the tubes can undulate from cavernous pits to tight, high envelopes and getting caught behind is guaranteed, so time any cutbacks carefully.',
        images: [{
            url: 'http://galaxypro.s3.amazonaws.com/spot-media/427/gland-970x970.jpg',
            title: 'Local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [-8.729080, 114.344022]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 250,
        windDirections: 120,
        swellRange: '1-3',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Uluwatu',
        description: 'Ultra-consistent “Ulu’s” is the focal point of Balinese surfing thanks to it’s ability to handle any size swell from small to large and spread the biggest of crowds across a wide playing field of reef. It’s sectioning, hollow walls always produce great waves, starting with faster, high tide, occasional tuck-ins up at Temples that lead down to the muscular, steep drops of The Peak that offers open face with hollow pockets directly in front of the famous cave. It can sometimes jump the deadspot and barrel through to the start of the Racetrack, which twists and bends the wailing walls in an ever increasing race against the falling curtain. When swells exceed the 8-10ft mark, Outside Corner will rumble into life, with heavy, thick-lipped sections at low tide for experts on sturdy pintails. Main hazard is the crowd, followed by the reef and the constant higher tide sweep that requires aiming for a spot well south of the cave to come in. Blow it and you’ll paddle another 15min circuit.',
        images: [{
            url: 'https://www.surfholidays.com/assets/images/blog/2016-06-03-1440x960_indonesia-north-kuta-the-balicamp-snbmwo4wx.jpg',
            title: 'Local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [-8.814451, 115.087235]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 120,
        windDirections: 240,
        swellRange: '1-6',
        bestSeason: 'Winter',
        crowd: 'Full',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'All tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Dessert Point',
        description: 'When it is on, Desert Point is indeed one of the longest, makeable lefthand barrels on the planet with over 20secs tube time possible on one wave. The take-off area can shift around a little but generally rewards a deep attack. High speed is the key as it quickly winds up and starts peeling mercilessly across the shallow reef, cutting a trench in the coral where the mechanical lips have been slamming for centuries. The caverns get larger and faster as the inside section commits the tube rider to a lock-in that usually ends on dry reef. Only surfers good enough to deal with the tricky exit, the shallow reef, evil out-going currents and plenty of wave-starved rippers should apply. Desert’s has a reputation for inconsistency, with only the biggest groundswells igniting it and high tides making it disappear as fast as it came. Surf charters keep flocking from Bali and dedicated hardcore surfers wait for weeks in basic beach shacks, forming a frenzied, barrel-hungry pack on those rare classic days. Boats have access to the sheltered bay of islands behind Bangko Bangko where there are some big swell, high tide options for intermediates around the other Gili islands like Ringgit.',
        images: [{
            url: 'https://d14fqx6aetz9ka.cloudfront.net/wp-content/uploads/2020/05/18110135/03-Desert-Point-Lineup-copy.jpg',
            title: 'Heick archive'
        }],
        location: {
            type: 'Point',
            coordinates: [-8.750561, 115.823645]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 190,
        windDirections: 80,
        swellRange: '1-4',
        bestSeason: 'Winter',
        crowd: 'Fairly crowded',
        quality: 5,
        level: 'Experienced surfers',
        tide: 'Mid to low tides',
        createdBy: '603d1af4e72dca32acd44dfa',
        isAccepted: true
    },
    {
        title: 'Lakey Peak',
        description: 'Perfect Lakey Peak peels off short, 30-40m lefts and rights into channels either side. The right will often throw up backdoor tube rides but gets too shallow at low tide, when the left is churning out predictable, ideal speed barrel rides. Mid tide lip-smacking sessions will appeal to intermediates and the flattish reef is user-friendly, except during full or new moon phases. Getting out to the Peak is easy with only a short 450m paddle or take the zodiac for around $2 return. Lakey Peak can hold juicy sized waves, but the optimum time to hit it is when its in that perfect headhigh plus range.',
        images: [{
            url: 'http://galaxypro.s3.amazonaws.com/spot-media/361/lakeypeak-970x970.jpg',
            title: 'local photographer'
        }],
        location: {
            type: 'Point',
            coordinates: [-8.804961, 118.377499]
        },
        region: 'Indian Ocean',
        continent: 'Asia',
        type: 'Pointbreak',
        seaBed: 'Reef',
        swellDirections: 230,
        windDirections: 100,
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