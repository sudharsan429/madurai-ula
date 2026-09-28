// =========================================================================
// Madurai Explorer — Comprehensive Places, Cafes, Modern Madurai & Stays
// With Verified Coordinates, Locations, and Content-Matched Image Metadata
// =========================================================================

const PLACES = [
  {
    id: "meenakshi-temple",
    name: "Meenakshi Amman Temple",
    category: "temples",
    categoryLabel: "TEMPLE",
    image: "images/meenakshi-temple.jpg",
    imageAlt: "Meenakshi Amman Temple gopuram towers against evening sky",
    imageDescription: "Fourteen monumental painted gopurams of Meenakshi Temple rising above the historic heart of Madurai",
    imageSearchKeywords: "Meenakshi Amman Temple gopuram towers Madurai",
    rating: "4.9",
    duration: "Allow 120 minutes",
    distance: "0.0",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "Madurai Main, Madurai, Tamil Nadu 625001",
    latitude: 9.9195,
    longitude: 78.1193,
    distanceFromMeenakshiTemple: 0.0,
    mapLink: "https://maps.google.com/?q=9.9195,78.1193",
    tagline: "The city's beating heart, crowned by fourteen carved gopurams.",
    entryFee: "Free General Entry · Special Darshan ₹100 / ₹50",
    entryFeeShort: "Free · Darshan ₹100",
    description: "Meenakshi Amman Temple is the reason Madurai is often called the temple city. Its fourteen gopurams, the tallest rising over 170 feet, are covered top to bottom in painted stucco figures of gods, demons and dancers. Inside, the Hall of a Thousand Pillars and the golden lotus tank draw pilgrims through halls in continuous worship for over a thousand years.",
    location: "Netaji Road, Madurai Main",
    timings: "5:00 AM – 12:30 PM, 4:00 PM – 9:30 PM",
    highlights: [
      "Meenakshi Shrine",
      "Sundareswarar Shrine",
      "Gopurams",
      "Thousand Pillar Hall",
      "Temple corridors",
      "Sculptures",
      "Temple paintings"
    ]
  },
  {
    id: "gandhi-museum",
    name: "Gandhi Memorial Museum",
    category: "historical",
    categoryLabel: "HISTORY MUSEUM",
    image: "images/gandhi-museum.jpg",
    imageAlt: "Gandhi Memorial Museum housed in historic Rani Mangammal Palace Tamukkam",
    imageDescription: "The pale terracotta and white colonial facade of Rani Mangammal Palace housing the Gandhi Museum in Madurai",
    imageSearchKeywords: "Gandhi Memorial Museum Rani Mangammal Palace Tamukkam Madurai",
    rating: "4.6",
    duration: "Allow 90 minutes",
    distance: "3.1",
    area: "Tamukkam",
    taluk: "Madurai North",
    address: "Tamukkam, Alagar Kovil Road, Madurai, Tamil Nadu 625020",
    latitude: 9.9304,
    longitude: 78.1396,
    distanceFromMeenakshiTemple: 3.1,
    mapLink: "https://maps.google.com/?q=9.9304,78.1396",
    tagline: "The blood-stained shawl Gandhi wore, and the story around it.",
    entryFee: "Free Admission (Photography: ₹50)",
    entryFeeShort: "Free Admission",
    description: "Housed in the 17th-century Rani Mangammal Palace, this museum traces India's independence struggle with a particular focus on Gandhi's ties to Madurai — where he first adopted the loincloth in 1921. Houses personal artefacts and the preserved blood-stained dhoti.",
    location: "Tamukkam, Alagar Kovil Road",
    timings: "10:00 AM – 5:45 PM, closed Fridays",
    highlights: [
      "Gandhi-related exhibits",
      "Freedom movement history",
      "Historical documents",
      "Photographs",
      "Museum galleries"
    ]
  },
  {
    id: "thirumalai-nayak-palace",
    name: "Thirumalai Nayakkar Palace",
    category: "historical",
    categoryLabel: "ROYAL ARCHITECTURE",
    image: "images/thirumalai-nayak-palace.jpg",
    imageAlt: "Thirumalai Nayakkar Palace massive courtyard columns and arched ceilings",
    imageDescription: "Grand stucco columns and ornate Indo-Saracenic arcades of the Swarga Vilasam courtyard in Thirumalai Nayakkar Palace",
    imageSearchKeywords: "Thirumalai Nayakkar Palace courtyard arches Madurai",
    rating: "4.7",
    duration: "Allow 60 minutes",
    distance: "1.2",
    area: "Palace Road",
    taluk: "Madurai South",
    address: "Palace Road, Madurai Main, Madurai, Tamil Nadu 625001",
    latitude: 9.9150,
    longitude: 78.1235,
    distanceFromMeenakshiTemple: 1.2,
    mapLink: "https://maps.google.com/?q=9.9150,78.1235",
    tagline: "A 17th-century Indo-Saracenic courtyard built to impress.",
    entryFee: "₹10 (Adults), ₹5 (Children) · Sound & Light Show ₹50",
    entryFeeShort: "₹10 / ₹5 · Show ₹50",
    description: "Built in 1636 by King Thirumalai Nayak, this palace blends Dravidian and Islamic architectural styles into soaring stucco arches and a vast open courtyard. The scale of the Swarga Vilasam (Celestial Pavilion) still gives a sense of Nayak-era ambition. Evening sound-and-light shows retell the king's story.",
    location: "Palace Road, near Meenakshi Temple",
    timings: "9:00 AM – 5:00 PM (Light show 6:30 PM)",
    highlights: [
      "Massive pillars",
      "Grand courtyard",
      "Stucco work",
      "Arches",
      "Nayak architecture",
      "Evening light-and-sound programmes"
    ]
  },
  {
    id: "vaigai-river",
    name: "Vaigai River Banks",
    category: "nature",
    categoryLabel: "RIVERSIDE & NATURE",
    image: "images/vaigai-river.jpg",
    imageAlt: "Scenic view of the Vaigai River with historic bridges and waterfront palm trees",
    imageDescription: "Sacred waters of the river Vaigai at sunset reflecting historical bridges in Madurai",
    imageSearchKeywords: "Vaigai River Madurai Albert Victor bridge waterfront",
    rating: "4.5",
    duration: "Allow 45 minutes",
    distance: "1.5",
    area: "Vaigai Riverfront",
    taluk: "Madurai North",
    address: "Albert Victor Bridge & North Bank Road, Madurai 625002",
    latitude: 9.9275,
    longitude: 78.1250,
    distanceFromMeenakshiTemple: 1.5,
    mapLink: "https://maps.google.com/?q=9.9275,78.1250",
    tagline: "The river that shaped the city's temple-town layout.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "The Vaigai river runs through the heart of Madurai and has shaped its history, agriculture and temple geography for millennia. The promenade near Albert Victor Bridge offers tranquil sunrise panoramas and is the focal point of the grand Chithirai festival.",
    location: "Vaigai North Bank Promenade",
    timings: "Open all day; best at sunrise or sunset",
    highlights: ["Sunrise river vistas", "Chithirai Festival entry point", "Historic Albert Victor Bridge"]
  },
  {
    id: "alagar-kovil",
    name: "Alagar Kovil (Kallazhagar Temple)",
    category: "temples",
    categoryLabel: "TEMPLE & HILLS",
    image: "images/alagar-kovil.jpg",
    imageAlt: "Alagar Kovil Kallazhagar temple nestled at the base of lush Alagar Hills",
    imageDescription: "Ornate gopuram of Alagar Kovil set against the dense green forested Alagar Hills",
    imageSearchKeywords: "Alagar Kovil Kallazhagar temple Alagar hills Madurai",
    rating: "4.8",
    duration: "Allow 120 minutes",
    distance: "21.0",
    area: "Alagar Kovil",
    taluk: "Madurai North",
    address: "Alagar Hills, Madurai District, Tamil Nadu 625301",
    latitude: 10.0748,
    longitude: 78.2140,
    distanceFromMeenakshiTemple: 21.0,
    mapLink: "https://maps.google.com/?q=10.0748,78.2140",
    tagline: "A forest-edge Vishnu temple with its own hill and legend.",
    entryFee: "Free General Entry · Special Darshan ₹20 / ₹50",
    entryFeeShort: "Free · Darshan ₹20",
    description: "Set at the base of the scenic Alagar Hills northeast of the city, Alagar Kovil is dedicated to Lord Vishnu as Kallazhagar. During the Chithirai festival, the deity travels from here toward Madurai on a golden horse, drawing hundreds of thousands of pilgrims.",
    location: "Alagar Kovil, Alagar Hills",
    timings: "6:00 AM – 12:30 PM, 4:00 PM – 8:00 PM",
    highlights: ["Chithirai festival procession route", "Alagar Hills panoramic backdrop", "Noopura Gangai sacred hill spring"]
  },
  {
    id: "koodal-azhagar-temple",
    name: "Koodal Azhagar Temple",
    category: "temples",
    categoryLabel: "ANCIENT SHRINE",
    image: "images/koodal-azhagar.jpg",
    imageAlt: "Koodal Azhagar Temple three-tiered vimanam tower in central Madurai",
    imageDescription: "Ancient three-tiered vimanam showing Vishnu in standing, sitting and reclining postures",
    imageSearchKeywords: "Koodal Azhagar Temple three tier sanctum Madurai",
    rating: "4.7",
    duration: "Allow 40 minutes",
    distance: "0.9",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Town Hall Road, Periyar, Madurai, Tamil Nadu 625001",
    latitude: 9.9155,
    longitude: 78.1139,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9155,78.1139",
    tagline: "A three-in-one Vishnu shrine hidden in the old town.",
    entryFee: "Free General Entry · Special Darshan ₹20",
    entryFeeShort: "Free · Darshan ₹20",
    description: "This ancient temple is unusual for depicting the deity in three postures — standing, seated and reclining — across three tiers. It sits quietly in Madurai's older residential lanes, a short stroll from Meenakshi Temple.",
    location: "Town Hall Road, Madurai Main",
    timings: "6:00 AM – 1:00 PM, 4:00 PM – 8:30 PM",
    highlights: ["Three-tier sanctum postures", "Intricate Pandya stucco work", "Serene temple tank"]
  },
  {
    id: "pazhamudhir-solai",
    name: "Pazhamudhir Solai Murugan Temple",
    category: "nature",
    categoryLabel: "HILLSIDE SHRINE",
    image: "images/pazhamudhir-solai.jpg",
    imageAlt: "Pazhamudhir Solai temple surrounded by peaceful teak forests in Alagar Hills",
    imageDescription: "Dense forested steps and hillside shrine of Lord Murugan at Pazhamudhir Solai",
    imageSearchKeywords: "Pazhamudhir Solai Arupadaiveedu Murugan temple Alagar hills",
    rating: "4.8",
    duration: "Allow 90 minutes",
    distance: "24.5",
    area: "Alagar Hills",
    taluk: "Madurai North",
    address: "Upper Alagar Hills, Madurai District, Tamil Nadu 625301",
    latitude: 10.0864,
    longitude: 78.2256,
    distanceFromMeenakshiTemple: 24.5,
    mapLink: "https://maps.google.com/?q=10.0864,78.2256",
    tagline: "A hillside Murugan shrine reached by forest steps.",
    entryFee: "Free General Entry",
    entryFeeShort: "Free Entry",
    description: "The sixth holy abode (Arupadaiveedu) of Lord Murugan, Pazhamudhir Solai sits inside a protected forest atop Alagar Hills. Legend links this spot to poetess Avvaiyar and the scorched fruit episode.",
    location: "Upper Alagar Hills",
    timings: "6:00 AM – 7:30 PM",
    highlights: ["Sixth abode of Lord Murugan", "Dense teakwood forest hill drive", "Noopura Gangai holy spring nearby"]
  },
  {
    id: "puthu-mandapam",
    name: "Puthu Mandapam Market",
    category: "shopping",
    categoryLabel: "HANDICRAFT & TEXTILE",
    image: "images/puthu-mandapam.jpg",
    imageAlt: "Historic 400-year-old carved stone pillars of Puthu Mandapam with tailor stalls",
    imageDescription: "Monolithic granite carved pillars inside Puthu Mandapam bustling with sungudi cotton tailors",
    imageSearchKeywords: "Puthu Mandapam market tailors pillars Meenakshi temple Madurai",
    rating: "4.6",
    duration: "Allow 60 minutes",
    distance: "0.2",
    area: "East Tower",
    taluk: "Madurai South",
    address: "Opposite East Tower, Meenakshi Amman Temple, Madurai 625001",
    latitude: 9.9197,
    longitude: 78.1209,
    distanceFromMeenakshiTemple: 0.2,
    mapLink: "https://maps.google.com/?q=9.9197,78.1209",
    tagline: "Tailors and textile stalls inside a 16th-century pillared hall.",
    entryFee: "Free Public Entry",
    entryFeeShort: "Free Entry",
    description: "Built by Thirumalai Nayak facing the Meenakshi Temple's eastern tower, this pillared hall houses rows of tailors and textile stalls. Getting Madurai's famous sungudi cotton stitched happens under carved 400-year-old monolithic columns.",
    location: "East Chithirai Street, Madurai Main",
    timings: "9:30 AM – 9:00 PM",
    highlights: ["Authentic Sungudi cotton sarees", "Express doorstep tailoring", "Carved Nayak-era monolithic pillars"]
  },
  {
    id: "alanganallur-jallikattu",
    name: "Alanganallur Jallikattu Ground",
    category: "historical",
    categoryLabel: "JALLIKATTU ARENA",
    image: "images/jallikattu.jpg",
    imageAlt: "Heroic youth and decorated temple bull in the historic Alanganallur Jallikattu arena",
    imageDescription: "Action in the dusty festive vadivasal arena of Alanganallur with vibrant crowd on balconies",
    imageSearchKeywords: "Alanganallur Jallikattu bull taming arena Pongal Madurai",
    rating: "4.9",
    duration: "Allow 120 minutes",
    distance: "16.5",
    area: "Alanganallur",
    taluk: "Vadipatti",
    address: "Jallikattu Arena, Vadivasal Street, Alanganallur, Madurai 625501",
    latitude: 10.0465,
    longitude: 78.0934,
    distanceFromMeenakshiTemple: 16.5,
    mapLink: "https://maps.google.com/?q=10.0465,78.0934",
    tagline: "The world-famous Jallikattu bull-taming arena of Tamil Nadu.",
    entryFee: "Free Public Viewing (Special Pongal Passes via Govt)",
    entryFeeShort: "Free Viewing",
    description: "Alanganallur is globally famous for hosting the grandest Jallikattu festival every January during Pongal celebrations. Renowned for indigenous Kangayam temple bulls and fearless tamers, the historic vadivasal draws tens of thousands of visitors from across the globe.",
    location: "Alanganallur Vadivasal, Vadipatti Taluk",
    timings: "Open all day; Festival event in mid-January",
    highlights: ["Historic Vadivasal entrance", "Global Pongal Jallikattu arena", "Bronze bull monument"]
  },
  {
    id: "palamedu-jallikattu",
    name: "Palamedu Jallikattu Ground",
    category: "historical",
    categoryLabel: "JALLIKATTU ARENA",
    image: "images/palamedu-jallikattu.jpg",
    imageAlt: "Village crowd gathered along Manjhamalai riverbed for Palamedu Jallikattu",
    imageDescription: "Rural Jallikattu bull run along the dry Manjhamalai river corridor on Mattu Pongal in Palamedu",
    imageSearchKeywords: "Palamedu Jallikattu Manjhamalai riverbed Madurai",
    rating: "4.8",
    duration: "Allow 90 minutes",
    distance: "22.0",
    area: "Palamedu",
    taluk: "Vadipatti",
    address: "Manjhamalai Riverbed Arena, Palamedu, Madurai, Tamil Nadu 625503",
    latitude: 10.1118,
    longitude: 78.1186,
    distanceFromMeenakshiTemple: 22.0,
    mapLink: "https://maps.google.com/?q=10.1118,78.1186",
    tagline: "Sacred rural bull festival celebrated on Mattu Pongal day.",
    entryFee: "Free Public Viewing",
    entryFeeShort: "Free Viewing",
    description: "Palamedu's Jallikattu takes place along the dry riverbed of Manjhamalai river on Mattu Pongal. Deeply rooted in agrarian village rituals, temple bulls are offered first worship before sprinting through the village corridor.",
    location: "Manjhamalai Riverbed, Palamedu",
    timings: "Open all day; Active during Mattu Pongal",
    highlights: ["Manjhamalai riverbed arena", "Traditional village vadivasal", "Centuries-old festival rituals"]
  },
  {
    id: "avaniyapuram-jallikattu",
    name: "Avaniyapuram Jallikattu Ground",
    category: "historical",
    categoryLabel: "JALLIKATTU ARENA",
    image: "images/avaniyapuram-jallikattu.jpg",
    imageAlt: "Avaniyapuram opening Jallikattu bull run on Thai Pongal morning",
    imageDescription: "Opening contest of the Madurai Jallikattu festival season on Thai Pongal day in Avaniyapuram",
    imageSearchKeywords: "Avaniyapuram Jallikattu Thai Pongal festival Madurai",
    rating: "4.7",
    duration: "Allow 90 minutes",
    distance: "6.5",
    area: "Avaniyapuram",
    taluk: "Madurai South",
    address: "Periyar Statue Junction, Avaniyapuram, Madurai, Tamil Nadu 625012",
    latitude: 9.8762,
    longitude: 78.1147,
    distanceFromMeenakshiTemple: 6.5,
    mapLink: "https://maps.google.com/?q=9.8762,78.1147",
    tagline: "The opening clash of the Pongal Jallikattu season in Madurai.",
    entryFee: "Free Public Viewing",
    entryFeeShort: "Free Viewing",
    description: "Avaniyapuram kicks off the Madurai Jallikattu season on Thai Pongal day. Thousands gather around the main village street transformed into a high-octane arena where local youths display traditional bull-embracing courage.",
    location: "Main Street, Avaniyapuram",
    timings: "Open all day; Event on Thai Pongal day",
    highlights: ["Season-opening Jallikattu", "Close proximity to city centre", "Colourful village procession"]
  },
  {
    id: "thirupparankundram-temple",
    name: "Thirupparankundram Murugan Temple",
    category: "temples",
    categoryLabel: "ROCK-CUT SHRINE",
    image: "images/thirupparankundram.jpg",
    imageAlt: "Monolithic granite carved hill shrine of Thirupparankundram Murugan Temple",
    imageDescription: "Rock-cut Pandya architecture and majestic gopuram of the First Arupadaiveedu at Thirupparankundram",
    imageSearchKeywords: "Thirupparankundram Murugan temple rock cut Pandya Madurai",
    rating: "4.9",
    duration: "Allow 90 minutes",
    distance: "8.5",
    area: "Thirupparankundram",
    taluk: "Tirupparankundram",
    address: "Thirupparankundram, Madurai, Tamil Nadu 625005",
    latitude: 9.8767,
    longitude: 78.0712,
    distanceFromMeenakshiTemple: 8.5,
    mapLink: "https://maps.google.com/?q=9.8767,78.0712",
    tagline: "The first of Lord Murugan's six abodes, carved into living stone.",
    entryFee: "Free General Entry · Special Darshan ₹20 / ₹100",
    entryFeeShort: "Free · Darshan ₹20",
    description: "Dating back to the 8th-century Pandya era, this rock-cut temple is the First Arupadaiveedu of Lord Murugan, where his celestial wedding with Deivayanai took place. The sanctum and pillared halls are carved directly into a steep granite hill.",
    location: "Hill Base, Thirupparankundram",
    timings: "5:30 AM – 1:00 PM, 4:00 PM – 9:00 PM",
    highlights: ["First Arupadaiveedu shrine", "Pandya rock-cut architecture", "Hilltop dargah harmony"]
  },
  {
    id: "samanar-hills",
    name: "Samanar Hills (Samanar Malai)",
    category: "nature",
    categoryLabel: "JAIN CAVE & HERITAGE",
    image: "images/samanar-hills.jpg",
    imageAlt: "Ancient Jain rock carvings and stone beds at Samanar Malai Keelakuyilkudi",
    imageDescription: "Granite ridge with 2,000-year-old rock-cut Jain Tirthankara bas-relief carvings and natural lotus pond",
    imageSearchKeywords: "Samanar Malai Keelakuyilkudi Jain caves inscriptions Madurai",
    rating: "4.8",
    duration: "Allow 120 minutes",
    distance: "10.5",
    area: "Keelakuyilkudi",
    taluk: "Madurai West",
    address: "Keelakuyilkudi Village, Madurai, Tamil Nadu 625019",
    latitude: 9.9238,
    longitude: 78.0564,
    distanceFromMeenakshiTemple: 10.5,
    mapLink: "https://maps.google.com/?q=9.9238,78.0564",
    tagline: "2,000-year-old Jain rock carvings, cave beds and a lotus pond.",
    entryFee: "Free Public Access (Protected Monument)",
    entryFeeShort: "Free Access",
    description: "A serene rocky ridge in Keelakuyilkudi where Jain monks lived and meditated from the 1st century BCE to the 9th century CE. Rock-cut bas-relief sculptures of Mahavira and Parsvanatha, ancient Tamil-Brahmi and Vatteluttu inscriptions, and stone beds sit above a calm lotus pond.",
    location: "Keelakuyilkudi Village, west of Madurai",
    timings: "6:00 AM – 6:00 PM",
    highlights: ["Tamil-Brahmi inscriptions", "Rock-cut Jain Tirthankaras", "Natural Lotus spring pond"]
  },
  {
    id: "vaigai-dam",
    name: "Vaigai Dam & Reservoir",
    category: "nature",
    categoryLabel: "RESERVOIR & GARDEN",
    image: "images/vaigai-dam.jpg",
    imageAlt: "Vaigai Dam water reservoir spanning across the valley with lush gardens",
    imageDescription: "Expansive water reservoir and illuminated garden bridges of Vaigai Dam",
    imageSearchKeywords: "Vaigai Dam reservoir garden Andipatti Theni Madurai",
    rating: "4.6",
    duration: "Allow 150 minutes",
    distance: "68.0",
    area: "Andipatti / Sholavandan Border",
    taluk: "Vadipatti",
    address: "Vaigai Dam, Theni-Madurai Border Road, Tamil Nadu 625512",
    latitude: 10.0543,
    longitude: 77.5910,
    distanceFromMeenakshiTemple: 68.0,
    mapLink: "https://maps.google.com/?q=10.0543,77.5910",
    tagline: "The monumental 1959 dam across the sacred river Vaigai.",
    entryFee: "₹10 (Adults), ₹5 (Children)",
    entryFeeShort: "₹10 / ₹5",
    description: "Built across the Vaigai river in 1959, the Vaigai Dam irrigates thousands of acres across Madurai, Dindigul, and Sivagangai. Beautiful manicured gardens, children's park, and viewing bridges make it a favourite day outing for families.",
    location: "Vaigai Reservoir, Vadipatti-Andipatti Highway",
    timings: "6:00 AM – 6:00 PM",
    highlights: ["Panoramic reservoir vistas", "Illuminated garden fountains", "Picnic groves and bridge walks"]
  },
  {
    id: "thirumohur-temple",
    name: "Thirumohur Kalamegaperumal Temple",
    category: "temples",
    categoryLabel: "DIVYA DESAM",
    image: "images/thirumohur-temple.jpg",
    imageAlt: "Thirumohur Kalamegaperumal Temple sacred gopuram and tank",
    imageDescription: "Historic 108 Divya Desam Vishnu temple famous for its 16-armed Chakrathazhwar shrine",
    imageSearchKeywords: "Thirumohur Kalamegaperumal temple Chakrathazhwar Madurai",
    rating: "4.7",
    duration: "Allow 60 minutes",
    distance: "12.0",
    area: "Thirumohur",
    taluk: "Madurai East",
    address: "Thirumohur Village, Madurai, Tamil Nadu 625107",
    latitude: 9.9537,
    longitude: 78.2045,
    distanceFromMeenakshiTemple: 12.0,
    mapLink: "https://maps.google.com/?q=9.9537,78.2045",
    tagline: "One of the 108 Divya Desams famous for its Chakrathazhwar shrine.",
    entryFee: "Free General Entry · Special Darshan ₹20",
    entryFeeShort: "Free · Darshan ₹20",
    description: "Dedicated to Lord Vishnu as Kalamegaperumal and Mohini Avatharam, this 108 Divya Desam temple is famed for its sixteen-armed Chakrathazhwar (Sudarshana) with Narasimha on the reverse, covered in carved astrological mantras.",
    location: "Thirumohur Village, Melur Road",
    timings: "7:00 AM – 12:30 PM, 4:00 PM – 8:30 PM",
    highlights: ["16-armed Chakrathazhwar", "Mohini Avatar legend", "108 Divya Desam pilgrimage"]
  },
  {
    id: "thiruvedagam-temple",
    name: "Thiruvedagam Edaganathar Temple",
    category: "temples",
    categoryLabel: "TEVARAM SHIVA SHRINE",
    image: "images/thiruvedagam-temple.jpg",
    imageAlt: "Thiruvedagam Edaganathar Temple set peacefully on the Vaigai riverbank",
    imageDescription: "Paadal Petra Shiva temple along the Vaigai where the palm-leaf manuscript swam upstream",
    imageSearchKeywords: "Thiruvedagam Edaganathar Temple Vaigai north bank Sholavandan",
    rating: "4.7",
    duration: "Allow 50 minutes",
    distance: "18.0",
    area: "Thiruvedagam",
    taluk: "Vadipatti",
    address: "Thiruvedagam, Sholavandan Route, Madurai, Tamil Nadu 625234",
    latitude: 10.0242,
    longitude: 78.0264,
    distanceFromMeenakshiTemple: 18.0,
    mapLink: "https://maps.google.com/?q=10.0242,78.0264",
    tagline: "The sacred spot where the palm-leaf manuscript swam upstream.",
    entryFee: "Free General Entry",
    entryFeeShort: "Free Entry",
    description: "Set gracefully along the northern bank of the Vaigai near Sholavandan, this Paadal Petra Shiva temple is where Sambandar's palm leaf manuscript floated upstream against the river current in the 7th century.",
    location: "Vaigai North Bank, Thiruvedagam",
    timings: "6:30 AM – 11:30 AM, 4:30 PM – 7:30 PM",
    highlights: ["Tevaram hymn historical site", "Peaceful riverside ambiance", "Vaigai holy bathing ghat"]
  },
  {
    id: "kazimar-big-mosque",
    name: "Kazimar Big Mosque & Maqbara",
    category: "historical",
    categoryLabel: "ISLAMIC HERITAGE",
    image: "images/kazimar-mosque.jpg",
    imageAlt: "13th-century stone archways and historic prayer hall of Kazimar Big Mosque",
    imageDescription: "Madurai Hazrath Maqbara and the ancient 13th-century stone minarets of Kazimar Mosque",
    imageSearchKeywords: "Kazimar Big Mosque Madurai Hazrath Maqbara Periyar",
    rating: "4.7",
    duration: "Allow 45 minutes",
    distance: "1.0",
    area: "Kazimar Street",
    taluk: "Madurai South",
    address: "Kazimar Street, Periyar, Madurai, Tamil Nadu 625001",
    latitude: 9.9142,
    longitude: 78.1132,
    distanceFromMeenakshiTemple: 1.0,
    mapLink: "https://maps.google.com/?q=9.9142,78.1132",
    tagline: "The oldest mosque in Madurai, established in the 13th century.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Founded in the 13th century by Hazrat Kazi Syed Tajuddin who received the land from Pandya king Sadavarman Sundara Pandyan, this historic mosque accommodates 2,500 worshippers and houses the sacred Madurai Maqbara dargah.",
    location: "Kazimar Street, near Periyar Bus Stand",
    timings: "5:00 AM – 10:00 PM",
    highlights: ["Oldest Muslim heritage site in Madurai", "Pandya-period architectural foundation", "Madurai Hazrath Maqbara"]
  },
  {
    id: "vandiyur-theppakulam",
    name: "Vandiyur Mariamman Theppakulam",
    category: "historical",
    categoryLabel: "SACRED TANK & ISLAND",
    image: "images/theppakulam.jpg",
    imageAlt: "Vandiyur Mariamman Theppakulam temple tank with Maiya Mandapam island",
    imageDescription: "Monumental stone stepped square tank built by Thirumalai Nayak with central illuminated island pavilion",
    imageSearchKeywords: "Vandiyur Mariamman Teppakulam float festival island Madurai",
    rating: "4.8",
    duration: "Allow 60 minutes",
    distance: "4.5",
    area: "Theppakulam",
    taluk: "Madurai South",
    address: "Theppakulam, Madurai, Tamil Nadu 625009",
    latitude: 9.9161,
    longitude: 78.1528,
    distanceFromMeenakshiTemple: 4.5,
    mapLink: "https://maps.google.com/?q=9.9161,78.1528",
    tagline: "Huge 17th-century temple reservoir with a central Maiya Mandapam.",
    entryFee: "Free Public Access (Open Reservoir)",
    entryFeeShort: "Free Access",
    description: "One of the largest temple tanks in South India, measuring over 300 meters on each side, built by King Thirumalai Nayak in 1645. In Thai month (Jan/Feb), the dazzling Float Festival (Theppa Thiruvizha) takes place with illuminated rafts circling the central pavilion.",
    location: "Vandiyur, East Madurai",
    timings: "Open all day; evening illuminated lighting",
    highlights: ["Float Festival (Theppam)", "Maiya Mandapam island", "Connected to Vaigai river channels"]
  },
  {
    id: "thirupparankundram-jain-caves",
    name: "Thirupparankundram Jain Caves",
    category: "historical",
    categoryLabel: "JAIN HERITAGE",
    image: "images/thirupparankundram-jain-caves.jpg",
    imageAlt: "Ancient rock-cut Jain caves and stone inscriptions at Thirupparankundram hill",
    imageDescription: "Ancient rock-cut caves with Tamil-Brahmi inscriptions and stone beds at Thirupparankundram hill",
    imageSearchKeywords: "Thirupparankundram Jain caves rock inscriptions Madurai archaeology",
    rating: "4.6",
    duration: "Allow 60 minutes",
    distance: "8.0",
    area: "Thirupparankundram",
    taluk: "Tirupparankundram",
    address: "Thirupparankundram Hill, Madurai, Tamil Nadu 625005",
    latitude: 9.8785,
    longitude: 78.0715,
    distanceFromMeenakshiTemple: 8.0,
    mapLink: "https://maps.google.com/?q=9.8785,78.0715",
    tagline: "Ancient Jain caves, rock-cut carvings and historic inscriptions.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Located around the iconic Thirupparankundram hill, these ancient caves and rock inscriptions provide evidence of the area's older religious and cultural history. Best for history lovers, archaeology enthusiasts, rock inscriptions, and photography.",
    location: "Thirupparankundram Hill slopes",
    timings: "6:00 AM – 6:00 PM",
    highlights: ["Rock inscriptions", "Ancient Jain heritage", "Archaeological evidence", "Photography & trekking"]
  },
  {
    id: "keeladi-site",
    name: "Keeladi Archaeological Site",
    category: "historical",
    categoryLabel: "ANCIENT EXCAVATION",
    image: "images/keeladi-site.jpg",
    imageAlt: "Keeladi archaeological excavation trenches revealing ancient Sangam urban brick structures",
    imageDescription: "Excavation trenches on the Vaigai river basin uncovering 2,600-year-old urban structures at Keeladi",
    imageSearchKeywords: "Keeladi excavation site Vaigai river Sangam urban civilization archaeology",
    rating: "4.7",
    duration: "Allow 90 minutes",
    distance: "12.5",
    area: "Keeladi",
    taluk: "Madurai East",
    address: "Keeladi, near Sivaganga border, southeast of Madurai, Tamil Nadu 630611",
    latitude: 9.8631,
    longitude: 78.1882,
    distanceFromMeenakshiTemple: 12.5,
    mapLink: "https://maps.google.com/?q=9.8631,78.1882",
    tagline: "Sangam-era urban civilization on the Vaigai river basin.",
    entryFee: "Free Public Access (Excavation Trenches)",
    entryFeeShort: "Free Access",
    description: "Keeladi is important for understanding the ancient urban and cultural history of the Vaigai river region. See archaeological remains, excavation-related displays, ancient artefacts, and deep urban roots dating back to the Sangam era.",
    location: "Keeladi, southeast of Madurai",
    timings: "9:00 AM – 5:30 PM",
    highlights: ["Archaeological remains", "Excavation-related displays", "Ancient artefacts", "Vaigai river urban heritage"]
  },
  {
    id: "keeladi-museum",
    name: "Keeladi Museum",
    category: "historical",
    categoryLabel: "ARCHAEOLOGY MUSEUM",
    image: "images/keeladi-museum.jpg",
    imageAlt: "Keeladi Museum modern architectural galleries displaying ancient Sangam artefacts",
    imageDescription: "World-class Keeladi Museum displaying potsherds with Tamil-Brahmi scripts, ornaments and weaving tools",
    imageSearchKeywords: "Keeladi Museum artefacts Tamil Brahmi pottery Vaigai civilization Madurai",
    rating: "4.8",
    duration: "Allow 90 minutes",
    distance: "12.3",
    area: "Keeladi",
    taluk: "Madurai East",
    address: "Keeladi Museum, Keeladi, Tamil Nadu 630611",
    latitude: 9.8615,
    longitude: 78.1870,
    distanceFromMeenakshiTemple: 12.3,
    mapLink: "https://maps.google.com/?q=9.8615,78.1870",
    tagline: "State-of-the-art museum displaying discoveries from Keeladi excavations.",
    entryFee: "₹15 (Adults), ₹5 (Children), ₹200 (Foreigners)",
    entryFeeShort: "₹15 / ₹5",
    description: "The museum helps visitors understand the archaeological discoveries associated with the Keeladi excavations. Best for students, history enthusiasts, and archaeology lovers.",
    location: "Keeladi Main Road",
    timings: "9:00 AM – 5:00 PM, closed Fridays",
    highlights: ["Museum exhibits & interactive displays", "Sangam-era discoveries", "Inscribed Tamil-Brahmi pottery", "Curated for students & history enthusiasts"]
  },
  {
    id: "immaiyilum-nanmai-tharuvar",
    name: "Immaiyilum Nanmai Tharuvar Temple",
    category: "temples",
    categoryLabel: "HISTORIC SHIVA TEMPLE",
    image: "images/immaiyilum-nanmai-tharuvar.jpg",
    imageAlt: "Immaiyilum Nanmai Tharuvar Temple sanctum in central Madurai near Periyar",
    imageDescription: "Identifiable historic Shiva temple in Madurai where Lord Shiva is depicted performing Shiva puja",
    imageSearchKeywords: "Immaiyilum Nanmai Tharuvar Temple Periyar Madurai Shiva temple",
    rating: "4.7",
    duration: "Allow 45 minutes",
    distance: "0.8",
    area: "Periyar",
    taluk: "Madurai South",
    address: "West Masi Street, Periyar, Madurai, Tamil Nadu 625001",
    latitude: 9.9142,
    longitude: 78.1147,
    distanceFromMeenakshiTemple: 0.8,
    mapLink: "https://maps.google.com/?q=9.9142,78.1147",
    tagline: "Historic Shiva temple where the divine grants benefits in this life and the next.",
    entryFee: "Free General Entry",
    entryFeeShort: "Free Entry",
    description: "Arulmigu Immaiyilum Nanmai Tharuvar Temple is an identifiable historic temple in the city near Periyar. Celebrated as the shrine where Lord Shiva worshipped Himself in the form of a Shiva Lingam.",
    location: "West Masi Street / Periyar",
    timings: "6:00 AM – 12:00 PM, 4:30 PM – 9:00 PM",
    highlights: ["Lord Shiva performing linga puja idol", "Historic inner sanctum", "Central Periyar location"]
  },
  {
    id: "pandi-muneeswaran-temple",
    name: "Pandi Muneeswaran Temple",
    category: "temples",
    categoryLabel: "LOCAL DEITY TRADITION",
    image: "images/pandi-muneeswaran-temple.jpg",
    imageAlt: "Pandi Muneeswaran Temple courtyard with sacred bells and camphor lamps",
    imageDescription: "Vibrant guardian deity temple of Madurai known for intense folk devotion and rituals",
    imageSearchKeywords: "Pandi Muneeswaran Temple Melamadai Madurai folk deity guardian",
    rating: "4.6",
    duration: "Allow 45 minutes",
    distance: "5.5",
    area: "Madurai",
    taluk: "Madurai East",
    address: "Melamadai, Ring Road, Madurai, Tamil Nadu 625020",
    latitude: 9.9248,
    longitude: 78.1635,
    distanceFromMeenakshiTemple: 5.5,
    mapLink: "https://maps.google.com/?q=9.9248,78.1635",
    tagline: "Madurai's revered guardian deity and traditional folk shrine.",
    entryFee: "Free Public Entry",
    entryFeeShort: "Free Entry",
    description: "Arulmigu Pandi Muneeswaran Temple exemplifies Madurai's vibrant local deity tradition. Worshipped as the protective guardian deity of the city, attracting thousands for traditional folk prayers, bell offerings, and vow fulfillment.",
    location: "Melamadai, Ring Road",
    timings: "6:00 AM – 1:00 PM, 4:00 PM – 9:00 PM",
    highlights: ["Local deity tradition", "Camphor worship & brass bells", "Devotional folk customs"]
  },
  {
    id: "yanaimalai",
    name: "Yanaimalai (Elephant Hill)",
    category: "nature",
    categoryLabel: "ROCK FORMATION & NATURE",
    image: "images/yanaimalai.jpg",
    imageAlt: "Yanaimalai elephant-shaped hill rising majestically above the plains near Othakadai",
    imageDescription: "Immense monolithic hill resembling a seated elephant with ancient rock formations and historic temples",
    imageSearchKeywords: "Yanaimalai Elephant Hill Narasingam Othakadai Madurai rock formations",
    rating: "4.6",
    duration: "Allow 60 minutes",
    distance: "10.0",
    area: "Othakadai",
    taluk: "Madurai East",
    address: "Othakadai / Narasingam, Madurai, Tamil Nadu 625107",
    latitude: 9.9615,
    longitude: 78.1882,
    distanceFromMeenakshiTemple: 10.0,
    mapLink: "https://maps.google.com/?q=9.9615,78.1882",
    tagline: "Gigantic elephant-shaped monolithic rock with ancient heritage.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Best for rock formations and historical surroundings. Yanaimalai looks like a colossal seated elephant and features ancient 8th-century rock-cut temples, Jain inscriptions, and scenic countryside paths.",
    location: "Narasingam / Othakadai",
    timings: "Open all day; best at sunrise and sunset",
    highlights: ["Elephant rock formations", "Historical surroundings", "Cave architecture", "Scenic nature trail"]
  },
  {
    id: "kutladampatti-falls",
    name: "Kutladampatti Falls",
    category: "nature",
    categoryLabel: "WATERFALLS & NATURE",
    image: "images/kutladampatti-falls.jpg",
    imageAlt: "Kutladampatti waterfall cascading down forest rocks into natural pool",
    imageDescription: "Fresh natural waterfall cascading from Sirumalai hills reserve forest near Vadipatti",
    imageSearchKeywords: "Kutladampatti Falls Vadipatti Sirumalai Madurai natural waterfalls",
    rating: "4.4",
    duration: "Allow 90 minutes",
    distance: "30.0",
    area: "Vadipatti",
    taluk: "Vadipatti",
    address: "Kutladampatti Reserve Forest, Vadipatti Taluk, Madurai 625218",
    latitude: 10.1250,
    longitude: 78.0162,
    distanceFromMeenakshiTemple: 30.0,
    mapLink: "https://maps.google.com/?q=10.1250,78.0162",
    tagline: "Scenic forest waterfall for a refreshing nature trip outside central Madurai.",
    entryFee: "Free Public Entry",
    entryFeeShort: "Free Entry",
    description: "Best for a short nature trip outside central Madurai. Located in a tranquil reserve forest near Vadipatti, Kutladampatti Falls cascades down 90 feet over natural rocks, providing a serene escape for families and nature enthusiasts.",
    location: "Vadipatti Taluk, northwest of Madurai",
    timings: "7:00 AM – 5:00 PM (seasonal flow)",
    highlights: ["Forest waterfall cascade", "Short nature trip outside central Madurai", "Refreshing natural pools", "Lush Sirumalai surroundings"]
  },
  {
    id: "masi-streets",
    name: "Masi Streets Heritage Shopping",
    category: "shopping",
    categoryLabel: "TEXTILE & STREET FOOD",
    image: "images/masi-streets.jpg",
    imageAlt: "Bustling evening shops along historic Masi Streets near Meenakshi Temple",
    imageDescription: "Vibrant traditional shops along North, South, East, and West Masi Streets selling sarees, brass, and snacks",
    imageSearchKeywords: "Masi Streets Madurai Sungudi saree brassware tiffin street shopping",
    rating: "4.7",
    duration: "Allow 90 minutes",
    distance: "0.4",
    area: "Masi Streets",
    taluk: "Madurai South",
    address: "Masi Streets (North, South, East, West), Madurai 625001",
    latitude: 9.9160,
    longitude: 78.1180,
    distanceFromMeenakshiTemple: 0.4,
    mapLink: "https://maps.google.com/?q=9.9160,78.1180",
    tagline: "Traditional commercial side of Madurai: temple streets, shopping and food.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Great for experiencing the traditional commercial side of Madurai. The four concentric Masi Streets are renowned for authentic Sungudi cotton sarees, brass utensils, traditional snacks, tiffin stalls, and vibrant shops around the temple.",
    location: "Masi Streets, surrounding Meenakshi Temple",
    timings: "9:00 AM – 10:30 PM",
    highlights: ["Traditional commercial side of Madurai", "Temple streets + shopping + food", "Madurai Sungudi sarees", "Street food & evening stalls"]
  },
  {
    id: "chithirai-streets",
    name: "Chithirai Streets (Temple Environs)",
    category: "shopping",
    categoryLabel: "TEMPLE & TRADITIONAL SHOPPING",
    image: "images/chithirai-streets.jpg",
    imageAlt: "Chithirai Street flower vendors and sacred temple shopping around Meenakshi gopuram",
    imageDescription: "Historic Chithirai Streets surrounding Meenakshi Temple packed with fragrant jasmine flowers and puja brassware",
    imageSearchKeywords: "Chithirai Streets Meenakshi Amman Temple Madurai flower market puja items",
    rating: "4.8",
    duration: "Allow 60 minutes",
    distance: "0.1",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "Chithirai Streets (North, South, East, West), Madurai 625001",
    latitude: 9.9192,
    longitude: 78.1198,
    distanceFromMeenakshiTemple: 0.1,
    mapLink: "https://maps.google.com/?q=9.9192,78.1198",
    tagline: "Around the temple and traditional city centre.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Around the temple and traditional city centre. Encircling the Meenakshi Temple walls, the Chithirai Streets are famous for fresh jasmine garlands (Madurai Malli), puja items, bronze statues, and quintessential temple-town character.",
    location: "Perimeter of Meenakshi Temple",
    timings: "5:00 AM – 10:00 PM",
    highlights: ["Around the Meenakshi Temple", "Traditional city centre", "Fresh Madurai Malli jasmine", "Puja lamps & bronze statues"]
  },
  {
    id: "town-hall-road",
    name: "Town Hall Road Bazaar",
    category: "shopping",
    categoryLabel: "RESTAURANTS & SHOPPING",
    image: "images/town-hall-road.jpg",
    imageAlt: "Town Hall Road bustling with shoppers, apparel showrooms and vegetarian eateries",
    imageDescription: "Everyday Madurai atmosphere along Town Hall Road with classic restaurants, clothing, and sweet shops",
    imageSearchKeywords: "Town Hall Road Madurai vegetarian restaurants shopping halwa clothing",
    rating: "4.5",
    duration: "Allow 60 minutes",
    distance: "0.6",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Town Hall Road, Periyar, Madurai 625001",
    latitude: 9.9168,
    longitude: 78.1155,
    distanceFromMeenakshiTemple: 0.6,
    mapLink: "https://maps.google.com/?q=9.9168,78.1155",
    tagline: "Food, clothing, local shopping and everyday Madurai atmosphere.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Good for food, clothing, local shopping, and experiencing everyday Madurai atmosphere. Town Hall Road connects Periyar with the temple zone, packed with vegetarian restaurants, sweet stalls, tiffin shops, and clothing stores.",
    location: "Town Hall Road, connecting Periyar to West Tower",
    timings: "8:00 AM – 10:30 PM",
    highlights: ["Restaurants + shopping", "Food & clothing", "Everyday Madurai atmosphere", "Halwa & traditional sweets"]
  },
  {
    id: "central-market",
    name: "Central Market (Mattuthavani)",
    category: "shopping",
    categoryLabel: "MARKETS & PRODUCE",
    image: "images/central-market.jpg",
    imageAlt: "Madurai Central Market vibrant stalls with fresh fruits, vegetables and flowers",
    imageDescription: "Massive wholesale market near Mattuthavani displaying local trade, fresh produce, and Madurai jasmine",
    imageSearchKeywords: "Madurai Central Market Mattuthavani fresh vegetables flowers jasmine fruit trade",
    rating: "4.5",
    duration: "Allow 60 minutes",
    distance: "6.8",
    area: "Mattuthavani",
    taluk: "Madurai North",
    address: "Mattuthavani Integrated Market Complex, Madurai 625007",
    latitude: 9.9450,
    longitude: 78.1560,
    distanceFromMeenakshiTemple: 6.8,
    mapLink: "https://maps.google.com/?q=9.9450,78.1560",
    tagline: "Best for experiencing local trade and fresh produce.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Best for experiencing local trade and fresh produce. The bustling wholesale market at Mattuthavani showcases the agricultural pulse of southern Tamil Nadu, from piles of fresh produce to early morning flower auctions.",
    location: "Mattuthavani, East Madurai",
    timings: "4:00 AM – 8:00 PM",
    highlights: ["Local trade experience", "Fresh produce & vegetables", "Fragrant flower trading", "Vibrant agrarian commerce"]
  },
  {
    id: "vilakkuthoon-street",
    name: "Vilakkuthoon Commercial Area",
    category: "shopping",
    categoryLabel: "COMMERCIAL & FOOD HUB",
    image: "images/vilakkuthoon.jpg",
    imageAlt: "Historic Vilakkuthoon lamp post area with evening shoppers and Jigarthanda stalls",
    imageDescription: "Busy traditional commercial area near the historic core famous for evening food, Jigarthanda, and textiles",
    imageSearchKeywords: "Vilakkuthoon Madurai lamp post Jigarthanda commercial street evening snacks",
    rating: "4.6",
    duration: "Allow 60 minutes",
    distance: "0.9",
    area: "Vilakkuthoon",
    taluk: "Madurai South",
    address: "Vilakkuthoon Junction, South Masi Street, Madurai 625001",
    latitude: 9.9148,
    longitude: 78.1255,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9148,78.1255",
    tagline: "Busy traditional commercial area near the historic core with evening snacks.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "A busy traditional commercial area near the historic core of Madurai. Centered around the 1840 cast-iron lamp post, Vilakkuthoon is famous for food, commercial streets, evening snacks, traditional shops, and famous chilled Jigarthanda.",
    location: "Vilakkuthoon, South Masi Street junction",
    timings: "9:00 AM – 11:00 PM",
    highlights: ["Food + commercial streets", "Historic 1840 lamp post", "Famous chilled Jigarthanda", "Evening snacks & traditional shops"]
  },
  {
    id: "arittapatti-heritage",
    name: "Arittapatti Biodiversity Site & Jain Caves",
    category: "nature",
    categoryLabel: "BIODIVERSITY & JAIN HERITAGE",
    image: "images/samanar-hills.jpg",
    imageAlt: "Granite inselbergs and ancient rock-cut Jain beds at Arittapatti Biodiversity Site in Melur",
    imageDescription: "Tamil Nadu's first Biodiversity Heritage Site featuring 7 granite hillocks, 2,200-year-old rock-cut Jain beds, and raptor sanctuaries",
    imageSearchKeywords: "Arittapatti biodiversity heritage site rock cut Jain beds Melur Madurai",
    rating: "4.8",
    duration: "Allow 2 to 3 hours",
    distance: "25.4",
    area: "Melur",
    taluk: "Melur",
    address: "Arittapatti Village, Melur Taluk, Madurai District, Tamil Nadu 625106",
    latitude: 10.0538,
    longitude: 78.3045,
    distanceFromMeenakshiTemple: 25.4,
    mapLink: "https://maps.google.com/?q=10.0538,78.3045",
    tagline: "Tamil Nadu's first Biodiversity Heritage Site with 2,200-year-old Jain caverns.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Declared Tamil Nadu's first Biodiversity Heritage Site in 2022, Arittapatti spans seven granite hillocks feeding 72 traditional water bodies. Features ancient rock-cut Jain beds, Tamil-Brahmi inscriptions, a Pandya rock-cut Shiva temple, and rare raptors like Bonelli's eagle and Shaheen falcon.",
    location: "Arittapatti & Meenakshipuram Hills, Melur Taluk",
    timings: "06:00 AM – 06:00 PM (Daily)",
    highlights: ["First TN Biodiversity Site", "2,200-yr-old Jain caverns", "Bonelli's eagle habitat", "16th-century Pandya lakes"]
  },
  {
    id: "thiruvathavur-temple",
    name: "Thiruvathavur Thirumarainatha Swamy Temple",
    category: "temples",
    categoryLabel: "HISTORIC SHIVA TEMPLE",
    image: "images/thiruvedagam-temple.jpg",
    imageAlt: "Historic gopuram and stone mandapam of Thiruvathavur Thirumarainatha Swamy Temple in Melur",
    imageDescription: "Birthplace temple of 9th-century Saivite saint-poet Manikkavasagar near Melur",
    imageSearchKeywords: "Thiruvathavur Thirumarainathar temple Manikkavasagar birthplace Melur Madurai",
    rating: "4.7",
    duration: "Allow 60 to 90 minutes",
    distance: "22.0",
    area: "Thiruvathavur",
    taluk: "Melur",
    address: "Thiruvathavur, Melur Taluk, Madurai District, Tamil Nadu 625110",
    latitude: 10.0242,
    longitude: 78.2718,
    distanceFromMeenakshiTemple: 22.0,
    mapLink: "https://maps.google.com/?q=10.0242,78.2718",
    tagline: "Birthplace of saint-poet Manikkavasagar with 9th-century Pandya architecture.",
    entryFee: "Free Darshan / Special Entry ₹20",
    entryFeeShort: "Free / ₹20",
    description: "The revered birthplace of Saivite saint Manikkavasagar, chief minister of the Pandya kingdom who composed the sacred Thiruvasagam. Features a magnificent five-tiered Rajagopuram, ancient Swayambhu lingam, and sanctified medicinal healing traditions.",
    location: "Thiruvathavur Village, 9 km from Melur",
    timings: "06:30 AM – 11:30 AM & 04:30 PM – 08:00 PM",
    highlights: ["Birthplace of Manikkavasagar", "9th-century Pandya architecture", "Thevara Vaippu Sthalam", "Five-tiered Rajagopuram"]
  },
  {
    id: "thirumangalam-pathrakali-amman",
    name: "Thirumangalam Sri Pathrakali Amman Temple",
    category: "temples",
    categoryLabel: "HERITAGE AMMAN TEMPLE",
    image: "images/pandi-muneeswaran-temple.jpg",
    imageAlt: "Colourful gopuram and sanctum of Sri Pathrakali Amman Temple in Thirumangalam",
    imageDescription: "Ancient guardian goddess temple and cultural epicenter of Thirumangalam taluk",
    imageSearchKeywords: "Thirumangalam Pathrakali Amman temple Chithirai festival Madurai",
    rating: "4.7",
    duration: "Allow 45 to 60 minutes",
    distance: "21.0",
    area: "Thirumangalam",
    taluk: "Thirumangalam",
    address: "Temple Car Street, Thirumangalam, Madurai District, Tamil Nadu 625706",
    latitude: 9.8242,
    longitude: 77.9892,
    distanceFromMeenakshiTemple: 21.0,
    mapLink: "https://maps.google.com/?q=9.8242,77.9892",
    tagline: "Vibrant ancient Shakti shrine and cultural focal point of southern Madurai.",
    entryFee: "Free Darshan",
    entryFeeShort: "Free Access",
    description: "A prominent historic spiritual landmark in Thirumangalam taluk. Known for its grand annual festival, vibrant folk devotion, and proximity to the historic Meenakshi Chidambareswarar shrine and the famous Seeraga Samba biryani culinary belt.",
    location: "Central Thirumangalam Town",
    timings: "06:00 AM – 12:00 PM & 04:30 PM – 08:30 PM",
    highlights: ["Ancient Shakti shrine", "Vibrant Chithirai car festival", "Close to NH44 corridor", "Epicenter of Thirumangalam commerce"]
  },
  {
    id: "usilampatti-puthur-murugan",
    name: "Puthur Subramaniaswami Temple & Moongil Anai",
    category: "temples",
    categoryLabel: "WARRIOR MURUGAN SHRINE",
    image: "images/alagar-kovil.jpg",
    imageAlt: "Hilltop temple facade and lush Western Ghats foothills near Usilampatti",
    imageDescription: "Rare warrior form of Lord Muruga with sword at Puthur near Usilampatti",
    imageSearchKeywords: "Puthur Subramaniaswami temple Usilampatti warrior Murugan sword Madurai",
    rating: "4.6",
    duration: "Allow 60 to 90 minutes",
    distance: "38.0",
    area: "Usilampatti",
    taluk: "Usilampatti",
    address: "Puthur, Usilampatti Taluk, Madurai District, Tamil Nadu 625532",
    latitude: 9.9702,
    longitude: 77.7954,
    distanceFromMeenakshiTemple: 38.0,
    mapLink: "https://maps.google.com/?q=9.9702,77.7954",
    tagline: "Unique warrior Murugan temple holding a sacred sword in the Ghats foothills.",
    entryFee: "Free Darshan",
    entryFeeShort: "Free Access",
    description: "Famous throughout the region for housing Lord Muruga in a rare heroic stance holding a sword at his hip. Situated against the rolling green foothills of the Western Ghats near the 58-village irrigation canal network and traditional country orchards.",
    location: "Puthur Hills, Usilampatti Taluk",
    timings: "06:00 AM – 11:30 AM & 04:30 PM – 07:30 PM",
    highlights: ["Rare warrior Murugan posture", "Scenic Western Ghats foothills", "Traditional rural festival", "Lush canal countryside"]
  },
  {
    id: "gandhi-niketan-ashram",
    name: "Gandhi Niketan Ashram (T. Kallupatti)",
    category: "historical",
    categoryLabel: "GANDHIAN HERITAGE CAMPUS",
    image: "images/gandhi-museum.jpg",
    imageAlt: "Green serene 40-acre campus of Gandhi Niketan Ashram in T. Kallupatti Peraiyur",
    imageDescription: "Historic 40-acre rural reconstruction institution founded in 1940 visited by Martin Luther King Jr.",
    imageSearchKeywords: "Gandhi Niketan Ashram T Kallupatti Peraiyur freedom fighter Venkatachalapathy Madurai",
    rating: "4.8",
    duration: "Allow 1 to 2 hours",
    distance: "42.0",
    area: "T. Kallupatti",
    taluk: "Peraiyur",
    address: "Gandhi Niketan Ashram, T. Kallupatti, Peraiyur Taluk, Madurai District, Tamil Nadu 625702",
    latitude: 9.7394,
    longitude: 77.8105,
    distanceFromMeenakshiTemple: 42.0,
    mapLink: "https://maps.google.com/?q=9.7394,77.8105",
    tagline: "Historic 1940 Gandhian rural institution visited by Dr. Martin Luther King Jr.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "Founded in 1940 by freedom fighter G. Venkatachalapathy on a 40-acre wooded campus, this landmark institution advances Mahatma Gandhi's vision of village self-rule (Gram Swaraj). Historically visited by Dr. Martin Luther King Jr. and E.F. Schumacher, it showcases traditional Khadi weaving, pottery, and organic agriculture.",
    location: "T. Kallupatti, Peraiyur Taluk",
    timings: "09:00 AM – 05:00 PM (Monday to Saturday)",
    highlights: ["Visited by Martin Luther King Jr.", "40-acre peaceful eco-campus", "Traditional Khadi & village crafts", "1940 freedom struggle heritage"]
  },
  {
    id: "sivarakottai-heritage",
    name: "Sivarakottai Archaeological Site & Perumal Temple",
    category: "historical",
    categoryLabel: "PREHISTORIC & PANDYA HERITAGE",
    image: "images/keeladi-site.jpg",
    imageAlt: "Gundar river basin megalithic heritage site and ancient temple at Sivarakottai in Kallikudi",
    imageDescription: "Prehistoric iron-age urn burial sites and 1,000-year-old Kulasekhara Perumal Temple in Kallikudi",
    imageSearchKeywords: "Sivarakottai archaeological site Kulasekhara Perumal temple Kallikudi Madurai",
    rating: "4.6",
    duration: "Allow 1 to 2 hours",
    distance: "28.5",
    area: "Sivarakottai",
    taluk: "Kallikudi",
    address: "Sivarakottai, Kallikudi Taluk, Madurai District, Tamil Nadu 625707",
    latitude: 9.7745,
    longitude: 78.0125,
    distanceFromMeenakshiTemple: 28.5,
    mapLink: "https://maps.google.com/?q=9.7745,78.0125",
    tagline: "Prehistoric Gundar valley urn burial grounds & 1,000-year-old Pandya temple.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Access",
    description: "An exceptional heritage landscape along the Gundar river basin featuring prehistoric megalithic urn burial findings and the ancient Sri Kulasekhara Perumal Temple built during the Pandya dynasty with stone epigraphs documenting royal endowments.",
    location: "Gundar River Basin, Kallikudi Taluk",
    timings: "07:00 AM – 06:00 PM (Daily)",
    highlights: ["Prehistoric megalithic burial urns", "1,000-year-old Pandya stone shrine", "Ancient royal inscriptions", "Gundar river valley landscape"]
  },
  {
    id: "vilachery-pottery-village",
    name: "Vilachery Artisans Pottery Village",
    category: "shopping",
    categoryLabel: "TERRACOTTA & GOLU DOLLS",
    image: "images/puthu-mandapam.jpg",
    imageAlt: "Artisans hand-painting traditional clay Navarathri Golu dolls in Vilachery village",
    imageDescription: "Renowned pottery village near Thirupparankundram where generations of families craft clay idols and terracotta lamps",
    imageSearchKeywords: "Vilachery pottery village Navarathri Golu dolls clay artisans Madurai",
    rating: "4.8",
    duration: "Allow 90 to 120 minutes",
    distance: "9.5",
    area: "Vilachery",
    taluk: "Tirupparankundram",
    address: "Main Pottery Street, Vilachery, Thirupparankundram Taluk, Madurai 625006",
    latitude: 9.8785,
    longitude: 78.0490,
    distanceFromMeenakshiTemple: 9.5,
    mapLink: "https://maps.google.com/?q=9.8785,78.0490",
    tagline: "Artisan village handcrafting Navarathri Golu dolls, clay lamps, and terracotta pottery.",
    entryFee: "Free Public Access · Purchases direct from artisans",
    entryFeeShort: "Free Entry",
    description: "Located near Thirupparankundram, Vilachery is home to hundreds of traditional artisan families creating intricate clay dolls, papier-mâché sculptures, and terracotta pottery. Visitors can walk into family workshops, observe doll crafting firsthand, and buy souvenirs directly from the makers.",
    location: "Vilachery Village, 3 km from Thirupparankundram",
    timings: "08:00 AM – 07:00 PM (Daily)",
    highlights: ["Handcrafted Navarathri Golu dolls", "Direct artisan workshop purchases", "Traditional terracotta lamps", "Pottery making demonstrations"]
  },
  {
    id: "avani-moola-street",
    name: "Avani Moola Street Spice & Herbal Bazaar",
    category: "shopping",
    categoryLabel: "SPICES & TRADITIONAL HERBS",
    image: "images/town-hall-road.jpg",
    imageAlt: "Fragrant mounds of spices, dried herbs, and country medicines along Avani Moola Street",
    imageDescription: "Centuries-old spice trading corridor surrounding Meenakshi Temple filled with aromatic herbs and grains",
    imageSearchKeywords: "Avani Moola Street Madurai spices Nattu Marundhu traditional herbs brassware",
    rating: "4.7",
    duration: "Allow 45 to 60 minutes",
    distance: "0.3",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "Avani Moola Street (East & West), Madurai 625001",
    latitude: 9.9188,
    longitude: 78.1180,
    distanceFromMeenakshiTemple: 0.3,
    mapLink: "https://maps.google.com/?q=9.9188,78.1180",
    tagline: "Historic market street for stone-ground spices, country herbs, and temple brassware.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Entry",
    description: "One of the concentric ancient ring streets radiating from Meenakshi Temple, Avani Moola Street is famed for traditional Nattu Marunthu (indigenous herbal medicine) shops, aromatic Chettinad spices, dried red chillies, turmeric, and heavy brass temple utensils.",
    location: "Concentric ring street around Meenakshi Temple",
    timings: "09:00 AM – 09:30 PM",
    highlights: ["Traditional Nattu Marundhu herbs", "Authentic stone-ground Chettinad spices", "Heavy brass & bell metal vessels", "Ancient Nayak street atmosphere"]
  },
  {
    id: "madurai-flower-market",
    name: "Madurai Flower Market (Malli Bazaar)",
    category: "shopping",
    categoryLabel: "GI-TAG JASMINE & FLOWERS",
    image: "images/central-market.jpg",
    imageAlt: "Heaps of fragrant white Madurai Malli jasmine and colorful lotus garlands at wholesale market",
    imageDescription: "The bustling sensory spectacle of early morning flower auctions celebrating Madurai's iconic GI jasmine",
    imageSearchKeywords: "Madurai flower market Malli jasmine Mattuthavani auction garlands",
    rating: "4.9",
    duration: "Allow 60 to 90 minutes",
    distance: "6.5",
    area: "Mattuthavani",
    taluk: "Madurai North",
    address: "Integrated Flower Market Complex, Mattuthavani, Madurai 625007",
    latitude: 9.9460,
    longitude: 78.1575,
    distanceFromMeenakshiTemple: 6.5,
    mapLink: "https://maps.google.com/?q=9.9460,78.1575",
    tagline: "World-famous wholesale flower auction and sensory bazaar for GI-tagged Madurai Malli.",
    entryFee: "Free Public Access",
    entryFeeShort: "Free Entry",
    description: "The epicenter of the world-famous Madurai Malli (GI-certified jasmine). Every morning from dawn, growers from all 11 taluks arrive to trade tons of intensely fragrant jasmine, marigold, oleander, and pink lotus. A photographer's and perfume lover's paradise.",
    location: "Flower Market Complex, Mattuthavani",
    timings: "04:30 AM – 02:00 PM (Best at 05:30 AM – 08:30 AM)",
    highlights: ["GI-tagged Madurai Malli jasmine", "Bustling dawn flower auctions", "Unrivaled floral fragrance", "Spectacular photography spot"]
  }
];

// =========================================================================
// 3A. CAFES IN MADURAI CITY (Real, verified cafes)
// =========================================================================
const CAFES = [
  {
    id: "the-chocolate-room",
    name: "The Chocolate Room",
    category: "cafes",
    categoryLabel: "CHOCOLATE & DESSERT CAFE",
    image: "images/chocolate-room.jpg",
    imageAlt: "Cozy interior of The Chocolate Room cafe with chocolate fondue and waffles",
    imageDescription: "Decadent chocolate fondue, waffles, and warm boutique cafe seating on 80 Feet Road in KK Nagar",
    imageSearchKeywords: "The Chocolate Room KK Nagar 80 Feet Road Madurai",
    rating: "4.7",
    duration: "11:00 AM – 11:00 PM",
    distance: "4.8",
    area: "KK Nagar",
    taluk: "Madurai North",
    address: "120, 80 Feet Road, Near Mattuthavani Junction, KK Nagar, Madurai 625020",
    latitude: 9.9272,
    longitude: 78.1485,
    distanceFromMeenakshiTemple: 4.8,
    mapLink: "https://maps.google.com/?q=9.9272,78.1485",
    tagline: "Chocolate fondue, Belgian waffles, hot chocolates and shakes.",
    specialties: "Chocolate Avalanche, Fondue, Chocizza, Freaking Shakes",
    priceRange: "₹250 – ₹500 for two",
    timings: "11:00 AM – 11:00 PM",
    tags: ["WiFi", "AC", "Cozy Seating", "Desserts"]
  },
  {
    id: "belgian-waffle",
    name: "The Belgian Waffle Co.",
    category: "cafes",
    categoryLabel: "WAFFLE SPECIALIST",
    image: "images/belgian-waffle.jpg",
    imageAlt: "Freshly pressed Belgian waffle sandwiches with chocolate and cream",
    imageDescription: "Golden crisp waffle sandwiches filled with dark chocolate fudge and powdered sugar",
    imageSearchKeywords: "Belgian Waffle Co KK Nagar Madurai",
    rating: "4.6",
    duration: "11:00 AM – 11:30 PM",
    distance: "4.6",
    area: "KK Nagar",
    taluk: "Madurai North",
    address: "80 Feet Road, Near Apollo Hospital, KK Nagar, Madurai 625020",
    latitude: 9.9298,
    longitude: 78.1468,
    distanceFromMeenakshiTemple: 4.6,
    mapLink: "https://maps.google.com/?q=9.9298,78.1468",
    tagline: "Freshly baked warm waff-wiches and premium shake combos.",
    specialties: "Red Velvet Waffle, Death by Chocolate, Stroopwafels, Nutella Waffle",
    priceRange: "₹150 – ₹350 for two",
    timings: "11:00 AM – 11:30 PM",
    tags: ["Takeaway", "AC", "Desserts"]
  },
  {
    id: "cafe-coffee-day-bypass",
    name: "Cafe Coffee Day (Bypass Road)",
    category: "cafes",
    categoryLabel: "COFFEE & WORK CAFE",
    image: "images/cafe-coffee-day.jpg",
    imageAlt: "Signature Cafe Coffee Day mug with latte art on burlap coaster and roasted coffee beans",
    imageDescription: "Signature Cafe Coffee Day white ceramic mug with iconic red logo, frothy latte art, and coffee beans on burlap coaster",
    imageSearchKeywords: "Cafe Coffee Day Bypass Road Ponmeni Madurai",
    rating: "4.5",
    duration: "9:00 AM – 11:00 PM",
    distance: "3.5",
    area: "Bypass Road",
    taluk: "Madurai West",
    address: "Bypass Road, Ponmeni, Madurai, Tamil Nadu 625010",
    latitude: 9.9192,
    longitude: 78.0935,
    distanceFromMeenakshiTemple: 3.5,
    mapLink: "https://maps.google.com/?q=9.9192,78.0935",
    tagline: "Spacious study-friendly coffee cafe with artisan brews and snacks.",
    specialties: "Cappuccino, Devils Own, Sizzle Dazzle Brownie, Garlic Bread",
    priceRange: "₹250 – ₹450 for two",
    timings: "9:00 AM – 11:00 PM",
    tags: ["WiFi", "Study-Friendly", "AC", "Outdoor Seating"]
  },
  {
    id: "bistro-1427",
    name: "Bistro 1427",
    category: "cafes",
    categoryLabel: "CONTINENTAL BISTRO",
    image: "images/bistro-1427.jpg",
    imageAlt: "Modern European bistro setup with thin-crust pizza and iced drinks",
    imageDescription: "Contemporary urban cafe spread with Italian pastas, stone-baked pizzas, and mocktails in Madurai",
    imageSearchKeywords: "Bistro 1427 Bypass Road Ponmeni Madurai cafe",
    rating: "4.6",
    duration: "12:00 PM – 11:00 PM",
    distance: "3.6",
    area: "Bypass Road",
    taluk: "Madurai West",
    address: "142/7, Bypass Road, Ponmeni, Madurai 625010",
    latitude: 9.9184,
    longitude: 78.0921,
    distanceFromMeenakshiTemple: 3.6,
    mapLink: "https://maps.google.com/?q=9.9184,78.0921",
    tagline: "Wood-fired thin crust pizzas, artisan pastas, and mocktails.",
    specialties: "Peri Peri Pizza, White Sauce Pasta, Blueberry Mojito, Loaded Fries",
    priceRange: "₹400 – ₹800 for two",
    timings: "12:00 PM – 11:00 PM",
    tags: ["WiFi", "AC", "Group Seating", "Continental"]
  },
  {
    id: "brownie-heaven",
    name: "Brownie Heaven",
    category: "cafes",
    categoryLabel: "GOURMET DESSERT CAFE",
    image: "images/brownie-heaven.jpg",
    imageAlt: "Sizzling brownie in cast iron skillet with vanilla ice cream and hot chocolate sauce",
    imageDescription: "Gourmet hot skillet sizzling brownie served with vanilla bean ice cream in KK Nagar",
    imageSearchKeywords: "Brownie Heaven KK Nagar 80 Feet Road Madurai",
    rating: "4.7",
    duration: "11:00 AM – 10:30 PM",
    distance: "4.7",
    area: "KK Nagar",
    taluk: "Madurai North",
    address: "80 Feet Road, KK Nagar, Madurai 625020",
    latitude: 9.9285,
    longitude: 78.1472,
    distanceFromMeenakshiTemple: 4.7,
    mapLink: "https://maps.google.com/?q=9.9285,78.1472",
    tagline: "Handcrafted brownies, cheesecake jars and sizzling dessert skillets.",
    specialties: "Sizzler Brownie with Ice Cream, Nutella Brownie, Salted Caramel Jar",
    priceRange: "₹200 – ₹450 for two",
    timings: "11:00 AM – 10:30 PM",
    tags: ["AC", "Cozy Seating", "Desserts"]
  },
  {
    id: "chai-kings",
    name: "Chai Kings (Mattuthavani)",
    category: "cafes",
    categoryLabel: "CHAI & SNACKS CAFE",
    image: "images/chai-kings.jpg",
    imageAlt: "Hot spiced masala chai in glass tumblers with bun maska and samosas",
    imageDescription: "Steaming aromatic ginger cardamom tea in traditional glasses with crispy samosas",
    imageSearchKeywords: "Chai Kings Mattuthavani bus stand Madurai tea cafe",
    rating: "4.5",
    duration: "7:00 AM – 11:00 PM",
    distance: "5.6",
    area: "Mattuthavani",
    taluk: "Madurai North",
    address: "Near Mattuthavani Integrated Bus Terminal, Madurai 625007",
    latitude: 9.9385,
    longitude: 78.1562,
    distanceFromMeenakshiTemple: 5.6,
    mapLink: "https://maps.google.com/?q=9.9385,78.1562",
    tagline: "Freshly brewed ginger-cardamom chai, bun maska and warm puff pastries.",
    specialties: "Dum Chai, Ginger Elaichi Chai, Bun Butter Jam, Corn Samosas",
    priceRange: "₹80 – ₹200 for two",
    timings: "7:00 AM – 11:00 PM",
    tags: ["AC", "Fast Casual", "Hot Beverages"]
  }
];

// =========================================================================
// 3B. MODERN MADURAI (Malls, Libraries, Parks & Entertainment)
// =========================================================================
const MODERN_SPOTS = [
  {
    id: "kalaignar-library",
    name: "Kalaignar Centenary Library",
    category: "modern",
    categoryLabel: "MEGA PUBLIC LIBRARY",
    image: "images/kalaignar-library.jpg",
    imageAlt: "Grand modern architectural facade of Kalaignar Centenary Library on New Natham Road",
    imageDescription: "Monumental glass and granite 6-storey facade of Kalaignar Centenary Library in Madurai",
    imageSearchKeywords: "Kalaignar Centenary Library New Natham Road Chokkikulam Madurai building",
    rating: "4.9",
    area: "New Natham Road",
    taluk: "Madurai North",
    address: "New Natham Road, Chokkikulam, Madurai, Tamil Nadu 625002",
    latitude: 9.9472,
    longitude: 78.1368,
    distanceFromMeenakshiTemple: 4.2,
    mapLink: "https://maps.google.com/?q=9.9472,78.1368",
    tagline: "One of South Asia's largest public libraries across 3.3 lakh sq ft.",
    description: "Inaugurated in July 2023, this state-of-the-art six-storey public library spans 3.3 lakh square feet and houses over 3.5 lakh books. Features dedicated children's interactive science and reading zones, Braille audio sections, rare Tamil Sangam palm-leaf manuscript archives, competitive exam study lounges, high-speed WiFi, and air-conditioned reading halls.",
    type: "Public Library & Cultural Centre",
    openingHours: "8:00 AM – 8:00 PM (Every day)",
    entryFee: "Free Public Admission",
    entryFeeShort: "Free Admission",
    officialUrl: "https://kalaignarcentenarylibrary.tn.gov.in/",
    facilities: ["3.5 Lakh Books", "Children's Interactive Theatre", "Science Park", "High-Speed WiFi", "Central AC", "Cafeteria"]
  },
  {
    id: "vishaal-de-mall",
    name: "Vishaal de Mall",
    category: "modern",
    categoryLabel: "SHOPPING MALL & CINEMAS",
    image: "images/vishaal-de-mall.jpg",
    imageAlt: "Vishaal de Mall exterior on Gokhale Road Chinna Chokkikulam",
    imageDescription: "Modern multi-storey shopping concourse of Vishaal de Mall featuring INOX multiplex and retail outlets",
    imageSearchKeywords: "Vishaal de Mall Gokhale Road Chinna Chokkikulam Madurai",
    rating: "4.6",
    area: "Chinna Chokkikulam",
    taluk: "Madurai North",
    address: "31, Gokhale Road, Chinna Chokkikulam, Madurai 625002",
    latitude: 9.9392,
    longitude: 78.1365,
    distanceFromMeenakshiTemple: 3.2,
    mapLink: "https://maps.google.com/?q=9.9392,78.1365",
    tagline: "Madurai's premier shopping destination with INOX 5-screen multiplex.",
    description: "Madurai's first integrated shopping and entertainment mall. Houses prominent fashion brands, a large food court featuring global fast food and South Indian specialties, a family arcade gaming arena, and a 5-screen INOX cinema.",
    type: "Shopping Mall & Entertainment",
    openingHours: "10:00 AM – 10:00 PM",
    entryFee: "Free Mall Entry",
    entryFeeShort: "Free Mall Entry",
    facilities: ["INOX 5-Screen Multiplex", "Multi-Cuisine Food Court", "Gaming Zone", "Underground Parking", "Branded Retail"]
  },
  {
    id: "milan-mall",
    name: "Milan'em Shopping Mall",
    category: "modern",
    categoryLabel: "RETAIL & ENTERTAINMENT",
    image: "images/milan-mall.jpg",
    imageAlt: "Milan'em Shopping Mall in KK Nagar Madurai",
    imageDescription: "Prominent retail mall facade on 80 Feet Road in KK Nagar Madurai with branded showrooms",
    imageSearchKeywords: "Milan'em Shopping Mall 80 Feet Road KK Nagar Madurai",
    rating: "4.5",
    area: "KK Nagar",
    taluk: "Madurai North",
    address: "100 Feet Road, 80 Feet Road Junction, KK Nagar, Madurai 625020",
    latitude: 9.9288,
    longitude: 78.1482,
    distanceFromMeenakshiTemple: 4.8,
    mapLink: "https://maps.google.com/?q=9.9288,78.1482",
    tagline: "Spacious retail mall in KK Nagar with department stores and food spots.",
    description: "Centrally located in vibrant KK Nagar, this commercial hub features national clothing brands, electronic superstores, dessert parlours, and convenient parking. A weekend retail favorite for families.",
    type: "Retail Mall",
    openingHours: "10:30 AM – 9:30 PM",
    entryFee: "Free Admission",
    entryFeeShort: "Free Admission",
    facilities: ["Fashion Department Stores", "Electronics Showroom", "Dessert Kiosks", "Covered Parking"]
  },
  {
    id: "eco-park",
    name: "Madurai Corporation Eco Park",
    category: "modern",
    categoryLabel: "ECOLOGICAL PARK",
    image: "images/eco-park.jpg",
    imageAlt: "Illuminated dancing musical water fountains at Madurai Corporation Eco Park",
    imageDescription: "Night illumination of colorful musical fountains and lakeside gardens at Eco Park Tallakulam",
    imageSearchKeywords: "Madurai Corporation Eco Park Tallakulam musical fountain lake",
    rating: "4.6",
    area: "Tallakulam",
    taluk: "Madurai North",
    address: "Gokhale Road / Mellur Road, Opposite Corporation Office, Tallakulam, Madurai 625002",
    latitude: 9.9345,
    longitude: 78.1382,
    distanceFromMeenakshiTemple: 2.8,
    mapLink: "https://maps.google.com/?q=9.9345,78.1382",
    tagline: "Scenic urban green lung with musical dancing water fountains.",
    description: "Developed by the Madurai City Corporation, this family recreation park features optic-fiber illuminated trees, artificial water channels, evening musical fountain shows, and peaceful walking pathways under mature rain trees.",
    type: "Public Park & Fountain",
    openingHours: "4:30 PM – 9:00 PM",
    entryFee: "₹10 (Adults), ₹5 (Children)",
    entryFeeShort: "₹10 / ₹5 (Gate)",
    facilities: ["Musical Dancing Fountain", "Fiber-Optic Light Trees", "Walking Trails", "Children's Play Corner"]
  },
  {
    id: "rajaji-park",
    name: "Rajaji Children's Park",
    category: "modern",
    categoryLabel: "CHILDREN'S RECREATION PARK",
    image: "images/rajaji-park.jpg",
    imageAlt: "Lush green lawns and play rides at Rajaji Children's Park Tamukkam",
    imageDescription: "Toy train tracks and amusement rides in green open lawns near Gandhi Museum Tamukkam",
    imageSearchKeywords: "Rajaji Children Park Tamukkam Gandhi Museum Madurai",
    rating: "4.4",
    area: "Tamukkam",
    taluk: "Madurai North",
    address: "Gandhi Museum Road, Tamukkam, Madurai 625020",
    latitude: 9.9315,
    longitude: 78.1388,
    distanceFromMeenakshiTemple: 3.0,
    mapLink: "https://maps.google.com/?q=9.9315,78.1388",
    tagline: "Family recreation park with toy train and children's amusement rides.",
    description: "Located right next to the Gandhi Memorial Museum, this long-standing municipal children's park features miniature toy train rides, carousel rides, and shaded lawns ideal for evening unwinding.",
    type: "Public Park & Rides",
    openingHours: "9:00 AM – 8:30 PM",
    entryFee: "₹15 per person",
    entryFeeShort: "₹15 Entry",
    facilities: ["Miniature Toy Train", "Amusement Rides", "Shaded Benches", "Snack Kiosks"]
  },
  {
    id: "athisayam-park",
    name: "Athisayam Water Amusement Theme Park",
    category: "modern",
    categoryLabel: "WATER THEME PARK",
    image: "images/athisayam-park.jpg",
    imageAlt: "Giant water slides and wave pool at Athisayam Theme Park Madurai",
    imageDescription: "Vibrant water park with massive spiral slides, wave pools and amusement rides on Dindigul Highway",
    imageSearchKeywords: "Athisayam water theme park Paravai Dindigul highway Madurai",
    rating: "4.7",
    area: "Paravai",
    taluk: "Vadipatti",
    address: "Madurai-Dindigul Main Road, Paravai, Madurai District 625402",
    latitude: 9.9925,
    longitude: 78.0742,
    distanceFromMeenakshiTemple: 12.0,
    mapLink: "https://maps.google.com/?q=9.9925,78.0742",
    tagline: "South Tamil Nadu's premier 70-acre water and dry amusement theme park.",
    description: "Spanning 70 acres of landscaped grounds along the Dindigul highway, Athisayam is southern Tamil Nadu's most popular amusement destination, boasting giant wave pools, multi-lane water racing slides, lazy rivers, roller coasters, and dining courts.",
    type: "Water & Theme Park",
    openingHours: "10:30 AM – 6:30 PM",
    entryFee: "₹700 – ₹900 (varies by height/package)",
    entryFeeShort: "₹700 – ₹900",
    officialUrl: "https://athisayampark.com/",
    phone: "+91 97869 66881",
    helpline: "0452-2463848",
    facilities: ["Giant Wave Pool", "Multi-Lane Racing Slides", "Dry Amusement Coasters", "Locker Facilities", "Food Courts"]
  }
];

// =========================================================================
// RESTAURANTS & MESSES ACROSS MADURAI DISTRICT
// =========================================================================
const RESTAURANTS = [
  {
    id: "murugan-idli-shop",
    name: "Murugan Idli Shop",
    category: "restaurants",
    categoryLabel: "IDLI & TIFFIN",
    image: "images/murugan-idli.jpg",
    imageAlt: "Murugan Idli Shop soft idlis served with four signature chutneys",
    imageDescription: "Fresh hot snowy idlis served on fresh green banana leaf with 4 vibrant coconut and tomato chutneys",
    imageSearchKeywords: "Murugan Idli Shop West Masi Street Madurai idli podi dosa pongal",
    rating: "4.0",
    duration: "Open 7:00 AM – 11:00 PM",
    distance: "0.6",
    area: "West Masi Street",
    taluk: "Madurai South",
    address: "196, West Masi Street, Madurai 625001",
    latitude: 9.9167,
    longitude: 78.1172,
    distanceFromMeenakshiTemple: 0.6,
    mapLink: "https://maps.google.com/?q=9.9167,78.1172",
    tagline: "Famous for Idli, Podi, Dosa, Pongal, and Chutneys.",
    description: "Famous for Idli, Podi, Dosa, Pongal, and Chutneys. The current listing places this branch at 196, West Masi Street, serving fluffy steamed idlis with signature gunpowder podi and a palette of four freshly ground chutneys.",
    specialties: "Idli, Podi, Dosa, Pongal, Chutneys"
  },
  {
    id: "amma-mess",
    name: "Amma Mess",
    category: "restaurants",
    categoryLabel: "TRADITIONAL NON-VEG",
    image: "images/amma-mess.jpg",
    imageAlt: "Amma Mess non-veg banana leaf meals with fish and mutton curries",
    imageDescription: "Traditional banana leaf non-veg feast with rice, ayira meen kuzhambu and bone marrow omelette",
    imageSearchKeywords: "Amma Mess West Perumal Maistry Street Madurai non-veg mutton fish",
    rating: "4.9",
    duration: "Lunch 12:00 PM – 4:00 PM, Dinner 7:00 PM – 11:00 PM",
    distance: "0.9",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "136, West Perumal Maistry Street, Madurai 625001",
    latitude: 9.9178,
    longitude: 78.1128,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9178,78.1128",
    tagline: "Traditional non-veg food, mutton and fish preparations.",
    description: "One of the food establishments strongly associated with Madurai's traditional food culture. Famous for traditional non-veg food, mutton and fish preparations, bone marrow omelette, and crab gravies. (Celebrity connection: Reported visits & photo connections of Tamil cinema stars).",
    specialties: "Traditional Non-Veg Meals, Mutton Preparations, Fish Curries, Bone Marrow Omelette"
  },
  {
    id: "sree-sabarees",
    name: "Sree Sabarees",
    category: "restaurants",
    categoryLabel: "PURE VEGETARIAN",
    image: "images/sree-sabarees.jpg",
    imageAlt: "Sree Sabarees pure vegetarian breakfast spread with dosa, idli and filter coffee",
    imageDescription: "South Indian vegetarian breakfast and meals on Town Hall Road",
    imageSearchKeywords: "Sree Sabarees Town Hall Road Madurai pure vegetarian breakfast meals",
    rating: "4.2",
    duration: "Open 6:30 AM – 10:30 PM",
    distance: "0.6",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Town Hall Road, Madurai 625001",
    latitude: 9.9162,
    longitude: 78.1158,
    distanceFromMeenakshiTemple: 0.6,
    mapLink: "https://maps.google.com/?q=9.9162,78.1158",
    tagline: "Famous for South Indian breakfast and meals.",
    description: "Famous for wholesome South Indian breakfast and meals. A revered Town Hall Road vegetarian haven serving hot crispy ghee roasts, medu vada, traditional sambar, filter coffee, and afternoon thali meals.",
    specialties: "South Indian Breakfast, Vegetarian Meals, Ghee Roast Dosa, Filter Coffee"
  },
  {
    id: "kumar-mess",
    name: "Kumar Mess",
    category: "restaurants",
    categoryLabel: "SIGNATURE CHUKKA",
    image: "images/kumar-mess.jpg",
    imageAlt: "Kumar Mess black pepper mutton chukka and seeraga samba biryani",
    imageDescription: "Dark peppery dry-roasted goat meat chukka with shallots and curry leaves in Nelpettai",
    imageSearchKeywords: "Kumar Mess Nelpettai mutton chukka biryani Madurai",
    rating: "4.8",
    duration: "Open 11:30 AM – 11:00 PM",
    distance: "1.1",
    area: "Nelpettai",
    taluk: "Madurai South",
    address: "Nelpettai, Madurai 625001",
    latitude: 9.9234,
    longitude: 78.1251,
    distanceFromMeenakshiTemple: 1.1,
    mapLink: "https://maps.google.com/?q=9.9234,78.1251",
    tagline: "Small-batch cooked mutton chukka, biryani and pepper fry.",
    description: "A century-old institution revered for peppery mutton chukka, fragrant seeraga samba biryani, and spicy country chicken curries.",
    specialties: "Mutton Chukka, Nattu Kozhi Curry, Seeraga Samba Biryani"
  },
  {
    id: "konar-kadai",
    name: "Konar Kadai",
    category: "restaurants",
    categoryLabel: "STREET LEGEND",
    image: "images/konar-kadai.jpg",
    imageAlt: "Flaky bun parotta and rich nalli bone marrow gravy at Konar Kadai",
    imageDescription: "Golden crisp puffy bun parotta served on banana leaf with spicy salna chalna",
    imageSearchKeywords: "Konar Kadai Simmakkal bun parotta Madurai",
    rating: "4.8",
    duration: "4:00 PM – Midnight",
    distance: "1.8",
    area: "Simmakkal",
    taluk: "Madurai North",
    address: "North Veli Street, Simmakkal, Madurai 625001",
    latitude: 9.9328,
    longitude: 78.1287,
    distanceFromMeenakshiTemple: 1.8,
    mapLink: "https://maps.google.com/?q=9.9328,78.1287",
    tagline: "Crisp flaky bun parotta and rich nalli bone marrow soup.",
    description: "The pioneer of Madurai's famous bun parotta — soft as a bakery bun inside with a crackling crisp exterior, served with spicy gravy.",
    specialties: "Bun Parotta, Muttai Kothu, Mutton Chukka, Nalli Elumbu Fry"
  },
  {
    id: "new-arya-bhavan",
    name: "New Arya Bhavan",
    category: "restaurants",
    categoryLabel: "PURE VEGETARIAN",
    image: "images/new-arya-bhavan.jpg",
    imageAlt: "New Arya Bhavan pure vegetarian South Indian breakfast spread",
    imageDescription: "Steamed idiyappam with rich coconut vegetable kurma and golden ghee roast dosa near Railway station",
    imageSearchKeywords: "New Arya Bhavan West Veli Street Madurai vegetarian tiffin",
    rating: "4.6",
    duration: "Open 6:30 AM – 10:30 PM",
    distance: "0.8",
    area: "West Veli Street",
    taluk: "Madurai South",
    address: "West Veli Street, near Railway Junction, Madurai 625001",
    latitude: 9.9189,
    longitude: 78.1118,
    distanceFromMeenakshiTemple: 0.8,
    mapLink: "https://maps.google.com/?q=9.9189,78.1118",
    tagline: "Idiyappam coconut kurma, ghee roast and frothy filter coffee.",
    description: "Classic Brahmin-style pure vegetarian restaurant near the railway station serving soft idiyappam, poori masala, and South Indian thalis.",
    specialties: "Idiyappam Coconut Kurma, Ghee Masala Dosai, Filter Coffee"
  },
  {
    id: "chandran-mess",
    name: "Chandran Mess",
    category: "restaurants",
    categoryLabel: "NON-VEG MESS",
    image: "images/chandran-mess.jpg",
    imageAlt: "Chandran Mess mutton kola urundai meatballs on banana leaf",
    imageDescription: "Crispy fried mutton kola urundai and spicy country chicken meals in Tallakulam",
    imageSearchKeywords: "Chandran Mess Tallakulam Alagar Kovil Road Madurai kola urundai",
    rating: "4.8",
    duration: "11:30 AM – 4:00 PM, 6:30 PM – 10:30 PM",
    distance: "2.8",
    area: "Tallakulam",
    taluk: "Madurai North",
    address: "Alagar Kovil Main Road, Tallakulam, Madurai 625002",
    latitude: 9.9322,
    longitude: 78.1362,
    distanceFromMeenakshiTemple: 2.8,
    mapLink: "https://maps.google.com/?q=9.9322,78.1362",
    tagline: "Authentic spiced mutton kola urundai and country chicken meals.",
    description: "Famous for tender mutton kola urundai (meatballs) that melt in the mouth, accompanied by unlimited spicy non-veg kulambu gravies.",
    specialties: "Mutton Kola Urundai, Brain Roast, Nalli Fry"
  },
  {
    id: "melur-chettinad-mess",
    name: "Melur Chettinad Mess",
    category: "restaurants",
    categoryLabel: "RURAL TALUK MESS",
    image: "images/melur-chettinad-mess.jpg",
    imageAlt: "Melur Chettinad Mess fiery pepper chicken and country meals",
    imageDescription: "Rural Chettinad non-veg meal served with hot parotta in Melur Old Bus Stand",
    imageSearchKeywords: "Melur Chettinad Mess Old Bus Stand Melur Madurai",
    rating: "4.7",
    duration: "11:00 AM – 10:00 PM",
    distance: "28.0",
    area: "Melur Town",
    taluk: "Melur",
    address: "Old Bus Stand Road, Melur, Madurai District 625106",
    latitude: 10.0286,
    longitude: 78.3341,
    distanceFromMeenakshiTemple: 28.0,
    mapLink: "https://maps.google.com/?q=10.0286,78.3341",
    tagline: "Fiery Chettinad black pepper chicken and country meals.",
    description: "Top eatery in Melur taluk serving authentic rural Chettinad-style curries, parottas, and fresh country goat meat preparations.",
    specialties: "Melur Parotta, Nattu Kozhi Pepper Fry, Mutton Biryani"
  },
  {
    id: "thirumangalam-biryani",
    name: "Thirumangalam Mutton Biryani Centre",
    category: "restaurants",
    categoryLabel: "TALUK BIRYANI",
    image: "images/thirumangalam-biryani.jpg",
    imageAlt: "Firewood-cooked mutton dum biryani in Thirumangalam",
    imageDescription: "Fragrant seeraga samba rice dum biryani cooked over firewood in Thirumangalam",
    imageSearchKeywords: "Thirumangalam Mutton Biryani Main Road Madurai",
    rating: "4.7",
    duration: "11:30 AM – 10:30 PM",
    distance: "18.5",
    area: "Thirumangalam Town",
    taluk: "Thirumangalam",
    address: "Madurai Main Road, Thirumangalam, Madurai District 625706",
    latitude: 9.8242,
    longitude: 77.9892,
    distanceFromMeenakshiTemple: 18.5,
    mapLink: "https://maps.google.com/?q=9.8242,77.9892",
    tagline: "Signature Thirumangalam firewood dum biryani and kola urundai.",
    description: "A beloved dining stop in Thirumangalam taluk, drawing travelers for its aromatic firewood-cooked mutton biryani.",
    specialties: "Seeraga Samba Mutton Dum Biryani, Mutton Chukka, Ennaikathirikai"
  },
  {
    id: "vadipatti-velu-mess",
    name: "Vadipatti Velu Mess",
    category: "restaurants",
    categoryLabel: "HIGHWAY MESS",
    image: "images/vadipatti-velu-mess.jpg",
    imageAlt: "Vadipatti Velu Mess highway parotta and egg kalaki",
    imageDescription: "Flaky roadside parotta with spicy chicken chalna on Dindigul Highway in Vadipatti",
    imageSearchKeywords: "Vadipatti Velu Mess NH44 Dindigul highway Madurai",
    rating: "4.6",
    duration: "7:00 AM – 11:00 PM",
    distance: "26.0",
    area: "Vadipatti",
    taluk: "Vadipatti",
    address: "NH44 Dindigul Highway, Vadipatti, Madurai 625218",
    latitude: 10.0825,
    longitude: 78.0267,
    distanceFromMeenakshiTemple: 26.0,
    mapLink: "https://maps.google.com/?q=10.0825,78.0267",
    tagline: "Crispy highway parotta, country chicken chukka and egg kalaki.",
    description: "Famous highway stop in Vadipatti taluk where travelers pause for hot flaky parottas, spicy salna, and fresh goat chops.",
    specialties: "Parotta & Salna, Country Chicken Chukka, Kalaki"
  },
  {
    id: "sholavandan-tiffin",
    name: "Sholavandan Traditional Tiffin House",
    category: "restaurants",
    categoryLabel: "VILLAGE TIFFIN",
    image: "images/sholavandan-tiffin.jpg",
    imageAlt: "Traditional vegetarian morning tiffin in Sholavandan",
    imageDescription: "Crispy medu vadai and hot golden ghee roast dosa in lush Sholavandan",
    imageSearchKeywords: "Sholavandan traditional tiffin house Railway feeder road Madurai",
    rating: "4.7",
    duration: "6:00 AM – 9:00 PM",
    distance: "19.0",
    area: "Sholavandan",
    taluk: "Vadipatti",
    address: "Railway Feeder Road, Sholavandan, Madurai 625214",
    latitude: 10.0245,
    longitude: 78.0125,
    distanceFromMeenakshiTemple: 19.0,
    mapLink: "https://maps.google.com/?q=10.0245,78.0125",
    tagline: "Tender betel-leaf country tiffin, idlis and onion vadai.",
    description: "Located in lush Sholavandan on the banks of Vaigai, famous for pure vegetarian breakfast, crisp medu vadai, and golden ghee roasts.",
    specialties: "Ghee Roast, Medu Vadai, Filter Coffee, Idiyappam"
  },
  {
    id: "usilai-naicker-mess",
    name: "Usilai Naicker Mess",
    category: "restaurants",
    categoryLabel: "TALUK MESS",
    image: "images/usilai-naicker-mess.jpg",
    imageAlt: "Rustic Usilampatti mutton fry and country meals",
    imageDescription: "Hearty spicy non-veg meals cooked with stone-ground country spices in Usilampatti",
    imageSearchKeywords: "Usilai Naicker Mess Theni main road Usilampatti Madurai",
    rating: "4.6",
    duration: "11:00 AM – 10:30 PM",
    distance: "38.0",
    area: "Usilampatti Town",
    taluk: "Usilampatti",
    address: "Theni-Madurai Main Road, Usilampatti, Madurai 625532",
    latitude: 9.9678,
    longitude: 77.7942,
    distanceFromMeenakshiTemple: 38.0,
    mapLink: "https://maps.google.com/?q=9.9678,77.7942",
    tagline: "Rustic Usilampatti goat fry and hearty farmers' meals.",
    description: "Iconic stop in Usilampatti taluk serving bold, unpretentious rural Tamil Nadu non-veg meals cooked with stone-ground country spices.",
    specialties: "Usilai Mutton Curry, Nattu Kozhi Varuval, Kudal Fry"
  },
  {
    id: "amman-restaurant-soori",
    name: "Amman Restaurant — Soori",
    category: "restaurants",
    categoryLabel: "NON-VEG & CELEBRITY SPOT",
    image: "images/amman-restaurant-soori.jpg",
    imageAlt: "Amman Restaurant non-veg dining associated with Actor Soori",
    imageDescription: "Popular non-vegetarian restaurant chain in Madurai associated with Actor Soori",
    imageSearchKeywords: "Amman Restaurant Soori Madurai non vegetarian food",
    rating: "4.3",
    duration: "Open 11:30 AM – 11:00 PM",
    distance: "3.5",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "Multiple locations across Madurai (Bypass Road, Ring Road)",
    latitude: 9.9120,
    longitude: 78.1050,
    distanceFromMeenakshiTemple: 3.5,
    mapLink: "https://maps.google.com/?q=9.9120,78.1050",
    tagline: "Famous non-vegetarian food associated with Actor Soori.",
    description: "Amman Restaurant is well-known across multiple Madurai locations for non-vegetarian food. Celebrity connection: Confirmed: Actor Soori is associated with the restaurant. Confirmed/report-based: Vishnu Vishal has been reported visiting the restaurant.",
    specialties: "Non-Vegetarian Food, Country Chicken, Mutton Biryani, Parotta"
  },
  {
    id: "ayyan-restaurant",
    name: "Ayyan Restaurant",
    category: "restaurants",
    categoryLabel: "SOUTH INDIAN & NON-VEG",
    image: "images/ayyan-restaurant.jpg",
    imageAlt: "Ayyan Restaurant dining near Avaniyapuram airport area",
    imageDescription: "South Indian and non-vegetarian food in Avaniyapuram with celebrity connections",
    imageSearchKeywords: "Ayyan Restaurant Avaniyapuram Madurai non-veg Sivakarthikeyan Soori",
    rating: "4.2",
    duration: "Open 11:00 AM – 11:00 PM",
    distance: "5.5",
    area: "Avaniyapuram",
    taluk: "Madurai South",
    address: "Airport Road, Avaniyapuram, Madurai 625012",
    latitude: 9.8780,
    longitude: 78.1180,
    distanceFromMeenakshiTemple: 5.5,
    mapLink: "https://maps.google.com/?q=9.8780,78.1180",
    tagline: "South Indian / non-vegetarian food in Avaniyapuram.",
    description: "Located in Avaniyapuram, Ayyan Restaurant is famous for South Indian and non-vegetarian food. Celebrity: Sivakarthikeyan was reported at the inauguration of Soori's restaurant venture.",
    specialties: "South Indian Food, Non-Vegetarian Meals, Spicy Mutton Chukka"
  },
  {
    id: "gowri-krishna",
    name: "Gowri Krishna Veg Restaurant",
    category: "restaurants",
    categoryLabel: "PURE VEGETARIAN",
    image: "images/gowri-krishna.jpg",
    imageAlt: "Gowri Krishna Veg Restaurant on Bypass Road Madurai",
    imageDescription: "South Indian vegetarian food and family restaurant on Bypass Road",
    imageSearchKeywords: "Gowri Krishna Veg Restaurant Bypass Road Madurai vegetarian",
    rating: "4.1",
    duration: "Open 7:00 AM – 10:30 PM",
    distance: "3.2",
    area: "Bypass Road",
    taluk: "Madurai West",
    address: "Bypass Road, Madurai 625010",
    latitude: 9.9230,
    longitude: 78.0965,
    distanceFromMeenakshiTemple: 3.2,
    mapLink: "https://maps.google.com/?q=9.9230,78.0965",
    tagline: "South Indian vegetarian food on Bypass Road.",
    description: "Gowri Krishna is a popular vegetarian restaurant on Bypass Road, renowned for authentic South Indian vegetarian food, crispy ghee dosas, thali meals, and quick hospitality.",
    specialties: "South Indian Vegetarian Food, Ghee Roast Dosa, Filter Coffee"
  },
  {
    id: "zaitoon-madurai",
    name: "Zaitoon Restaurant",
    category: "restaurants",
    categoryLabel: "MIDDLE EASTERN & MULTI-CUISINE",
    image: "images/zaitoon-madurai.jpg",
    imageAlt: "Zaitoon Restaurant Arabian dishes and grilled food in Anna Nagar",
    imageDescription: "Middle Eastern and multi-cuisine restaurant known for Arabian-style dishes in Anna Nagar",
    imageSearchKeywords: "Zaitoon Restaurant Anna Nagar Madurai Middle Eastern Arabian grilled food",
    rating: "4.4",
    duration: "Open 12:00 PM – 11:30 PM",
    distance: "4.8",
    area: "Anna Nagar",
    taluk: "Madurai North",
    address: "Anna Nagar, Madurai 625020",
    latitude: 9.9205,
    longitude: 78.1512,
    distanceFromMeenakshiTemple: 4.8,
    mapLink: "https://maps.google.com/?q=9.9205,78.1512",
    tagline: "Known for Arabian-style dishes and grilled food in Anna Nagar.",
    description: "Located in Anna Nagar, Zaitoon is a Middle Eastern / multi-cuisine restaurant celebrated for Arabian-style dishes, Al Faham grilled chicken, barbecue platters, and flavorful rice dishes.",
    specialties: "Arabian-Style Dishes, Grilled Food, BBQ Platters, Shawarma"
  },
  {
    id: "madurai-kitchen",
    name: "Madurai Kitchen",
    category: "restaurants",
    categoryLabel: "NORTH INDIAN & MULTI-CUISINE",
    image: "images/madurai-kitchen.jpg",
    imageAlt: "Madurai Kitchen family dining near KK Nagar and Alagar Kovil Road",
    imageDescription: "North Indian and multi-cuisine restaurant suitable for family dining",
    imageSearchKeywords: "Madurai Kitchen KK Nagar Alagar Kovil Main Road North Indian family dining",
    rating: "4.1",
    duration: "Open 12:00 PM – 11:00 PM",
    distance: "4.5",
    area: "KK Nagar",
    taluk: "Madurai North",
    address: "KK Nagar / Alagar Kovil Main Road, Madurai 625020",
    latitude: 9.9360,
    longitude: 78.1480,
    distanceFromMeenakshiTemple: 4.5,
    mapLink: "https://maps.google.com/?q=9.9360,78.1480",
    tagline: "North Indian & multi-cuisine, suitable for family dining.",
    description: "Located around KK Nagar / Alagar Kovil Main Road, Madurai Kitchen is a multi-cuisine restaurant suitable for family dining, offering North Indian curries, tandoori breads, and biryani.",
    specialties: "North Indian Curries, Family Dining Specials, Tandoori Platters"
  },
  {
    id: "konar-soup-kadai",
    name: "Konar Soup Kadai",
    category: "restaurants",
    categoryLabel: "STREET FOOD & SOUP",
    image: "images/konar-soup-kadai.jpg",
    imageAlt: "Konar Soup Kadai hot bone soup and mutton specials on North Masi Street",
    imageDescription: "South Indian street restaurant on North Masi Street famous for soup and non-vegetarian dishes",
    imageSearchKeywords: "Vadakku masi vithi konar soup kadai Simmakkal Madurai soup non-veg",
    rating: "4.3",
    duration: "Open 5:30 PM – 11:30 PM",
    distance: "0.9",
    area: "Simmakkal",
    taluk: "Madurai North",
    address: "North Masi Street / Simmakkal, Madurai 625001",
    latitude: 9.9240,
    longitude: 78.1210,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9240,78.1210",
    tagline: "Known for hot soup and non-vegetarian street dishes.",
    description: "Vadakku masi vithi konar soup kadai in North Masi Street / Simmakkal is a renowned South Indian restaurant famous for hot mutton bone soup, pepper broth, and spicy evening non-vegetarian dishes.",
    specialties: "Mutton Bone Soup, Non-Vegetarian Dishes, Spicy Pepper Fry"
  },
  {
    id: "ayyappan-dosai-kadai",
    name: "Ayyappan Dosai Kadai",
    category: "restaurants",
    categoryLabel: "NIGHT DOSA STREET STALL",
    image: "images/ayyappan-dosai-kadai.jpg",
    imageAlt: "Ayyappan Dosai Kadai tawa cooking varieties of hot dosas",
    imageDescription: "South Indian night dosa restaurant on Pandiya Velalar Street",
    imageSearchKeywords: "Ayyappan Dosai Kadai Pandiya Velalar Street Madurai dosa varieties evening night",
    rating: "4.4",
    duration: "Evening / Night 6:00 PM – 1:00 AM",
    distance: "0.5",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "Pandiya Velalar Street, Madurai 625001",
    latitude: 9.9170,
    longitude: 78.1215,
    distanceFromMeenakshiTemple: 0.5,
    mapLink: "https://maps.google.com/?q=9.9170,78.1215",
    tagline: "Famous for dosa varieties during evening and night hours.",
    description: "Ayyappan Dosai Kadai on Pandiya Velalar Street is a celebrated South Indian restaurant known for endless dosa varieties. Typical timing is evening/night, serving hot crispy dosas with fiery chutneys.",
    specialties: "Dosa Varieties, Podi Dosa, Egg Dosa, Late-Night Tiffin"
  },
  {
    id: "chatleaf-street-food",
    name: "Chatleaf Street Food",
    category: "restaurants",
    categoryLabel: "STREET SNACKS & PANIPURI",
    image: "images/chatleaf-street-food.jpg",
    imageAlt: "Chatleaf street food panipuri and evening chaat snacks near Mahal",
    imageDescription: "Street food place on Old Kuyavar Palayam Road near Mahal area known for pani puri",
    imageSearchKeywords: "Chatleaf street food panipuri Old Kuyavar Palayam Road Mahal area Madurai",
    rating: "4.3",
    duration: "Open 4:00 PM – 10:30 PM",
    distance: "1.4",
    area: "Mahal Area",
    taluk: "Madurai South",
    address: "Old Kuyavar Palayam Road, Mahal Area, Madurai 625009",
    latitude: 9.9135,
    longitude: 78.1270,
    distanceFromMeenakshiTemple: 1.4,
    mapLink: "https://maps.google.com/?q=9.9135,78.1270",
    tagline: "Known for pani puri and evening street snacks near the Mahal.",
    description: "Located on Old Kuyavar Palayam Road in the historic Mahal area, Chatleaf street food is popular for pani puri, bhel, and lip-smacking evening street snacks.",
    specialties: "Pani Puri, Chaat Varieties, Evening Street Snacks"
  },
  {
    id: "swastik-chaat-corner",
    name: "Swastik Chaat Corner",
    category: "restaurants",
    categoryLabel: "NORTH INDIAN CHAAT",
    image: "images/swastik-chaat-corner.jpg",
    imageAlt: "Swastik Chaat Corner bakery and North Indian style chaat snacks",
    imageDescription: "High-rated bakery and chaat corner on East Veli Street Madurai",
    imageSearchKeywords: "SWASTIK CHAAT CORNER East Veli Street Madurai bakery chaat North Indian street snacks",
    rating: "4.8",
    duration: "Open 11:00 AM – 10:30 PM",
    distance: "1.0",
    area: "Madurai Main",
    taluk: "Madurai South",
    address: "East Veli Street, Madurai 625001",
    latitude: 9.9165,
    longitude: 78.1245,
    distanceFromMeenakshiTemple: 1.0,
    mapLink: "https://maps.google.com/?q=9.9165,78.1245",
    tagline: "Known for chaat and North Indian-style street snacks.",
    description: "With an outstanding 4.8 rating on East Veli Street, Swastik Chaat Corner is known for authentic chaat and North Indian-style street snacks, samosas, and bakery items.",
    specialties: "North Indian Chaat, Samosa Chaat, Kachori, Dahi Puri"
  },
  {
    id: "famous-jigarthanda-central",
    name: "Famous Jigarthanda (Main)",
    category: "restaurants",
    categoryLabel: "LEGENDARY DESSERT DRINK",
    image: "images/famous-jigarthanda.jpg",
    imageAlt: "Famous Jigarthanda chilled glass with ice cream and badam pisin",
    imageDescription: "Madurai's signature chilled dessert drink at central Madurai branch",
    imageSearchKeywords: "Famous Jigarthanda central Madurai East Marret Street chilled drink",
    rating: "4.8",
    duration: "Open 9:30 AM – 11:30 PM",
    distance: "0.8",
    area: "Vilakkuthoon",
    taluk: "Madurai South",
    address: "East Marret Street, Central Madurai 625001",
    latitude: 9.9168,
    longitude: 78.1189,
    distanceFromMeenakshiTemple: 0.8,
    mapLink: "https://maps.google.com/?q=9.9168,78.1189",
    tagline: "Madurai's signature chilled dessert drink.",
    description: "Jigarthanda is one of the foods most strongly associated with Madurai, specifically highlighted by Tamil Nadu Tourism and Incredible India. Note: There are multiple Jigarthanda shops in Madurai.",
    specialties: "Special Jigarthanda, Basundi, Badam Pisin Drink"
  },
  {
    id: "othakadai-yanaimalai-mess",
    name: "Othakadai Yanaimalai Traditional Mess",
    category: "restaurants",
    categoryLabel: "TRADITIONAL MEALS",
    image: "images/melur-chettinad-mess.jpg",
    imageAlt: "Authentic banana leaf meals and country chicken roast at Othakadai near Yanaimalai",
    imageDescription: "Rustic highway mess renowned for clay pot curries and banana leaf feast in Madurai East",
    imageSearchKeywords: "Othakadai Yanaimalai traditional mess Melur main road Madurai East",
    rating: "4.6",
    duration: "11:30 AM – 4:00 PM & 7:00 PM – 10:30 PM",
    distance: "10.0",
    area: "Othakadai",
    taluk: "Madurai East",
    address: "Melur Main Road, Othakadai, Madurai East 625107",
    latitude: 9.9610,
    longitude: 78.1870,
    distanceFromMeenakshiTemple: 10.0,
    mapLink: "https://maps.google.com/?q=9.9610,78.1870",
    tagline: "Famous banana leaf non-veg and vegetarian feast near the foot of Yanaimalai.",
    description: "A cherished wayside lunch stop for travellers heading towards Melur and Keeladi. Celebrated for country chicken nattu kozhi sukka, mutton bone marrow soup, and authentic fiery crab gravy served on fresh banana leaves.",
    specialties: "Nattu Kozhi Chukka, Mutton Meals, Fish Curry, Crab Gravy"
  },
  {
    id: "thirupparankundram-saravana",
    name: "Sri Saravana Bhavan Tirupparankundram",
    category: "restaurants",
    categoryLabel: "PURE VEGETARIAN",
    image: "images/sree-sabarees.jpg",
    imageAlt: "Crisp ghee roast dosai and filter coffee opposite Tirupparankundram Temple",
    imageDescription: "Devotional pure vegetarian tiffin and midday thali opposite the first Arupadaiveedu shrine",
    imageSearchKeywords: "Sri Saravana Bhavan Tirupparankundram Murugan temple Sannathi street Madurai",
    rating: "4.7",
    duration: "6:00 AM – 10:30 PM",
    distance: "7.5",
    area: "Thirupparankundram",
    taluk: "Tirupparankundram",
    address: "Sannathi Street, Opposite Murugan Temple Gopuram, Thirupparankundram, Madurai 625005",
    latitude: 9.8768,
    longitude: 78.0725,
    distanceFromMeenakshiTemple: 7.5,
    mapLink: "https://maps.google.com/?q=9.8768,78.0725",
    tagline: "Steaming hot ghee roast, idlis, and traditional temple meals at the hill shrine.",
    description: "The preferred devotional dining stop for pilgrims visiting the rock-cut cave temple of Lord Muruga. Serves aromatic ghee pongal, crispy vadas, coconut chutney, and South Indian thalis.",
    specialties: "Ghee Roast Dosa, Filter Coffee, Special South Indian Meals, Medu Vada"
  },
  {
    id: "kallupatti-gramathu-mess",
    name: "T. Kallupatti Gramathu Mess",
    category: "restaurants",
    categoryLabel: "VILLAGE CUISINE",
    image: "images/vadipatti-velu-mess.jpg",
    imageAlt: "Traditional earthen pot gravies and hot parottas at T. Kallupatti Gramathu Mess",
    imageDescription: "Authentic southern village mess with slow-cooked country meat gravies and parottas in Peraiyur",
    imageSearchKeywords: "T Kallupatti gramathu mess Peraiyur road rustic cuisine Madurai",
    rating: "4.6",
    duration: "11:00 AM – 3:30 PM & 6:30 PM – 10:30 PM",
    distance: "42.0",
    area: "T. Kallupatti",
    taluk: "Peraiyur",
    address: "Peraiyur Main Road, T. Kallupatti, Madurai District 625702",
    latitude: 9.7405,
    longitude: 77.8115,
    distanceFromMeenakshiTemple: 42.0,
    mapLink: "https://maps.google.com/?q=9.7405,77.8115",
    tagline: "Rustic village curries, layered parottas, and traditional woodfire cuisine.",
    description: "A landmark country mess in Peraiyur taluk, famed for slow-cooked country mutton salna, fluffy bun parottas, and tender country chicken simmered in stone-ground spices over wood embers.",
    specialties: "Country Chicken Salna, Woodfire Parotta, Mutton Chukka, Karandi Omelette"
  },
  {
    id: "kallikudi-highway-mess",
    name: "Kallikudi Highway Mess & Tiffin",
    category: "restaurants",
    categoryLabel: "HIGHWAY MESS",
    image: "images/amma-mess.jpg",
    imageAlt: "Fresh piping hot dosais and country non-veg curries at Kallikudi Highway Mess",
    imageDescription: "Round-the-clock highway culinary stop on the Madurai-Tirunelveli corridor in Kallikudi",
    imageSearchKeywords: "Kallikudi highway mess tiffin Madurai Tirunelveli NH44 Sivarakottai",
    rating: "4.5",
    duration: "6:30 AM – 11:30 PM",
    distance: "28.2",
    area: "Kallikudi",
    taluk: "Kallikudi",
    address: "NH44 Highway Four-Lane, Kallikudi Junction, Madurai 625701",
    latitude: 9.7760,
    longitude: 78.0140,
    distanceFromMeenakshiTemple: 28.2,
    mapLink: "https://maps.google.com/?q=9.7760,78.0140",
    tagline: "Piping hot karandi omelette, soft idlis, and country chicken along NH44.",
    description: "A popular stopover for highway travellers between Madurai, Virudhunagar, and Tirunelveli. Known for piping hot dosais, freshly whisked karandi omelettes, and rich country kozhi kulambu.",
    specialties: "Karandi Omelette, Hot Egg Kothu Parotta, Country Kozhi Kulambu, Soft Idli"
  }
];

// =========================================================================
// STAYS ACROSS MADURAI DISTRICT (Luxury, Mid-Range, Budget & Guest Houses)
// =========================================================================
const STAYS = [
  {
    id: "heritage-madurai",
    name: "Heritage Madurai Resort",
    category: "stays",
    categoryLabel: "LUXURY RESORT",
    tier: "luxury",
    image: "images/heritage-stay.jpg",
    imageAlt: "Olympic temple pool and Geoffrey Bawa architecture at Heritage Madurai",
    imageDescription: "Private plunge pool villa and ancient banyan trees at Heritage Madurai Resort in Kochadai",
    imageSearchKeywords: "Heritage Madurai resort Geoffrey Bawa Kochadai luxury pool",
    rating: "4.9",
    duration: "Check-in 2:00 PM",
    distance: "5.2",
    priceRange: "₹7,500 – ₹16,000 / night",
    area: "Kochadai",
    taluk: "Madurai West",
    address: "11, Melakkal Main Road, Kochadai, Madurai, Tamil Nadu 625016",
    latitude: 9.9382,
    longitude: 78.0825,
    distanceFromMeenakshiTemple: 5.2,
    mapLink: "https://maps.google.com/?q=9.9382,78.0825",
    tagline: "Geoffrey Bawa architecture with private plunge pool villas.",
    description: "A 17-acre heritage haven designed by renowned Sri Lankan architect Geoffrey Bawa. Features banyan trees, an Olympic-sized stone temple replica pool, luxury villas, and fine dining.",
    highlights: ["Olympic-sized temple pool", "Geoffrey Bawa design", "Spa & luxury dining"]
  },
  {
    id: "gateway-pasumalai",
    name: "The Gateway Hotel Pasumalai (Taj)",
    category: "stays",
    categoryLabel: "LUXURY HOTEL",
    tier: "luxury",
    image: "images/gateway-pasumalai.jpg",
    imageAlt: "The Gateway Hotel Pasumalai hilltop colonial architecture and peacock gardens",
    imageDescription: "Panoramic hill views overlooking Madurai city temple towers from Pasumalai Hill",
    imageSearchKeywords: "The Gateway Hotel Pasumalai Taj Madurai hill view",
    rating: "4.8",
    duration: "Check-in 2:00 PM",
    distance: "5.8",
    priceRange: "₹8,000 – ₹18,000 / night",
    area: "Pasumalai",
    taluk: "Tirupparankundram",
    address: "No. 40, TPK Road, Pasumalai, Madurai, Tamil Nadu 625004",
    latitude: 9.8974,
    longitude: 78.0834,
    distanceFromMeenakshiTemple: 5.8,
    mapLink: "https://maps.google.com/?q=9.8974,78.0834",
    tagline: "Hilltop colonial luxury with panoramic views over the temple towers.",
    description: "Set atop Pasumalai Hill amidst 62 acres of landscaped gardens, this colonial-era retreat features roaming peacocks, Ayurvedic wellness therapies, and scenic vistas of the city skyline.",
    highlights: ["Panoramic hill views", "Taj hospitality", "Peacock gardens & pool"]
  },
  {
    id: "courtyard-marriott",
    name: "Courtyard by Marriott Madurai",
    category: "stays",
    categoryLabel: "LUXURY HOTEL",
    tier: "luxury",
    image: "images/courtyard-marriott.jpg",
    imageAlt: "Courtyard by Marriott modern luxury facade on Alagar Kovil Road",
    imageDescription: "Modern 5-star hotel suites and rooftop swimming pool on Alagar Kovil Road Madurai",
    imageSearchKeywords: "Courtyard by Marriott Alagar Kovil Road Madurai",
    rating: "4.7",
    duration: "Check-in 3:00 PM",
    distance: "3.4",
    priceRange: "₹6,000 – ₹12,000 / night",
    area: "Alagar Kovil Road",
    taluk: "Madurai North",
    address: "168, Alagar Kovil Road, Next to Circuit House, Madurai 625002",
    latitude: 9.9351,
    longitude: 78.1392,
    distanceFromMeenakshiTemple: 3.4,
    mapLink: "https://maps.google.com/?q=9.9351,78.1392",
    tagline: "Contemporary 5-star comfort in the city's diplomatic avenue.",
    description: "Modern luxury hotel offering spacious suites, all-day multi-cuisine dining, an outdoor swimming pool, and seamless accessibility to Madurai Airport and Gandhi Museum.",
    highlights: ["24/7 fitness center", "Rooftop dining", "Close to Gandhi Museum"]
  },
  {
    id: "fortune-pandiyan",
    name: "Fortune Pandiyan Hotel",
    category: "stays",
    categoryLabel: "MID-RANGE",
    tier: "mid-range",
    image: "images/fortune-pandiyan.jpg",
    imageAlt: "Fortune Pandiyan Hotel lush green garden lawns in Madurai",
    imageDescription: "Sprawling landscaped green hotel grounds and swimming pool on Race Course Road",
    imageSearchKeywords: "Fortune Pandiyan Hotel Race Course Road Madurai",
    rating: "4.6",
    duration: "Check-in 12:00 PM",
    distance: "3.6",
    priceRange: "₹3,800 – ₹7,000 / night",
    area: "Race Course Road",
    taluk: "Madurai North",
    address: "Race Course Road, Madurai 625002",
    latitude: 9.9388,
    longitude: 78.1342,
    distanceFromMeenakshiTemple: 3.6,
    mapLink: "https://maps.google.com/?q=9.9388,78.1342",
    tagline: "Sprawling landscaped hotel with ITC Fortune hospitality.",
    description: "A long-standing favorite set in quiet green grounds, offering refined South Indian restaurants, banquet facilities, and a tranquil outdoor pool.",
    highlights: ["Sprawling garden lawns", "Orchid restaurant", "Swimming pool"]
  },
  {
    id: "hotel-supreme",
    name: "Hotel Supreme",
    category: "stays",
    categoryLabel: "MID-RANGE",
    tier: "mid-range",
    image: "images/hotel-supreme.jpg",
    imageAlt: "Hotel Supreme rooftop Surya restaurant with illuminated temple view",
    imageDescription: "Rooftop restaurant dining overlooking illuminated gopurams of Meenakshi Temple",
    imageSearchKeywords: "Hotel Supreme West Veli Street rooftop temple view Madurai",
    rating: "4.5",
    duration: "Check-in 12:00 PM",
    distance: "1.0",
    area: "West Veli Street",
    taluk: "Madurai South",
    address: "110, West Veli Street, Madurai 625001",
    latitude: 9.9175,
    longitude: 78.1112,
    distanceFromMeenakshiTemple: 1.0,
    mapLink: "https://maps.google.com/?q=9.9175,78.1112",
    tagline: "Famous rooftop restaurant with panoramic Meenakshi gopuram views.",
    description: "Ideally situated near the central railway station and temple, renowned for its rooftop Surya restaurant where dinner is enjoyed overlooking the lighted temple towers.",
    highlights: ["Rooftop temple tower view", "Pure vegetarian restaurant", "Walking distance to station"]
  },
  {
    id: "hotel-royal-court",
    name: "Hotel Royal Court",
    category: "stays",
    categoryLabel: "BUDGET COMFORT",
    tier: "budget",
    image: "images/hotel-royal-court.jpg",
    imageAlt: "Hotel Royal Court opposite Madurai Junction railway station",
    imageDescription: "Convenient modern rooms and travel desk directly facing Madurai Junction",
    imageSearchKeywords: "Hotel Royal Court West Veli Street Railway junction Madurai",
    rating: "4.5",
    duration: "Check-in 12:00 PM",
    distance: "1.1",
    area: "Railway Junction",
    taluk: "Madurai South",
    address: "4, West Veli Street, Opposite Railway Station, Madurai 625001",
    latitude: 9.9182,
    longitude: 78.1105,
    distanceFromMeenakshiTemple: 1.1,
    mapLink: "https://maps.google.com/?q=9.9182,78.1105",
    tagline: "Directly opposite Madurai Junction railway station with modern rooms.",
    description: "Highly rated for convenience and cleanliness, offering modern amenities, multi-cuisine dining, and instant rail access for pilgrims and tourists.",
    highlights: ["Opposite railway station", "Prompt 24hr travel desk", "Free breakfast buffet"]
  },
  {
    id: "meenakshi-temple-guest-house",
    name: "Birla Vishram & Temple Guest House",
    category: "stays",
    categoryLabel: "TEMPLE GUEST HOUSE",
    tier: "budget",
    image: "images/meenakshi-temple-guest-house.jpg",
    imageAlt: "Birla Vishram pilgrim guest house steps from Meenakshi West Tower",
    imageDescription: "Devotional clean pilgrim accommodation near the West Gopuram of Meenakshi Temple",
    imageSearchKeywords: "Birla Vishram Meenakshi temple guest house West Chithirai street Madurai",
    rating: "4.6",
    duration: "Check-in 10:00 AM",
    distance: "0.2",
    priceRange: "₹500 – ₹1,800 / night",
    area: "West Chithirai Street",
    taluk: "Madurai South",
    address: "Near West Tower, Meenakshi Temple, Madurai 625001",
    latitude: 9.9202,
    longitude: 78.1182,
    distanceFromMeenakshiTemple: 0.2,
    mapLink: "https://maps.google.com/?q=9.9202,78.1182",
    tagline: "Clean, humble pilgrim lodgings steps away from the sanctum.",
    description: "Operated for devotional travellers seeking immediate walking access to early morning 5:00 AM Suprabhatham worship and temple darshan.",
    highlights: ["2 minutes walk to temple", "Affordable pilgrim rates", "Clean vegetarian premises"]
  },
  {
    id: "manis-heritage-homestay",
    name: "Mani's Heritage Homestay",
    category: "stays",
    categoryLabel: "HOMESTAY",
    tier: "mid-range",
    image: "images/manis-heritage-homestay.jpg",
    imageAlt: "Chettinad style inner courtyard of Mani's Heritage Homestay near Teppakulam",
    imageDescription: "Traditional wood-pillared courtyard and authentic home stay in Madurai",
    imageSearchKeywords: "Manis Heritage Homestay Teppakulam south bank Madurai",
    rating: "4.8",
    duration: "Check-in 1:00 PM",
    distance: "4.2",
    priceRange: "₹2,800 – ₹4,500 / night",
    area: "Theppakulam",
    taluk: "Madurai South",
    address: "Teppakulam South Bank, Madurai 625009",
    latitude: 9.9152,
    longitude: 78.1512,
    distanceFromMeenakshiTemple: 4.2,
    mapLink: "https://maps.google.com/?q=9.9152,78.1512",
    tagline: "Traditional Madurai Chettinad-style home with local hosts.",
    description: "A warm, family-run homestay near Vandiyur Theppakulam featuring traditional courtyard architecture, home-cooked breakfasts, and insider local guidance.",
    highlights: ["Authentic home-cooked food", "Heritage courtyard rooms", "Peaceful lakeside area"]
  },
  {
    id: "vaigai-river-resort",
    name: "Vaigai Heritage Eco Farmstay",
    category: "stays",
    categoryLabel: "ECO RESORT & FARMSTAY",
    tier: "mid-range",
    image: "images/heritage-stay.jpg",
    imageAlt: "Tranquil organic orchard stay bordered by betel farms near Sholavandan and Alanganallur",
    imageDescription: "Peaceful countryside farmstay with organic dining and river breezes in Vadipatti",
    imageSearchKeywords: "Vaigai heritage eco farmstay Sholavandan Vadipatti Madurai",
    rating: "4.7",
    duration: "Check-in 1:00 PM",
    distance: "22.0",
    priceRange: "₹3,200 – ₹6,500 / night",
    area: "Sholavandan / Vadipatti",
    taluk: "Vadipatti",
    address: "Vaigai River Road, Near Sholavandan, Vadipatti Taluk, Madurai 625214",
    latitude: 10.0250,
    longitude: 77.9650,
    distanceFromMeenakshiTemple: 22.0,
    mapLink: "https://maps.google.com/?q=10.0250,77.9650",
    tagline: "Tranquil organic orchard retreat bordered by betel farms and Vaigai river breezes.",
    description: "A restorative rural haven surrounded by lush coconut groves and betel plantations. Offers farm-to-table organic Tamil meals, bullock cart village rides, and quick access to Alanganallur and Vaigai Dam.",
    highlights: ["Organic farm dining", "Riverfront cycling trails", "Close to Alanganallur & Kutladampatti"]
  },
  {
    id: "melur-chettinad-gateway",
    name: "Melur Heritage Residency & Transit Suites",
    category: "stays",
    categoryLabel: "MID-RANGE HOTEL",
    tier: "mid-range",
    image: "images/hotel-supreme.jpg",
    imageAlt: "Modern comfortable hotel facade on Melur bypass gateway to Arittapatti and Chettinad",
    imageDescription: "Spacious air-conditioned rooms and authentic Chettinad restaurant on Melur Highway",
    imageSearchKeywords: "Melur heritage residency transit suites Arittapatti Madurai NH38",
    rating: "4.6",
    duration: "Check-in 12:00 PM",
    distance: "30.0",
    priceRange: "₹2,400 – ₹4,800 / night",
    area: "Melur Town",
    taluk: "Melur",
    address: "Trichy-Madurai National Highway Bypass, Melur, Madurai 625106",
    latitude: 10.0290,
    longitude: 78.3370,
    distanceFromMeenakshiTemple: 30.0,
    mapLink: "https://maps.google.com/?q=10.0290,78.3370",
    tagline: "Comfortable air-conditioned gateway stay for Arittapatti & Chettinad travelers.",
    description: "Modern, spotlessly clean highway hotel offering family suites, 24-hour reception, ample secure parking, and an on-site Chettinad restaurant for exploring Arittapatti Biodiversity Site and Thiruvathavur.",
    highlights: ["Gateway to Arittapatti Site", "Authentic Chettinad dining", "24/7 highway reception"]
  },
  {
    id: "thirumangalam-grand-inn",
    name: "Thirumangalam Grand Highway Inn",
    category: "stays",
    categoryLabel: "TRANSIT HOTEL",
    tier: "mid-range",
    image: "images/hotel-royal-court.jpg",
    imageAlt: "Thirumangalam Grand Highway Inn near Kappalur industrial and pilgrimage corridor",
    imageDescription: "Convenient modern rooms and travel desk along the Madurai-Kanyakumari NH44 corridor",
    imageSearchKeywords: "Thirumangalam grand highway inn Kappalur NH44 Madurai",
    rating: "4.5",
    duration: "Check-in 12:00 PM",
    distance: "20.0",
    priceRange: "₹2,200 – ₹4,500 / night",
    area: "Thirumangalam",
    taluk: "Thirumangalam",
    address: "Kappalur Four-Lane Junction, Thirumangalam, Madurai 625706",
    latitude: 9.8290,
    longitude: 77.9940,
    distanceFromMeenakshiTemple: 20.0,
    mapLink: "https://maps.google.com/?q=9.8290,77.9940",
    tagline: "Convenient NH44 highway suites with genuine Seeraga Samba biryani dining.",
    description: "Positioned right on the prime southern highway corridor, this modern hotel features fast Wi-Fi, express check-in, spacious air-conditioned suites, and instant access to Thirumangalam town.",
    highlights: ["NH44 southern corridor access", "Famous biryani dining", "Express check-in & parking"]
  },
  {
    id: "usilai-hillview-farmstay",
    name: "Usilai Foothills Eco Retreat",
    category: "stays",
    categoryLabel: "ECO RETREAT",
    tier: "mid-range",
    image: "images/heritage-stay.jpg",
    imageAlt: "Cottages set against the scenic Western Ghats foothills in Usilampatti",
    imageDescription: "Peaceful nature cottages with mountain breezes along Theni Main Road in Usilampatti",
    imageSearchKeywords: "Usilai foothills eco retreat farmstay Theni road Usilampatti Madurai",
    rating: "4.6",
    duration: "Check-in 1:00 PM",
    distance: "37.5",
    priceRange: "₹2,800 – ₹5,500 / night",
    area: "Usilampatti",
    taluk: "Usilampatti",
    address: "Theni Main Road, Foothill Orchards, Usilampatti, Madurai 625532",
    latitude: 9.9720,
    longitude: 77.7980,
    distanceFromMeenakshiTemple: 37.5,
    mapLink: "https://maps.google.com/?q=9.9720,77.7980",
    tagline: "Serene mountain foothill cottages with cool evening breezes and rustic hospitality.",
    description: "Surrounded by mango and guava orchards at the gateway to the Western Ghats, offering eco-cottages, traditional clay pot dining, campfire evenings, and serene morning mountain walks.",
    highlights: ["Western Ghats views", "Clay pot village dining", "Campfire & orchard walks"]
  },
  {
    id: "gandhi-niketan-guest-house",
    name: "Gandhi Niketan Rural Niwas",
    category: "stays",
    categoryLabel: "ASHRAM GUEST HOUSE",
    tier: "budget",
    image: "images/meenakshi-temple-guest-house.jpg",
    imageAlt: "Simple, serene green lodgings at Gandhi Niketan Ashram in T. Kallupatti Peraiyur",
    imageDescription: "Peaceful Gandhian eco-stay amidst 40 acres of greenery in T. Kallupatti",
    imageSearchKeywords: "Gandhi Niketan rural niwas guest house T Kallupatti Peraiyur Madurai",
    rating: "4.7",
    duration: "Check-in 10:00 AM",
    distance: "41.5",
    priceRange: "₹1,200 – ₹2,500 / night",
    area: "T. Kallupatti",
    taluk: "Peraiyur",
    address: "Ashram Campus, T. Kallupatti, Peraiyur Taluk, Madurai 625702",
    latitude: 9.7410,
    longitude: 77.8120,
    distanceFromMeenakshiTemple: 41.5,
    mapLink: "https://maps.google.com/?q=9.7410,77.8120",
    tagline: "Peaceful Gandhian ashram guesthouse surrounded by 40 acres of green campus.",
    description: "Simple, spotlessly clean, and spiritually peaceful accommodation inside the historic 1940 Gandhi Niketan Ashram. Perfect for educators, researchers, and mindful travellers exploring Peraiyur.",
    highlights: ["40-acre wooded campus", "Organic ashram vegetarian meals", "Peaceful library & Khadi center"]
  },
  {
    id: "kallikudi-highway-suites",
    name: "Kallikudi Country Lodge",
    category: "stays",
    categoryLabel: "BUDGET LODGE",
    tier: "budget",
    image: "images/hotel-royal-court.jpg",
    imageAlt: "Clean wayside country lodge at Kallikudi Junction near Sivarakottai",
    imageDescription: "Budget highway accommodation for heritage explorers along the Gundar river basin in Kallikudi",
    imageSearchKeywords: "Kallikudi country lodge highway wayside Sivarakottai Madurai",
    rating: "4.4",
    duration: "Check-in 12:00 PM",
    distance: "28.0",
    priceRange: "₹1,400 – ₹2,800 / night",
    area: "Kallikudi",
    taluk: "Kallikudi",
    address: "Kallikudi Junction, Madurai-Tirunelveli Highway, Madurai 625701",
    latitude: 9.7780,
    longitude: 78.0150,
    distanceFromMeenakshiTemple: 28.0,
    mapLink: "https://maps.google.com/?q=9.7780,78.0150",
    tagline: "Convenient southern corridor wayside lodge for Sivarakottai archaeological trails.",
    description: "An economical, clean transit lodge offering air-conditioned rooms, 24-hour power backup, roadside tea stalls, and immediate access to the Sivarakottai prehistoric excavation sites.",
    highlights: ["Direct highway location", "Budget-friendly clean rooms", "Base for Sivarakottai site"]
  },
  {
    id: "yanaimalai-lakeview-stay",
    name: "Yanaimalai Heritage Resort & Lakeview",
    category: "stays",
    categoryLabel: "HERITAGE RESORT",
    tier: "mid-range",
    image: "images/heritage-stay.jpg",
    imageAlt: "View of monolithic Yanaimalai Elephant rock from lakeside gardens in Madurai East",
    imageDescription: "Boutique resort with spectacular monolithic rock views and swimming pool near Othakadai",
    imageSearchKeywords: "Yanaimalai heritage resort lakeview Othakadai Madurai East",
    rating: "4.8",
    duration: "Check-in 2:00 PM",
    distance: "9.8",
    priceRange: "₹3,500 – ₹7,200 / night",
    area: "Othakadai",
    taluk: "Madurai East",
    address: "Yanaimalai Foothill Road, Othakadai, Madurai East, Madurai 625107",
    latitude: 9.9570,
    longitude: 78.1780,
    distanceFromMeenakshiTemple: 9.8,
    mapLink: "https://maps.google.com/?q=9.9570,78.1780",
    tagline: "Spectacular views of monolithic Yanaimalai rock with lakeview gardens.",
    description: "Set at the serene foot of the ancient Elephant Hill in Madurai East. Features stone cottages, lotus ponds, swimming pool, open-air stargazing dining, and 10-minute access to Thirumohur and Keeladi.",
    highlights: ["Monolithic Yanaimalai view", "Swimming pool & garden lawn", "Close to Keeladi & Thirumohur"]
  }
];

const CATEGORY_ICONS = {
  temples: "",
  historical: "",
  nature: "",
  shopping: "",
  restaurants: "",
  cafes: "",
  modern: "",
  stays: ""
};

// =========================================================================
// HTML CARD GENERATORS
// =========================================================================

function placeCardHTML(place) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;
  return `
    <article class="card" data-id="${place.id}" data-lat="${place.latitude}" data-lng="${place.longitude}" data-area="${place.area || ''}" data-category="${place.category}" data-taluk="${place.taluk}" data-distance="${place.distanceFromMeenakshiTemple || 0}" data-name="${place.name} ${place.area} ${place.categoryLabel} ${place.tagline}">
      <div class="thumb">
        <img src="${place.image}" alt="${place.imageAlt || place.name}" loading="lazy" onerror="handleImageFallback(this, '${place.name.replace(/'/g, "\\'")}')" />
        <span class="badge">${place.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${place.name}</h3>
          <span class="rating">★ ${place.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${place.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${place.taluk}</span>
        </div>
        <div class="meta-duration">${place.duration}</div>
        <p class="card-desc">${place.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <span class="card-price-pill" title="Entry: ${place.entryFee || 'Free Entry'}">${place.entryFeeShort || 'Free Entry'}</span>
          <div style="display:flex; align-items:center; gap:0.35rem; min-width:0;">
            <a href="place-details.html?id=${place.id}" class="view">Details <span class="arrow">&rarr;</span></a>
            <button type="button" class="btn-book-action ${(place.id === 'meenakshi-temple' || place.id === 'thirumalai-nayak-palace' || place.id === 'keeladi-museum' || place.id === 'thirupparankundram-temple' || place.id === 'alagar-kovil') ? '' : 'btn-book-free'}" onclick="window.openBookingModal && window.openBookingModal('${place.id}', 'place')">${(place.id === 'meenakshi-temple' || place.id === 'thirumalai-nayak-palace' || place.id === 'keeladi-museum' || place.id === 'thirupparankundram-temple' || place.id === 'alagar-kovil') ? 'Passes' : 'Entry Info'}</button>
          </div>
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${place.id}', ${place.latitude}, ${place.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function cafeCardHTML(c) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${c.latitude},${c.longitude}`;
  const tagsHtml = (c.tags || []).map(t => `<span class="cafe-tag">${t}</span>`).join("");
  return `
    <article class="card" data-id="${c.id}" data-lat="${c.latitude}" data-lng="${c.longitude}" data-area="${c.area || ''}" data-category="cafes" data-taluk="${c.taluk}" data-distance="${c.distanceFromMeenakshiTemple || 0}" data-name="${c.name} ${c.area} ${c.specialties || ''} ${c.categoryLabel}">
      <div class="thumb">
        <img src="${c.image}" alt="${c.imageAlt || c.name}" loading="lazy" onerror="handleImageFallback(this, '${c.name.replace(/'/g, "\\'")}')" />
        <span class="badge" style="background:var(--cream-deep); color:var(--brown);">${c.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${c.name}</h3>
          <span class="rating">★ ${c.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${c.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${c.priceRange}</span>
        </div>
        <div class="cafe-tags">${tagsHtml}</div>
        <div class="meta-duration">${c.timings}</div>
        <p class="card-desc">${c.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <span class="card-price-pill">${c.priceRange}</span>
          <button type="button" class="btn-book-action btn-book-food" onclick="window.openBookingModal && window.openBookingModal('${c.id}', 'cafe')">Order / Table</button>
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${c.id}', ${c.latitude}, ${c.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function modernSpotCardHTML(m) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${m.latitude},${m.longitude}`;
  const facHtml = (m.facilities || []).slice(0, 3).map(f => `<span class="cafe-tag">${f}</span>`).join("");
  const feeLabel = m.entryFeeShort || m.entryFee;
  let actionBtnHtml = '';
  if (m.id === 'kalaignar-library') {
    actionBtnHtml = `<a href="${m.officialUrl || 'https://kalaignarcentenarylibrary.tn.gov.in/'}" target="_blank" rel="noopener noreferrer" class="btn-book-action btn-book-portal" title="Official Tamil Nadu Government Library Portal">Library Portal ↗</a>`;
  } else if (m.id === 'athisayam-park') {
    actionBtnHtml = `<button type="button" class="btn-book-action" onclick="window.openBookingModal && window.openBookingModal('${m.id}', 'modern')">Book Tickets</button>`;
  } else if (m.id === 'vishaal-de-mall') {
    actionBtnHtml = `<button type="button" class="btn-book-action" onclick="window.openBookingModal && window.openBookingModal('${m.id}', 'modern')">Movie Tickets</button>`;
  } else if (m.id === 'eco-park' || m.id === 'rajaji-park') {
    actionBtnHtml = `<button type="button" class="btn-book-action btn-book-counter" onclick="window.openBookingModal && window.openBookingModal('${m.id}', 'modern')">Ticket Info</button>`;
  } else {
    actionBtnHtml = `<button type="button" class="btn-book-action btn-book-free" onclick="window.openBookingModal && window.openBookingModal('${m.id}', 'modern')">Visitor Info</button>`;
  }

  return `
    <article class="card" data-id="${m.id}" data-lat="${m.latitude}" data-lng="${m.longitude}" data-area="${m.area || ''}" data-category="modern" data-taluk="${m.taluk}" data-distance="${m.distanceFromMeenakshiTemple || 0}" data-name="${m.name} ${m.area} ${m.type} ${m.tagline}">
      <div class="thumb">
        <img src="${m.image}" alt="${m.imageAlt || m.name}" loading="lazy" onerror="handleImageFallback(this, '${m.name.replace(/'/g, "\\'")}')" />
        <span class="badge" style="background:#0288D1; color:#fff;">${m.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${m.name}</h3>
          <span class="rating">★ ${m.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${m.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${m.taluk}</span>
        </div>
        <div class="cafe-tags">${facHtml}</div>
        <div class="meta-duration">${m.openingHours}</div>
        <p class="card-desc">${m.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <span class="card-price-pill" title="Entry: ${m.entryFee}">${feeLabel}</span>
          ${actionBtnHtml}
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${m.id}', ${m.latitude}, ${m.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function restaurantCardHTML(r) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${r.latitude},${r.longitude}`;
  return `
    <article class="card" data-id="${r.id}" data-lat="${r.latitude}" data-lng="${r.longitude}" data-area="${r.area || ''}" data-category="restaurants" data-taluk="${r.taluk}" data-distance="${r.distanceFromMeenakshiTemple || 0}" data-name="${r.name} ${r.area} ${r.categoryLabel} ${r.specialties || ''}">
      <div class="thumb">
        <img src="${r.image}" alt="${r.imageAlt || r.name}" loading="lazy" onerror="handleImageFallback(this, '${r.name.replace(/'/g, "\\'")}')" />
        <span class="badge">${r.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${r.name}</h3>
          <span class="rating">★ ${r.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${r.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${r.taluk}</span>
        </div>
        <div class="meta-duration">${r.duration}</div>
        <p class="card-desc">${r.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <a href="food.html" class="view">Explore food <span class="arrow">&rarr;</span></a>
          <button type="button" class="btn-book-action btn-book-food" onclick="window.openBookingModal && window.openBookingModal('${r.id}', 'restaurant')">Order / Table</button>
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${r.id}', ${r.latitude}, ${r.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function stayCardHTML(s) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${s.latitude},${s.longitude}`;
  return `
    <article class="card" data-id="${s.id}" data-lat="${s.latitude}" data-lng="${s.longitude}" data-area="${s.area || ''}" data-category="stays" data-tier="${s.tier}" data-taluk="${s.taluk}" data-distance="${s.distanceFromMeenakshiTemple || 0}" data-name="${s.name} ${s.area} ${s.categoryLabel} ${s.tagline}">
      <div class="thumb">
        <img src="${s.image}" alt="${s.imageAlt || s.name}" loading="lazy" onerror="handleImageFallback(this, '${s.name.replace(/'/g, "\\'")}')" />
        <span class="badge">${s.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${s.name}</h3>
          <span class="rating">★ ${s.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${s.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${s.taluk}</span>
        </div>
        <div class="meta-duration">${s.priceRange}</div>
        <p class="card-desc">${s.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <span class="card-price-pill">${s.priceRange}</span>
          <button type="button" class="btn-book-action btn-book-stay" onclick="window.openBookingModal && window.openBookingModal('${s.id}', 'stay')">Book Stay</button>
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${s.id}', ${s.latitude}, ${s.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function renderPlacesGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = list.map(placeCardHTML).join("");
}

function renderCafesGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = list.map(cafeCardHTML).join("");
}

function renderModernSpotsGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = list.map(modernSpotCardHTML).join("");
}

function renderStaysGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = (list || STAYS).map(stayCardHTML).join("");
}

function renderRestaurantsGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = (list || RESTAURANTS).map(restaurantCardHTML).join("");
}

function renderRestaurantsAndStaysGrid(containerSelector, filter = "all") {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  let items = [];
  if (filter === "all") {
    items = [...RESTAURANTS.map(restaurantCardHTML), ...STAYS.map(stayCardHTML)];
  } else if (filter === "restaurants") {
    items = RESTAURANTS.map(restaurantCardHTML);
  } else if (filter === "stays") {
    items = STAYS.map(stayCardHTML);
  } else if (filter === "luxury" || filter === "mid-range" || filter === "budget") {
    items = STAYS.filter(s => s.tier === filter).map(stayCardHTML);
  }
  el.innerHTML = items.join("");
}

// Distance Calculation (Haversine Formula)
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

function renderPlaceDetail() {
  const mount = document.querySelector("#place-detail");
  if (!mount) return;
  const id = getParam("id");
  const place = (typeof PLACES !== "undefined" ? PLACES.find(p => p.id === id) : null) ||
                (typeof MODERN_SPOTS !== "undefined" ? MODERN_SPOTS.find(m => m.id === id) : null) ||
                (typeof PLACES !== "undefined" ? PLACES[0] : {});

  document.title = `${place.name} — Madurai Explorer`;
  const crumb = document.querySelector("#detail-crumb");
  if (crumb) crumb.textContent = place.name;
  const title = document.querySelector("#detail-title");
  if (title) title.textContent = place.name;
  const tagline = document.querySelector("#detail-tagline");
  if (tagline) tagline.textContent = place.tagline;
  const icon = document.querySelector("#detail-icon");
  if (icon) icon.style.display = "none";

  const detailImg = document.querySelector("#detail-image");
  if (detailImg) {
    detailImg.src = place.image;
    detailImg.alt = place.imageAlt || place.name;
    detailImg.setAttribute("onerror", `handleImageFallback(this, '${place.name.replace(/'/g, "\\'")}')`);
  }

  const locEl = mount.querySelector("#meta-location");
  if (locEl) locEl.textContent = place.address;
  const timeEl = mount.querySelector("#meta-timings");
  if (timeEl) timeEl.textContent = place.timings || place.openingHours || "Open Daily";
  const catEl = mount.querySelector("#meta-category");
  if (catEl) catEl.textContent = `${place.categoryLabel} · ${place.taluk} Taluk`;
  const feeEl = mount.querySelector("#meta-entry-fee");
  if (feeEl) feeEl.textContent = place.entryFee || "Free Public Access";
  const descEl = mount.querySelector("#detail-description");
  if (descEl) descEl.textContent = place.description;

  const hlEl = mount.querySelector("#highlight-list");
  if (hlEl) {
    const list = place.highlights || place.facilities || [];
    hlEl.innerHTML = list.map(h => `<li>${h}</li>`).join("");
  }

  // Embedded Map & Directions Button in Detail View
  const mapContainer = mount.querySelector("#place-mini-map");
  if (mapContainer && window.L) {
    try {
      const miniMap = L.map(mapContainer).setView([place.latitude, place.longitude], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(miniMap);
      L.marker([place.latitude, place.longitude]).addTo(miniMap)
        .bindPopup(`<b>${place.name}</b><br>${place.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}" target="_blank">Get Directions</a>`)
        .openPopup();
    } catch (e) {
      console.warn("Mini map init error", e);
    }
  }

  const dirBtn = mount.querySelector("#detail-directions-btn");
  if (dirBtn) {
    dirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`;
  }

  // Direct Booking & Tour Portals on Detail Page
  const bookingContainer = mount.querySelector("#detail-booking-container");
  if (bookingContainer && typeof getBookingOptionsFor === "function") {
    const opts = getBookingOptionsFor(place, place.category);
    bookingContainer.innerHTML = `
      <div class="detail-booking-section">
        <h3>Direct Booking & Official Tour Passes</h3>
        <p style="color:var(--muted); font-size:0.86rem; margin-bottom:1rem;">Verified government e-seva portals, official guided circuits, and direct transport links for ${place.name}.</p>
        <div class="booking-options-grid">
          ${opts.map(opt => `
            <div class="booking-option-card">
              <div class="booking-option-info">
                <div class="booking-option-top">
                  <span class="platform-badge ${opt.tagClass}">${opt.badge}</span>
                  <h4 class="booking-option-title">${opt.title}</h4>
                </div>
                <p class="booking-option-desc">${opt.desc}</p>
              </div>
              <a href="${opt.actionUrl}" target="_blank" rel="noopener noreferrer" class="btn-booking-action ${opt.btnClass}">
                ${opt.actionText}
              </a>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // "More places" side list
  const others = PLACES.filter(p => p.id !== place.id).slice(0, 4);
  const sideEl = mount.querySelector("#more-places");
  if (sideEl) {
    sideEl.innerHTML = others
      .map(p => `
        <li class="side-item">
          <a href="place-details.html?id=${p.id}" class="side-card-link" aria-label="View details for ${p.name}">
            <div class="side-item-thumb">
              <img src="${p.image}" alt="${p.imageAlt || p.name}" loading="lazy" onerror="handleImageFallback(this, '${p.name.replace(/'/g, "\\'")}')" />
            </div>
            <div class="side-item-info">
              <span class="side-item-badge">${p.categoryLabel}</span>
              <h5 class="side-item-name">${p.name}</h5>
              <span class="side-item-meta">★ ${p.rating} · ${p.area}</span>
            </div>
          </a>
        </li>`)
      .join("");
  }
}

// Expose collections globally for cross-page interactive map & modal
if (typeof window !== "undefined") {
  window.PLACES = PLACES;
  window.CAFES = CAFES;
  window.MODERN_SPOTS = MODERN_SPOTS;
  window.RESTAURANTS = RESTAURANTS;
  window.STAYS = STAYS;
  window.calculateHaversineDistance = calculateHaversineDistance;
}
