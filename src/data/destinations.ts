export interface Destination {
  id: number;
  name: string;
  category: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  accommodation: {
    name: string;
    description: string;
  };
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Maralal Wildlife Sanctuary",
    category: "Wildlife & Safari",
    location: "Northern Kenya",
    image: "/images/destinations/maralal.jpeg",
    images: [
      "/images/accommodations/maralal-hotel-1.jpeg",
      "/images/accommodations/maralal-hotel-2.jpeg",
    ],
    description:
      "Tucked away in the rugged highlands of northern Kenya, Maralal Wildlife Sanctuary remains one of the country's true hidden gems, far removed from the crowds of the more famous reserves. Visitors can spot zebras, giraffes, and buffalo roaming freely across open grassland, while guided nature walks reveal the sanctuary's rich birdlife and indigenous flora up close. Photography enthusiasts will find golden-hour light spilling over the hills particularly rewarding, and a visit to a nearby Samburu village offers a rare, authentic glimpse into the customs and daily life of this pastoralist community. After a day of exploring, guests retire to Maralal Safari Lodge, a comfortable nature retreat surrounded by the peaceful landscapes of northern Kenya, where the quiet of the wilderness makes for an unforgettable night's rest.",
    accommodation: {
      name: "Maralal Safari Lodge",
      description:
        "Set among rustic timber cottages with a warm, homely ambience, Maralal Safari Lodge feels like a true wilderness hideaway rather than a formal hotel. Zebra and antelope often graze within sight of the dining terrace, and the lodge's elevated position opens onto sweeping views of the surrounding highland forest and plains. Evenings here are especially memorable, with campfires lit under some of the clearest night skies in Kenya and the distant calls of wildlife drifting in from the bush.",
    },
  },

  {
    id: 2,
    name: "Mzima Springs",
    category: "Wildlife & Safari",
    location: "Tsavo West, Kenya",
    image: "/images/destinations/mzima-springs.jpeg",
    images: [
      "/images/accommodations/mzima-hotel-1.jpeg",
      "/images/accommodations/mzima-hotel-2.jpeg",
    ],
    description:
      "Hidden within the volcanic terrain of Tsavo West, Mzima Springs is a breathtaking oasis that many travelers overlook in favor of Kenya's bigger-name parks, making it a wonderfully uncrowded escape for those in the know. The springs' crystal-clear waters, fed by underground filtration through volcanic rock, are so pure they supply water to the coastal city of Mombasa, and an underwater viewing chamber lets visitors watch hippos and crocodiles gliding beneath the surface in remarkable clarity. Scenic nature walks along the palm-fringed banks offer chances to spot vervet monkeys, colorful birdlife, and the occasional bushbuck grazing nearby. After soaking in the springs' tranquil beauty, guests can unwind at the Kilanguni Serena Safari Lodge, a luxury safari lodge offering comfort, relaxation, and beautiful wilderness views over the surrounding Tsavo plains.",
    accommodation: {
      name: "Kilanguni Serena Safari Lodge",
      description:
        "Kilanguni Serena Safari Lodge sits at the foot of Mount Kilimanjaro, and its open-air lounges are designed so guests can take in views of the peak while sipping a drink after a game drive. Elephants, giraffes, and antelope regularly pass by the lodge's own waterhole, making sundowners here a genuine wildlife encounter rather than just a scenic backdrop. The rooms and grounds carry a relaxed safari elegance, with earthy tones, thatched roofing, and wide verandas that blur the line between indoors and the surrounding Tsavo wilderness.",
    },
  },

  {
    id: 3,
    name: "Crescent Island",
    category: "Wildlife & Safari",
    location: "Lake Naivasha, Kenya",
    image: "/images/destinations/crescent-island.jpeg",
    images: [
      "/images/accommodations/crescent-hotel-1.jpeg",
      "/images/accommodations/crescent-hotel-2.jpeg",
    ],
    description:
      "Rising quietly from the waters of Lake Naivasha, Crescent Island is a hidden gem that offers one of the only places in Kenya where visitors can walk freely among wildlife without the barrier of a vehicle. The island's peninsula-like shape, formed by a collapsed volcanic crater, creates a predator-free sanctuary where giraffes, zebras, wildebeests, and antelopes graze undisturbed just steps away from wandering guests. Boat rides across the lake to reach the island add an extra layer of adventure, with hippos and fish eagles often spotted along the way. At the end of the day, the Lake Naivasha Crescent Camp provides a peaceful lakeside camp offering a relaxing stay surrounded by nature, its waterside setting a fitting close to a day spent walking among the wild.",
    accommodation: {
      name: "Lake Naivasha Crescent Camp",
      description:
        "Lake Naivasha Crescent Camp has an easy, back-to-nature charm, with canvas tents and simple wooden decks set right along the water's edge. Hippos can often be heard grunting in the shallows after dark, and mornings frequently bring sightings of waterbuck or giraffe wandering close to camp. The lakeside setting delivers some of the most tranquil sunset views in the Rift Valley, with the water turning gold as fish eagles circle overhead.",
    },
  },

  {
    id: 4,
    name: "Giraffe Centre",
    category: "Wildlife & Conservation",
    location: "Nairobi, Kenya",
    image: "/images/destinations/giraffe-centre.jpg",
    images: [
      "/images/accommodations/giraffe-centre-hotel-1.jpeg",
      "/images/accommodations/giraffe-centre-hotel-2.jpeg",
    ],
    description:
      "Just minutes from the bustle of Nairobi, the Giraffe Centre is a beloved hidden gem dedicated to protecting the endangered Rothschild's giraffe, offering an experience that feels a world away from city life. Visitors can climb a raised wooden platform to feed giraffes by hand, meeting these gentle giants eye to eye, while informative talks from conservation staff explain the ongoing efforts to protect the species and its habitat. A nature trail winding through the surrounding indigenous forest gives guests the chance to spot warthogs, bushbuck, and a variety of birdlife on foot. For an experience unlike any other, the neighboring Giraffe Manor Hotel is a unique luxury hotel offering unforgettable giraffe encounters and excellent hospitality, where giraffes have been known to poke their heads through breakfast room windows each morning.",
    accommodation: {
      name: "Giraffe Manor Hotel",
      description:
        "Giraffe Manor Hotel is styled as an elegant 1930s manor house, with polished wood interiors, roaring fireplaces, and a genteel old-world ambience found almost nowhere else in Kenya. Its signature charm is the resident herd of Rothschild's giraffes, who wander the grounds freely and often dip their heads through open windows in search of a treat at breakfast. Beyond the giraffe encounters, the manicured gardens and surrounding indigenous forest offer lovely views and a peaceful, storybook setting just minutes from Nairobi.",
    },
  },

  {
    id: 5,
    name: "Ol Pejeta Conservancy",
    category: "Wildlife & Safari",
    location: "Laikipia, Kenya",
    image: "/images/destinations/ol-pejeta.jpeg",
    images: [
      "/images/accommodations/ol-pejeta-hotel-1.jpeg",
      "/images/accommodations/ol-pejeta-hotel-2.jpeg",
    ],
    description:
      "Set against the dramatic backdrop of Mount Kenya, Ol Pejeta Conservancy is a hidden gem within Laikipia's wilderness and one of Africa's leading conservation success stories. The conservancy is home to the last two northern white rhinos on Earth, alongside a thriving population of black rhinos, lions, and the Big Five, making game drives here consistently rewarding for wildlife enthusiasts. Guided rhino tracking experiences and guided walks led by armed rangers offer an intimate, adrenaline-filled way to encounter these magnificent animals up close. After an action-packed day, the Olesamara Collection offers a luxury safari retreat combining comfort, nature, and authentic wilderness experiences, giving guests a serene place to reflect on the day's sightings.",
    accommodation: {
      name: "Olesamara Collection",
      description:
        "The Olesamara Collection blends contemporary safari luxury with an unmistakably authentic bush ambience, its stone-and-thatch suites opening directly onto the Laikipia plains. Rhino, elephant, and lion sightings are common right from the property, and many rooms offer private decks perfect for watching wildlife drift past at dawn. With Mount Kenya rising in the distance and unbroken views over the savanna, it's a place where the scenery is every bit as memorable as the animal encounters.",
    },
  },

  {
    id: 6,
    name: "Aberdare Forest",
    category: "Scenic & Landscape",
    location: "Aberdare Range, Kenya",
    image: "/images/destinations/aberdare.jpeg",
    images: [
      "/images/accommodations/aberdare-hotel-1.jpeg",
      "/images/accommodations/aberdare-hotel-2.jpeg",
    ],
    description:
      "High in the Aberdare Range, a lush and misty rainforest defies the common image of Kenya's dry savannahs, making Aberdare Forest a genuine hidden gem for travelers seeking something different. Hiking trails wind through dense, dew-covered undergrowth past hidden waterfalls that crash into cool, mist-filled gorges, while the forest canopy echoes with the calls of birds and monkeys. Wildlife spotting here includes elusive species rarely seen elsewhere, including the rare bongo antelope, alongside elephants and buffalo that frequent the forest's waterholes. Perched above one such waterhole, The Ark Lodge is a unique lodge overlooking a wildlife waterhole with close animal encounters, letting guests watch nocturnal visitors arrive to drink from the comfort of a floodlit viewing deck.",
    accommodation: {
      name: "The Ark Lodge",
      description:
        "Shaped like a wooden ship perched above the forest floor, The Ark Lodge has a cozy, cabin-like ambience with floor-to-ceiling windows built for uninterrupted wildlife viewing. Its floodlit waterhole draws elephants, buffalo, and even the elusive bongo antelope through the night, with a buzzer system that wakes guests if something special arrives. Wrapped in misty rainforest, the lodge offers a rare, close-up wildlife experience paired with views over the Aberdare canopy that feel completely removed from the outside world.",
    },
  },

  {
    id: 7,
    name: "Mambrui Sand Dunes",
    category: "Scenic & Landscape",
    location: "Malindi, Kenya",
    image: "/images/destinations/mambrui-dunes.jpeg",
    images: [
      "/images/accommodations/mambrui-dunes-hotel-1.jpeg",
      "/images/accommodations/mambrui-dunes-hotel-2.jpeg",
    ],
    description:
      "Just north of Malindi, the Mambrui Sand Dunes remain a hidden gem along Kenya's coast, their towering golden slopes largely undiscovered by the crowds that flock to the region's beaches. Adventure seekers can climb the shifting dunes for sweeping views of the Indian Ocean, try sandboarding down their steep faces, or simply wander the dramatic landscape as a backdrop for striking photography. As the sun begins to set, the dunes take on a fiery amber glow, creating one of the most spectacular sunset views on the entire coastline. Nearby, the Coral Village Bungalow offers a peaceful coastal retreat offering comfort near Kenya's beautiful shoreline, the perfect base for exploring this quiet corner of the coast.",
    accommodation: {
      name: "Coral Village Bungalow",
      description:
        "Coral Village Bungalow has a relaxed, barefoot coastal ambience, with whitewashed bungalows, coral-stone walls, and shaded palm-thatched verandas facing the sea. Guests often spot pods of dolphins offshore in the early morning, along with colorful coastal birdlife flitting among the palms surrounding the property. Framed by the golden Mambrui dunes on one side and the Indian Ocean on the other, the views from the bungalow are some of the most striking on this stretch of coast.",
    },
  },

  {
    id: 8,
    name: "Chalbi Desert",
    category: "Scenic & Landscape",
    location: "Northern Kenya",
    image: "/images/destinations/chalbi-desert.jpeg",
    images: [
      "/images/accommodations/chalbi-desert-hotel-1.jpeg",
      "/images/accommodations/chalbi-desert-hotel-2.jpeg",
    ],
    description:
      "Far from Kenya's lush plains, the Chalbi Desert is a hidden gem of stark, otherworldly beauty and the country's only true desert, offering an experience unlike anywhere else in East Africa. Vast, blinding-white salt pans stretch to the horizon, occasionally broken by nomadic Gabbra caravans leading camels across the wasteland in scenes that feel almost biblical. Adventurous travelers can join camel trekking expeditions, learn about the resilient desert cultures that call this region home, or simply take in the profound silence and isolation of the landscape. After a day exploring the desert's rugged terrain, Desert Rose Kenya provides a comfortable desert stay surrounded by the beauty of northern Kenya, offering welcome respite from the region's intense heat.",
    accommodation: {
      name: "Desert Rose Kenya",
      description:
        "Desert Rose Kenya feels like an oasis retreat, with cool stone cottages, shaded courtyards, and lush gardens that stand in striking contrast to the arid landscape beyond its walls. Camels are frequently led past the property by local herders, and the surrounding acacia trees attract a surprising variety of desert birdlife. From its elevated terraces, guests take in sweeping views across the pale, sunbaked plains of northern Kenya, especially spectacular as the desert glows at sunset.",
    },
  },

  {
    id: 9,
    name: "Champagne Ridge",
    category: "Scenic & Landscape",
    location: "Great Rift Valley, Kenya",
    image: "/images/destinations/champagne-ridge.jpeg",
    images: [
      "/images/accommodations/champagne-ridge-hotel-1.jpeg",
      "/images/accommodations/champagne-ridge-hotel-2.jpeg",
    ],
    description:
      "Perched along the edge of the Great Rift Valley, Champagne Ridge is a hidden gem offering some of the most panoramic views in the region, largely bypassed by travelers rushing between Kenya's more famous parks. Hiking trails along the ridge reward visitors with sweeping vistas across the valley floor, while gentle nature walks through the surrounding bush reveal a variety of birdlife and acacia-dotted scenery. As evening approaches, the ridge becomes one of the finest spots in the country to watch the sun set over the Rift Valley, the sky bursting into shades of orange and pink. The elegant Oolorien House Kajiado offers comfort and stunning landscape views, making it an ideal base for soaking in the ridge's scenery at any time of day.",
    accommodation: {
      name: "Oolorien House Kajiado",
      description:
        "Oolorien House Kajiado has a refined, understated ambience, its clean lines and wide glass frontages designed specifically to frame the valley below. Zebra, giraffe, and antelope are commonly seen grazing on the surrounding plains, visible right from the property's terraces and lounge areas. Positioned directly along the Rift Valley escarpment, it offers some of the most dramatic sunset views in the region, with the sky over the valley turning brilliant shades of orange each evening.",
    },
  },

  {
    id: 10,
    name: "Mount Ololbutot (Ol Eburu)",
    category: "Scenic & Landscape",
    location: "Naivasha, Kenya",
    image: "/images/destinations/ol-eburu.jpg",
    images: [
      "/images/accommodations/ol-eburu-hotel-1.jpeg",
      "/images/accommodations/ol-eburu-hotel-2.jpeg",
    ],
    description:
      "Overlooking the Rift Valley near Naivasha, Mount Ololbutot, better known as Ol Eburu, is a hidden volcanic gem cloaked in lush forest and largely unknown outside of dedicated hiking circles. Steaming geothermal vents and fumaroles dot the mountain's slopes, a striking reminder of the volcanic forces that shaped this landscape, while hiking trails wind through dense forest alive with birdsong and the calls of colobus monkeys. Reaching the summit rewards hikers with sweeping views across the Rift Valley and Lake Naivasha in the distance, making the climb well worth the effort. At the base of the mountain, the Ol Eburu Cottage Naivasha offers a cozy nature retreat perfect for exploring the surrounding wilderness, an ideal spot to rest after a day on the trails.",
    accommodation: {
      name: "Ol Eburu Cottage Naivasha",
      description:
        "Ol Eburu Cottage Naivasha has a cozy, rustic ambience, with stone fireplaces, timber interiors, and gardens that back directly onto forested slopes. Colobus monkeys and a wide variety of birdlife are frequent visitors to the trees around the cottage, making even a quiet morning on the veranda feel like a wildlife encounter. Set at the base of Ol Eburu, the property enjoys lovely forested views and easy access to trails leading up toward the Rift Valley overlooks above.",
    },
  },

  {
    id: 11,
    name: "Chale Island",
    category: "Coastal & Cultural",
    location: "Kwale, Kenya",
    image: "/images/destinations/chale-island.jpeg",
    images: [
      "/images/accommodations/chale-island-hotel-1.jpeg",
      "/images/accommodations/chale-island-hotel-2.jpeg",
    ],
    description:
      "Off the coast of Kwale, Chale Island is a hidden tropical gem, a private island paradise where white sand beaches meet impossibly turquoise waters. Snorkeling around the surrounding coral reefs reveals a vibrant underwater world of tropical fish, while the island's quiet, palm-fringed shores are ideal for long walks or simply relaxing to the sound of the waves. Local legend and folklore surrounding the island add a layer of mystery to its natural beauty, drawing curious travelers to explore beyond the beach. The exclusive Chale Island Resort offers a luxury island resort offering privacy, relaxation, and coastal charm, giving guests the sense of having an entire tropical paradise to themselves.",
    accommodation: {
      name: "Chale Island Resort",
      description:
        "Chale Island Resort has a serene, castaway-luxury ambience, with eco-conscious villas tucked among palms just steps from the shoreline. Sea turtles are regularly spotted nesting on the beach, and the surrounding reef teems with tropical fish visible from the shallows right in front of the resort. With uninterrupted views of the Indian Ocean in every direction, it offers the rare feeling of having an entire private island paradise to yourself.",
    },
  },

  {
    id: 12,
    name: "Watamu Marine National Park",
    category: "Coastal & Cultural",
    location: "Watamu, Kenya",
    image: "/images/destinations/watamu.jpeg",
    images: [
      "/images/accommodations/watamu-hotel-1.jpeg",
      "/images/accommodations/watamu-hotel-2.jpeg",
    ],
    description:
      "Along Kenya's northern coast, Watamu Marine National Park is a hidden marine gem protecting one of the healthiest coral reef systems in East Africa. Crystal-clear waters make for exceptional diving and snorkeling, with visitors regularly encountering colorful reef fish, sea turtles, and vibrant coral gardens just offshore. Glass-bottomed boat tours offer a way to experience the park's underwater beauty without getting wet, while deep-sea fishing excursions attract those seeking bigger ocean adventures. After a day exploring the reefs, Hemingways Watamu offers a luxury beachfront resort offering elegant rooms and beautiful ocean views, the perfect place to watch the sun set over the Indian Ocean.",
    accommodation: {
      name: "Hemingways Watamu",
      description:
        "Hemingways Watamu carries a polished, nautical elegance, with breezy white-and-blue interiors and terraces that open directly onto the beach. Dolphins are a regular sight just offshore, and the resort's own reef access means sea turtles and colorful fish are often visible without even leaving the property. Floor-to-ceiling ocean views from nearly every room make it one of the finest spots on the coast to watch the sun set over the Indian Ocean.",
    },
  },

  {
    id: 13,
    name: "Tiwi Beach",
    category: "Coastal & Cultural",
    location: "South Coast, Kenya",
    image: "/images/destinations/tiwi-beach.jpeg",
    images: [
      "/images/accommodations/tiwi-beach-hotel-1.jpeg",
      "/images/accommodations/tiwi-beach-hotel-2.jpeg",
    ],
    description:
      "South of Mombasa, Tiwi Beach remains a hidden gem along Kenya's coastline, quieter and far less developed than its more famous neighboring beaches. Natural tidal pools formed along the reef create calm, sheltered spots perfect for swimming and snorkeling, while the beach's soft white sand and swaying palms make it an idyllic setting for simply unwinding. Low tide reveals rock pools teeming with small marine life, a favorite discovery for curious visitors exploring the shoreline. The Hillpark Amare Resort provides a comfortable beachfront stay ideal for a relaxing coastal holiday, offering easy access to the beach's peaceful, uncrowded shores.",
    accommodation: {
      name: "Hillpark Amare Resort",
      description:
        "Hillpark Amare Resort has a laid-back, family-friendly ambience, with breezy common areas, lush gardens, and easy direct access onto Tiwi's quiet sands. Its sheltered tidal pools are a favorite for spotting small reef fish, crabs, and the occasional starfish at low tide, right within walking distance of the rooms. Uncrowded and framed by palm trees, the beach views here have a calm, unspoiled quality that's increasingly rare along Kenya's more developed coastline.",
    },
  },

  {
    id: 14,
    name: "Lamu",
    category: "Coastal & Cultural",
    location: "Lamu Island, Kenya",
    image: "/images/destinations/lamu.jpeg",
    images: [
      "/images/accommodations/lamu-hotel-1.jpeg",
      "/images/accommodations/lamu-hotel-2.jpeg",
    ],
    description:
      "Lamu Island is a hidden cultural gem, a place where time feels measured not by clocks but by tides and wind, and one of the best-preserved examples of Swahili civilization on the East African coast. Narrow winding streets lined with intricately carved wooden doors lead visitors through a UNESCO-listed old town rich in centuries-old architecture and tradition. Traditional dhow sailing trips along the mangrove channels offer a peaceful way to take in the coastline, especially at sunset, while local markets and Swahili cuisine give a genuine taste of island life. The boutique Siyu-Sabour House showcases authentic Swahili design and island heritage, immersing guests fully in the atmosphere that makes Lamu so distinctive.",
    accommodation: {
      name: "Siyu-Sabour House",
      description:
        "Siyu-Sabour House has an intimate, heritage-rich ambience, built around traditional Swahili architecture with carved wooden doors, coral-stone walls, and shaded inner courtyards. Its rooftop terrace looks out over Lamu's mangrove channels, where dhow boats drift by and herons and kingfishers are a common sight at dawn. Steeped in centuries of island heritage, the property offers a rare, authentic window into Swahili coastal life alongside some of the most atmospheric views in Lamu's old town.",
    },
  },

  {
    id: 15,
    name: "Kisumu",
    category: "Coastal & Cultural",
    location: "Lake Victoria, Kenya",
    image: "/images/destinations/kisumu.jpeg",
    images: [
      "/images/accommodations/kisumu-hotel-1.jpeg",
      "/images/accommodations/kisumu-hotel-2.jpeg",
    ],
    description:
      "On the shores of Lake Victoria, Kisumu is a hidden lakeside gem, a vibrant city often overlooked by travelers focused on Kenya's coast and savannah. Waterfront walks along the lake offer some of the most beautiful sunsets in the country, while boat trips out onto the lake give visitors the chance to spot hippos and a rich variety of birdlife. The city's markets and cultural sites offer an authentic glimpse into local Luo culture and daily life, adding depth to any visit. The charming Bingo Beach Resort offers a lakeside retreat with peaceful accommodation overlooking Lake Victoria, an ideal base for experiencing this often-missed side of Kenya.",
    accommodation: {
      name: "Bingo Beach Resort",
      description:
        "Bingo Beach Resort has a relaxed, welcoming ambience, with open-air dining decks and gardens that lead straight down to the lakeshore. Hippos are often heard, and sometimes seen, in the waters just offshore, while fish eagles and kingfishers frequent the surrounding reeds. Facing directly out over Lake Victoria, the resort offers some of the most peaceful sunset views in the region, the water glowing gold as the sun dips below the horizon.",
    },
  },
];