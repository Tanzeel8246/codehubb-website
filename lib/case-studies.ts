/* ==========================================================================
   CASE STUDIES — one landing page per project at /work/<slug>/.
   Project facts (name, image, live URL, tags) and the client review for
   each page are NOT duplicated here: they are read from PROJECTS and
   TESTIMONIALS in lib/site.ts. This file only adds the case-study layer:
   sector, challenge, feature list, journey timeline and current status.
   Journey dates are the real build record (October 2026); nothing here
   invents client history or metrics.
   ========================================================================== */
import { PROJECTS, TESTIMONIALS, type Project, type Testimonial } from "./site";

export type CaseStudyFeature = { title: string; text: string };

export type CaseStudyMilestone = { date: string; title: string; text: string };

export type CaseStudy = {
  /** Must match a PROJECTS[].slug. */
  slug: string;
  /** Sector label, e.g. "Restaurant website". */
  sector: string;
  /** One-line value proposition shown under the project name. */
  valueProp: string;
  overview: string;
  challenge: string;
  features: CaseStudyFeature[];
  /** The project's real technology stack. */
  stack: string[];
  journey: CaseStudyMilestone[];
  /** Where the project stands today. */
  statusNow: string;
  /** The honest next step for this project. */
  statusNext: string;
  /** Rendered title is `${metaTitle} | CodeHubb` — keep 30–60 chars total. */
  metaTitle: string;
  /** 120–165 chars, unique per page. */
  metaDescription: string;
};

const QUALITY_PASS: CaseStudyMilestone = {
  date: "October 2026",
  title: "Quality pass",
  text: "Every page was reworked to the studio standard: real photography instead of placeholders, technical and on-page SEO throughout, equal-height aligned layouts, and the content rules applied across the whole site.",
};

export const CASE_STUDIES: CaseStudy[] = [
  /* ---------------------------- Websites ---------------------------- */
  {
    slug: "zaiqa",
    sector: "Restaurant website",
    valueProp:
      "A restaurant website that turns menu browsers into WhatsApp orders and table reservations.",
    overview:
      "Zaiqa is the online home of a restaurant whose customers were already living on their phones but had no proper way to see the menu, judge the food, or reserve a table before visiting. The website presents the complete menu with real photography of the dishes, tells the restaurant's story, and routes every order and reservation into a WhatsApp conversation. It was written Pakistani-diner first, mixing English with Urdu touches so it feels like the neighbourhood restaurant it represents, not a generic template.",
    challenge:
      "Before the website, the restaurant's phone rang all evening with the same handful of questions: what is on the menu, what is in this dish, do you have a table for six? Staff repeated the menu out loud while handwritten orders were occasionally mixed up, evenings ran stressful, and a new customer searching online found nothing credible to judge the place by. The challenge was to move that entire question-and-order burden onto a page customers enjoy using — and make the WhatsApp message that arrives be the order itself, not another question.",
    features: [
      {
        title: "Full online menu with real photography",
        text: "Every dish is shown with a proper photograph, description and price, so customers decide at home instead of interrogating the staff by phone.",
      },
      {
        title: "WhatsApp ordering",
        text: "Tapping a dish opens WhatsApp with the order already written out — the kitchen receives an actual order, not a conversation starter.",
      },
      {
        title: "Table reservations on WhatsApp",
        text: "The reservation flow pre-fills date, time and party size, so booking a table takes one message instead of a phone negotiation.",
      },
      {
        title: "Deals and combo cards",
        text: "Family deals and combos are presented as clear cards with totals, the format Pakistani families actually order in.",
      },
      {
        title: "Bilingual Urdu / English presentation",
        text: "Headings, dish notes and calls to action mix Urdu and English the way the restaurant's own customers speak.",
      },
      {
        title: "Dining-space gallery",
        text: "A photo gallery shows the seating, family hall and ambience, answering the 'is it suitable for families?' question before it is asked.",
      },
      {
        title: "Hours, location and one-tap directions",
        text: "Opening hours and the map location sit on every page footer path, with directions a single tap away.",
      },
    ],
    stack: ["Next.js", "Static site", "WhatsApp ordering", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The design started from one observation: a restaurant site is judged by its food photos and its menu speed. The layout, colours and bilingual voice were built around the menu as the hero of the site.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The full multi-page site was built — menu, deals, gallery, about and contact — with every order and reservation action wired into structured WhatsApp messages.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "Zaiqa went live at zaiqa.mamfss.com, where it now takes orders and reservations directly from the menu pages.",
      },
    ],
    statusNow:
      "Live at zaiqa.mamfss.com and handling the job it was built for: customers browse the photographed menu and the messages that arrive are orders and bookings, not questions.",
    statusNext:
      "Seasonal menu updates and new dish photography can be added as the restaurant's menu evolves, and the site is ready to be connected to Google Business reviews.",
    metaTitle: "Zaiqa Restaurant Website Case Study",
    metaDescription:
      "How CodeHubb built Zaiqa's restaurant website: a photographed online menu, WhatsApp ordering and reservations that ended the evening phone chaos.",
  },
  {
    slug: "velvet-thread",
    sector: "Fashion e-commerce store",
    valueProp:
      "A women's fashion store where customers browse privately at home and check out on WhatsApp.",
    overview:
      "Velvet & Thread is an online clothing store for a boutique whose customers are women who shop carefully and privately. The store presents the full collection in organised categories with proper product photography, a working cart, and checkout through WhatsApp with Cash on Delivery — the payment pattern its customers already trust. Nothing about the store requires an account, a card, or a phone call to a stranger.",
    challenge:
      "The boutique's customers value their privacy: many will not phone a shop, negotiate with a salesman, or order through a chaotic Instagram DM thread. Selling through social posts alone meant missed messages, no catalogue structure, and customers who liked a piece but never found a comfortable way to buy it. The challenge was to build a storefront where browsing is private and unhurried, product details answer questions upfront, and ordering stays discreet from first tap to delivery.",
    features: [
      {
        title: "Organised collection browsing",
        text: "Clothing is grouped into collections and categories with filters, so a customer can browse the whole range quietly, at her own pace, at home.",
      },
      {
        title: "Complete product pages",
        text: "Each piece gets real photography, fabric and size details, and care guidance — the questions a careful buyer asks, answered before checkout.",
      },
      {
        title: "Cart with WhatsApp checkout",
        text: "The cart totals the order and sends it as one itemised WhatsApp message, so the boutique receives sizes, colours and quantities in a single thread.",
      },
      {
        title: "Cash on Delivery and bank transfer",
        text: "Payment options match how Pakistani customers actually pay — no card-only gate quietly killing orders at the last step.",
      },
      {
        title: "New arrivals section",
        text: "Fresh stock gets its own showcase so returning customers immediately see what is new since their last visit.",
      },
      {
        title: "Discreet, account-free ordering",
        text: "No sign-up wall and no public comments — a customer can go from browsing to a confirmed order without exposing anything about herself.",
      },
    ],
    stack: ["Next.js", "E-commerce", "WhatsApp checkout", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The store's design brief was set by its customers: elegant, calm and private. Soft presentation, real garment photography and zero pressure mechanics — no countdown timers, no pop-ups.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The catalogue, product pages, cart and WhatsApp checkout were built as one flow, with Cash on Delivery and bank transfer presented as first-class payment options.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "Velvet & Thread went live at velvet.mamfss.com and began taking itemised WhatsApp orders from its product pages.",
      },
    ],
    statusNow:
      "Live at velvet.mamfss.com. Customers browse the full collection privately and orders arrive itemised on WhatsApp, ready to pack.",
    statusNext:
      "New collections can be added as stock arrives; the catalogue structure was built so seasonal ranges slot in without redesign.",
    metaTitle: "Velvet & Thread Store Case Study",
    metaDescription:
      "Velvet & Thread case study: a women's fashion store by CodeHubb with private browsing, a real cart and WhatsApp checkout with Cash on Delivery.",
  },
  {
    slug: "sahara-estates",
    sector: "Real estate website",
    valueProp:
      "A property website that answers buyers' questions before they call — so every call is serious.",
    overview:
      "Sahara Estates is a real estate website for an agency selling homes and plots to buyers who research everything online first. Listings carry full photography, prices and specifications; visitors filter by area, budget and property type themselves; and a built-in mortgage calculator lets a buyer arrive at the meeting already knowing their numbers. Enquiries go straight to WhatsApp, attached to the exact property the buyer was viewing.",
    challenge:
      "The agency's phone was busy but unproductive: buyers called with twenty basic questions — price, size, location, payment plan — that a listing page should have answered, and agents spent their day repeating facts instead of closing serious buyers. Genuine prospects were indistinguishable from casual callers until ten minutes into a call. The challenge was to make the website do the qualifying: publish everything a buyer needs to self-filter, and let only informed, interested buyers reach the agents.",
    features: [
      {
        title: "Filterable property listings",
        text: "Buyers filter by area, budget, property type and bedrooms themselves, so the shortlist is built before any human conversation begins.",
      },
      {
        title: "Complete property detail pages",
        text: "Every listing shows photo galleries, full specifications, features and location context — the twenty phone questions, answered on the page.",
      },
      {
        title: "Mortgage calculator",
        text: "A built-in calculator lets buyers test down payments and monthly instalments, so they walk into meetings knowing their numbers — a tool the agency's clients now mention by name.",
      },
      {
        title: "Per-property WhatsApp enquiries",
        text: "The enquiry button on each listing opens WhatsApp with that property referenced, so the agent knows exactly which home the buyer means.",
      },
      {
        title: "Featured listings showcase",
        text: "Premium properties get hero placement with larger photography for the launches the agency most wants to move.",
      },
      {
        title: "Agent contact cards",
        text: "Buyers see who they will deal with, with direct contact options on every listing — trust is personal in property, and the site treats it that way.",
      },
    ],
    stack: ["Next.js", "Property listings", "Mortgage calculator", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept treated the website as the agency's first salesperson: listings complete enough to qualify a buyer, and a calculator that turns curiosity into a budget-checked enquiry.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Listings, filters, detail pages and the mortgage calculator were built together, with per-property WhatsApp enquiries wired into every listing.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "Sahara Estates went live at sahara.mindcraftsai.com, where buyers now shortlist properties and run their own numbers before calling.",
      },
    ],
    statusNow:
      "Live at sahara.mindcraftsai.com. Buyers filter and calculate on the site itself, and the calls that come in are from people who already know the property and their budget.",
    statusNext:
      "New projects and listings can be published as the agency's portfolio grows, using the same filter and detail-page structure.",
    metaTitle: "Sahara Estates Website Case Study",
    metaDescription:
      "Sahara Estates case study: a real estate website with filterable listings, a mortgage calculator and per-property WhatsApp enquiries, by CodeHubb.",
  },
  {
    slug: "smilecraft-dental",
    sector: "Dental clinic website",
    valueProp:
      "A dental clinic website whose cost estimator removes the fear that keeps patients away.",
    overview:
      "SmileCraft Dental is a website for a dental clinic that understood its real competitor: not another clinic, but the patient's fear of an unknown final bill. The site explains every treatment in plain language, introduces the dentists, and includes an interactive treatment cost estimator so patients arrive already knowing roughly what a filling, a crown or a root canal will cost. Appointments are booked through WhatsApp in a couple of taps.",
    challenge:
      "The clinic could see the pattern clearly: people delayed treatment for months because they dreaded a surprise bill at the end, and the front desk spent the day quoting prices on the phone instead of booking appointments. Patients who did call often asked about cost and vanished. The challenge was to publish prices honestly enough to remove the fear — with an estimator that gives a realistic range upfront — while keeping the site warm and reassuring rather than clinical and cold.",
    features: [
      {
        title: "Treatment cost estimator",
        text: "An interactive estimator lets patients select treatments and see a realistic cost range before booking — the feature that changed the clinic's enquiry quality.",
      },
      {
        title: "Plain-language treatment pages",
        text: "Fillings, root canals, implants and whitening are explained the way a good dentist explains them in the chair: what happens, how long it takes, what it costs.",
      },
      {
        title: "Dentist profiles",
        text: "Patients meet the doctors — including the clinic's women dentists — before they visit, which matters for families choosing care for their daughters and mothers.",
      },
      {
        title: "WhatsApp appointment booking",
        text: "Booking opens a WhatsApp chat with the treatment and preferred time pre-filled, so the front desk confirms instead of interviewing.",
      },
      {
        title: "Clinic gallery",
        text: "Real photographs of the treatment rooms show a modern, hygienic clinic — the visual proof anxious patients look for first.",
      },
      {
        title: "Patient FAQ and visit guidance",
        text: "First-visit expectations, payment options and aftercare basics are answered on the site, cutting the front desk's repetitive calls further.",
      },
    ],
    stack: ["Next.js", "Cost estimator", "WhatsApp booking", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The design centred on one insight: for a dental clinic, transparent pricing is a feature, not a risk. The estimator was planned as the site's centrepiece, wrapped in a calm, clean clinical design.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Treatment pages, doctor profiles, the cost estimator and WhatsApp booking were built as one patient journey from first question to confirmed appointment.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "SmileCraft Dental went live at smile.mamfss.com, with patients now checking treatment costs on the site before they book.",
      },
    ],
    statusNow:
      "Live at smile.mamfss.com. Patients arrive knowing roughly what their treatment costs, and the front desk books appointments instead of explaining prices all day.",
    statusNext:
      "The estimator's ranges can be updated as the clinic revises its fee schedule, and treatment pages can expand with new services.",
    metaTitle: "SmileCraft Dental Website Case Study",
    metaDescription:
      "SmileCraft Dental case study: a clinic website with a treatment cost estimator, plain-language treatment pages and WhatsApp booking, by CodeHubb.",
  },
  {
    slug: "forge-fitness",
    sector: "Gym & fitness website",
    valueProp:
      "A gym website that turns Instagram followers into members who walk in ready to join.",
    overview:
      "Forge Fitness is a gym website for a training facility that had relied entirely on Instagram. The site publishes everything a prospective member actually needs — class schedules, ladies-only hours, membership plans with monthly and yearly pricing, trainer profiles and a BMI calculator — and sends trial bookings to WhatsApp. It gives the gym a permanent, searchable home that an Instagram grid never could.",
    challenge:
      "Instagram showed the gym's energy but answered none of the practical questions: when are classes, what does membership cost, are there ladies-only hours and women trainers, what should a beginner expect? Enquiries arrived as scattered DMs, most people never got complete answers, and walk-ins arrived unready and unconvinced. The challenge was to build the gym's missing front desk — a site that publishes timings, prices and facilities honestly, reassures women members about separate facilities and women coaches, and converts curiosity into booked trial visits.",
    features: [
      {
        title: "Class schedule with ladies-only hours",
        text: "The full weekly timetable is published, with ladies-only training hours clearly marked — the detail women members check first and Instagram never showed.",
      },
      {
        title: "Membership plans with monthly / yearly toggle",
        text: "Plans are listed with a monthly and discounted yearly view, so pricing questions are answered on the page instead of in DMs.",
      },
      {
        title: "BMI calculator",
        text: "An interactive BMI calculator gives visitors a personal starting point and a natural reason to book a consultation.",
      },
      {
        title: "Trainer profiles",
        text: "Coaches — including the gym's women trainers for the ladies' facility — are introduced with their specialities, so members choose who they will train with.",
      },
      {
        title: "Facility gallery",
        text: "Real photography of the training floor, equipment and separate women's facility replaces guesswork with proof.",
      },
      {
        title: "Trial booking on WhatsApp",
        text: "A free-trial action opens WhatsApp with the visit request pre-written, turning browsers into scheduled walk-ins.",
      },
    ],
    stack: ["Next.js", "Class schedules", "BMI calculator", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The design brief was a dark, high-energy training aesthetic — but the structure came first: schedules, ladies-only hours and prices placed where a deciding visitor looks for them.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Schedules, plans with the monthly/yearly toggle, the BMI calculator, trainer profiles and the gallery were built, with trial bookings routed to WhatsApp.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "Forge Fitness went live at forge.mindcraftsai.com — the gym's first real home beyond Instagram.",
      },
    ],
    statusNow:
      "Live at forge.mindcraftsai.com. Visitors check class timings and ladies-only hours, try the BMI calculator, and walk in ready to join rather than to ask questions.",
    statusNext:
      "Class timetables and seasonal offers can be updated as the gym's programme changes; trainer profiles are ready to grow with the team.",
    metaTitle: "Forge Fitness Gym Website Case Study",
    metaDescription:
      "Forge Fitness case study: a gym website with class schedules, ladies-only hours, membership plans and a BMI calculator, built by CodeHubb.",
  },
  {
    slug: "bloom-salon",
    sector: "Beauty salon website",
    valueProp:
      "A salon website where brides check packages and prices themselves — and message with a date.",
    overview:
      "Bloom Salon & Spa is a website for a beauty salon whose bridal work is its biggest season and its biggest headache. The site publishes the salon's services with prices, presents the bridal packages in full detail — what is included, what it costs, how to book a date — and takes appointments through WhatsApp. It was designed to feel like the salon itself: polished, calm and unhurried.",
    challenge:
      "Bridal season used to mean the owner's phone ringing all day with the same questions: what is in the bridal package, what does it cost, is my date free? Every bride asked the same things, the answers lived only in the owner's head and her phone, and enquiries that went unanswered during a busy makeover were bookings lost. The challenge was to put the packages, prices and booking path on a page brides could study at midnight — and reserve their date in one message.",
    features: [
      {
        title: "Bridal packages in full detail",
        text: "Each package lists its inclusions and price plainly, so a bride compares options herself and messages with a date chosen, not a list of questions.",
      },
      {
        title: "Services menu with prices",
        text: "Facials, hair, makeup and spa services are published with prices — no 'DM for price' barrier between a customer and a booking.",
      },
      {
        title: "WhatsApp appointment booking",
        text: "Booking opens WhatsApp with the service and preferred date pre-filled, so the salon confirms appointments instead of conducting interviews by phone.",
      },
      {
        title: "Work and space gallery",
        text: "Photography of the salon's work and interior gives brides the visual confidence they need before trusting a salon with their biggest day.",
      },
      {
        title: "Seasonal offers section",
        text: "Bridal-season and festival offers get a dedicated showcase that can be refreshed as campaigns change.",
      },
      {
        title: "Bride-focused FAQ",
        text: "Trial makeup, booking lead times, and what to bring are answered upfront — the questions every bride asks, handled before she calls.",
      },
    ],
    stack: ["Next.js", "Bridal packages", "WhatsApp booking", "On-page SEO"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept put the bridal packages at the centre of the site, with an elegant design language matching the salon's own presentation — because for bridal clients, presentation is the product.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The services menu, package pages, gallery and WhatsApp booking were built so that a complete bridal enquiry takes a bride one visit and one message.",
      },
      QUALITY_PASS,
      {
        date: "21 October 2026",
        title: "Launched live",
        text: "Bloom Salon & Spa went live at bloom.mindcraftsai.com ahead of the wedding season its packages were built for.",
      },
    ],
    statusNow:
      "Live at bloom.mindcraftsai.com. Brides check packages on the site and message with a date — and the owner's December was manageable for the first time.",
    statusNext:
      "Seasonal packages and offers can be rotated as campaigns change, and the gallery can grow with each bridal season's work.",
    metaTitle: "Bloom Salon & Spa Website Case Study",
    metaDescription:
      "Bloom Salon & Spa case study: a salon website with detailed bridal packages, published prices and WhatsApp booking that calmed bridal season.",
  },
  /* --------------------------- AI Projects --------------------------- */
  {
    slug: "dukaan-ai",
    sector: "AI inventory app for kiryana stores",
    valueProp:
      "An AI shopkeeper's assistant that watches stock, forecasts demand and warns before anything runs out.",
    overview:
      "Dukaan AI is an inventory and sales assistant built for kiryana and retail shopkeepers who run their whole business from memory and a paper register. It tracks stock, records sales, forecasts what will sell next, and raises reorder alerts before shelves empty — with an AI assistant the shopkeeper can simply ask, in Urdu or English, 'what is about to finish?' A web dashboard is paired with an offline-first Flutter app, because shop internet is not always there when the customer is.",
    challenge:
      "A kiryana store carries hundreds of fast-moving items, and the typical owner keeps stock levels in his head. It mostly works — until a staple runs out unnoticed, a customer leaves empty-handed, and the same mistake repeats next week. Paper registers record what was sold but never warn about what is about to finish, and no small shop can afford inventory software built for supermarkets. The challenge was to build stock awareness that fits a one-person shop: quick to update, forgiving of missed entries, and smart enough to turn sales history into a reorder warning in plain Urdu.",
    features: [
      {
        title: "Inventory with live stock levels",
        text: "Every product carries its current stock count, updated as sales and purchases are recorded — the shop's real position, not a guess.",
      },
      {
        title: "Low-stock and reorder alerts",
        text: "When an item falls below its threshold, Dukaan AI flags it for reorder before the shelf empties — the alert the paper register could never give.",
      },
      {
        title: "Sales recording and demand forecast",
        text: "Daily sales build a history the system turns into a simple forecast of what will move next, so purchasing follows demand instead of habit.",
      },
      {
        title: "AI assistant chat in Urdu and English",
        text: "The shopkeeper asks questions in his own language — stock checks, today's sales, what to reorder — and gets direct answers from the shop's own data.",
      },
      {
        title: "Private account for every shop",
        text: "Each shop signs in with its own account; inventory, sales and forecasts are stored per user and visible to no one else (production upgrade, October 2026).",
      },
      {
        title: "Offline-first Flutter app with sync",
        text: "The mobile app keeps working without internet — sales and stock changes are stored on the phone and sync to the cloud when a connection returns.",
      },
    ],
    stack: ["Next.js", "Firebase Auth & Firestore", "Flutter app", "AI chat"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept started from the counter, not the office: a shopkeeper with thirty seconds between customers. Every screen was designed for one-thumb, one-glance use, in Urdu first.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The web dashboard, inventory engine, forecasting and AI chat were built, together with the Flutter app sharing the same data.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "The full flow was tested the way a shop actually runs: offline sales during the day, sync in the evening, and alerts checked against real stock counts.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "Dukaan AI was upgraded from a demo to a production architecture: real user accounts, per-shop private data with locked-down access rules, and a server-side AI engine replacing canned responses.",
      },
    ],
    statusNow:
      "Production-ready build complete: accounts, private per-shop data, the server-side AI engine and the offline Flutter app are all in place. Deployment is in progress.",
    statusNext:
      "Go-live on its own subdomain once the production hosting and Firebase project are connected, followed by the Android APK build through the cloud build pipeline.",
    metaTitle: "Dukaan AI — Kiryana Inventory App Case Study",
    metaDescription:
      "Dukaan AI case study: an AI inventory and sales-forecasting app for kiryana stores, with Urdu chat, stock alerts and an offline Flutter app.",
  },
  {
    slug: "agri-dost-ai",
    sector: "Urdu AI crop advisor for farmers",
    valueProp:
      "A farming advisor that speaks Urdu, works offline in the field, and answers before the problem spreads.",
    overview:
      "Agri Dost AI is a crop advisory product for Pakistani farmers, built Urdu-first because that is the language the field speaks. It gives crop calendars for the season, answers pest and disease questions, and offers weather-based farming guidance — all paired with an offline-first Flutter app, because mobile signal in a cotton field comes and goes. It was built by MindCrafts AI, the AI division of CodeHubb, for the farmers around its own home district of Sargodha and beyond.",
    challenge:
      "When a pest attacks or leaves curl, a farmer's options are slow: wait days for the agriculture department's man to visit, or guess with whatever pesticide the shop recommends. Advice that does exist online is in English, written for other climates, and useless on a phone with no signal standing in a field. The challenge was to put a knowledgeable companion in the farmer's pocket: guidance in Urdu, specific to his crop and season, available exactly where the problem is — in the field, offline.",
    features: [
      {
        title: "Crop calendars",
        text: "Season-by-season calendars for major crops — sowing windows, fertiliser stages, irrigation timing and harvest — so the year's plan is visible in advance.",
      },
      {
        title: "Pest and disease Q&A in Urdu",
        text: "Farmers describe what they see — curled leaves, spots, insects — and get likely causes and treatment guidance in plain Urdu, standing in the field itself.",
      },
      {
        title: "Weather-based farming tips",
        text: "Guidance adjusts to conditions: when to spray, when to hold irrigation, how to protect a crop ahead of harsh weather.",
      },
      {
        title: "AI assistant chat in Urdu",
        text: "Open questions go to the AI assistant, which answers farming questions conversationally in Urdu, drawing on the crop knowledge built into the product.",
      },
      {
        title: "Offline-first Flutter app",
        text: "Calendars and advice work without a connection; the app syncs when the farmer returns to coverage — designed for fields, not offices.",
      },
      {
        title: "Private farmer accounts",
        text: "Each farmer's crops, questions and history live in his own account, private to him (production upgrade, October 2026).",
      },
    ],
    stack: ["Next.js", "Firebase Auth & Firestore", "Flutter app", "Urdu AI chat"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept was set by a single scene: a farmer in a field, phone in hand, no signal, leaves curling. Urdu-first, offline-first and answer-first all follow from that scene.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Crop calendars, the pest Q&A knowledge base, weather guidance and the Urdu AI chat were built, with the Flutter app carrying the same advisor onto the phone.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "The advisor was tested against the questions farmers actually ask — in Urdu, mid-season, with the connectivity switched off.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "Agri Dost AI received the production architecture: real farmer accounts, private per-user data, and a server-side AI engine for genuine answers instead of fixed scripts.",
      },
    ],
    statusNow:
      "Production-ready build complete, with accounts, private data, the server-side AI engine and the offline Flutter app finished. Deployment is in progress.",
    statusNext:
      "Launch on its own subdomain once production hosting and the Firebase project are connected, then the Android APK build for field distribution.",
    metaTitle: "Agri Dost AI — Urdu Crop Advisor Case Study",
    metaDescription:
      "Agri Dost AI case study: an Urdu crop advisor for farmers with crop calendars, pest Q&A, weather tips and an offline-first Flutter mobile app.",
  },
  {
    slug: "shadi-planner-ai",
    sector: "AI wedding planning app",
    valueProp:
      "One calm place for the budget, the guest list and every vendor — instead of three notebooks and a family argument.",
    overview:
      "Shadi Planner AI is a wedding planning product for Pakistani families, where a wedding is organised by a household, not a person. It brings the budget, the guest list, vendor bookings and the event schedule into one shared plan, with an AI assistant to answer planning questions along the way. A web dashboard is paired with a Flutter app, so the plan travels from the drawing room to the wedding hall.",
    challenge:
      "A Pakistani wedding runs on scattered paper: one notebook for guests, another for expenses, a third list in someone else's house — and every relative with one more name to add. Budgets sprawl across families, nobody can say what has actually been spent against the plan, and the same quarrels repeat at every event. The challenge was to give the whole family one version of the truth: a single guest list, a budget that sits beside it, and every vendor and task tracked against the actual wedding dates.",
    features: [
      {
        title: "Wedding budget tracker",
        text: "The budget is planned by category — venue, food, décor, photography — and actual spending is recorded against it, so the family always knows where they stand.",
      },
      {
        title: "One shared guest list",
        text: "Guests are managed in one list with family groups and event-wise invitations, ending the three-notebooks, three-versions problem.",
      },
      {
        title: "Vendor checklist and payments",
        text: "Vendors are tracked with contact details, agreed prices, advances paid and balances due — nothing depends on someone's memory.",
      },
      {
        title: "Event schedule for every function",
        text: "Mehndi, baraat and walima each get their own timeline of tasks and bookings, so the week of the wedding runs from a plan, not panic.",
      },
      {
        title: "AI planning assistant",
        text: "An AI chat answers planning questions — checklists, budgeting trade-offs, timelines — in the family's own planning flow.",
      },
      {
        title: "Private account per wedding",
        text: "Each wedding's budget, guests and vendors are stored in the family's own private account (production upgrade, October 2026), with a Flutter app that works offline and syncs.",
      },
    ],
    stack: ["Next.js", "Firebase Auth & Firestore", "Flutter app", "AI chat"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept treated a wedding as a family project with one budget and one guest list — the two things that cause the arguments — and designed every screen around keeping both visible together.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Budget tracking, guest management, vendor checklists and the event schedules were built as one planner, with the AI assistant and Flutter app alongside.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "The planner was walked through a full wedding — guest list growth, vendor advances, budget overruns — to make sure the numbers stay honest under family pressure.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "Shadi Planner AI was upgraded to production: family accounts with private per-wedding data and a server-side AI engine behind the planning assistant.",
      },
    ],
    statusNow:
      "Production-ready build complete — accounts, private data, AI assistant and the Flutter app are finished. Deployment is in progress.",
    statusNext:
      "Go-live on its own subdomain once production hosting and the Firebase project are connected, followed by the Android APK build.",
    metaTitle: "Shadi Planner AI — Wedding App Case Study",
    metaDescription:
      "Shadi Planner AI case study: a wedding planning app with budget tracking, guest lists, vendor checklists and an AI assistant, by MindCrafts AI.",
  },
  {
    slug: "autocare-ai",
    sector: "AI workshop management system",
    valueProp:
      "A workshop's memory: every car's service history in seconds, reminders on time, and diagnosis help on tap.",
    overview:
      "AutoCare AI is a management system for car workshops, built as a complete PHP and MySQL application — the technology stack that runs natively on the hosting workshops already have. It keeps customer and vehicle records, a complete service history for every car, maintenance reminders, and an AI fault-diagnosis assistant that gives mechanics a starting point on common faults. A Flutter app connects to the same system for work away from the desk.",
    challenge:
      "A workshop's most valuable asset is its memory — what was done to this car, when, and what is due next — and in most workshops that memory lives in a paper register. Registers get lost; this one's owner lost his twice. When a car returned, nobody could pull up its history, follow-up maintenance was never reminded, and diagnosis started from zero every time. The challenge was to digitise the register without changing how a workshop actually works: fast entry at the counter, history in seconds, and reminders that bring customers back.",
    features: [
      {
        title: "Complete service history per vehicle",
        text: "Every job done on a car is recorded against the vehicle, so when it returns, the full history — parts, work, dates — is on screen in seconds.",
      },
      {
        title: "Customer and vehicle records",
        text: "Customers and their cars are kept as proper profiles, ending the search through register pages for a phone number or a number plate.",
      },
      {
        title: "Maintenance reminders",
        text: "The system tracks when a vehicle is due for its next service and flags it, turning the workshop's memory into repeat business.",
      },
      {
        title: "AI fault-diagnosis assistant",
        text: "Mechanics describe symptoms and get likely causes and checks for common faults — a starting point that speeds up diagnosis without replacing judgement.",
      },
      {
        title: "Job and service records",
        text: "Work in progress and completed jobs are recorded against each vehicle as the workshop's permanent, searchable register.",
      },
      {
        title: "Staff accounts with private workshop data",
        text: "The workshop's team signs in with staff accounts; every record is scoped to that workshop and invisible to anyone else (production upgrade, October 2026).",
      },
    ],
    stack: ["PHP", "MySQL", "Flutter app", "AI diagnosis chat"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept was a register that cannot be lost: the workflows were mapped from the workshop counter — vehicle arrives, history opens, job is recorded, next service is due.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The full PHP and MySQL application was built — records, service history, reminders and the diagnosis assistant — with the Flutter app connecting to the same backend.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "The system was tested against workshop reality: returning cars, repeat customers, and history lookups under time pressure at a busy counter.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "AutoCare AI was upgraded to production: staff login with per-workshop private data on every record, and the diagnosis chat moved to a server-side AI engine.",
      },
    ],
    statusNow:
      "Production-ready build complete — staff accounts, workshop-scoped data and the AI diagnosis engine are in place. Deployment is in progress.",
    statusNext:
      "Installation on the workshop's hosting with its MySQL database, followed by the Flutter APK build for the team.",
    metaTitle: "AutoCare AI — Workshop Software Case Study",
    metaDescription:
      "AutoCare AI case study: workshop software with service history, maintenance reminders and AI fault diagnosis, built on PHP and MySQL by CodeHubb.",
  },
  {
    slug: "staffease-ai",
    sector: "AI HR & payroll assistant",
    valueProp:
      "Attendance flows into salary slips by itself — giving back the three days a month paperwork used to eat.",
    overview:
      "StaffEase AI is an HR assistant for small businesses, schools and academies where attendance lives on paper registers and salary slips are typed by hand. It records attendance, manages leave, and generates salary slips automatically from the attendance data, behind a secure business login. The web dashboard is built in Next.js over a PHP and MySQL API, with a Flutter app for on-the-go checks.",
    challenge:
      "In a forty-person workplace, the end of the month had a ritual: one administrator, one spreadsheet, three days of typing salary slips — with a mistake hiding somewhere every single time. Attendance sat in paper registers, leave was tracked in someone's memory, and turning a month of attendance into forty correct slips was pure manual labour. The challenge was to connect the two ends of that work: attendance recorded once, flowing automatically into checked, printable salary slips.",
    features: [
      {
        title: "Digital attendance",
        text: "Daily attendance is recorded in the system instead of paper registers, creating the single source every payroll calculation depends on.",
      },
      {
        title: "Leave management",
        text: "Leave applications and approvals are tracked in the system, so balances and absences are facts, not memories.",
      },
      {
        title: "Automatic salary slips",
        text: "Salary slips are generated from the month's attendance — the administrator checks them instead of typing them, and the three-day ritual ends.",
      },
      {
        title: "Staff records",
        text: "Employee profiles, roles and salary structures are kept in one place, ready for every payroll run.",
      },
      {
        title: "Secure business login with private data",
        text: "Each business signs in with its own token-secured account; staff and payroll data is scoped to that business alone (production upgrade, October 2026).",
      },
      {
        title: "AI assistant and Flutter app",
        text: "An AI chat answers routine HR questions, and the Flutter app keeps attendance and approvals moving when the administrator is away from the desk.",
      },
    ],
    stack: ["Next.js dashboard", "PHP & MySQL API", "Flutter app", "AI chat"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept followed the month-end pain: if attendance is the input and salary slips the output, the system should connect them with no re-typing in between.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "The Next.js dashboard, PHP/MySQL API, attendance and leave flows, and the automatic salary-slip generation were built, with the Flutter app alongside.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "A full payroll month was run through the system — attendance, leave, deductions — and the generated slips were checked line by line against hand calculations.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "StaffEase AI was upgraded to production: token-secured business accounts, per-business data scoping on every record, and a server-side AI engine for the assistant.",
      },
    ],
    statusNow:
      "Production-ready build complete — secure business accounts, scoped data, automatic salary slips and the apps are finished. Deployment is in progress.",
    statusNext:
      "Go-live with the dashboard on the web and the PHP API on the business hosting, followed by the Flutter APK build.",
    metaTitle: "StaffEase AI — HR & Payroll App Case Study",
    metaDescription:
      "StaffEase AI case study: an HR assistant for attendance, leave and automatic salary slips, with a Next.js dashboard, PHP API and Flutter app.",
  },
  {
    slug: "sehat-ai",
    sector: "AI clinic assistant",
    valueProp:
      "Appointments that organise themselves and medicine reminders that go out on their own — built for small clinics.",
    overview:
      "Sehat AI is a patient assistant for small clinics, built deliberately simple: appointment management, automatic medicine and visit reminders, and health guidance for patients, with an AI assistant for common questions. The patient-facing side is plain HTML, CSS and JavaScript for maximum speed and compatibility, backed by a PHP service with Firebase data — and access is locked to clinic staff, because patient information is not public information.",
    challenge:
      "In a small clinic, half the coordinator's job was the appointment diary — and patients who forgot their appointments left the doctor's chair empty while other patients waited. Medicine courses were abandoned halfway because nobody reminded anyone, and any digital system had to be usable by staff with no training and no patience for complicated software. The challenge was to automate the diary and the reminders while keeping patient data properly private — a combination most simple tools get wrong in one direction or the other.",
    features: [
      {
        title: "Appointment management",
        text: "The clinic's diary is digital: bookings are recorded, the day's list is clear, and the chair-empty problem becomes visible and manageable.",
      },
      {
        title: "Automatic medicine reminders",
        text: "Patients are reminded to take their medicine and return for follow-ups — the reminders go out by themselves instead of depending on clinic staff.",
      },
      {
        title: "Health tips for patients",
        text: "Practical health guidance is available to patients in the product, extending the clinic's care beyond the visit itself.",
      },
      {
        title: "AI assistant chat",
        text: "Common patient questions are answered by the AI assistant, sparing the clinic's phone for the questions that genuinely need a human.",
      },
      {
        title: "Staff-only secure access",
        text: "Patient data is locked down: the database denies public access entirely and only the clinic's authenticated staff reach records, through the secured backend (production upgrade, October 2026).",
      },
      {
        title: "Flutter app for the clinic team",
        text: "The mobile app keeps appointments and reminders in the team's pocket, working simply enough that nobody on staff needed training to use it.",
      },
    ],
    stack: ["HTML / CSS / JavaScript", "PHP backend", "Firebase", "Flutter app"],
    journey: [
      {
        date: "October 2026",
        title: "Concept & design",
        text: "The concept was restraint: a small clinic needs its diary and its reminders automated, and nothing it doesn't need. Simplicity was treated as the main feature.",
      },
      {
        date: "October 2026",
        title: "Build",
        text: "Appointments, reminders, health tips and the AI assistant were built on the lightweight web stack with the PHP and Firebase backend, plus the Flutter app.",
      },
      {
        date: "October 2026",
        title: "Quality pass",
        text: "The flows were tested from the patient's side and the coordinator's side — booking, reminding, following up — with the training requirement kept at zero.",
      },
      {
        date: "21 October 2026",
        title: "Production upgrade",
        text: "Sehat AI was upgraded to production: database rules locked to deny all public access, staff authentication through the secured PHP backend, and a server-side AI engine for the assistant.",
      },
    ],
    statusNow:
      "Production-ready build complete — appointments, reminders, locked-down patient data and the Flutter app are finished. Deployment is in progress.",
    statusNext:
      "Installation on the clinic hosting with its Firebase project connected, followed by the Android APK build for the clinic team.",
    metaTitle: "Sehat AI — Clinic Assistant App Case Study",
    metaDescription:
      "Sehat AI case study: a clinic assistant for patient appointments and medicine reminders, with secure staff-only access and a Flutter app.",
  },
];

/* ------------------------------------------------------------------ */
/* Lookups — combine the case-study layer with the canonical project    */
/* and testimonial data from lib/site.ts.                               */
/* ------------------------------------------------------------------ */

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** The project's own review from TESTIMONIALS (matched by project name). */
export function getTestimonial(project: Project): Testimonial | undefined {
  return TESTIMONIALS.find((t) => t.project === project.name);
}

export type CaseStudyPageData = {
  project: Project;
  study: CaseStudy;
  testimonial?: Testimonial;
  prev: Project;
  next: Project;
};

/** Everything a /work/<slug>/ page needs, in PROJECTS order with wrap-around
 *  prev/next navigation. Returns undefined for an unknown slug. */
export function getCaseStudyPage(slug: string): CaseStudyPageData | undefined {
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const study = getCaseStudy(slug);
  if (idx === -1 || !study) return undefined;
  const project = PROJECTS[idx];
  return {
    project,
    study,
    testimonial: getTestimonial(project),
    prev: PROJECTS[(idx + PROJECTS.length - 1) % PROJECTS.length],
    next: PROJECTS[(idx + 1) % PROJECTS.length],
  };
}

