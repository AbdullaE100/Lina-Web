import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Six Senses Residences Dubai Marina by Select",
      location: "Dubai Marina",
      image: "/images/properties-thumbnails/six-senses-thumb.jpg",
      category: "apartment",
      bedrooms: "2, 3, 4",
      pricesStartingFrom: "AED10,351,000.00",
      description: "Six Senses Residences Dubai Marina offers a unique investment opportunity with its strategic pricing, significantly lower than other branded residences in the area.",
      details: {
        pricePoint: "Available from AED10,351,000.00",
        paymentPlan: "40/60, 30/70",
        location: "Dubai Marina",
        developer: "Select",
        completionDate: "31/10/2028",
        whyInvest: [
          "Iconic Landmark Status: Set to be the world's tallest residential tower, ensuring global recognition and premium value.",
          "Unmatched Wellness Focus: Over 61,000 sq. ft. of amenities are dedicated to wellness, including a longevity clinic and hydrotherapy spa.",
          "Exclusive Residences-Only Concept: With no hotel component, it guarantees privacy and exclusivity for residents.",
          "Prime Dubai Marina Location: Situated in a prime, evolving part of Dubai Marina with excellent connectivity and views.",
          "Attractive Value Proposition: Priced competitively compared to other branded residences in prime Dubai locations.",
          "Favourable 40/60 Payment Plan: Requires only 40% during construction, offering significant leverage and potential ROI upon completion in 2028.",
          "Strong Potential for Capital Appreciation: Projections suggest returns could exceed 300% on the initial investment.",
          "Ultra-Luxury Branding: The Six Senses brand is synonymous with world-class luxury, wellness, and service.",
          "Limited and Exclusive Inventory: With only 251 residences, the project's scarcity will drive long-term value.",
          "Biophilic and Sustainable Design: The focus on wellness-centric and sustainable architecture appeals to the modern luxury buyer."
        ],
        details: "Six Senses Residences Dubai Marina is a landmark ultra-luxury development by Select Group in partnership with Six Senses, set to become the world's tallest residential tower at 517 metres across 122 floors. Located in Dubai Marina, this exclusive project offers just 251 residences – including two- to four-bedroom apartments, duplexes, and triplex sky mansions – all designed with wellness, sustainability, and biophilic design principles.\n\nResidents will enjoy over 61,000 sq. ft. of dedicated amenities, including a sky deck infinity pool on the 109th floor, private longevity clinic, cryotherapy rooms, hydrotherapy spa, wellness centre, fitness studios, indoor/outdoor cinemas, and more. With a unique residences-only concept and no hotel component, it promises unmatched privacy and exclusivity.\n\nPriced from AED 3,000-4,000 per sq. ft. with a 40/60 payment plan and handover in 2028, this project presents one of the strongest investment opportunities in Dubai's branded residential market.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Marina View, Golf Course View, Skyline View",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Spa, Sauna, Steam Room, Pet-Friendly Areas, Balcony, High-Speed Elevators, Smart Home Systems, Concierge Services, Rooftop Terrace, Shared Workspace, Restaurants and Cafes, Supermarkets Nearby"
      }
    },
    {
      title: "Flora Isle in Dubai Islands",
      location: "Dubai Islands",
      image: "/images/properties-thumbnails/flora-isle-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED3,222,000.00",
      description: "Flora Isle offers a unique investment opportunity with its prime beachfront location on Dubai Islands, providing exceptional views and resort-style living.",
      details: {
        pricePoint: "Available from AED3,222,000.00",
        paymentPlan: "50/50",
        location: "Dubai Islands",
        developer: "Flora Isle Real Estate Development",
        completionDate: "31/03/2028",
        whyInvest: [
          "Prime Beachfront Location: Offers direct beach access on the developing Dubai Islands, a powerful draw for luxury rentals and sales.",
          "Strategic Airport Proximity: Located just 18 minutes from Dubai International Airport, ideal for international investors and frequent travelers.",
          "Flexible Financial Structure: An initial 20% payment followed by construction-linked installments eases the investment burden.",
          "Aligned with Dubai's Vision: Its location and concept are in line with the Dubai 2040 Urban Master Plan, signaling strong long-term growth.",
          "Attractive Investor Discounts: Offers up to 5% discounts for full-floor acquisitions and up to 6% for accelerated payments.",
          "High-Specification Residences: A choice of premium ocean or garden view apartments equipped with high-end appliances.",
          "Reputable Operator Association: Supported by Flora Hospitality's established track record, adding a layer of quality assurance.",
          "Resort-Style Amenities: Features swimming pools, wellness facilities, and recreational areas for an exclusive lifestyle.",
          "Defined Investment Timeline: A clear completion date of Q1 2028 allows for precise financial planning.",
          "Competitive Service Fees: Projected service charges of AED 18 per sq. ft. are competitive for a prime waterfront development."
        ],
        details: "Flora Isle presents a compelling investment opportunity in Dubai's premium real estate market. This beachfront development, situated on Dubai Islands, comprises 251 residential units across three seven-story buildings, with direct beach access.\n\nThe project offers one to three-bedroom apartments ranging from 800 to 2,100 square feet, with prices starting from AED 2,088,888. The development features both ocean-facing and garden-view residences, complete with high-end appliances and contemporary interiors.\n\nKey advantages include:\n• Strategic location: 18 minutes from Dubai International Airport\n• Premium amenities: Swimming pools, wellness facilities, and recreational areas\n• Flexible payment structure: 20% initial payment with construction-linked instalments\n• Completion scheduled for Q1 2028\n\nAdditional investor benefits include bulk purchase discounts of up to 5% for full-floor acquisitions and accelerated payment discounts of up to 6%. The projected service fees are set at 18 AED per square foot.\n\nThe development aligns with Dubai's 2040 Urban Master Plan, positioning it favorably for long-term value appreciation. Construction is managed by Flora Isle Real Estate Development LLC, supported by Flora Hospitality's established track record.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Pool View, Beach, Waterfront, Water",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Barbecue Area, Balcony"
      }
    },
    {
      title: "Jumeirah Residences Emirates Towers",
      location: "Zabeel",
      image: "/images/properties-thumbnails/jumeirah-residences-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3, 4",
      pricesStartingFrom: "AED3,510,000.00",
      description: "Jumeirah Residences Emirates Towers offers a unique investment opportunity with its prime location near Sheikh Zayed Road, providing exceptional city views and luxury amenities.",
      details: {
        pricePoint: "Available from AED3,510,000.00",
        paymentPlan: "60/40",
        location: "Zabeel",
        developer: "Meraas",
        completionDate: "01/08/2030",
        whyInvest: [
          "Iconic Landmark Location: Situated next to the Museum of the Future and Emirates Towers on Sheikh Zayed Road.",
          "Operated by Jumeirah Group: Offers residents world-class signature hospitality services and management.",
          "Award-Winning Architectural Design: A unique cantilevered design by SCDA Architects with column-free interiors.",
          "Prime Financial District Proximity: Adjacent to Dubai International Financial Centre (DIFC), ensuring strong rental demand from finance professionals.",
          "Flexible 60/40 Payment Plan: A manageable payment structure for a luxury asset, with handover in August 2030.",
          "Elite Sky-Level Amenities: Includes sky infinity pools, wellness centers, and private cinemas with panoramic city views.",
          "Pathway to UAE Residency: Investment provides eligibility for the UAE Golden Visa program.",
          "Unobstructed Panoramic Views: Thoughtfully designed to offer stunning, unobstructed views of the city skyline.",
          "Strong Capital Appreciation Potential: A landmark branded residence in a prime CBD location is poised for significant long-term growth.",
          "Seamless Connectivity: Direct access to Sheikh Zayed Road and key destinations like The Dubai Mall and City Walk."
        ],
        details: "Jumeirah Residences Emirates Towers by Meraas is a landmark residential development redefining luxury living beside Dubai's financial district. Designed by the acclaimed SCDA Architects, the twin towers feature cantilevered structures with column-free interiors, offering unobstructed layouts and panoramic views of the city skyline.\n\nComprising 754 meticulously crafted units ranging from one to four bedrooms, each residence boasts floor-to-ceiling windows, private terraces, and premium finishes. Residents enjoy an array of world-class amenities, including sky-level infinity pools, exclusive wellness centres, private cinemas, and co-working lounges.\n\nOperated by the renowned Jumeirah Group, the development provides signature hospitality services such as 24/7 concierge, housekeeping, and personalised event planning. Strategically located adjacent to Sheikh Zayed Road and the Museum of the Future, the residences offer seamless access to key destinations like DIFC, The Dubai Mall, and City Walk.\n\nWith a flexible 60/40 payment plan and handover expected in August 2030, Jumeirah Residences Emirates Towers presents a compelling investment opportunity for discerning buyers seeking unparalleled luxury and convenience in the heart of Dubai.",
        propertyType: "Apartment",
        propertyView: "Museum of the Future, Emirates Towers, City View, Skyline View, Pool View, Community View",
        propertyAmenities: "Cinema, Sky Pool, Wellness Centre, Paddle Court, Co-Working space"
      }
    },
    {
      title: "SOL Levante",
      location: "Jumeirah Village Triangle (JVT)",
      image: "/images/properties-thumbnails/sol-levante-thumb.jpg",
      category: "apartment",
      bedrooms: "Studio, 1, 2, 3",
      pricesStartingFrom: "AED800,000.00",
      description: "SOL Levante stands out due to its strategic location in Jumeirah Village Triangle, a rapidly appreciating area, offering excellent investment potential and modern living spaces.",
      details: {
        pricePoint: "Available from AED800,000.00",
        paymentPlan: "50/50",
        location: "Jumeirah Village Triangle (JVT)",
        developer: "SOL",
        completionDate: "30/09/2028",
        whyInvest: [
          "Unique Wellness Focus: Taps into the growing market demand for health-oriented living with extensive wellness amenities.",
          "High-Growth Location: Situated in Jumeirah Village Triangle (JVT), a suburban neighborhood known for its rapid value appreciation.",
          "Affordable Entry to Premium Market: Starting prices of AED 735,000 for studios provide an accessible investment route.",
          "Leveraged Investment Plan: Requires only a 24% down payment, with 50% upon completion in Q3 2028, maximizing potential returns on initial capital.",
          "Extensive Amenity Package: Over 50,000 sq. ft. of facilities significantly boosts its competitive edge and rental value.",
          "Developer Reliability: Backed by the Bhatia Group's 50-year history and completion of over 250 projects, ensuring investment security.",
          "Broad Market Appeal: A diverse mix of units caters to various tenants and buyers, from professionals to families.",
          "Strong Appreciation Potential: The combination of location, unique concept, and competitive pricing indicates a high chance of capital growth.",
          "Freehold Ownership: Secures investment for both local and international buyers with full ownership rights.",
          "Landmark Residential Status: Positioned to become an iconic wellness-focused residence within the JVT community."
        ],
        details: "Sol Levante is poised to become the most prestigious wellness residence in the heart of Jumeirah Village Triangle, one of Dubai's most dynamic and rapidly developing neighborhoods. This iconic development will offer 599 premium freehold units, catering to discerning investors who seek unparalleled luxury living. With a distinctive focus on wellness and an exceptional range of world-class amenities, Sol Levante provides a unique opportunity to invest in the thriving Dubai real estate market.",
        propertyType: "Apartment, Studio",
        propertyView: "City View, Skyline View, Pool View, Community View, Park View, Garden View",
        propertyAmenities: "Outdoor Cinema, Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Pet-Friendly Areas, Balcony, High-Speed Elevators, Concierge Services, Business Center, Shared Workspace, Supermarkets Nearby"
      }
    },
    {
      title: "KORO One by ALTA",
      location: "Jumeirah Garden City",
      image: "/images/properties-thumbnails/koro-one-thumb.jpg",
      category: "apartment",
      bedrooms: "Studio, 1, 2",
      pricesStartingFrom: "AED877,000.00",
      description: "KORO One offers a prime investment opportunity with its strategic location in Jumeirah Garden City, benefiting from excellent connectivity and modern design.",
      details: {
        pricePoint: "Available from AED877,000.00",
        paymentPlan: "30/70",
        location: "Jumeirah Garden City",
        developer: "ALTA",
        completionDate: "31/01/2026",
        whyInvest: [
          "Prime Jumeirah Garden City Location: Situated in a central, emerging freehold zone just five minutes from Downtown Dubai and DIFC.",
          "Government-Backed Regeneration Zone: Located within an area undergoing significant government-backed upgrades, ensuring long-term growth.",
          "Flexible 30/70 Payment Plan: A highly attractive structure for investors, minimising upfront costs and maximising leverage.",
          "Short Time to Handover: With completion in early 2026, it offers a faster path to rental income and capital returns.",
          "Boutique, Design-Led Development: A contemporary project focused on efficient layouts and lifestyle amenities for modern urbanites.",
          "Competitive Pricing for a Central Location: Offers a better value proposition compared to adjacent, more established areas like City Walk.",
          "Ideal for Professional Tenant Market: The unit mix and location are perfectly suited for the growing population of young professionals and digital nomads.",
          "Trusted Developer Backing: ALTA Real Estate has a proven track record of delivering high-quality residential projects.",
          "Excellent Connectivity: Offers seamless access via Sheikh Zayed Road and nearby public transport links.",
          "Low-Risk, Well-Timed Opportunity: A well-calibrated investment in a central neighbourhood poised for significant transformation."
        ],
        details: "KORO One by ALTA Real Estate Development is a thoughtfully curated residential project located in the heart of Jumeirah Garden City—one of Dubai's most dynamic emerging neighbourhoods. Blending city energy with tranquil living, KORO One is designed for modern lifestyles, where flexibility, connectivity, and design-led spaces converge to create an authentic sense of home.\n\nRooted in the concept of \"core\" and \"cuore\" (Italian for heart), KORO One offers a fresh take on central urban living. The development features a range of intelligently designed residences, including studios, one- and two-bedroom apartments, and a signature three-bedroom duplex. Each home maximises natural light through floor-to-ceiling windows and open-plan layouts, with soft textures and neutral palettes adding warmth and timeless appeal.\n\nPositioned just five minutes from Downtown Dubai and DIFC, and ten minutes from Jumeirah Beach and Port Rashid, KORO One enjoys excellent accessibility via Sheikh Zayed Road and public transport. Its location within a government-backed regeneration zone ensures strong long-term investment potential, enhanced further by surrounding infrastructure upgrades and a growing lifestyle ecosystem.\n\nResidents benefit from a suite of curated amenities, including rooftop swimming pools, a landscaped roof garden, Technogym-equipped fitness centre and yoga studio, co-working lounges, sauna and steam rooms, and boutique communal spaces. Ground-floor retail outlets offer everyday convenience, while tree-lined boulevards and nearby cafés create a welcoming community atmosphere.\n\nWith a flexible 30/70 payment plan and freehold ownership open to both local and international buyers, KORO One presents an attractive opportunity for investors and end-users alike. ALTA's proven track record in high-quality delivery adds to the project's appeal. In every sense, KORO One is built for the future—designed for how people truly live, work, and connect today.",
        propertyType: "Apartment, Studio",
        propertyView: "City View, Park View, Pool View, Community View, Landscaping",
        propertyAmenities: "Rooftop Swimming Pools, Fully Equipped Gym with Technogym Equipment, Yoga Studio, Landscaped Roof Garden with panoramic city views, Co-working Lounge, Courtyard spaces for relaxation and socialising"
      }
    },
    {
      title: "Silva by Emaar in Dubai Creek Harbour",
      location: "Dubai Creek Harbour",
      image: "/images/properties-thumbnails/silva-emaar-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED1,800,000.00",
      description: "Silva by Emaar presents a compelling investment opportunity in one of Dubai's most ambitious master-planned communities, offering waterfront living and premium amenities.",
      details: {
        pricePoint: "Available from AED1,800,000.00",
        paymentPlan: "80/20",
        location: "Dubai Creek Harbour",
        developer: "Emaar",
        completionDate: "30/09/2029",
        whyInvest: [
          "Silva is developed by Emaar, one of the most trusted names in real estate with a consistent track record of delivering high-quality projects. The location is excellent—just minutes from Dubai International Airport and positioned in the Green Gate district, which already includes the community school and upcoming metro access.",
          "The views are a major highlight, with unobstructed outlooks over the golf course and direct sightlines to the Dubai Creek Tower, making it a visually compelling long-term investment.",
          "The project offers a limited supply of large-format apartments and three-bedroom townhouses, a rarity in Creek Harbour, ensuring long-term demand and desirability.",
          "Residents benefit from a full suite of lifestyle amenities, including a large community park, pools, padel court, fitness zones, co-working space, retail promenade, and more—attracting end users and tenants alike.",
          "The payment plan is well structured, allowing investors to secure a unit with just 10 percent upfront and spread the remaining payments over the build period until completion in Q3 2029.",
          "Silva is part of a master-planned community that includes new infrastructure, hospitality, green spaces, and commercial elements—positioning it for strong capital appreciation.",
          "The design and finish are high-spec, with large living spaces, earthy interiors, and floor-to-ceiling windows that maximise views and light.",
          "Creek Harbour is emerging as a strong alternative to Downtown Dubai, but with more open space, better pricing, and high potential for long-term growth.",
          "The surrounding community is walkable, family-friendly, and ideal for both end users and tenants seeking a lifestyle-led location.",
          "And finally, Emaar's developments typically benefit from strong post-handover resale and rental performance, offering flexibility whether you choose to hold or exit."
        ],
        details: "Silva at Dubai Creek Harbour is a premier residential development by Emaar, located in the thriving Green Gate district—home to the new community school. The 50‑storey tower offers a refined collection of one to three bedroom apartments, along with a limited selection of spacious three bedroom townhouses.\n\nEach residence is crafted to maximise light and comfort, featuring warm, natural finishes and flowing layouts. Generously sized living areas open onto private balconies or terraces, offering sweeping views over the golf course and towards the iconic Dubai Creek Tower. It's a home that feels both elegant and welcoming.\n\nSilva brings together nature, community and lifestyle in perfect harmony. Residents enjoy beautifully landscaped gardens, a serene community park, jogging tracks, outdoor fitness zones, padel and multi‑sport courts, and sparkling swimming pools. Children's play areas, picnic lawns, BBQ spaces and a neighbourhood retail plaza with boutique shops add to the family‑friendly atmosphere. For those working from home, a co‑working lounge offers a quiet, professional space.\n\nConnectivity is one of Silva's strengths. It is just minutes from Dubai International Airport, making travel effortless for residents and visitors alike. The future Blue Line Metro will further enhance access and convenience.\n\nWhat this really means is that Silva at Dubai Creek Harbour is more than just a place to live—it delivers a full lifestyle. With generous living spaces, high‑quality finishes, extensive amenities and panoramic views, it's an ideal choice for families, professionals and investors. This is a unique opportunity to own a contemporary, well‑connected home in one of Dubai's most exciting waterfront communities.",
        propertyType: "Apartment",
        propertyView: "City View, Golf Course View, Creek Tower",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Balcony, High-Speed Elevators, Barbecue Area"
      }
    },
    {
      title: "Sidr Residences - EXPO City",
      location: "Expo City",
      image: "/images/properties-thumbnails/sidr-residences-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED1,900,000.00",
      description: "Sidr Residences offers premium living in the heart of Expo City Dubai, combining innovation, sustainability, and urban comfort in a connected smart city environment.",
      details: {
        pricePoint: "Available from AED1,900,000.00",
        paymentPlan: "60/40 Post Handover Payment Plan",
        location: "Expo City",
        developer: "Expo City",
        completionDate: "31/12/2027",
        whyInvest: [
          "Strategic Expo City Location: Situated in the heart of a future-focused city with strong government backing and infrastructure.",
          "Exceptional Connectivity: Steps away from the Dubai Metro and minutes from Al Maktoum International Airport.",
          "Limited Supply, Growing Demand: A limited number of residences in a high-demand area ensures strong potential for capital appreciation.",
          "Larger-Than-Average Layouts: Apartments are designed to be more spacious than the market average, enhancing liveability and rental appeal.",
          "Flexible Post-Handover Payment Plan: A 2-year post-handover payment plan provides financial flexibility and attracts a wider range of buyers.",
          "Walkable Smart City Concept: Part of a sustainable, walkable community with integrated technology and lifestyle amenities.",
          "High-Quality Community Planning: Features curated amenities like community gardens, toy libraries, and meditation pods.",
          "Proximity to Commercial Hubs: Close to the Dubai Exhibition Centre and other commercial hubs, driving rental demand from professionals.",
          "Sweeping Views of Expo Landmarks: Offers prime views of the UAE Pavilion, Al Wasl Plaza, and the Surreal water feature.",
          "Future-Proof Investment: A sustainable, tech-integrated home in a master-planned environment poised for long-term growth."
        ],
        details: "Sidr Residences is a premium residential development in the heart of Expo City Dubai, offering a unique blend of innovation, sustainability, and serene urban living. Drawing inspiration from the Sidr tree, known for its resilience and deep-rooted heritage, the development delivers thoughtfully designed homes set within a connected, walkable smart city.\n\nComprising three mid-rise towers, Sidr Residences offers one to three-bedroom apartments and duplexes, each finished to an exceptional standard and framed by floor-to-ceiling windows. With larger-than-average layouts, spacious balconies, and sweeping views over the UAE Pavilion, Terra, Al Wasl Plaza, and the Surreal water feature, every home is designed for modern comfort and natural harmony.\n\nPositioned just steps from the Dubai Exhibition Centre and Metro Station, the development offers seamless access to Expo City's cultural landmarks, retail and dining venues, and commercial hubs—while Al Maktoum International Airport is just minutes away. With home automation, 5 G-enabled connectivity, and a community ethos grounded in sustainability, Sidr Residences is ideal for future-focused professionals and families.",
        propertyType: "Apartment",
        propertyView: "City View, Skyline View, Pool View, Park View, Community View",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Barbecue Area, Cycling Track, Jogging Track, Balcony, High-Speed Elevators, Smart Home Systems, Restaurants and Cafes, Supermarkets Nearby"
      }
    },
    {
      title: "Terra Heights in Emaar Expo Living",
      location: "Expo City",
      image: "/images/properties-thumbnails/terra-heights-thumb.jpg",
      category: "apartment",
      bedrooms: "2",
      pricesStartingFrom: "AED2,080,000.00",
      description: "Terra Heights offers premium living in Emaar Expo Living, with excellent connectivity to Dubai's major attractions and a comprehensive suite of lifestyle amenities.",
      details: {
        pricePoint: "Available from AED2,080,000.00",
        paymentPlan: "80/20",
        location: "Expo City",
        developer: "Emaar",
        completionDate: "31/03/2029",
        whyInvest: [
          "Proximity to Expo City: Located a 5-minute walk from the major exhibitions and events hub, ensuring consistent rental demand.",
          "Exceptional Connectivity: Just a 10-minute drive to Al Maktoum International Airport and 15 minutes to Dubai Marina, with nearby metro access.",
          "Trusted Developer: Developed by Emaar, a globally recognised brand synonymous with quality and iconic projects.",
          "Future Growth Corridor: Situated within the Dubai South area, a key zone for development under the Dubai 2040 Urban Master Plan.",
          "Accessible Price Point: Starting from AED 1.5 million, it offers a cost-effective entry into a premium Emaar community.",
          "Investor-Friendly Payment Plan: A flexible structure with payments staggered until the 2029 completion date.",
          "Comprehensive Lifestyle Amenities: Features two tranquil courtyards, pools, a gym, sports courts, and a unique mini-golf area.",
          "Modern Architectural Design: Apartments feature floor-to-ceiling windows and open-plan layouts for a bright, contemporary feel.",
          "Proximity to Future Landmarks: Close to the upcoming Palm Jebel Ali, poised to enhance long-term property value.",
          "Financially Stable Developer: Emaar's robust 2023 revenue of AED 26.7 billion reinforces their capacity to deliver."
        ],
        details: "Prime Location\n• Situated within Expo Living, Terra Heights is a 5-minute walk from Expo City, the region's future exhibitions and events hub.\n• Proximity to Al Maktoum International Airport (10-minute drive) ensures seamless global connectivity.\n• Located within a 15-minute drive to Dubai Marina and near the metro station, offering excellent access to Dubai's coastal destinations and major transit routes.\n\nWorld-Class Amenities\n• Designed around two tranquil courtyards, offering relaxation and social spaces.\n• Features include:\n  o Landscaped podium courtyards with adult and kids' pools, yoga deck, and play areas.\n  o A well-equipped gym, multipurpose sports courts, and community lawns.\n  o Social spaces like barbecue areas, event rooms, and meeting spaces.\n  o A unique mini golf area for added recreational value.\n\nLifestyle and Design\n• One- and two-bedroom apartments with floor-to-ceiling windows maximize natural light and offer scenic views of Expo City and lush courtyards.\n• Open layouts promote a bright, airy living environment with a balance of urban and green surroundings.\n• Thoughtful architectural sophistication and an elegant blend of luxury and comfort.\n\nDeveloper Track Record\n• Developed by Emaar, a globally recognized brand with a proven history of delivering iconic landmarks, including Burj Khalifa and Dubai Mall.\n• Emaar's revenue for 2023 was AED 26.7 billion (US$ 7.3 billion), reinforcing their financial stability and expertise.\n\nPayment Plan\n• Flexible payment schedule with a down payment as low as 10%, followed by staggered installments linked to construction milestones, culminating in 2029.\n• Offers a hassle-free payment structure for investors and end-users alike.\n\nAttractive Price Points\n• Competitive pricing for one-bedroom units starting at AED 1.5 million and two-bedroom units starting at AED 2.0 million, making it a cost-effective investment in a premium community.\n\nFuture Prospects\n• The surrounding Dubai South area is positioned for dynamic growth, driven by the Dubai 2040 Urban Master Plan.\n• Proximity to Palm Jebel Ali and other attractions enhances leisure opportunities and long-term value appreciation.\n\nInvesting in Terra Heights provides a blend of strategic location, luxurious living, and the reliability of an iconic developer, making it an attractive option for investors and homeowners alike.",
        propertyType: "Apartment",
        propertyView: "",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security"
      }
    },
    {
      title: "Wynwood on Dubai Islands",
      location: "Dubai Islands",
      image: "/images/properties-thumbnails/wynwood-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3, 4",
      pricesStartingFrom: "AED2,000,000.00",
      description: "Wynwood offers premium living in Dubai Islands with fully furnished residences featuring high-end finishes and smart home technology in a serene, low-density environment.",
      details: {
        pricePoint: "Available from AED2,000,000.00",
        paymentPlan: "60/40",
        location: "Dubai Islands",
        developer: "Imtiaz",
        completionDate: "01/10/2027",
        whyInvest: [
          "Strategic Dubai Islands Location: Situated in a visionary coastal district, set to become a major lifestyle and retail destination.",
          "Fully Furnished, Turnkey Investment: Residences are delivered fully furnished with premium brands like Miele and Villeroy & Boch.",
          "Proximity to New Mega Mall: Located within walking distance of the upcoming Dubai Islands Mall, a key driver for future rental demand.",
          "Boutique, Low-Density Living: Offers a refined, low-density environment for those seeking sophistication and tranquility.",
          "Flexible 60/40 Payment Plan: Allows investors to benefit from the area's growth with managed capital outlay during construction.",
          "High-End Smart Home Technology: Each home is equipped with Alexa-enabled smart systems, appealing to the modern tenant.",
          "Freehold and Golden Visa Eligibility: Offers long-term security for both local and international investors.",
          "Aligned with Dubai 2040 Urban Master Plan: Positioned in a key area for future urban development and value appreciation.",
          "Reputable Developer for Quality: Imtiaz Developments is known for its focus on design integrity and delivery excellence.",
          "Diverse Unit Mix with Rare Duplexes: Caters to a broad market with units from 1-bedroom apartments to exclusive duplexes with private plunge pools."
        ],
        details: "Wynwood by Imtiaz Developments is a premium residential project located in the heart of Dubai Islands, offering refined living just moments from the waterfront and Dubai's newest upcoming mall. Blending elegant architecture with serene, low-density surroundings, Wynwood is ideal for those seeking a balance of sophistication, connectivity, and tranquillity.\n\nThis fully furnished development features a curated collection of 1 to 4-bedroom apartments and signature duplexes, crafted with high ceilings, panoramic glazing, and soft natural finishes. Each home is equipped with Alexa-enabled smart systems, Miele kitchen appliances, and premium sanitaryware from Villeroy & Boch, Gessi, and Geberit. Engineered stone countertops and bespoke wardrobes complete the understated, modern interior palette.\n\nResidents enjoy access to a rooftop infinity pool, open-air yoga terrace, green courtyards, children's play areas, EV charging, and the iconic Whisper Steps amphitheatre staircase. Exclusive duplex units offer private rooftop retreats with plunge pools, outdoor lounges, and panoramic views across Dubai Islands.\n\nStrategically located in the Deira coastal zone, Wynwood is just minutes from the beach, marina, and golf courses, and a short walk from the upcoming Dubai Islands Mall—set to become a major retail and lifestyle destination. Downtown Dubai, DIFC, and Dubai International Airport are all reachable within 20 minutes, offering seamless city-wide connectivity.\n\nWith prices from AED 2 million and a flexible 60/40 payment plan, Wynwood combines capital growth potential with lifestyle appeal. Aligned with the Dubai 2040 Urban Master Plan, the development is freehold and eligible for the Golden Visa, offering long-term security for both residents and investors. Backed by Imtiaz's reputation for design integrity and delivery excellence, Wynwood is a compelling addition to one of Dubai's most visionary coastal districts.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Marina View, Skyline View, Garden View, Park View, Pool View, Community View, Creek View, Beach",
        propertyAmenities: "Clubhouse, Gym, Jacuzzi & Splash Pool for Children, BBQ Area and Dining Pods, Reserved VIP Parking, Sky bar and poolside deck"
      }
    },
    {
      title: "Camden in Town Square",
      location: "Town Square",
      image: "/images/properties-thumbnails/camden-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3",
      pricesStartingFrom: "AED1,156,888.00",
      description: "Camden offers modern apartments in the thriving Town Square community with smart layouts, fully fitted kitchens, and access to extensive community amenities.",
      details: {
        pricePoint: "Available from AED1,156,888.00",
        paymentPlan: "50/50",
        location: "Town Square",
        developer: "Nshama",
        completionDate: "28/03/2028",
        whyInvest: [
          "Attractive Starting Prices: With 1-bedroom apartments from AED 1.14M and 2-beds from AED 1.57M, Camden offers exceptional value for new investors and end-users alike.",
          "Flexible 50/50 Payment Plan: Pay 50% during construction and the remaining 50% on handover in March 2028, easing cash flow and reducing financial pressure.",
          "Strong Rental Potential: Town Square attracts young professionals and families, making Camden a solid option for investors targeting long-term rental income.",
          "Proven Developer Track Record: Nshama has delivered multiple successful communities in Dubai, known for timely handovers and consistent build quality.",
          "Fully Fitted Apartments: All units come with a fully fitted kitchen and modern interiors, cutting down on post-handover expenses for owners or landlords.",
          "Community Amenities: Residents enjoy a pool, gym, kids' play areas, BBQ space, pet wash station, and more – ideal for modern family living.",
          "Masterplanned Growth: Town Square is a well-integrated, walkable community with 250+ retail outlets, cycling tracks, sports facilities, and schools.",
          "Capital Appreciation Upside: As Town Square continues to grow and infrastructure improves, early investors in Camden are well-positioned for capital gains.",
          "End-User Friendly Design: Spacious layouts, natural light, quality materials, and en-suite master bedrooms make Camden highly liveable and marketable."
        ],
        details: "Camden is the latest residential launch in Town Square Dubai by Nshama, offering a collection of modern 1, 2, and 3-bedroom apartments with smart, open-plan layouts and high-quality finishes. Positioned just behind the Alton building and steps from the central park, Camden blends contemporary architecture with a relaxed, nature-connected lifestyle.\n\nApartments are designed with spacious living areas, en-suite master bedrooms, and fully fitted kitchens, offering both functionality and style. Floor-to-ceiling windows ensure natural light flows through each space, while select homes feature generous balconies overlooking green open space.\n\nThe project enjoys direct access to Town Square Park and sits within a community featuring over 260,000 square metres of landscaped greenery, 250+ retail outlets, 10 kilometres of cycling trails, and world-class sports and wellness facilities.\n\nResidents at Camden benefit from a range of on-site amenities including a swimming pool, gym, kids' play areas, BBQ zone, and even a pet wash area. It's urban living with room to breathe.\n\nPrices start from AED 1.14M for 1-bedroom units, with a 50/50 payment plan and handover scheduled for March 2028. Camden is a lifestyle-driven investment in one of Dubai's fastest-growing master-planned communities.",
        propertyType: "Apartment",
        propertyView: "City View, Skyline View, Garden View, Pool View, Community View, Landscaping",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Cycling Track, Pet-Friendly Areas, Balcony, High-Speed Elevators, Restaurants and Cafes, Supermarkets Nearby"
      }
    },
    {
      title: "ORA Ghantoot – Redefining Coastal Living Between Two Emirates",
      location: "Ghantoot",
      image: "/images/properties-thumbnails/ora-ghantoot-thumb.jpg",
      category: "apartment,villa,townhouse",
      bedrooms: "3, 4, 5, 6",
      pricesStartingFrom: "AED3,000,000.00",
      description: "ORA Ghantoot is a landmark waterfront development positioned between Dubai and Abu Dhabi, offering a next-generation smart city concept with resort-style luxury.",
      details: {
        pricePoint: "Available from AED3,000,000.00",
        paymentPlan: "60/40",
        location: "Ghantoot",
        developer: "ORA",
        completionDate: "20/04/2028",
        whyInvest: [
          "Strategic Inter-Emirate Location: Equidistant from Downtown Dubai and Abu Dhabi, positioning it as a future central hub.",
          "Compelling Early Entry Pricing: Launch prices between AED 1,500–2,000 per sq. ft. are highly attractive for a waterfront masterplan.",
          "Landmark Government-Backed Joint Venture: A partnership between ORA Developers and Q Holding ensures strong backing and delivery capability.",
          "Investor-Friendly Payment Structure: A 60/40 plan with only 25% due in the first year and a lower 2% Abu Dhabi registration fee.",
          "Future Metro Connectivity: The planned extension of the Blue Line Metro to Ghantoot will significantly enhance accessibility and value.",
          "Exceptional Potential for Capital Growth: The scale of the masterplan suggests significant long-term appreciation as the new coastal city matures.",
          "Globally Renowned Developer: ORA Developers has a proven international track record of creating luxury lifestyle destinations.",
          "\"15-Minute City\" Concept: A smart, sustainable city design focused on convenience, wellness, and eco-friendly transport.",
          "Vast and Exclusive Waterfront Access: Features 1.2 km of Arabian Gulf beachfront, a key driver for luxury real estate value.",
          "A Mid-to-Long-Term Strategic Investment: An opportunity to invest in the foundational phase of a new city, not just a residential project."
        ],
        details: "ORA Ghantoot is a landmark waterfront development by ORA Developers, positioned between Dubai and Abu Dhabi along the Arabian Gulf coast. Spanning over 4.8 million square metres, this visionary project is master-planned as a next-generation smart city blending resort-style luxury, sustainability, and urban connectivity.\n\nDesigned as a \"15-minute city\", ORA Ghantoot is divided into three unique yet interconnected lifestyle zones — Beach Shore Living, Resort Living, and Town Living — all linked by a 100% eco-friendly transportation system. The entire masterplan is geared towards delivering wellness, convenience, and high-end living in a location that offers unrivalled accessibility.\n\nProject Overview\n• Total Land Area: 4.8 million m²\n• Location: Ghantoot – equidistant from Downtown Dubai and Abu Dhabi city centre\n• Estimated Handover: December 2028 (Phase 1)\n• Developer: ORA Developers (in joint venture with Q Holding)\n• Total Units Planned: Approx. 9,000 across multiple phases\n• Launch Units: Approx. 464 (townhouses and villas)\n• Expected Pricing: AED 1,500–2,000 per sq. ft.\n• Starting Price: From AED 3.0 million\n• Payment Plan: 60/40 (25% in 2024, 30% in 2025, 15% in 2026)\n• DLD Registration Fee: 2% (as per Abu Dhabi Municipality regulations)\n\nMasterplan Zones\nBeach Shore Living\n• Prime oceanfront residences with direct beach access\n• High-end villas and low-rise apartments with uninterrupted sea views\n• Exclusive beach clubs, landscaped promenades, and leisure pavilions\n\nResort Living\n• Luxury villas designed around a hospitality-inspired lifestyle\n• Wellness retreats, signature spas, and a golf course\n• Gated residential enclaves integrated with green open spaces\n\nTown Living\n• Mixed-use urban centre with retail, co-working, and entertainment\n• Smart home-enabled residences and contemporary co-living formats\n• Cafés, restaurants, and creative hubs for a vibrant community feel\n\nAmenities & Infrastructure\n• 1.2 km of Arabian Gulf beachfront\n• 5-star hotel and serviced residences\n• High-end shopping mall and boutique retail\n• Signature waterpark, fitness centres, and multi-sport courts\n• Parks, jogging trails, and community gathering spaces\n• Solar power, EV charging, waste recycling, and water conservation\n• AI-powered security, home automation, and smart city solutions\n• Connected via the future Blue Line Metro extension to Ghantoot\n\nDeveloper Profile\nORA Developers is an internationally renowned real estate group led by Naguib Sawiris, a visionary entrepreneur with a track record in luxury developments across Egypt, Cyprus, Greece, Pakistan, and the Caribbean. The firm is known for transformative, design-led destinations such as Silversands, Ayia Napa Marina, and Eighteen Islamabad.\n\nORA Ghantoot is their flagship UAE project and represents their boldest undertaking in the region to date.",
        propertyType: "Apartment, House/Villa, Townhouse, Villa",
        propertyView: "Sea View, Canal View, Skyline View, Park View, Garden View, Community View, Water",
        propertyAmenities: "Gym, Swimming Pool, 24/7 Security, Parking, Children's Play Area, Barbecue Area, Tennis Court, Basketball Court, Jogging Track, Cycling Track, Pet-Friendly Areas, Beach Access, Restaurants and Cafes, Supermarkets Nearby"
      }
    },
    {
      title: "Talea by Beyond at Maritime City",
      location: "Maritime City",
      image: "/images/properties-thumbnails/talea-thumb.jpg",
      category: "apartment",
      bedrooms: "1, 2, 3, 4",
      pricesStartingFrom: "AED2,200,000.00",
      description: "Talea is Dubai's first forest-front tower, offering a unique blend of nature and luxury city living with panoramic views and Balinese-inspired design.",
      details: {
        pricePoint: "Available from AED2,200,000.00",
        paymentPlan: "50/50",
        location: "Maritime City",
        developer: "Beyond",
        completionDate: "28/03/2029",
        whyInvest: [
          "Talea is the first-ever residential tower in Dubai's Forest District, offering a rare fusion of nature and luxury city living.",
          "Set in Dubai Maritime City, it delivers uninterrupted sea, skyline, and forest views — just 10 minutes from Downtown and DIFC.",
          "With only 354 units and 6 to 10 apartments per floor, Talea ensures privacy, exclusivity, and scarcity — key ingredients for capital growth.",
          "Its Balinese-inspired design, led by La Casa, Bergman Design House, and Desert Ink, creates a genuine resort-style living experience.",
          "Residents enjoy wellness-focused amenities including an infinity pool, luxury gym, forest lounge, BBQ terraces, a kids' zone, and even treehouse seating decks.",
          "The 50/50 payment plan keeps cash flow manageable, with handover scheduled for Q1 2029, ideal for long-term investors or lifestyle buyers.",
          "As one of the first towers in a new master-planned district, Talea offers a strong first-mover advantage in a high-growth waterfront location.",
          "The unit mix includes spacious 1 to 3 bedroom apartments and exclusive 4-bedroom penthouses — appealing to both end-users and short-let investors.",
          "Beyond, the developer behind Talea, is known for premium finishes and well-designed lifestyle communities with lasting value.",
          "With direct access to the Bay and the future retail promenade, Talea is well-positioned for long-term capital appreciation and strong rental demand."
        ],
        details: "Talea by Beyond is a luxury waterfront development set in the exclusive Forest District of Dubai Maritime City. Designed as Dubai's first forest-front tower, Talea blends natural serenity with elevated urban living, offering residents panoramic views of both lush greenery and the open sea.\n\nThis limited-edition project features just 354 units, spread across a tower with only 6 to 10 residences per floor, ensuring privacy and space. Apartments range from one to three bedrooms, with a collection of ultra-luxury four-bedroom penthouses crowning the top levels. Interiors are Balinese-inspired, combining natural textures and earthy palettes to create a true resort-style living experience. The design collaboration includes La Casa, Bergman Design House, and Desert Ink, all contributing to Talea's unique forest-meets-sea aesthetic.\n\nBeyond the interiors, Talea is built around wellness and lifestyle. Residents enjoy access to an infinity pool, luxury fitness centre, forest lounge, outdoor gym, treehouse seating decks, BBQ terraces, and a dedicated kids' zone. Every element is curated to promote relaxation, connection, and wellbeing.\n\nFrom an investment standpoint, Talea offers strong capital appreciation potential with prices starting from AED 2.2 million. The project is backed by a 50/50 payment plan, with handover expected in Q1 2029. Its prime location just 10 minutes from Downtown Dubai and direct access to the Bay and future retail promenade position Talea as a standout opportunity for both end-users and investors.\n\nWhether you're looking for a personal sanctuary or a strategic asset in one of Dubai's most forward-thinking districts, Talea by Beyond delivers on design, exclusivity, and long-term value.",
        propertyType: "Apartment",
        propertyView: "City View, Sea View, Skyline View, Garden View, Pool View, Waterfront, Water",
        propertyAmenities: "Gym, Swimming Pool, Parking, 24/7 Security, Children's Play Area, Barbecue Area, Pet-Friendly Areas, Balcony, High-Speed Elevators, Business Center, Beach Access, Shared Workspace, Restaurants and Cafes, Supermarkets Nearby"
      }
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen pt-24 bg-gradient-platinum">
      {/* Page Header */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-headline font-luxury text-center text-primary mb-4">
          Premium <span className="text-gradient-gold">Properties</span>
        </h1>
        <p className="text-body-xl text-center text-muted-foreground max-w-3xl mx-auto font-serif">
          Exclusive luxury real estate opportunities in Dubai's most prestigious locations.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="container mx-auto px-6 mb-10">
        <div className="flex justify-center space-x-2 md:space-x-6 overflow-x-auto pb-2">
          <Button 
            variant={activeTab === "all" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("all")}
            className="min-w-[100px]"
          >
            All Properties
          </Button>
          <Button 
            variant={activeTab === "apartment" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("apartment")}
            className="min-w-[100px]"
          >
            Apartment
          </Button>
          <Button 
            variant={activeTab === "studio" ? "gold" : "outline"} 
            size="sm"
            onClick={() => setActiveTab("studio")}
            className="min-w-[100px]"
          >
            Studio
          </Button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl shadow-soft overflow-hidden border border-gold/10 hover:shadow-floating transition-all duration-300 group"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <Badge className="bg-white/90 text-primary hover:bg-white">
                    {project.location}
                  </Badge>
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-gold/90 text-white hover:bg-gold">
                    {project.pricesStartingFrom}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                
                {/* Property Details */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/><path d="M12 3v6"/></svg>
                    {project.bedrooms} Bed
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 14v1"/><path d="M9 8v1"/><path d="M15 14v1"/><path d="M15 8v1"/><path d="M9 12h6"/></svg>
                    {project.details.developer}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-gold hover:bg-gold/90 text-white"
                    onClick={() => setSelectedProject(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    View Details
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gold text-gold hover:bg-gold/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    Watchlist
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-title font-display text-center mb-12">Portfolio Highlights</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "$10B+", label: "Total Portfolio Value" },
              { metric: "25+", label: "Premium Properties" },
              { metric: "82%", label: "International Investors" },
              { metric: "97%", label: "Client Satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-light text-gradient-gold mb-2">
                  {item.metric}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-title font-display mb-4">Ready to Explore Investment Opportunities?</h2>
        <p className="text-body text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover exclusive opportunities in luxury real estate across Dubai's most prestigious developments.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            variant="gold" 
            size="lg" 
            className="min-w-[200px]" 
            asChild
          >
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="min-w-[200px]" 
            asChild
          >
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-background rounded-xl shadow-floating max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-80 md:h-96">
              <img 
                src={projects[selectedProject].image.replace('-thumb', '')} 
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              {/* Close Button */}
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute top-4 right-4 h-10 w-10 rounded-full p-0 bg-black/30 border-white/20 text-white hover:bg-black/50"
                onClick={() => setSelectedProject(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </Button>
              
              {/* Property Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{projects[selectedProject].title}</h2>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-gold/90 text-white">
                    {projects[selectedProject].pricesStartingFrom}
                  </Badge>
                  <Badge className="bg-white/90 text-primary">
                    {projects[selectedProject].location}
                  </Badge>
                  <Badge className="bg-primary/90 text-white">
                    {projects[selectedProject].category.charAt(0).toUpperCase() + projects[selectedProject].category.slice(1)}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              {/* Property Overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
                <div className="text-center p-3">
                  <div className="text-muted-foreground text-sm mb-1">Bedrooms</div>
                  <div className="font-semibold">{projects[selectedProject].bedrooms}</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-muted-foreground text-sm mb-1">Developer</div>
                  <div className="font-semibold">{projects[selectedProject].details.developer}</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-muted-foreground text-sm mb-1">Payment Plan</div>
                  <div className="font-semibold">{projects[selectedProject].details.paymentPlan}</div>
                </div>
                <div className="text-center p-3">
                  <div className="text-muted-foreground text-sm mb-1">Completion</div>
                  <div className="font-semibold">{new Date(projects[selectedProject].details.completionDate).toLocaleDateString('en-GB', {year: 'numeric', month: 'short'})}</div>
                </div>
              </div>
              
              {/* Property Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
                  Property Description
                </h3>
                <p className="whitespace-pre-line">{projects[selectedProject].details.details}</p>
              </div>
              
              {/* Why Invest Section */}
              {projects[selectedProject].details.whyInvest && (
                <div className="mb-8 bg-gold/5 p-6 rounded-lg border border-gold/10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M12 9v6"/></svg>
                    Why Invest
                  </h3>
                  <div className="space-y-4">
                    {projects[selectedProject].details.whyInvest.map((reason, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold mr-3 mt-0.5 flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="flex-1">{reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Property Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {projects[selectedProject].details.propertyType && (
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      Property Type
                    </h3>
                    <p>{projects[selectedProject].details.propertyType}</p>
                  </div>
                )}
                
                {projects[selectedProject].details.propertyView && (
                  <div className="border-t pt-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      Property View
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].details.propertyView.split(', ').map((view, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-50">
                          {view}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {projects[selectedProject].details.propertyAmenities && (
                  <div className="border-t pt-4 md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-gold"><path d="M20 22h-2"/><path d="M20 15v7"/><path d="M4 22h16"/><path d="M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4"/><path d="m2 15 10-10 10 10"/><path d="M12 12v3"/></svg>
                      Amenities
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].details.propertyAmenities.split(', ').map((amenity, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-50">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
                <Button 
                  variant="gold"
                  size="lg"
                  className="flex-1"
                  asChild
                >
                  <Link to="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Schedule Viewing
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-gold text-gold hover:bg-gold/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  Download Brochure
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="sm:max-w-[50px] h-12 p-0 flex items-center justify-center border-gold text-gold hover:bg-gold/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;