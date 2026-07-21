export interface Destination {
  id: number;
  name: string;
  category: string;
  location: string;
  image: string;
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
    description:
      "Tucked away in the rugged highlands of northern Kenya, Maralal Wildlife Sanctuary remains one of the country's true hidden gems, far removed from the crowds of the more famous reserves. Visitors can spot zebras, giraffes, and buffalo roaming freely across open grassland, while guided nature walks reveal the sanctuary's rich birdlife and indigenous flora up close. Photography enthusiasts will find golden-hour light spilling over the hills particularly rewarding, and a visit to a nearby Samburu village offers a rare, authentic glimpse into the customs and daily life of this pastoralist community. After a day of exploring, guests retire to Maralal Safari Lodge, a comfortable nature retreat surrounded by the peaceful landscapes of northern Kenya, where the quiet of the wilderness makes for an unforgettable night's rest.",
    accommodation: {
      name: "Maralal Safari Lodge",
      description:
        "A comfortable nature retreat surrounded by the peaceful landscapes of northern Kenya.",
    },
  },

  {
    id: 2,
    name: "Mzima Springs",
    category: "Wildlife & Safari",
    location: "Tsavo West, Kenya",
    image: "/images/destinations/mzima-springs.jpeg",
    description:
      "Hidden within the volcanic terrain of Tsavo West, Mzima Springs is a breathtaking oasis that many travelers overlook in favor of Kenya's bigger-name parks, making it a wonderfully uncrowded escape for those in the know. The springs' crystal-clear waters, fed by underground filtration through volcanic rock, are so pure they supply water to the coastal city of Mombasa, and an underwater viewing chamber lets visitors watch hippos and crocodiles gliding beneath the surface in remarkable clarity. Scenic nature walks along the palm-fringed banks offer chances to spot vervet monkeys, colorful birdlife, and the occasional bushbuck grazing nearby. After soaking in the springs' tranquil beauty, guests can unwind at the Kilanguni Serena Safari Lodge, a luxury safari lodge offering comfort, relaxation, and beautiful wilderness views over the surrounding Tsavo plains.",
    accommodation: {
      name: "Kilanguni Serena Safari Lodge",
      description:
        "A luxury safari lodge offering comfort, relaxation, and beautiful wilderness views.",
    },
  },

  {
    id: 3,
    name: "Crescent Island",
    category: "Wildlife & Safari",
    location: "Lake Naivasha, Kenya",
    image: "/images/destinations/crescent-island.jpeg",
    description:
      "Rising quietly from the waters of Lake Naivasha, Crescent Island is a hidden gem that offers one of the only places in Kenya where visitors can walk freely among wildlife without the barrier of a vehicle. The island's peninsula-like shape, formed by a collapsed volcanic crater, creates a predator-free sanctuary where giraffes, zebras, wildebeests, and antelopes graze undisturbed just steps away from wandering guests. Boat rides across the lake to reach the island add an extra layer of adventure, with hippos and fish eagles often spotted along the way. At the end of the day, the Lake Naivasha Crescent Camp provides a peaceful lakeside camp offering a relaxing stay surrounded by nature, its waterside setting a fitting close to a day spent walking among the wild.",
    accommodation: {
      name: "Lake Naivasha Crescent Camp",
      description:
        "A peaceful lakeside camp offering a relaxing stay surrounded by nature.",
    },
  },

  {
    id: 4,
    name: "Giraffe Centre",
    category: "Wildlife & Conservation",
    location: "Nairobi, Kenya",
    image: "/images/destinations/giraffe-centre.jpeg",
    description:
      "Just minutes from the bustle of Nairobi, the Giraffe Centre is a beloved hidden gem dedicated to protecting the endangered Rothschild's giraffe, offering an experience that feels a world away from city life. Visitors can climb a raised wooden platform to feed giraffes by hand, meeting these gentle giants eye to eye, while informative talks from conservation staff explain the ongoing efforts to protect the species and its habitat. A nature trail winding through the surrounding indigenous forest gives guests the chance to spot warthogs, bushbuck, and a variety of birdlife on foot. For an experience unlike any other, the neighboring Giraffe Manor Hotel is a unique luxury hotel offering unforgettable giraffe encounters and excellent hospitality, where giraffes have been known to poke their heads through breakfast room windows each morning.",
    accommodation: {
      name: "Giraffe Manor Hotel",
      description:
        "A unique luxury hotel offering unforgettable giraffe encounters and excellent hospitality.",
    },
  },

  {
    id: 5,
    name: "Ol Pejeta Conservancy",
    category: "Wildlife & Safari",
    location: "Laikipia, Kenya",
    image: "/images/destinations/ol-pejeta.jpeg",
    description:
      "Set against the dramatic backdrop of Mount Kenya, Ol Pejeta Conservancy is a hidden gem within Laikipia's wilderness and one of Africa's leading conservation success stories. The conservancy is home to the last two northern white rhinos on Earth, alongside a thriving population of black rhinos, lions, and the Big Five, making game drives here consistently rewarding for wildlife enthusiasts. Guided rhino tracking experiences and guided walks led by armed rangers offer an intimate, adrenaline-filled way to encounter these magnificent animals up close. After an action-packed day, the Olesamara Collection offers a luxury safari retreat combining comfort, nature, and authentic wilderness experiences, giving guests a serene place to reflect on the day's sightings.",
    accommodation: {
      name: "Olesamara Collection",
      description:
        "A luxury safari retreat combining comfort, nature, and authentic wilderness experiences.",
    },
  },

  {
    id: 6,
    name: "Aberdare Forest",
    category: "Scenic & Landscape",
    location: "Aberdare Range, Kenya",
    image: "/images/destinations/aberdare.jpeg",
    description:
      "High in the Aberdare Range, a lush and misty rainforest defies the common image of Kenya's dry savannahs, making Aberdare Forest a genuine hidden gem for travelers seeking something different. Hiking trails wind through dense, dew-covered undergrowth past hidden waterfalls that crash into cool, mist-filled gorges, while the forest canopy echoes with the calls of birds and monkeys. Wildlife spotting here includes elusive species rarely seen elsewhere, including the rare bongo antelope, alongside elephants and buffalo that frequent the forest's waterholes. Perched above one such waterhole, The Ark Lodge is a unique lodge overlooking a wildlife waterhole with close animal encounters, letting guests watch nocturnal visitors arrive to drink from the comfort of a floodlit viewing deck.",
    accommodation: {
      name: "The Ark Lodge",
      description:
        "A unique lodge overlooking a wildlife waterhole with close animal encounters.",
    },
  },

  {
    id: 7,
    name: "Mambrui Sand Dunes",
    category: "Scenic & Landscape",
    location: "Malindi, Kenya",
    image: "/images/destinations/mambrui-dunes.jpeg",
    description:
      "Just north of Malindi, the Mambrui Sand Dunes remain a hidden gem along Kenya's coast, their towering golden slopes largely undiscovered by the crowds that flock to the region's beaches. Adventure seekers can climb the shifting dunes for sweeping views of the Indian Ocean, try sandboarding down their steep faces, or simply wander the dramatic landscape as a backdrop for striking photography. As the sun begins to set, the dunes take on a fiery amber glow, creating one of the most spectacular sunset views on the entire coastline. Nearby, the Coral Village Bungalow offers a peaceful coastal retreat offering comfort near Kenya's beautiful shoreline, the perfect base for exploring this quiet corner of the coast.",
    accommodation: {
      name: "Coral Village Bungalow",
      description:
        "A peaceful coastal retreat offering comfort near Kenya's beautiful shoreline.",
    },
  },

  {
    id: 8,
    name: "Chalbi Desert",
    category: "Scenic & Landscape",
    location: "Northern Kenya",
    image: "/images/destinations/chalbi-desert.jpeg",
    description:
      "Far from Kenya's lush plains, the Chalbi Desert is a hidden gem of stark, otherworldly beauty and the country's only true desert, offering an experience unlike anywhere else in East Africa. Vast, blinding-white salt pans stretch to the horizon, occasionally broken by nomadic Gabbra caravans leading camels across the wasteland in scenes that feel almost biblical. Adventurous travelers can join camel trekking expeditions, learn about the resilient desert cultures that call this region home, or simply take in the profound silence and isolation of the landscape. After a day exploring the desert's rugged terrain, Desert Rose Kenya provides a comfortable desert stay surrounded by the beauty of northern Kenya, offering welcome respite from the region's intense heat.",
    accommodation: {
      name: "Desert Rose Kenya",
      description:
        "A comfortable desert stay surrounded by the beauty of northern Kenya.",
    },
  },

  {
    id: 9,
    name: "Champagne Ridge",
    category: "Scenic & Landscape",
    location: "Great Rift Valley, Kenya",
    image: "/images/destinations/champagne-ridge.jpeg",
    description:
      "Perched along the edge of the Great Rift Valley, Champagne Ridge is a hidden gem offering some of the most panoramic views in the region, largely bypassed by travelers rushing between Kenya's more famous parks. Hiking trails along the ridge reward visitors with sweeping vistas across the valley floor, while gentle nature walks through the surrounding bush reveal a variety of birdlife and acacia-dotted scenery. As evening approaches, the ridge becomes one of the finest spots in the country to watch the sun set over the Rift Valley, the sky bursting into shades of orange and pink. The elegant Oolorien House Kajiado offers comfort and stunning landscape views, making it an ideal base for soaking in the ridge's scenery at any time of day.",
    accommodation: {
      name: "Oolorien House Kajiado",
      description:
        "An elegant accommodation offering comfort and stunning landscape views.",
    },
  },

  {
    id: 10,
    name: "Mount Ololbutot (Ol Eburu)",
    category: "Scenic & Landscape",
    location: "Naivasha, Kenya",
    image: "/images/destinations/ol-eburu.jpeg",
    description:
      "Overlooking the Rift Valley near Naivasha, Mount Ololbutot, better known as Ol Eburu, is a hidden volcanic gem cloaked in lush forest and largely unknown outside of dedicated hiking circles. Steaming geothermal vents and fumaroles dot the mountain's slopes, a striking reminder of the volcanic forces that shaped this landscape, while hiking trails wind through dense forest alive with birdsong and the calls of colobus monkeys. Reaching the summit rewards hikers with sweeping views across the Rift Valley and Lake Naivasha in the distance, making the climb well worth the effort. At the base of the mountain, the Ol Eburu Cottage Naivasha offers a cozy nature retreat perfect for exploring the surrounding wilderness, an ideal spot to rest after a day on the trails.",
    accommodation: {
      name: "Ol Eburu Cottage Naivasha",
      description:
        "A cozy nature retreat perfect for exploring the surrounding wilderness.",
    },
  },

  {
    id: 11,
    name: "Chale Island",
    category: "Coastal & Cultural",
    location: "Kwale, Kenya",
    image: "/images/destinations/chale-island.jpeg",
    description:
      "Off the coast of Kwale, Chale Island is a hidden tropical gem, a private island paradise where white sand beaches meet impossibly turquoise waters. Snorkeling around the surrounding coral reefs reveals a vibrant underwater world of tropical fish, while the island's quiet, palm-fringed shores are ideal for long walks or simply relaxing to the sound of the waves. Local legend and folklore surrounding the island add a layer of mystery to its natural beauty, drawing curious travelers to explore beyond the beach. The exclusive Chale Island Resort offers a luxury island resort offering privacy, relaxation, and coastal charm, giving guests the sense of having an entire tropical paradise to themselves.",
    accommodation: {
      name: "Chale Island Resort",
      description:
        "A luxury island resort offering privacy, relaxation, and coastal charm.",
    },
  },

  {
    id: 12,
    name: "Watamu Marine National Park",
    category: "Coastal & Cultural",
    location: "Watamu, Kenya",
    image: "/images/destinations/watamu.jpeg",
    description:
      "Along Kenya's northern coast, Watamu Marine National Park is a hidden marine gem protecting one of the healthiest coral reef systems in East Africa. Crystal-clear waters make for exceptional diving and snorkeling, with visitors regularly encountering colorful reef fish, sea turtles, and vibrant coral gardens just offshore. Glass-bottomed boat tours offer a way to experience the park's underwater beauty without getting wet, while deep-sea fishing excursions attract those seeking bigger ocean adventures. After a day exploring the reefs, Hemingways Watamu offers a luxury beachfront resort offering elegant rooms and beautiful ocean views, the perfect place to watch the sun set over the Indian Ocean.",
    accommodation: {
      name: "Hemingways Watamu",
      description:
        "A luxury beachfront resort offering elegant rooms and beautiful ocean views.",
    },
  },

  {
    id: 13,
    name: "Tiwi Beach",
    category: "Coastal & Cultural",
    location: "South Coast, Kenya",
    image: "/images/destinations/tiwi-beach.jpeg",
    description:
      "South of Mombasa, Tiwi Beach remains a hidden gem along Kenya's coastline, quieter and far less developed than its more famous neighboring beaches. Natural tidal pools formed along the reef create calm, sheltered spots perfect for swimming and snorkeling, while the beach's soft white sand and swaying palms make it an idyllic setting for simply unwinding. Low tide reveals rock pools teeming with small marine life, a favorite discovery for curious visitors exploring the shoreline. The Hillpark Amare Resort provides a comfortable beachfront stay ideal for a relaxing coastal holiday, offering easy access to the beach's peaceful, uncrowded shores.",
    accommodation: {
      name: "Hillpark Amare Resort",
      description:
        "A comfortable beachfront stay ideal for a relaxing coastal holiday.",
    },
  },

  {
    id: 14,
    name: "Lamu",
    category: "Coastal & Cultural",
    location: "Lamu Island, Kenya",
    image: "/images/destinations/lamu.jpeg",
    description:
      "Lamu Island is a hidden cultural gem, a place where time feels measured not by clocks but by tides and wind, and one of the best-preserved examples of Swahili civilization on the East African coast. Narrow winding streets lined with intricately carved wooden doors lead visitors through a UNESCO-listed old town rich in centuries-old architecture and tradition. Traditional dhow sailing trips along the mangrove channels offer a peaceful way to take in the coastline, especially at sunset, while local markets and Swahili cuisine give a genuine taste of island life. The boutique Siyu-Sabour House showcases authentic Swahili design and island heritage, immersing guests fully in the atmosphere that makes Lamu so distinctive.",
    accommodation: {
      name: "Siyu-Sabour House",
      description:
        "A boutique hotel showcasing authentic Swahili design and island heritage.",
    },
  },

  {
    id: 15,
    name: "Kisumu",
    category: "Coastal & Cultural",
    location: "Lake Victoria, Kenya",
    image: "/images/destinations/kisumu.jpeg",
    description:
      "On the shores of Lake Victoria, Kisumu is a hidden lakeside gem, a vibrant city often overlooked by travelers focused on Kenya's coast and savannah. Waterfront walks along the lake offer some of the most beautiful sunsets in the country, while boat trips out onto the lake give visitors the chance to spot hippos and a rich variety of birdlife. The city's markets and cultural sites offer an authentic glimpse into local Luo culture and daily life, adding depth to any visit. The charming Bingo Beach Resort offers a lakeside retreat with peaceful accommodation overlooking Lake Victoria, an ideal base for experiencing this often-missed side of Kenya.",
    accommodation: {
      name: "Bingo Beach Resort",
      description:
        "A charming lakeside retreat with peaceful accommodation overlooking Lake Victoria.",
    },
  },
];