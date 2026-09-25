// =========================================================================
// Madurai Explorer — Comprehensive Food Specialties & Famous Eateries
// Includes iconic dishes, ingredients, famous shops, and exact locations
// =========================================================================

const FOODS = [
  {
    id: "jigarthanda",
    name: "Jigarthanda",
    category: "drinks",
    categoryLabel: "DESSERT DRINK",
    image: "images/jigarthanda.jpg",
    imageAlt: "Glass of Madurai Jigarthanda with almond gum, basundi milk and ice cream",
    imageDescription: "Tall glass filled with layered authentic Madurai Jigarthanda dessert drink topped with hand-churned ice cream and nannari syrup",
    imageSearchKeywords: "Madurai Jigarthanda dessert drink badam pisin basundi",
    rating: "4.8",
    duration: "Allow 15 minutes",
    distance: "1.2",
    area: "East Marret Street & Simmakkal",
    taluk: "Madurai South",
    address: "Famous Jigarthanda, 97 East Marret St / West Perumal Maistry St, Madurai 625001",
    latitude: 9.9168,
    longitude: 78.1189,
    distanceFromMeenakshiTemple: 0.8,
    mapLink: "https://maps.google.com/?q=9.9168,78.1189",
    tagline: "Madurai's signature chilled dessert drink.",
    description: "Jigarthanda means 'cool the heart/liver' in Urdu-Persian, and it's the beverage Madurai is most celebrated for across India. Layered with fragrant nannari (sarsaparilla) syrup, soaked badam pisin (natural almond gum), condensed basundi milk, and topped with rich hand-churned ice cream.",
    ingredients: "Full cream milk, nannari syrup, badam pisin (almond gum), sugar, vanilla ice cream",
    priceRange: "₹60 – ₹140",
    whereToTry: "Famous Jigarthanda (East Marret St & branches), Raja Jigarthanda (Simmakkal)",
    famousNote: "Created by P.S. Sheik Meeran in 1977, now recognized as Madurai's culinary GI icon.",
    famousShops: [
      { name: "Famous Jigarthanda (Main)", area: "East Marret St", lat: 9.9168, lng: 78.1189 },
      { name: "Bhai Jigarthanda", area: "Simmakkal", lat: 9.9295, lng: 78.1245 }
    ]
  },
  {
    id: "paruthi-paal",
    name: "Paruthi Paal",
    category: "drinks",
    categoryLabel: "STREET SPECIALTY",
    image: "images/paruthi-paal.jpg",
    imageAlt: "Traditional hot Paruthi Paal in brass tumbler",
    imageDescription: "Traditional warm cottonseed milk spiced with dry ginger, raw jaggery and cardamom in South Indian brass tumbler",
    imageSearchKeywords: "Paruthi Paal Madurai cottonseed milk jaggery sukku",
    rating: "4.6",
    duration: "Allow 10 minutes",
    distance: "1.8",
    area: "Simmakkal & West Masi Street",
    taluk: "Madurai North",
    address: "North Veli Street near Simmakkal Bus Stop, Madurai 625001",
    latitude: 9.9298,
    longitude: 78.1262,
    distanceFromMeenakshiTemple: 1.8,
    mapLink: "https://maps.google.com/?q=9.9298,78.1262",
    tagline: "A traditional drink made using cottonseed milk and jaggery.",
    description: "An authentic, deeply traditional Madurai street health drink prepared by pressing milk from soaked cottonseeds, simmered with country raw cane jaggery, dry ginger (sukku), and cardamom. Known for easing colds and fatigue.",
    ingredients: "Cottonseed extract, raw jaggery, dry ginger (sukku), cardamom, rice flour",
    priceRange: "₹20 – ₹40",
    whereToTry: "Street carts near Simmakkal roundtana and West Masi Street",
    famousNote: "A hyper-local beverage unique to Madurai, served hot in brass tumblers.",
    famousShops: [
      { name: "Simmakkal Evening Cart", area: "Simmakkal Roundtana", lat: 9.9298, lng: 78.1262 },
      { name: "Town Hall Road Sukku Paal Kadai", area: "Town Hall Road", lat: 9.9172, lng: 78.1158 }
    ]
  },
  {
    id: "kari-dosai",
    name: "Madurai Kari Dosai",
    category: "breakfast",
    categoryLabel: "NON-VEG DELICACY",
    image: "images/kari-dosai.jpg",
    imageAlt: "Madurai Kari Dosai layered with egg and minced mutton",
    imageDescription: "Golden crisp 3-tier Madurai Kari Dosa loaded with fluffy beaten egg and spicy minced mutton keema",
    imageSearchKeywords: "Madurai Kari Dosa mutton keema dosa Amma mess",
    rating: "4.9",
    duration: "Allow 30 minutes",
    distance: "0.8",
    area: "West Masi Street & Perumal Maistry St",
    taluk: "Madurai South",
    address: "Amma Mess & Sree Sabarees, West Masi Street, Madurai 625001",
    latitude: 9.9158,
    longitude: 78.1154,
    distanceFromMeenakshiTemple: 0.7,
    tagline: "Dosa topped with spiced meat/egg mixture.",
    description: "A decadent three-tier culinary masterpiece: the bottom layer is a thick crisp fermented dosa batter, the middle layer is a seasoned beaten country egg, and the crown is a fiery minced mutton (keema) masala cooked on the cast-iron griddle with gingelly oil.",
    ingredients: "Fermented rice-dal batter, minced tender mutton, egg, shallots, black pepper, salna",
    priceRange: "₹180 – ₹280",
    whereToTry: "Amma Mess (West Perumal Maistry St), Sree Sabarees (West Masi St), Konar Kadai",
    famousNote: "Created by Madurai meat messes to serve hearty meals to mill workers and night shift traders.",
    famousShops: [
      { name: "Amma Mess", area: "West Perumal Maistry St", lat: 9.9178, lng: 78.1128 },
      { name: "Sree Sabarees", area: "West Masi St", lat: 9.9158, lng: 78.1154 }
    ]
  },
  {
    id: "idiyappam-kurma",
    name: "Idiyappam & Coconut Kurma",
    category: "breakfast",
    categoryLabel: "TRADITIONAL TIFFIN",
    image: "images/idiyappam-kurma.jpg",
    imageAlt: "Steamed Idiyappam string hoppers with coconut vegetable kurma",
    imageDescription: "Steamed delicate white rice string hoppers served on a banana leaf alongside fragrant coconut vegetable kurma",
    imageSearchKeywords: "Idiyappam vegetable kurma string hoppers South Indian tiffin",
    rating: "4.7",
    duration: "Allow 25 minutes",
    distance: "0.6",
    area: "West Veli Street",
    taluk: "Madurai South",
    address: "New Arya Bhavan, West Veli Street, Madurai 625001",
    latitude: 9.9189,
    longitude: 78.1118,
    distanceFromMeenakshiTemple: 0.8,
    tagline: "String-hopper style rice noodles.",
    description: "Pressed fresh rice dough steamed into delicate string-hopper nests, paired with fragrant white coconut vegetable kurma spiced with fennel and green chillies, or served sweet with freshly grated coconut and melted jaggery.",
    ingredients: "Red or white raw rice flour, fresh coconut milk, fennel, poppy seeds, cashew paste",
    priceRange: "₹50 – ₹90",
    whereToTry: "New Arya Bhavan (West Veli St), Gowri Ganga, Murugan Idli Shop",
    famousNote: "A staple morning tiffin across temple messes in central Madurai.",
    famousShops: [
      { name: "New Arya Bhavan", area: "West Veli St", lat: 9.9189, lng: 78.1118 }
    ]
  },
  {
    id: "mor-kuzhambu-meals",
    name: "Mor Kuzhambu Banana Leaf Meals",
    category: "lunch",
    categoryLabel: "BANANA LEAF LUNCH",
    image: "images/mor-kuzhambu.jpg",
    imageAlt: "South Indian banana leaf meals featuring Mor Kuzhambu",
    imageDescription: "Traditional Madurai banana leaf lunch featuring spiced buttermilk Mor Kuzhambu, steaming rice, kootu, poriyal and appalam",
    imageSearchKeywords: "Mor Kuzhambu South Indian meals banana leaf lunch",
    rating: "4.8",
    duration: "Allow 45 minutes",
    distance: "1.4",
    area: "Town Hall Road & Periyar",
    taluk: "Madurai South",
    address: "Town Hall Road Messes, Madurai 625001",
    latitude: 9.9167,
    longitude: 78.1172,
    distanceFromMeenakshiTemple: 0.5,
    mapLink: "https://maps.google.com/?q=9.9167,78.1172",
    tagline: "A full feast anchored by tangy tempered buttermilk curry.",
    description: "Served on a lush fresh plantain leaf: hot Ponni rice topped with spiced mor kuzhambu (churned buttermilk seasoned with coconut paste, cumin, mustard seeds, and ash gourd or vadai), accompanied by poriyal, kootu, spicy rasam, and crisp appalam.",
    ingredients: "Fresh buttermilk, cumin, grated coconut, ginger, ash gourd, mustard tempering",
    priceRange: "₹100 – ₹190",
    whereToTry: "Murugan Idli Shop (lunch hours), Sri Modern Restaurant, Sree Sabarees",
    famousNote: "The everyday comfort meal favored by locals during humid temple afternoons.",
    famousShops: [
      { name: "Sri Modern Restaurant", area: "Netaji Road", lat: 9.9185, lng: 78.1165 }
    ]
  },
  {
    id: "mutton-chukka",
    name: "Madurai Mutton Chukka",
    category: "lunch",
    categoryLabel: "SIGNATURE NON-VEG",
    image: "images/mutton-chukka.jpg",
    imageAlt: "Madurai Mutton Chukka pan-roasted with black pepper and curry leaves",
    imageDescription: "Dark peppery dry-roasted boneless mutton pieces glistened with gingelly oil and garnished with crisp fried curry leaves",
    imageSearchKeywords: "Madurai Mutton Chukka dry pepper fry Kumar mess",
    rating: "4.9",
    duration: "Allow 35 minutes",
    distance: "1.1",
    area: "Nelpettai & Goripalayam",
    taluk: "Madurai South",
    address: "Kumar Mess, Nelpettai, Madurai 625001",
    latitude: 9.9234,
    longitude: 78.1251,
    distanceFromMeenakshiTemple: 1.1,
    tagline: "Dry, spicy mutton preparation.",
    description: "Boneless prime mutton chunks slow-roasted in heavy cast-iron kadai until the marinade reduces to a glistening, dark, peppery coating clinging to every fibre. Finished with fried shallots and crackling curry leaves.",
    ingredients: "Tender goat meat, crushed black peppercorns, shallots, curry leaves, cold-pressed gingelly oil",
    priceRange: "₹190 – ₹320",
    whereToTry: "Kumar Mess (Nelpettai), Konar Kadai (Simmakkal), Amma Mess",
    famousNote: "Universally acknowledged as the premier non-veg calling card of Madurai.",
    famousShops: [
      { name: "Kumar Mess", area: "Nelpettai", lat: 9.9234, lng: 78.1251 },
      { name: "Konar Kadai", area: "Simmakkal", lat: 9.9328, lng: 78.1287 }
    ]
  },
  {
    id: "kothu-parotta",
    name: "Kothu Parotta",
    category: "snacks",
    categoryLabel: "STREET FOOD",
    image: "images/kothu-parotta.jpg",
    imageAlt: "Sizzling street-style Kothu Parotta with salna and egg",
    imageDescription: "Finely shredded flaky parotta chopped on a flat griddle with egg, mutton salna gravy and sliced green onions",
    imageSearchKeywords: "Madurai Kothu Parotta street food bun parotta tawa",
    rating: "4.8",
    duration: "Allow 20 minutes",
    distance: "0.7",
    area: "Simmakkal",
    taluk: "Madurai North",
    address: "Konar Kadai & Goripalayam Junction, Madurai 625002",
    latitude: 9.9328,
    longitude: 78.1287,
    distanceFromMeenakshiTemple: 1.8,
    mapLink: "https://maps.google.com/?q=9.9328,78.1287",
    tagline: "Chopped parotta mixed with egg, meat, vegetables and spices.",
    description: "Chopped parotta mixed with egg, meat, vegetables and spices, rhythmically diced on a blazing iron tawa in a percussive beat and soaked in rich salna gravy.",
    ingredients: "Layered parotta, salna gravy, egg, mutton or chicken, green chillies, onions",
    priceRange: "₹90 – ₹180",
    whereToTry: "Konar Kadai (Simmakkal), Sulthan Parotta (Goripalayam), Madurai roadside night stalls",
    famousNote: "The nighttime heartbeat of Madurai; best savoured on sidewalk stalls after 8 PM.",
    famousShops: [
      { name: "Konar Kadai", area: "Simmakkal", lat: 9.9328, lng: 78.1287 },
      { name: "Sulthan Parotta", area: "Goripalayam", lat: 9.9312, lng: 78.1315 }
    ]
  },
  {
    id: "bun-parotta",
    name: "Bun Parotta",
    category: "snacks",
    categoryLabel: "MADURAI ORIGINAL",
    image: "images/bun-parotta.jpg",
    imageAlt: "Authentic fluffy, golden crispy Bun Parotta served with chicken salna",
    imageDescription: "Golden brown multi-layered circular bun parotta puffed up with soft buttery center",
    imageSearchKeywords: "Madurai Bun Parotta crispy fluffy layered parotta salna",
    rating: "4.9",
    duration: "Allow 20 minutes",
    distance: "1.2",
    area: "KK Nagar & Madurai Main",
    taluk: "Madurai South",
    address: "Madurai Bun Parotta Stalls, Madurai 625001",
    latitude: 9.9200,
    longitude: 78.1200,
    distanceFromMeenakshiTemple: 1.2,
    mapLink: "https://maps.google.com/?q=9.9200,78.1200",
    tagline: "Soft, layered parotta with a distinctive bun-like shape.",
    description: "Soft, layered parotta with a distinctive bun-like shape. Prepared with well-kneaded dough, beaten and shaped like a bun before shallow-frying on a heavy tawa until the outside is golden crisp and the inside is soft and fluffy.",
    ingredients: "Refined flour dough, butter, eggs, milk, vegetable oil, salna accompaniment",
    priceRange: "₹35 – ₹60 per piece",
    whereToTry: "Madurai Bun Parotta stalls, Amsavalli Bhavan, roadside stalls in Goripalayam and KK Nagar",
    famousNote: "Madurai's original culinary invention, perfectly paired with fiery mutton salna.",
    famousShops: [
      { name: "Madurai Bun Parotta Centre", area: "Madurai Main", lat: 9.9200, lng: 78.1200 }
    ]
  },
  {
    id: "bajji-bonda",
    name: "Madurai Street Bajji & Bonda",
    category: "snacks",
    categoryLabel: "EVENING SNACKS",
    image: "images/bajji-bonda.jpg",
    imageAlt: "Freshly fried street bajji and bonda with coconut chutney",
    imageDescription: "Crispy golden fried plantain bajji, chilli bajji and potato bondas served with red and white spicy chutneys",
    imageSearchKeywords: "Madurai evening street bajji bonda milagai bajji",
    rating: "4.7",
    duration: "Allow 15 minutes",
    distance: "0.5",
    area: "West Tower & Masi Streets",
    taluk: "Madurai South",
    address: "West Tower Street stalls, Madurai 625001",
    latitude: 9.9192,
    longitude: 78.1175,
    distanceFromMeenakshiTemple: 0.3,
    tagline: "Popular evening street snack.",
    description: "Freshly sliced raw plantain, large Bhavani chillies, and spiced potato dumplings dunked in golden spiced gram flour batter and fried in hot oil right before your eyes. Served on newspaper squares with spicy red garlic and white coconut chutney.",
    ingredients: "Gram flour (besan), rice flour, raw plantain, green chillies, asafoetida, coconut chutney",
    priceRange: "₹15 – ₹35",
    whereToTry: "Evening road carts on West Tower Street, Netaji Road and Teppakulam",
    famousNote: "The quintessential 5 PM monsoon and sunset treat across Madurai.",
    famousShops: [
      { name: "West Tower Bajji Stall", area: "West Tower St", lat: 9.9192, lng: 78.1175 }
    ]
  },

  // ===== NEW FOOD SPECIALTIES =====
  {
    id: "kola-urundai",
    name: "Mutton Kola Urundai",
    category: "lunch",
    categoryLabel: "MEATBALL DELICACY",
    image: "images/kola-urundai.jpg",
    imageAlt: "Madurai Mutton Kola Urundai crispy meatballs",
    imageDescription: "Deep-fried golden brown spiced minced mutton meatballs crisp on the exterior and tender inside",
    imageSearchKeywords: "Mutton Kola Urundai Chettinad Madurai minced meat balls",
    rating: "4.9",
    duration: "Allow 20 minutes",
    distance: "2.8",
    area: "Tallakulam & West Perumal Maistry St",
    taluk: "Madurai North",
    address: "Chandran Mess, Alagar Kovil Road, Tallakulam, Madurai 625002",
    latitude: 9.9322,
    longitude: 78.1362,
    distanceFromMeenakshiTemple: 2.8,
    tagline: "Deep-fried spiced meat balls.",
    description: "A culinary legend of Madurai: tender country goat meat minced ultra-fine with roasted gram (pottukadalai), shallots, garlic, poppy seeds, and fresh spices, shaped into spheres and deep-fried to crisp perfection without cracking.",
    ingredients: "Minced goat meat, roasted gram dal, fennel seeds, garlic, shallots, coconut paste",
    priceRange: "₹140 – ₹220",
    whereToTry: "Chandran Mess (Tallakulam), Amma Mess, Kumar Mess",
    famousNote: "Originated in Chettinad-Pandya kitchens; true Madurai kola urundai dissolves on the tongue.",
    famousShops: [
      { name: "Chandran Mess", area: "Tallakulam", lat: 9.9322, lng: 78.1362 },
      { name: "Amma Mess", area: "West Perumal Maistry St", lat: 9.9178, lng: 78.1128 }
    ]
  },
  {
    id: "malli-idli",
    name: "Malli Idli & Pothi Idli",
    category: "breakfast",
    categoryLabel: "TEMPLE TIFFIN",
    image: "images/malli-idli.jpg",
    imageAlt: "Piping hot Madurai Malli Poo Idlis with assorted chutneys",
    imageDescription: "Snowy white fluffy steamed rice idlis served on fresh banana leaf with coconut, tomato, coriander and podi chutneys",
    imageSearchKeywords: "Madurai Malli idli Murugan Idli shop soft jasmine idli",
    rating: "4.9",
    duration: "Allow 20 minutes",
    distance: "0.5",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Murugan Idli Shop, 196 Town Hall Road, Madurai 625001",
    latitude: 9.9167,
    longitude: 78.1172,
    distanceFromMeenakshiTemple: 0.5,
    mapLink: "https://maps.google.com/?q=9.9167,78.1172",
    tagline: "Jasmine-flower soft idlis served with four signature chutneys.",
    description: "Madurai idlis are nicknamed 'Malli Poo' (jasmine blossoms) due to their snowy white color, lightness, and cloud-like texture. Steamed from aged Parboiled rice and unpolished black gram, served piping hot on banana leaves.",
    ingredients: "Parboiled rice, urad dal, fenugreek, rock salt, gingelly oil",
    priceRange: "₹40 – ₹80",
    whereToTry: "Murugan Idli Shop (Town Hall Road & West Masi St), New Arya Bhavan",
    famousNote: "Madurai's water and traditional stone grinders give these idlis their unmatched fluffiness.",
    famousShops: [
      { name: "Murugan Idli Shop", area: "Town Hall Road", lat: 9.9167, lng: 78.1172 }
    ]
  },
  {
    id: "madurai-halwa",
    name: "Madurai Ghee Halwa",
    category: "drinks",
    categoryLabel: "HERITAGE SWEET",
    image: "images/madurai-halwa.jpg",
    imageAlt: "Warm Madurai Ghee Halwa on butter paper",
    imageDescription: "Glossy, amber-colored wheat milk halwa slow-cooked in pure cow ghee and cashews, served hot on leaf",
    imageSearchKeywords: "Madurai Prema Vilas ghee halwa wheat milk halwa",
    rating: "4.8",
    duration: "Allow 15 minutes",
    distance: "0.9",
    area: "Town Hall Road & Simmakkal",
    taluk: "Madurai South",
    address: "Prema Vilas Sweets, Town Hall Road / Railway Station Road, Madurai 625001",
    latitude: 9.9172,
    longitude: 78.1145,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9172,78.1145",
    tagline: "Glistening wheat milk halwa slow-cooked in pure mountain ghee.",
    description: "Prepared through a multi-day artisanal process: whole samba wheat is soaked and milk extracted, then slow-stirred for hours in giant copper cauldrons with unrefined cane sugar, cashew nuts, and lavish ladles of fragrant pure cow ghee.",
    ingredients: "Wheat milk extract, pure cow ghee, sugar, cashews, cardamom",
    priceRange: "₹80 – ₹200",
    whereToTry: "Prema Vilas (Town Hall Road & Junction), Nagalakshmi Halwa Kadai",
    famousNote: "Sold piping hot on greaseproof butter paper, glowing with fragrant molten ghee.",
    famousShops: [
      { name: "Prema Vilas", area: "Town Hall Road", lat: 9.9172, lng: 78.1145 },
      { name: "Nagalakshmi Halwa", area: "South Masi St", lat: 9.9135, lng: 78.1198 }
    ]
  },
  {
    id: "nannari-sarbath",
    name: "Nannari Root Sarbath",
    category: "drinks",
    categoryLabel: "COOLING TONIC",
    image: "images/nannari-sarbath.jpg",
    imageAlt: "Chilled Madurai Nannari Root Sarbath with lemon and ice",
    imageDescription: "Refreshing tall glass of chilled herbal sarsaparilla root sarbath with crushed ice and fresh lime slices",
    imageSearchKeywords: "Nannari Sarbath Madurai sarsaparilla root summer drink",
    rating: "4.7",
    duration: "Allow 10 minutes",
    distance: "1.8",
    area: "Simmakkal & Nelpettai",
    taluk: "Madurai North",
    address: "Simmakkal Sarbath Kadai, North Veli Street, Madurai 625001",
    latitude: 9.9328,
    longitude: 78.1287,
    distanceFromMeenakshiTemple: 1.8,
    mapLink: "https://maps.google.com/?q=9.9328,78.1287",
    tagline: "Wild sarsaparilla root elixir with crushed mountain ice and fresh lime.",
    description: "Extracted from wild sarsaparilla (nannari) roots foraged in the Western Ghats, this herbal syrup is combined with freshly squeezed lime juice, chilled well water, and cracked ice in a frosted glass.",
    ingredients: "Natural Nannari root extract, lime juice, cane sugar syrup, crushed ice",
    priceRange: "₹25 – ₹50",
    whereToTry: "Simmakkal Roundtana Sarbath Kadai, Nelpettai Junction stalls",
    famousNote: "Ancient Siddha remedy for cooling body temperature during scorching Madurai summers.",
    famousShops: [
      { name: "Simmakkal Sarbath Kadai", area: "Simmakkal", lat: 9.9328, lng: 78.1287 }
    ]
  },
  {
    id: "ayira-meen-kuzhambu",
    name: "Ayira Meen Kuzhambu",
    category: "lunch",
    categoryLabel: "RIVER FISH CURRY",
    image: "images/ayira-meen-kuzhambu.jpg",
    imageAlt: "Authentic Ayira Meen Kuzhambu in clay pot",
    imageDescription: "Delicate Vaigai river spiny loach fish cooked whole in a sour and fiery tamarind-pepper curry inside an earthenware pot",
    imageSearchKeywords: "Ayira Meen Kuzhambu Madurai fish curry Amma Mess",
    rating: "4.9",
    duration: "Allow 35 minutes",
    distance: "0.9",
    area: "West Perumal Maistry St",
    taluk: "Madurai South",
    address: "Amma Mess, 136 West Perumal Maistry Street, Madurai 625001",
    latitude: 9.9178,
    longitude: 78.1128,
    distanceFromMeenakshiTemple: 0.9,
    mapLink: "https://maps.google.com/?q=9.9178,78.1128",
    tagline: "Tiny spiny river loach fish simmered in tangy peppery clay-pot gravy.",
    description: "Ayira meen are tiny, delicate freshwater loaches caught in the Vaigai river channels and tanks. Cooked whole with their soft bones in sour tamarind, ground coriander, shallots, and freshly ground peppercorns in earthen manpaanai.",
    ingredients: "Fresh river Ayira fish, tamarind extract, shallots, garlic, black pepper, sesame oil",
    priceRange: "₹240 – ₹380",
    whereToTry: "Amma Mess (West Perumal Maistry St), Kumar Mess",
    famousNote: "Considered the rarest, most prized delicacy in Madurai culinary traditions.",
    famousShops: [
      { name: "Amma Mess", area: "West Perumal Maistry St", lat: 9.9178, lng: 78.1128 }
    ]
  },
  {
    id: "elumbu-roast",
    name: "Madurai Mutton Elumbu Roast",
    category: "lunch",
    categoryLabel: "MARROW ROAST",
    image: "images/elumbu-roast.jpg",
    imageAlt: "Madurai Mutton Elumbu Roast bone marrow tawa fry",
    imageDescription: "Goat marrow shank bones pan-roasted on a tawa in thick crushed black pepper and shallot masala",
    imageSearchKeywords: "Madurai Mutton Elumbu roast bone marrow Kumar mess",
    rating: "4.8",
    duration: "Allow 30 minutes",
    distance: "1.1",
    area: "Nelpettai",
    taluk: "Madurai South",
    address: "Kumar Mess, Nelpettai, Madurai 625001",
    latitude: 9.9234,
    longitude: 78.1251,
    distanceFromMeenakshiTemple: 1.1,
    mapLink: "https://maps.google.com/?q=9.9234,78.1251",
    tagline: "Succulent bone marrow pieces pan-roasted in fiery pepper masala.",
    description: "Long goat shank bones rich with succulent marrow, roasted on tawa with coarse pounded spices, shallots, and curry leaves. Diners tap out the velvety melted marrow over steamed rice or bun parotta.",
    ingredients: "Goat marrow bones, roasted pepper, shallots, ginger-garlic paste, curry leaves",
    priceRange: "₹220 – ₹340",
    whereToTry: "Kumar Mess (Nelpettai), Amma Mess, Chandran Mess",
    famousNote: "A beloved Sunday feast indulgence for food lovers visiting Madurai.",
    famousShops: [
      { name: "Kumar Mess", area: "Nelpettai", lat: 9.9234, lng: 78.1251 }
    ]
  },
  {
    id: "butter-bun",
    name: "Milan's Butter Bun",
    category: "snacks",
    categoryLabel: "STREET SPECIALTY",
    image: "images/butter-bun.jpg",
    imageAlt: "Pan-toasted golden sweet Butter Bun",
    imageDescription: "Soft bakery bun griddled in bubbling country butter and glazed with caramelized white sugar crystals",
    imageSearchKeywords: "Madurai Milan butter bun sweet toasted bun tea stall",
    rating: "4.7",
    duration: "Allow 15 minutes",
    distance: "1.0",
    area: "West Perumal Maistry St",
    taluk: "Madurai South",
    address: "Milan Butter Bun, West Perumal Maistry St, near Railway Station, Madurai 625001",
    latitude: 9.9184,
    longitude: 78.1122,
    distanceFromMeenakshiTemple: 1.0,
    mapLink: "https://maps.google.com/?q=9.9184,78.1122",
    tagline: "Soft bakery bun toasted in bubbling salted butter and dusted with sugar.",
    description: "A sweet Madurai evening street obsession: fresh bakery buns sliced and crisped on a flaming griddle submerged in melted salted butter, then dusted heavily with granulated white sugar until the crust caramelizes into a crisp glaze.",
    ingredients: "Soft bakery buns, pure butter, granulated sugar",
    priceRange: "₹40 – ₹70",
    whereToTry: "Milan Butter Bun (West Perumal Maistry Street), roadside tea stalls near Periyar",
    famousNote: "A late evening tea-stall sensation popular with students and travellers.",
    famousShops: [
      { name: "Milan Butter Bun", area: "West Perumal Maistry St", lat: 9.9184, lng: 78.1122 }
    ]
  },
  {
    id: "parotta-salna",
    name: "Parotta + Salna",
    category: "lunch",
    categoryLabel: "CLASSIC COMBINATION",
    image: "images/parotta-salna.jpg",
    imageAlt: "Flaky Madurai parottas served with rich aromatic bowl of salna gravy",
    imageDescription: "Madurai classic staple combination of layered parottas and rich spicy salna gravy",
    imageSearchKeywords: "Madurai parotta salna classic combination street food",
    rating: "4.9",
    duration: "Allow 25 minutes",
    distance: "0.8",
    area: "Simmakkal",
    taluk: "Madurai North",
    address: "Available at traditional messes across Madurai",
    latitude: 9.9280,
    longitude: 78.1240,
    distanceFromMeenakshiTemple: 0.8,
    mapLink: "https://maps.google.com/?q=9.9280,78.1240",
    tagline: "One of Madurai's classic combinations.",
    description: "One of Madurai's classic combinations. Flaky multi-layered parottas hand-crushed and drenched in rich, piping-hot chicken or mutton salna infused with stone-ground poppy seeds, roasted coconut, and fragrant spices.",
    ingredients: "Layered parotta, rich spicy mutton or chicken salna, kalpaasi (stone flower), coconut paste",
    priceRange: "₹50 – ₹120",
    whereToTry: "All messes and street food stalls across Simmakkal, Masi Streets, and Tallakulam",
    famousNote: "The quintessential Madurai dinner ritual loved by millions across generations.",
    famousShops: [
      { name: "Konar Kadai", area: "Simmakkal", lat: 9.9328, lng: 78.1287 },
      { name: "Amma Mess", area: "Madurai Main", lat: 9.9178, lng: 78.1128 }
    ]
  },
  {
    id: "mutton-biryani",
    name: "Madurai Mutton Biryani",
    category: "lunch",
    categoryLabel: "NON-VEG MEAL",
    image: "images/mutton-biryani.jpg",
    imageAlt: "Seeraga samba rice Madurai mutton biryani served on banana leaf",
    imageDescription: "A popular local non-vegetarian meal made with small-grain seeraga samba rice and tender mutton",
    imageSearchKeywords: "Madurai Mutton Biryani seeraga samba rice non-veg meal mess",
    rating: "4.8",
    duration: "Allow 35 minutes",
    distance: "1.0",
    area: "Tallakulam",
    taluk: "Madurai North",
    address: "Kumar Mess & Chandran Mess, Madurai 625002",
    latitude: 9.9320,
    longitude: 78.1360,
    distanceFromMeenakshiTemple: 2.5,
    mapLink: "https://maps.google.com/?q=9.9320,78.1360",
    tagline: "A popular local non-vegetarian meal.",
    description: "A popular local non-vegetarian meal. Prepared with fine Seeraga Samba short-grain rice, tender country goat meat, pure ghee, shallots, and fresh mint, slow-cooked in traditional dum style.",
    ingredients: "Seeraga Samba rice, tender mutton pieces, pure ghee, fried onions, mint, country spices",
    priceRange: "₹220 – ₹320",
    whereToTry: "Kumar Mess, Chandran Mess, Amma Mess, Muniyandi Vilas",
    famousNote: "Uniquely aromatic due to local Seeraga Samba rice and wood-fire dum technique.",
    famousShops: [
      { name: "Kumar Mess", area: "Nelpettai", lat: 9.9234, lng: 78.1251 },
      { name: "Chandran Mess", area: "Tallakulam", lat: 9.9322, lng: 78.1362 }
    ]
  },
  {
    id: "madurai-appam",
    name: "Appam",
    category: "breakfast",
    categoryLabel: "BREAKFAST & TIFFIN",
    image: "images/madurai-appam.jpg",
    imageAlt: "Soft bowl-shaped appam with fluffy center and crispy edges",
    imageDescription: "Soft-centred rice pancakes generally eaten with curry or sweet accompaniments",
    imageSearchKeywords: "Madurai Appam soft centered rice pancakes coconut milk curry",
    rating: "4.6",
    duration: "Allow 20 minutes",
    distance: "0.6",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Breakfast eateries along Town Hall Road and Masi Streets, Madurai 625001",
    latitude: 9.9165,
    longitude: 78.1150,
    distanceFromMeenakshiTemple: 0.6,
    mapLink: "https://maps.google.com/?q=9.9165,78.1150",
    tagline: "Soft-centred rice pancakes generally eaten with curry or sweet accompaniments.",
    description: "Soft-centred rice pancakes generally eaten with curry or sweet accompaniments. Fermented rice and coconut batter swirled inside a curved appachatti pan, yielding a cloud-soft fluffy pillowy center and crispy lacy golden edges.",
    ingredients: "Fermented raw rice batter, coconut milk, sugar, yeast, accompaniment curries",
    priceRange: "₹40 – ₹80",
    whereToTry: "Sree Sabarees, New Arya Bhavan, Town Hall Road tiffin spots",
    famousNote: "Enjoyed with freshly sweetened coconut milk or spicy vegetable salna.",
    famousShops: [
      { name: "Sree Sabarees", area: "Town Hall Road", lat: 9.9162, lng: 78.1158 }
    ]
  },
  {
    id: "kuzhi-paniyaram",
    name: "Paniyaram",
    category: "snacks",
    categoryLabel: "TRADITIONAL SNACK",
    image: "images/kuzhi-paniyaram.jpg",
    imageAlt: "Golden crisp Kuzhi Paniyaram dumplings served with spicy tomato and coconut chutney",
    imageDescription: "Small fermented rice-and-lentil snacks cooked in cast iron moulds",
    imageSearchKeywords: "Madurai Paniyaram Kuzhi Paniyaram small fermented rice lentil snacks",
    rating: "4.6",
    duration: "Allow 15 minutes",
    distance: "0.5",
    area: "Masi Streets",
    taluk: "Madurai South",
    address: "Evening tiffin carts across West Masi Street, Madurai 625001",
    latitude: 9.9155,
    longitude: 78.1165,
    distanceFromMeenakshiTemple: 0.5,
    mapLink: "https://maps.google.com/?q=9.9155,78.1165",
    tagline: "Small fermented rice-and-lentil snacks.",
    description: "Small fermented rice-and-lentil snacks. Poured into rounded indentations of a cast-iron pan, these dumplings turn golden-crisp on the outside while staying light and spongy inside, served in savory (shallots & mustard) or sweet jaggery variants.",
    ingredients: "Fermented idli-dosa batter, shallots, mustard seeds, green chillies, curry leaves",
    priceRange: "₹30 – ₹60 per plate",
    whereToTry: "Evening street stalls on Masi Streets and Town Hall Road",
    famousNote: "Madurai's beloved 5 PM tea-time companion, served with fiery kara chutney.",
    famousShops: [
      { name: "Masi Street Evening Cart", area: "West Masi St", lat: 9.9155, lng: 78.1165 }
    ]
  },
  {
    id: "rose-milk",
    name: "Rose Milk",
    category: "drinks",
    categoryLabel: "CHILLED BEVERAGE",
    image: "images/rose-milk.jpg",
    imageAlt: "Chilled glass of refreshing pink Rose Milk with ice",
    imageDescription: "A popular sweet chilled drink served across Madurai streets and juice stalls",
    imageSearchKeywords: "Madurai Rose Milk chilled sweet drink street stalls",
    rating: "4.7",
    duration: "Allow 10 minutes",
    distance: "0.5",
    area: "Town Hall Road",
    taluk: "Madurai South",
    address: "Juice and sweet stalls across Vilakkuthoon & Town Hall Road, Madurai 625001",
    latitude: 9.9168,
    longitude: 78.1170,
    distanceFromMeenakshiTemple: 0.5,
    mapLink: "https://maps.google.com/?q=9.9168,78.1170",
    tagline: "A popular sweet chilled drink.",
    description: "A popular sweet chilled drink. Madurai's iconic cold beverage blends chilled full-cream milk with artisanal floral rose essence and crushed ice, providing cooling sweetness under the Tamil Nadu sun.",
    ingredients: "Chilled fresh milk, sweet rose syrup, basil seeds (optional), crushed ice",
    priceRange: "₹25 – ₹50",
    whereToTry: "Vilakkuthoon juice corners, Town Hall Road sweet stalls, Simmakkal",
    famousNote: "The soothing floral sweet drink loved across generations of Madurai citizens.",
    famousShops: [
      { name: "Vilakkuthoon Drink Stall", area: "Vilakkuthoon", lat: 9.9148, lng: 78.1255 }
    ]
  }
];

const FOOD_ICONS = {
  drinks: "",
  breakfast: "",
  lunch: "",
  snacks: ""
};

function foodCardHTML(food) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${food.latitude},${food.longitude}`;
  return `
    <article class="card" data-category="${food.category}" data-taluk="${food.taluk}" data-name="${food.name} ${food.area} ${food.categoryLabel} ${food.tagline}">
      <div class="thumb">
        <img src="${food.image}" alt="${food.imageAlt || food.name}" loading="lazy" onerror="handleImageFallback(this, '${food.name.replace(/'/g, "\\'")}')" />
        <span class="badge">${food.categoryLabel}</span>
      </div>
      <div class="body">
        <div class="card-head">
          <h3>${food.name}</h3>
          <span class="rating">★ ${food.rating}</span>
        </div>
        <div class="card-location-row">
          <span class="pin-text">${food.area}</span>
          <span class="badge" style="position:static; padding:0.15rem 0.45rem; font-size:0.68rem;">${food.priceRange}</span>
        </div>
        <div class="meta-duration">${food.duration} · ${food.priceRange}</div>
        <p class="card-desc">${food.tagline}</p>
        <div class="card-divider"></div>
        <div class="card-footer-row">
          <a href="food-details.html?id=${food.id}" class="view">View details <span class="arrow">&rarr;</span></a>
          <button type="button" class="btn-book-action btn-book-food" onclick="window.openBookingModal && window.openBookingModal('${food.id}', 'food')">Order Online</button>
        </div>
        <div class="card-actions">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-directions">Directions</a>
          <button type="button" class="btn-view-map" onclick="window.zoomToMapMarker && window.zoomToMapMarker('${food.id}', ${food.latitude}, ${food.longitude})">View on Map</button>
        </div>
      </div>
    </article>`;
}

function renderFoodGrid(containerSelector, list) {
  const el = document.querySelector(containerSelector);
  if (!el) return;
  el.innerHTML = list.map(foodCardHTML).join("");
}

function renderFoodDetail() {
  const mount = document.querySelector("#food-detail");
  if (!mount) return;
  const id = getParam("id");
  const food = FOODS.find(f => f.id === id) || FOODS[0];

  document.title = `${food.name} — Madurai Explorer`;
  const crumb = document.querySelector("#detail-crumb");
  if (crumb) crumb.textContent = food.name;
  const title = document.querySelector("#detail-title");
  if (title) title.textContent = food.name;
  const tagline = document.querySelector("#detail-tagline");
  if (tagline) tagline.textContent = food.tagline;
  const icon = document.querySelector("#detail-icon");
  if (icon) icon.style.display = "none";

  const detailImg = document.querySelector("#detail-image");
  if (detailImg) {
    detailImg.src = food.image;
    detailImg.alt = food.name;
  }

  const ingEl = mount.querySelector("#meta-ingredients");
  if (ingEl) ingEl.textContent = food.ingredients;
  const prEl = mount.querySelector("#meta-price");
  if (prEl) prEl.textContent = food.priceRange;
  const whEl = mount.querySelector("#meta-where");
  if (whEl) whEl.textContent = `${food.whereToTry} (${food.address})`;
  const descEl = mount.querySelector("#detail-description");
  if (descEl) descEl.textContent = food.description;
  const noteEl = mount.querySelector("#detail-note");
  if (noteEl) noteEl.textContent = food.famousNote;

  // Embedded Map in Food Details View
  const mapContainer = mount.querySelector("#food-mini-map");
  if (mapContainer && window.L) {
    try {
      const miniMap = L.map(mapContainer).setView([food.latitude, food.longitude], 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(miniMap);
      L.marker([food.latitude, food.longitude]).addTo(miniMap)
        .bindPopup(`<b>${food.name}</b><br>${food.area}<br><a href="https://www.google.com/maps/dir/?api=1&destination=${food.latitude},${food.longitude}" target="_blank">Get Directions</a>`)
        .openPopup();
    } catch (e) {
      console.warn("Food mini map init error", e);
    }
  }

  const dirBtn = mount.querySelector("#food-directions-btn");
  if (dirBtn) {
    dirBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${food.latitude},${food.longitude}`;
  }

  // Direct Order & Table Booking Section on Food Detail Page
  const bookingContainer = mount.querySelector("#food-booking-container");
  if (bookingContainer && typeof getBookingOptionsFor === "function") {
    const opts = getBookingOptionsFor(food, "food");
    bookingContainer.innerHTML = `
      <div class="detail-booking-section">
        <h3>Direct Order & Table Reservation</h3>
        <p style="color:var(--muted); font-size:0.86rem; margin-bottom:1rem;">Order ${food.name} directly online or reserve a dining table at recommended eateries.</p>
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

  const others = FOODS.filter(f => f.id !== food.id).slice(0, 4);
  const moreEl = mount.querySelector("#more-foods");
  if (moreEl) {
    moreEl.innerHTML = others
      .map(f => `
        <li class="side-item">
          <a href="food-details.html?id=${f.id}" class="side-card-link" aria-label="View details for ${f.name}">
            <div class="side-item-thumb">
              <img src="${f.image}" alt="${f.name}" loading="lazy" />
            </div>
            <div class="side-item-info">
              <span class="side-item-badge">${f.categoryLabel}</span>
              <h5 class="side-item-name">${f.name}</h5>
              <span class="side-item-meta">★ ${f.rating} · ${f.priceRange}</span>
            </div>
          </a>
        </li>`)
      .join("");
  }
}

// Expose FOODS globally for cross-page interactive map & modal
if (typeof window !== "undefined") {
  window.FOODS = FOODS;
}
