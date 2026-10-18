export type HerbalifeCategory =
  | 'All'
  | 'Weight Management'
  | 'Protein Nutrition'
  | 'Tea & Beverages'
  | 'Aloe Beverages'
  | 'Shake Preparation'
  | 'Daily Nutrition'
  | 'Skin & Body Care';

export interface HerbalifeProduct {
  id: string;
  slug: string;
  name: string;
  category: Exclude<HerbalifeCategory, 'All'>;
  tag: string;
  price: string;
  mrp: string;
  rating: number;
  reviewCount: number;
  servingInfo: string;
  flavors?: string[];
  shortDesc: string;
  fullDesc: string;
  posterBullets: string[];
  benefits: string[];
  howToUse: string[];
  nutritionalHighlights: string[];
  ingredientsSummary: string;
  isBestSeller?: boolean;
  featured?: boolean;
  coachNote?: string;
  subType?: string;
}

export const HERBALIFE_CATEGORIES: HerbalifeCategory[] = [
  'All',
  'Weight Management',
  'Protein Nutrition',
  'Tea & Beverages',
  'Aloe Beverages',
  'Shake Preparation',
  'Daily Nutrition',
  'Skin & Body Care',
];

export const HERBALIFE_PRODUCTS: HerbalifeProduct[] = [
  // 1. Weight Management: Formula 1 Nutritional Shake Mix
  {
    id: 'f1-shake',
    slug: 'formula-1-nutritional-shake-mix',
    name: 'Formula 1 Nutritional Shake Mix',
    category: 'Weight Management',
    tag: 'Flagship Meal Replacement • World #1',
    price: '₹2,145',
    mrp: '₹2,385',
    rating: 4.9,
    reviewCount: 342,
    servingInfo: '500g (approx. 20-22 servings)',
    isBestSeller: true,
    featured: true,
    flavors: ['French Vanilla', 'Dutch Chocolate', 'Mango', 'Strawberry', 'Kulfi', 'Rose Kheer', 'Orange Cream', 'Banana Caramel'],
    shortDesc: 'Helps you manage weight, provides high-quality protein, rich in essential vitamins & minerals, and available in multiple delicious flavours.',
    fullDesc: 'Herbalife Formula 1 Nutritional Shake Mix is the global cornerstone of healthy weight management. Each calorie-controlled serving delivers high-quality isolated soy protein, 18+ essential micronutrients, and dietary fiber. It provides balanced nutrition that leaves you satiated for hours while keeping daily calorie intake strictly aligned with your weight goals.',
    posterBullets: [
      'Helps you manage weight',
      'Provides high-quality protein',
      'Rich in vitamins & minerals',
      'Multiple delicious flavours (Vanilla, Chocolate, Mango, Strawberry & more)'
    ],
    benefits: [
      'Calorie-controlled nutrition (~200-220 kcal when mixed with ShakeMate or skimmed milk)',
      '9 grams of high-grade soy protein per serving to preserve lean muscle mass',
      'Provides over 18 essential vitamins and minerals including Vitamin A, C, E, Calcium, and Iron',
      'Low Glycemic Index (GI) to prevent blood sugar spikes and mid-day energy crashes',
      'Available in 8 Indian-inspired and classic global gourmet flavors'
    ],
    howToUse: [
      'For Weight Loss: Replace two meals a day (breakfast and dinner) with Formula 1 shake. Eat one balanced colorful meal for lunch.',
      'For Weight Maintenance: Replace one meal a day (breakfast) with a shake to maintain peak energy and nutrition.',
      'For Weight Gain: Enjoy 2-3 shakes daily alongside your standard healthy meals.',
      'Preparation: Blend 25g (approx. 3 level scoops) with 300ml of water and 2 scoops of ShakeMate or Personalized Protein Powder.'
    ],
    nutritionalHighlights: [
      '9g High Quality Protein per scoop',
      '3g Dietary Fiber',
      '18+ Vitamins & Essential Minerals',
      'Zero cholesterol and trans fats',
      'Low Glycemic Index formulation'
    ],
    ingredientsSummary: 'Soy protein isolate, fructose, soy lecithin, oat fiber, canola oil, inulin, vitamin & mineral premix, natural and nature-identical flavoring.',
    coachNote: 'Formula 1 is the heart of every client transformation at HS Wellness Coach. Pair it with ShakeMate and Afresh tea for optimal metabolic fat loss.'
  },

  // 2. Protein Nutrition: Personalized Protein Powder
  {
    id: 'ppp-protein',
    slug: 'personalized-protein-powder',
    name: 'Personalized Protein Powder (Formula 3)',
    category: 'Protein Nutrition',
    tag: 'Lean Muscle Support • High-Quality Protein',
    price: '₹1,420',
    mrp: '₹1,595',
    rating: 4.8,
    reviewCount: 215,
    servingInfo: '400g / 200g tub',
    isBestSeller: true,
    featured: true,
    flavors: ['Unflavored (Seamlessly blends into shakes, curries, dals & soups)'],
    shortDesc: 'Supports lean muscle mass, high-quality protein blend, and easy to mix into any shake or everyday meal.',
    fullDesc: 'Personalized Protein Powder (Formula 3) is a customizable, fat-free protein supplement that supplies your body with essential amino acids. With the highest protein quality score possible (PDCAAS 1.0), it helps keep hunger pangs at bay between meals and safeguards metabolic muscle tissue during calorie-restricted programs.',
    posterBullets: [
      'Supports lean muscle mass',
      'High-quality protein (Soy & Whey blend)',
      'Easy to mix into shakes, oats, or home cooked meals'
    ],
    benefits: [
      '5 grams of pure protein per 6g scoop with virtually zero carbohydrates or fat',
      'Blend of fast-absorbing whey and sustained-release soy protein isolate',
      'Unflavored formula allows effortless mixing in shakes, oatmeal, rotis, or dal',
      'Helps maintain metabolic rate by preserving lean muscle during weight loss',
      'Enhances satiety so you feel full and satisfied for longer'
    ],
    howToUse: [
      'Add 1 to 2 scoops (6g - 12g) to your Formula 1 Nutritional Shake Mix.',
      'Can also be stirred into soups, yogurt, gravies, or kneaded into chapati dough.',
      'Take 1 to 3 times daily based on your personalized protein target.'
    ],
    nutritionalHighlights: [
      '5g Protein per 6g serving',
      '0g Fat & 0g Added Sugar',
      'Only 22 kcal per scoop',
      'PDCAAS = 1.0 Highest Protein Quality'
    ],
    ingredientsSummary: 'Soy protein isolate, whey protein concentrate, starch, anti-caking agent (silicon dioxide).',
    coachNote: 'Your protein target is unique to your weight and activity level. As your coach, I calculate your exact daily scoop count to prevent loose skin and preserve muscle tone.'
  },

  // 3. Tea & Beverages: Herbalife Tea Concentrate / Afresh
  {
    id: 'tea-concentrate',
    slug: 'herbalife-tea-concentrate',
    name: 'Herbalife Tea Concentrate (Afresh Energy Drink)',
    category: 'Tea & Beverages',
    tag: 'Metabolism Booster • Natural Antioxidants',
    price: '₹795',
    mrp: '₹890',
    rating: 4.9,
    reviewCount: 289,
    servingInfo: '50g container (approx. 50 servings)',
    isBestSeller: true,
    featured: true,
    flavors: ['Lemon', 'Elaichi (Cardamom)', 'Peach', 'Ginger', 'Cinnamon', 'Tulsi'],
    shortDesc: 'A refreshing tea blend that supports metabolism and is available in a variety of delicious flavours. Low calorie replacement for tea and coffee.',
    fullDesc: 'Herbalife Tea Concentrate (widely known in India as Afresh) is a refreshing, antioxidant-rich tea blend formulated with fine Orange Pekoe extract, green tea extract, and natural caffeine. Consumed hot or chilled, it invigorates mental alertness, speeds up metabolic rate, and supports the body\'s natural fat burning process with under 4 calories per cup.',
    posterBullets: [
      'Refreshing herbal tea blend',
      'Supports metabolism and natural thermogenesis',
      'Available in a variety of flavours (Lemon, Elaichi, Peach, Cinnamon, Ginger)'
    ],
    benefits: [
      'Only 4 calories per serving — the ultimate substitute for sugar-laden milk tea and coffee',
      'Rich in polyphenols and antioxidants to combat cellular oxidative stress',
      'Natural caffeine extract sharpens mental clarity and alertness',
      'Supports body thermogenesis and metabolic rate',
      'Can be enjoyed piping hot or chilled over ice throughout the day'
    ],
    howToUse: [
      'Mix 1g (approx. 1/2 teaspoon) of Tea Concentrate powder into 160ml - 200ml of hot or cold water.',
      'Consume 2 to 3 times a day (morning wakeup, mid-morning, or afternoon slump).',
      'Do not consume right before bedtime to ensure deep restful sleep.'
    ],
    nutritionalHighlights: [
      '< 4 Calories per serving',
      '~40mg Natural Caffeine from tea extracts',
      'Zero added sugars',
      'Antioxidant rich Orange Pekoe & Green Tea'
    ],
    ingredientsSummary: 'Maltodextrin, Orange Pekoe extract, Green Tea extract, natural caffeine powder, acidity regulator (citric acid), natural flavor extracts.',
    coachNote: 'Clients who swap their 2-3 daily sugary chais for Herbalife Tea Concentrate Lemon or Elaichi typically drop 1-2 kg in the first month purely from reduced sugar and elevated metabolism!'
  },

  // 4. Aloe Beverages: Herbal Aloe Concentrate
  {
    id: 'aloe-concentrate',
    slug: 'herbal-aloe-concentrate',
    name: 'Herbal Aloe Concentrate',
    category: 'Aloe Beverages',
    tag: 'Digestive Soother • Natural Aloe Vera',
    price: '₹2,425',
    mrp: '₹2,695',
    rating: 4.8,
    reviewCount: 164,
    servingInfo: 'Net Volume: 472ml / 500ml (approx. 31-33 servings)',
    isBestSeller: true,
    featured: true,
    flavors: ['Original (Natural Aloe)', 'Mango', 'Mandarin'],
    shortDesc: 'Soothes & hydrates the digestive tract, supports digestive health, and is crafted from premium purified natural aloe vera.',
    fullDesc: 'Herbal Aloe Concentrate is made from whole-leaf aloe vera processed with strict purification standards to remove bitter aloin. It acts as an internal gentle cleanser that hydrates the gut lining, soothes occasional acid discomfort, and prepares your intestinal villi to absorb maximum vitamins and minerals from your daily meals.',
    posterBullets: [
      'Soothes & hydrates the digestive system',
      'Supports optimal digestive health and gut motility',
      'Crafted with premium natural aloe vera leaf extract'
    ],
    benefits: [
      'Soothes the stomach and intestinal lining to ease digestion',
      'Supports healthy gut bacteria balance and nutrient bioavailability',
      'Zero sugar, zero guilt alternative to sodas and sweetened juices',
      'Promotes internal hydration and healthy skin radiance',
      'Infused with natural chamomile and lemon extracts for calming relief'
    ],
    howToUse: [
      'Mix 3 capfuls (15ml) into 120ml to 240ml of cold or ambient water.',
      'Drink first thing in the morning on an empty stomach, or sip throughout the day.',
      'Shake well before each use and refrigerate after opening.'
    ],
    nutritionalHighlights: [
      '< 5 Calories per serving',
      'Purified Aloe Vera Leaf Extract',
      'Zero Added Sugar',
      'Includes Chamomile herbal extract'
    ],
    ingredientsSummary: 'Purified aloe vera leaf juice concentrate, water, chamomile flower extract, natural citric acid, potassium sorbate, stevia/sucralose.',
    coachNote: 'If you suffer from morning bloating, sluggish digestion, or acidity, adding 3 capfuls of Aloe to your morning warm water is like a gentle internal shower for your gut.'
  },

  // 5. Shake Preparation: ShakeMate
  {
    id: 'shakemate-protein',
    slug: 'shakemate-protein-blend',
    name: 'Herbalife ShakeMate (Protein Blend)',
    category: 'Shake Preparation',
    tag: 'Shake Preparation • Essential Nutrients',
    price: '₹850',
    mrp: '₹950',
    rating: 4.9,
    reviewCount: 210,
    servingInfo: 'Net WT: 500g canister',
    isBestSeller: true,
    featured: true,
    flavors: ['Natural Milk Flavor (Neutral, enhances all Formula 1 flavors)'],
    shortDesc: 'Adds essential nutrients, great for healthy shakes, and helps you stay full for longer without needing dairy or skimmed milk.',
    fullDesc: 'Herbalife ShakeMate is a nutritious milk and soy protein blend specifically formulated to prepare delicious, rich, and creamy Formula 1 Nutritional Shakes using pure water. It eliminates the need to source skimmed milk or dairy, providing 10.75g of high-quality protein per 2 scoops, along with Calcium and Vitamin D to support bone strength.',
    posterBullets: [
      'Adds essential nutrients and high-grade protein',
      'Great for preparing smooth, creamy healthy shakes with plain water',
      'Helps you stay full for longer and curbs mid-meal hunger'
    ],
    benefits: [
      'Perfect shake companion: eliminates the hassle and calories of finding fresh skimmed milk',
      'Delivers 10.75g of combined milk and soy protein per serving (2 scoops)',
      'Enriched with Calcium and Vitamin D for bone health and muscle function',
      'Smooth, creamy mouthfeel that elevates the taste of any Formula 1 flavor',
      'Low lactose content, making shakes easier on sensitive stomachs'
    ],
    howToUse: [
      'Take 300ml of ambient or cold water in a shaker or blender cup.',
      'Add 3 scoops of Formula 1 Nutritional Shake Mix.',
      'Add 2 scoops (approx. 24g) of ShakeMate.',
      'Blend or shake vigorously for 30 seconds until rich and frothy. Enjoy immediately!'
    ],
    nutritionalHighlights: [
      '10.75g High Quality Protein per 24g serving',
      'Rich in Calcium (supports strong bones)',
      'Fortified with Vitamin D',
      'Only ~90 Calories per serving'
    ],
    ingredientsSummary: 'Milk solids, soy protein isolate, calcium caseinate, maltodextrin, minerals (calcium carbonate), vitamins (cholecalciferol - Vitamin D3), thickeners.',
    coachNote: 'ShakeMate is the best invention for anyone on the go or living in apartments where boiling and skimming milk is tedious. Just add water, Formula 1, and ShakeMate for the perfect creamy shake!'
  },

  // 6. Daily Nutrition: Herbalife N-R-G Tablets
  {
    id: 'herbalife-nrg',
    slug: 'herbalife-nrg-tablets',
    name: 'Herbalife N-R-G (Nature\'s Raw Guarana)',
    category: 'Daily Nutrition',
    tag: 'Daily Nutrition • Mental Alertness',
    price: '₹840',
    mrp: '₹935',
    rating: 4.8,
    reviewCount: 138,
    servingInfo: '60 Tablets bottle',
    isBestSeller: false,
    featured: true,
    shortDesc: 'Supports immunity, boosts energy, and helps overall wellness with natural Guarana seed extract for sustained mental alertness.',
    fullDesc: 'Herbalife N-R-G Tablets contain Nature\'s Raw Guarana seed extract, an ancient Amazonian botanical prized for its gentle, sustained caffeine release. Unlike sharp caffeine spikes that cause jitters and crashes, N-R-G provides a smooth, gradual lift in mental focus, concentration, and physical endurance throughout demanding work days.',
    posterBullets: [
      'Supports immunity and cellular vitality',
      'Boosts natural energy and mental alertness',
      'Helps overall wellness and reduces fatigue'
    ],
    benefits: [
      'Contains natural Guarana seed extract for gentle, steady mental alertness',
      'Helps reduce mental fatigue during long working hours or intense study sessions',
      'Boosts daily energy levels without the nervous jitters of commercial energy drinks',
      'Convenient travel-friendly tablet form'
    ],
    howToUse: [
      'Take 1 tablet twice daily with water, preferably in the morning and early afternoon.',
      'Do not take immediately before bedtime.'
    ],
    nutritionalHighlights: [
      'Guarana Seed Extract (Paullinia cupana)',
      'Natural slow-release caffeine',
      'Zero calories and zero sugar',
      'Gentle on the stomach'
    ],
    ingredientsSummary: 'Guarana seed powder extract, calcium carbonate, microcrystalline cellulose, magnesium stearate, botanical binders.',
    coachNote: 'If you have afternoon brain fog or commute long distances, N-R-G tablets give you clear-headed stamina without coffee acidity.'
  },

  // 6. Daily Nutrition: Cell-U-Loss
  {
    id: 'cell-u-loss',
    slug: 'cell-u-loss-tablets',
    name: 'Herbalife Cell-U-Loss®',
    category: 'Daily Nutrition',
    tag: 'Fluid Balance • Corn Silk Extract',
    price: '₹1,580',
    mrp: '₹1,750',
    rating: 4.8,
    reviewCount: 172,
    servingInfo: '90 Tablets bottle',
    isBestSeller: true,
    featured: true,
    shortDesc: 'Supports healthy fluid balance, reduces temporary water retention and puffiness, and supports the appearance of smooth, healthy skin.',
    fullDesc: 'Cell-U-Loss is formulated with Corn Silk extract, dandelion, parsley, and asparagus extracts, along with essential electrolyte minerals (Potassium and Magnesium). It assists your body\'s natural elimination of excess water and trapped subcutaneous fluids, reducing the puffy look around the face, waist, and ankles while maintaining proper electrolyte equilibrium.',
    posterBullets: [
      'Supports healthy fluid balance and normal water elimination',
      'Formulated with natural Corn Silk extract and minerals',
      'Helps overall wellness and supports skin appearance'
    ],
    benefits: [
      'Helps eliminate excess subcutaneous water retention for sharper body definition',
      'Corn silk extract acts as a gentle, natural herbal diuretic',
      'Replenishes vital minerals (Potassium & Magnesium) to prevent electrolyte depletion',
      'Helps reduce water-weight bloating around the abdomen and ankles',
      'Supports healthy urinary tract function'
    ],
    howToUse: [
      'Take 1 tablet three times a day with meals and plenty of water.',
      'Stay well-hydrated throughout the day (at least 3 liters of water).'
    ],
    nutritionalHighlights: [
      'Natural Corn Silk (Zea mays) Extract',
      'Enriched with Potassium & Magnesium electrolytes',
      'Parsley & Dandelion botanical blend',
      'Zero synthetic stimulants'
    ],
    ingredientsSummary: 'Corn silk extract, potassium chloride, magnesium oxide, dandelion extract, parsley leaf powder, microcrystalline cellulose.',
    coachNote: 'When starting weight loss, excess sodium often locks water in tissues. Cell-U-Loss helps release trapped water weight so you see inch loss much faster!'
  },

  // 6. Daily Nutrition: Vitamin C Plus
  {
    id: 'vitamin-c-plus',
    slug: 'vitamin-c-plus-tablets',
    name: 'Herbalife Vitamin C Plus',
    category: 'Daily Nutrition',
    tag: 'Immune Defense • Antioxidant Shield',
    price: '₹980',
    mrp: '₹1,090',
    rating: 4.9,
    reviewCount: 115,
    servingInfo: '60 Tablets bottle',
    isBestSeller: false,
    featured: true,
    shortDesc: 'Supports immunity, boosts cellular energy, and delivers potent antioxidant protection against seasonal infections and daily oxidative stress.',
    fullDesc: 'Herbalife Vitamin C Plus provides high-potency Vitamin C reinforced with citrus bioflavonoids for superior biological absorption. Vitamin C is a critical water-soluble antioxidant that cannot be manufactured by the human body. It strengthens white blood cell defense, accelerates tissue recovery, and powers natural collagen production.',
    posterBullets: [
      'Supports immunity and white blood cell function',
      'Boosts cellular energy and tissue repair',
      'Helps overall wellness and skin defense'
    ],
    benefits: [
      'Powerful antioxidant defense against daily pollution and free radical damage',
      'Fortifies the immune system to resist seasonal colds and coughs',
      'Enhances dietary iron absorption for better red blood cell vitality',
      'Essential co-factor for natural dermal collagen synthesis and wound healing'
    ],
    howToUse: [
      'Take 1 tablet once or twice daily with your meals.'
    ],
    nutritionalHighlights: [
      'High Potency Vitamin C (Ascorbic acid)',
      'Citrus Bioflavonoid Complex for maximum absorption',
      '100% Vegetarian formula',
      'Gentle on the stomach'
    ],
    ingredientsSummary: 'Ascorbic acid, citrus bioflavonoids, rose hips extract, calcium carbonate, vegetable coating.',
    coachNote: 'Vitamin C Plus is a non-negotiable daily shield, especially for clients who work in air-conditioned offices or travel frequently.'
  },

  // 6. Daily Nutrition: Multivitamin for Women
  {
    id: 'multivitamin-women',
    slug: 'multivitamin-for-women',
    name: 'Herbalife Multivitamin for Women (Formula 2)',
    category: 'Daily Nutrition',
    tag: 'Tailored for Women • Bone & Hormone Support',
    price: '₹1,475',
    mrp: '₹1,640',
    rating: 4.9,
    reviewCount: 224,
    servingInfo: '90 Tablets bottle (30-day supply)',
    isBestSeller: true,
    featured: true,
    shortDesc: 'Supports immunity, boosts energy, and helps overall wellness with 24 micronutrients specifically calibrated for women\'s physiological needs.',
    fullDesc: 'Herbalife Multivitamin for Women delivers comprehensive daily micronutrient insurance formulated specifically for female biological demands. It delivers elevated levels of Calcium and Vitamin D for bone density, Iron and Folic Acid for blood health and monthly hormonal cycles, along with Vitamin B-complex and Zinc for sustained vitality.',
    posterBullets: [
      'Supports immunity and hormonal balance',
      'Boosts daily energy levels and combats fatigue',
      'Helps overall wellness, bone density, and hair & skin strength'
    ],
    benefits: [
      '24 essential vitamins and minerals tailored for female wellness',
      'Calcium and Vitamin D support bone density and prevent osteopenia',
      'Iron and Folic Acid replenish blood health and combat lethargy',
      'Biotin, Zinc, and Vitamin C nourish hair roots, strong nails, and radiant skin',
      'Antioxidant vitamins A, C, and E fight cellular aging'
    ],
    howToUse: [
      'Take 1 tablet three times a day with meals (breakfast, lunch, dinner).'
    ],
    nutritionalHighlights: [
      '24 Essential Micronutrients',
      'High Calcium & Vitamin D3 for bone support',
      'Bioavailable Iron & Folic Acid',
      'Tailored for women of all ages'
    ],
    ingredientsSummary: 'Calcium carbonate, ascorbic acid, ferrous fumarate (iron), zinc gluconate, cholecalciferol (Vit D3), folic acid, biotin, niacinamide.',
    coachNote: 'Over 70% of Indian women have sub-clinical iron or calcium deficiencies. This formula ensures your hair doesn\'t shed and your bones remain dense while losing weight.'
  },

  // 7. Skin & Body Care: Vritilife Facial Cleanser
  {
    id: 'vritilife-cleanser',
    slug: 'vritilife-facial-cleanser',
    name: 'Vritilife Facial Cleanser (Gentle & Refreshing)',
    category: 'Skin & Body Care',
    tag: 'Ayurvedic Botanical • Gentle Purifying',
    price: '₹750',
    mrp: '₹840',
    rating: 4.8,
    reviewCount: 86,
    servingInfo: '100 ml bottle',
    subType: 'Cleanser',
    isBestSeller: false,
    featured: true,
    shortDesc: 'A gentle, refreshing botanical facial cleanser that lifts dirt, excess sebum, and impurities without stripping the skin\'s natural moisture barrier.',
    fullDesc: 'Part of the premium Vritilife Skincare Range by Herbalife, this Facial Cleanser harnesses ancient Ayurvedic botanical wisdom merged with modern dermatological science. Its soap-free, pH-balanced formula purifies pores, removes daily urban grime, and leaves skin revitalized and calm.',
    posterBullets: [
      'Gentle & Refreshing daily cleanse',
      'Enriched with traditional Ayurvedic herbs',
      'Soap-free, non-drying formula preserves skin moisture barrier'
    ],
    benefits: [
      'Deeply clears clogged pores without stripping moisture',
      'Balances natural skin oil production',
      'Infused with calming botanical herbal extracts',
      'Prepares skin to absorb toners and active serums'
    ],
    howToUse: [
      'Dampen face and neck with water.',
      'Dispense a coin-sized amount onto palms, lather gently, and massage in circular upward motions.',
      'Rinse thoroughly with lukewarm water and pat dry.'
    ],
    nutritionalHighlights: [
      'Soap-free & Sulphate-free formula',
      'Dermatologically tested',
      'Ayurvedic botanical extracts',
      'Suitable for all skin types'
    ],
    ingredientsSummary: 'Aqua, botanical extracts, coco-glucoside, glycerin, aloe vera extract, green tea extract, mild natural preservatives.',
    coachNote: 'Outer nutrition is just as important as inner nutrition. Pair this cleanser with the Vritilife Toner and Serum for a clean, clear glow.'
  },

  // 7. Skin & Body Care: Vritilife Toner
  {
    id: 'vritilife-toner',
    slug: 'vritilife-balancing-toner',
    name: 'Vritilife Toner (Balancing & Soothing)',
    category: 'Skin & Body Care',
    tag: 'Pore Refining • Calming Hydration',
    price: '₹850',
    mrp: '₹950',
    rating: 4.8,
    reviewCount: 74,
    servingInfo: '100 ml bottle',
    subType: 'Toner',
    isBestSeller: false,
    featured: false,
    shortDesc: 'A balancing and soothing alcohol-free facial toner that tightens pores, restores skin pH, and drenches the face with botanical hydration.',
    fullDesc: 'The second step in the Vritilife 4-step ritual, this Balancing & Soothing Toner re-balances skin after cleansing. Alcohol-free and packed with botanical floral waters, it calms surface redness, refines the appearance of pores, and prepares skin cells for deep serum absorption.',
    posterBullets: [
      'Balancing & Soothing formulation',
      'Restores optimal epidermal pH after cleansing',
      'Alcohol-free, minimizes pores and calms redness'
    ],
    benefits: [
      'Restores healthy skin pH (5.5) instantly',
      'Reduces visible pore size and smooths skin texture',
      'Alcohol-free formula causes zero stinging or dryness',
      'Deeply primes skin to multiply serum penetration'
    ],
    howToUse: [
      'After cleansing with Vritilife Facial Cleanser, spray directly onto face or apply with a cotton pad.',
      'Gently press into skin until fully absorbed. Use morning and night.'
    ],
    nutritionalHighlights: [
      '100% Alcohol-Free',
      'Enriched with botanical rose and witch hazel waters',
      'Antioxidant rich herbal infusions'
    ],
    ingredientsSummary: 'Rosa damascena water, witch hazel extract, glycerin, niacinamide, panthenol (Pro-Vitamin B5), botanical soothing agents.',
    coachNote: 'Never skip toner! It locks in hydration and ensures your expensive serum isn\'t wasted on dry, non-absorbent skin.'
  },

  // 7. Skin & Body Care: Vritilife Serum
  {
    id: 'vritilife-serum',
    slug: 'vritilife-radiance-repair-serum',
    name: 'Vritilife Serum (Radiance & Repair)',
    category: 'Skin & Body Care',
    tag: 'Concentrated Actives • Youthful Radiance',
    price: '₹1,650',
    mrp: '₹1,850',
    rating: 4.9,
    reviewCount: 112,
    servingInfo: '30 ml dropper bottle',
    subType: 'Serum',
    isBestSeller: true,
    featured: true,
    shortDesc: 'A concentrated radiance and repair serum delivering botanical antioxidants and bio-actives deep into the dermal layers for an even, lit-from-within glow.',
    fullDesc: 'The powerhouse treatment of the Vritilife Skincare Range. Radiance & Repair Serum delivers micro-encapsulated botanical extracts and Vitamin C straight to the deeper skin layers. It targets hyperpigmentation, uneven sun spots, fine dehydration lines, and cellular dullness, leaving your complexion luminous and velvety.',
    posterBullets: [
      'Radiance & Repair concentrated elixir',
      'Targets dullness, dark spots, and fine lines',
      'Lightweight, fast-absorbing botanical formula'
    ],
    benefits: [
      'Visibly brightens skin tone and fades blemishes within 4 weeks',
      'Fights free radical damage caused by UV rays and pollution',
      'Accelerates natural cellular skin renewal',
      'Lightweight, non-greasy texture that melts effortlessly into skin'
    ],
    howToUse: [
      'Dispense 3-4 drops onto cleansed and toned face and neck.',
      'Gently pat and press into skin using fingertips. Follow with Vritilife Moisturizer.'
    ],
    nutritionalHighlights: [
      'Concentrated Botanical Actives',
      'Bio-available Vitamin C & Niacinamide',
      'Zero mineral oils or parabens',
      'Clinically tested for radiant glow'
    ],
    ingredientsSummary: 'Botanical extracts, hyaluronic acid, ascorbic acid glucoside (Vit C), licorice root extract, niacinamide, kumkumadi oil essences.',
    coachNote: 'A few drops of this serum morning and evening completely changes skin texture within 2 weeks — especially when combined with good hydration!'
  },

  // 7. Skin & Body Care: Vritilife Moisturizer
  {
    id: 'vritilife-moisturizer',
    slug: 'vritilife-hydration-glow-moisturizer',
    name: 'Vritilife Moisturizer (Hydration & Glow)',
    category: 'Skin & Body Care',
    tag: '24H Moisture • Luminous Glow',
    price: '₹1,150',
    mrp: '₹1,290',
    rating: 4.9,
    reviewCount: 98,
    servingInfo: '50 g jar',
    subType: 'Moisturizer',
    isBestSeller: true,
    featured: true,
    shortDesc: 'A luxurious hydration and glow moisturizer that seals in deep moisture, fortifies the skin barrier, and gives a radiant, non-sticky finish all day.',
    fullDesc: 'The finishing seal of the Vritilife Ayurvedic ritual. Hydration & Glow Moisturizer blends deeply nourishing plant lipids with herbal extracts to lock in 24-hour hydration. It shields against environmental moisture loss, softens fine lines, and imparts a dewy, supple radiance without any greasy heaviness.',
    posterBullets: [
      'Hydration & Glow 24-hour moisture lock',
      'Fortifies skin barrier against environmental stressors',
      'Silky, non-comedogenic texture for supple dewiness'
    ],
    benefits: [
      'Provides 24-hour long-lasting hydration to prevent moisture evaporation',
      'Restores skin elasticity and firmness',
      'Imparts a natural, healthy lit-from-within glow',
      'Non-comedogenic: will not clog pores or cause breakouts'
    ],
    howToUse: [
      'Take a small amount onto fingertips.',
      'Dot across forehead, cheeks, nose, and chin, then smooth upwards and outwards over face and neck.',
      'Use every morning and night after Vritilife Serum.'
    ],
    nutritionalHighlights: [
      '24-Hour Clinically Proven Hydration',
      'Infused with Ayurvedic Shea & Botanical lipids',
      'Paraben-free and cruelty-free'
    ],
    ingredientsSummary: 'Aqua, shea butter, squalane, aloe vera extract, gotu kola (centella asiatica) extract, tocopherol (Vit E), natural botanical fragrance.',
    coachNote: 'Lock in your serum with this moisturizer. It keeps your skin looking bouncy, soft, and glowing through both summer humidity and winter dryness.'
  }
];

export const HERBALIFE_COMBOS = [
  {
    id: 'weight-loss-trio',
    title: 'The Famous Fat-Loss Trio Stack',
    subtitle: 'The #1 Most Popular Protocol for Fast, Sustainable Weight Loss',
    products: ['Formula 1 Shake (500g)', 'Herbalife Tea Concentrate (50g)', 'Personalized Protein Powder (400g)'],
    price: '₹4,360',
    originalPrice: '₹4,870',
    saveText: 'Save ₹510',
    desc: 'The gold-standard trio recommended by coaches worldwide. Formula 1 replaces breakfast & dinner with balanced calories, Protein Powder keeps you full and protects lean muscle, and Tea Concentrate boosts your metabolism and crushes fatigue.',
    badge: 'Coach Recommendation ⭐',
    popularFor: 'Weight loss, inch loss, body recomposition'
  },
  {
    id: 'ultimate-transformation-kit',
    title: '30-Day Ultimate Transformation Kit',
    subtitle: 'Full Metabolic Reset & Total Body Wellness',
    products: ['Formula 1 Shake (x2)', 'Herbalife Tea Concentrate', 'Personalized Protein Powder', 'Herbal Aloe Concentrate', 'ShakeMate Protein Blend'],
    price: '₹8,980',
    originalPrice: '₹10,120',
    saveText: 'Save ₹1,140',
    desc: 'The all-in-one comprehensive protocol for accelerated results. Includes gut-cleansing Aloe, dual Formula 1 shakes for a full month, ShakeMate for creamy water-based shakes, and metabolic enhancers.',
    badge: 'Maximum Results 🚀',
    popularFor: 'Rapid weight loss, digestion overhaul, immune surge'
  },
  {
    id: 'vritilife-skincare-ritual',
    title: 'Vritilife 4-Step Complete Skincare Regimen',
    subtitle: 'Cleanser + Toner + Serum + Moisturizer for Radiant Glowing Skin',
    products: ['Vritilife Facial Cleanser (100ml)', 'Vritilife Toner (100ml)', 'Vritilife Serum (30ml)', 'Vritilife Moisturizer (50g)'],
    price: '₹3,950',
    originalPrice: '₹4,430',
    saveText: 'Save ₹480',
    desc: 'The complete Ayurvedic botanical skincare ritual by Herbalife. Cleanse, balance, repair, and hydrate for smooth, glowing, youthful skin from the outside in.',
    badge: 'Outer Nutrition ✨',
    popularFor: 'Glowing skin, anti-aging, even skin tone, deep hydration'
  }
];
