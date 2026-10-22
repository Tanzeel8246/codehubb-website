/* ==========================================================================
   CodeHubb — central site data.
   >>> PLACEHOLDER ZONES: anything marked PLACEHOLDER below must be replaced
   >>> with the owner's REAL metrics before launch.
   >>> (Projects, testimonials and pricing below are REAL — see sections.)
   ========================================================================== */

export const SITE = {
  name: "CodeHubb",
  tagline: "Design. Develop. Dominate.",
  domain: "https://codehubb.com",
  email: "contact@codehubb.com",
  whatsappNumber: "923023448246",
  whatsappUrl: "https://wa.me/923023448246",
  // MindCrafts AI is the AI division of CodeHubb — one brand, not two.
  division: "MindCrafts AI",
};

/** Canonical social profiles — used by the footer and schema.org sameAs. */
export const SOCIALS = {
  facebook: "https://www.facebook.com/CodeHubbMindCrafts",
  github: "https://github.com/Tanzeel8246",
  linkedin: "https://www.linkedin.com/in/tanzeel-ul-rahman-bb86909a",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb7CvboEFeXcbPJ7lE0T",
};

/** Base path baked in at build time ("" for root/Vercel, "/codehubb" for the
 *  Hostinger subfolder preview). Public-folder images need it prefixed
 *  manually — next/image with unoptimized does not do it for them. */
export const BASE_PATH: string =
  (process.env as Record<string, string | undefined>).__NEXT_ROUTER_BASEPATH ?? "";

/** Prefix a public-folder image path with the build's basePath. */
export function img(src: string): string {
  return `${BASE_PATH}${src}`;
}

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_AUDIT_MSG =
  "Hi CodeHubb! I'd like a FREE website audit for my business.";

export type Service = {
  slug: string;
  title: string;
  outcome: string;
  description: string;
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    outcome: "Turn visitors into enquiries",
    description:
      "A fast, modern website built to do one job: convince your visitor to contact you. Clean design, persuasive structure, and WhatsApp one tap away — no bloated themes, no slow page builders.",
    deliverables: [
      "Custom mobile-first design",
      "Copywriting polish for conversions",
      "90+ PageSpeed optimization",
      "WhatsApp chat & click-to-chat buttons",
      "On-page SEO basics included",
    ],
  },
  {
    slug: "ecommerce-stores",
    title: "E-Commerce Stores",
    outcome: "Sell online with checkout customers trust",
    description:
      "Online stores with the checkout your customers already use — WhatsApp. Browse, tap, order: no confusing carts, no abandoned checkouts. Perfect for clothing, food, electronics and local brands.",
    deliverables: [
      "Product catalog & categories",
      "WhatsApp order checkout flow",
      "Cash on Delivery / bank transfer support",
      "Order notifications on WhatsApp",
      "Easy product management",
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    outcome: "iOS + Android from a single codebase",
    description:
      "Cross-platform apps with Flutter: one codebase, native performance on both iPhone and Android. From booking apps to delivery apps — designed, built and published for you.",
    deliverables: [
      "iOS & Android apps, one codebase",
      "Native-feel 60fps UI",
      "Push notifications",
      "Play Store / App Store publishing help",
      "Backend & admin panel",
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    outcome: "Automate replies, support & busywork",
    description:
      `Delivered by ${SITE.division}, the AI division of CodeHubb. AI chatbots that answer customers 24/7, WhatsApp auto-replies, and workflow automation that saves your team hours every week.`,
    deliverables: [
      "AI chatbot for your website / WhatsApp",
      "24/7 automatic customer replies",
      "Lead qualification on autopilot",
      "Custom AI integrations & automation",
      "Training for your team",
    ],
  },
  {
    slug: "web-apps",
    title: "Web Apps & Dashboards",
    outcome: "Your business process, as software",
    description:
      "Booking systems, dashboards, CRMs, portals — custom web applications that replace spreadsheets and manual work with fast, secure software built around how you actually operate.",
    deliverables: [
      "Custom dashboards & admin panels",
      "Booking / appointment systems",
      "Customer portals & logins",
      "API integrations",
      "Secure, scalable architecture",
    ],
  },
  {
    slug: "seo-speed",
    title: "SEO & Speed Optimization",
    outcome: "Rank higher, load faster",
    description:
      "Technical SEO and Core Web Vitals tuning for sites that already exist. We find what's holding your Google ranking back — speed, structure, metadata — and fix it properly.",
    deliverables: [
      "Full technical SEO audit",
      "Core Web Vitals optimization",
      "Keyword & metadata setup",
      "Google Search Console configuration",
      "Monthly ranking reports",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* PLACEHOLDER METRICS — replace with real agency numbers before launch */
/* ------------------------------------------------------------------ */
export const METRICS = [
  { value: "20+", label: "Projects delivered" },
  { value: "12+", label: "Happy clients" },
  { value: "90+", label: "Avg. PageSpeed score" },
  { value: "24h", label: "Response time" },
];

/* ==========================================================================
   ★★★  REAL PROJECTS — LIVE LINKS LIVE HERE  ★★★
   --------------------------------------------------------------------------
   OWNER: This array is the ONLY place where project live links are kept.
   When you deploy a project, paste its full URL into that project's `url`
   field below (e.g. url: "https://taste.mamfss.com") and rebuild the site.
   - url: ""        → the card shows a "Deploying soon" chip and is NOT a link
   - url: "https…"  → the whole card becomes a link to the live project
   ★ تمام لائیو لنکس صرف یہیں لگیں گے — ہر پروجیکٹ کے url والے خانے میں اس کا
     لنک لگا کر سائٹ دوبارہ build کر دیں، کارڈ خود بخود لائیو ہو جائے گا۔ ★
   ========================================================================== */
export type Project = {
  slug: string;
  name: string;
  category: "Website" | "AI Project";
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  url: string; // live URL — "" = not deployed yet (card shows "Deploying soon")
  featured?: boolean; // featured projects appear on the homepage
};

export const PROJECTS: Project[] = [
  /* ---------------------------- Websites ---------------------------- */
  {
    slug: "zaiqa",
    name: "Zaiqa",
    category: "Website",
    description:
      "Restaurant website with online menu & WhatsApp reservations.",
    image: "/images/projects/zaiqa.jpg",
    imageAlt: "Zaiqa restaurant — signature dishes and warm dining ambience",
    tags: ["Next.js", "Urdu/English"],
    url: "https://zaiqa.mamfss.com",
    featured: true,
  },
  {
    slug: "velvet-thread",
    name: "Velvet & Thread",
    category: "Website",
    description:
      "Fashion e-commerce store with cart & WhatsApp checkout.",
    image: "/images/projects/velvet-thread.jpg",
    imageAlt: "Velvet & Thread fashion boutique — elegant clothing collection",
    tags: ["Next.js", "E-commerce"],
    url: "https://velvet.mamfss.com",
    featured: true,
  },
  {
    slug: "sahara-estates",
    name: "Sahara Estates",
    category: "Website",
    description:
      "Real estate listings with filters & mortgage calculator.",
    image: "/images/projects/sahara-estates.jpg",
    imageAlt: "Luxury villa listed on Sahara Estates",
    tags: ["Next.js", "Property"],
    url: "https://sahara.mindcraftsai.com",
    featured: true,
  },
  {
    slug: "smilecraft-dental",
    name: "SmileCraft Dental",
    category: "Website",
    description:
      "Dental clinic site with treatment cost estimator.",
    image: "/images/projects/smilecraft-dental.jpg",
    imageAlt: "Modern treatment room inside the SmileCraft Dental clinic",
    tags: ["Next.js", "Healthcare"],
    url: "https://smile.mamfss.com",
  },
  {
    slug: "forge-fitness",
    name: "Forge Fitness",
    category: "Website",
    description: "Gym site with class schedules & BMI calculator.",
    image: "/images/projects/forge-fitness.jpg",
    imageAlt: "Training floor at Forge Fitness gym",
    tags: ["Next.js", "Fitness"],
    url: "https://forge.mindcraftsai.com",
  },
  {
    slug: "bloom-salon",
    name: "Bloom Salon & Spa",
    category: "Website",
    description: "Salon site with bridal packages & booking.",
    image: "/images/projects/bloom-salon.jpg",
    imageAlt: "Professional makeup products and brushes at Bloom Salon & Spa",
    tags: ["Next.js", "Beauty"],
    url: "https://bloom.mindcraftsai.com",
  },
  /* --------------------------- AI Projects --------------------------- */
  {
    slug: "dukaan-ai",
    name: "Dukaan AI",
    category: "AI Project",
    description:
      "AI inventory & sales forecasting for kiryana stores, with Flutter app.",
    image: "/images/projects/dukaan-ai.jpg",
    imageAlt: "Well-stocked grocery store shelves with fresh vegetables",
    tags: ["Next.js", "Firebase", "Flutter"],
    url: "",
    featured: true,
  },
  {
    slug: "agri-dost-ai",
    name: "Agri Dost AI",
    category: "AI Project",
    description:
      "Urdu crop advisor for farmers: calendars & pest Q&A, with Flutter app.",
    image: "/images/projects/agri-dost-ai.jpg",
    imageAlt: "Golden wheat field at sunset",
    tags: ["Next.js", "Firebase", "Flutter"],
    url: "",
    featured: true,
  },
  {
    slug: "shadi-planner-ai",
    name: "Shadi Planner AI",
    category: "AI Project",
    description:
      "Wedding planner: budgets, vendors, guest lists, with Flutter app.",
    image: "/images/projects/shadi-planner-ai.jpg",
    imageAlt: "Elegant wedding hall set with round tables and chandeliers",
    tags: ["Next.js", "Firebase", "Flutter"],
    url: "",
    featured: true,
  },
  {
    slug: "autocare-ai",
    name: "AutoCare AI",
    category: "AI Project",
    description:
      "Workshop manager: service history, reminders, fault diagnosis.",
    image: "/images/projects/autocare-ai.jpg",
    imageAlt: "Mechanic pouring fresh engine oil into a car at a workshop",
    tags: ["PHP", "MySQL", "Flutter"],
    url: "",
  },
  {
    slug: "staffease-ai",
    name: "StaffEase AI",
    category: "AI Project",
    description: "HR assistant: attendance, leave & salary slips.",
    image: "/images/projects/staffease-ai.jpg",
    imageAlt: "Office team working together around a table with laptops",
    tags: ["Next.js", "PHP", "MySQL", "Flutter"],
    url: "",
  },
  {
    slug: "sehat-ai",
    name: "Sehat AI",
    category: "AI Project",
    description: "Patient assistant: appointments & medicine reminders.",
    image: "/images/projects/sehat-ai.jpg",
    imageAlt: "Doctor with a stethoscope using a smartphone",
    tags: ["HTML/JS", "PHP", "Firebase", "Flutter"],
    url: "",
  },
];

/* ------------------------------------------------------------------ */
/* CLIENT TESTIMONIALS — one owner-supplied review per project        */
/* (attributions provided by the owner, 2026-10-21). `project` must    */
/* match a PROJECTS[].name so the review can attach to its project:   */
/* the homepage shows all twelve in a showcase band (websites first,  */
/* then AI projects); /work shows each under its own project.         */
/* ------------------------------------------------------------------ */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Name of the PROJECTS entry this review belongs to. */
  project: string;
};

export const TESTIMONIALS: Testimonial[] = [
  /* ---------------------------- Websites ---------------------------- */
  {
    project: "Zaiqa",
    quote:
      "Most people used to phone us just to ask what was on the menu. Now they open the website, see the dishes properly, and the WhatsApp message that arrives is the actual order. It is a small thing, but our evenings run calmer because of it.",
    name: "M. Kashif Rauf",
    role: "Owner, Zaiqa Restaurant",
  },
  {
    project: "Velvet & Thread",
    quote:
      "My customers are women who value their privacy. They can browse the whole collection at home, take their time, and order on WhatsApp without explaining themselves to anyone on a phone call. The team understood that in the first meeting, and it shows in the site.",
    name: "Mah Laqa Ahmad",
    role: "Owner, Velvet & Thread",
  },
  {
    project: "Sahara Estates",
    quote:
      "Buyers used to call us with twenty questions. Now they filter by area and budget themselves, and when the call comes it is from someone serious. The mortgage calculator was their idea — clients walk into meetings already knowing their numbers.",
    name: "M. Aamir Shahzad",
    role: "Director, Sahara Estates",
  },
  {
    project: "SmileCraft Dental",
    quote:
      "People put off treatment because they were afraid of a surprise bill at the end. The cost estimator on the website settled that. Patients arrive already knowing roughly what a filling or a root canal costs, so my front desk books appointments instead of explaining prices all day.",
    name: "Hania Fatima",
    role: "Manager, SmileCraft Dental",
  },
  {
    project: "Forge Fitness",
    quote:
      "I will be honest, I thought Instagram was enough for a gym. It is not. People check the class timings and the ladies-only hours here, try the BMI calculator, and walk in ready to join. We get fewer time-wasters and more actual members.",
    name: "M. Zohaib Ijaz",
    role: "Owner, Forge Fitness",
  },
  {
    project: "Bloom Salon & Spa",
    quote:
      "Bridal season used to mean my phone ringing all day with the same questions. Now brides check the packages on the website and message me with a date. My December was manageable this year.",
    name: "Rubina Naz",
    role: "Owner, Bloom Salon & Spa",
  },
  /* --------------------------- AI Projects --------------------------- */
  {
    project: "Dukaan AI",
    quote:
      "I keep my whole shop in my head, and mostly that worked — until stock ran out without me noticing. The app warns me before things finish, and it speaks to me in Urdu, so I did not need anyone's grandson to set it up.",
    name: "M. Irfan",
    role: "Kiryana store owner (early user)",
  },
  {
    project: "Agri Dost AI",
    quote:
      "In our fields the signal comes and goes, so an app that needs internet is useless to me. This one works offline, in Urdu. When the cotton leaves curled this season I checked the pest advice standing right there in the field, instead of waiting two days for the agriculture man to visit.",
    name: "M. Fazal Rahman",
    role: "Farmer, Sargodha district",
  },
  {
    project: "Shadi Planner AI",
    quote:
      "Three notebooks, three different guest lists, and every relative with a name to add. Getting it all into one list, with the budget sitting beside it, ended most of the quarrels. The wedding did not plan itself — but the panic was much smaller this time.",
    name: "Bint-e-Yusuf",
    role: "Client (planned a family wedding)",
  },
  {
    project: "AutoCare AI",
    quote:
      "Our service history was in a register that got lost. Twice. Now when a car returns I pull up everything we did on it in seconds, and the diagnosis assistant gives my mechanics a starting point on the common faults. That is all I asked for, and it does it.",
    name: "M. Tanveer Ahmad",
    role: "Owner, AutoCare Workshop",
  },
  {
    project: "StaffEase AI",
    quote:
      "Salary slips took over the last three days of every month — one spreadsheet, forty-odd staff, and a mistake hiding somewhere every single time. Now attendance flows into the slips and I check them instead of typing them. Those three days are mine again.",
    name: "Nasira Tahir",
    role: "Administrator, private academy",
  },
  {
    project: "Sehat AI",
    quote:
      "Half my job was the appointment diary — and patients who forgot, leaving the doctor's chair empty. The reminders go out by themselves now. It is simple software, and for a small clinic that is precisely the point; nobody on our staff needed training to use it.",
    name: "Bint-e-Turab",
    role: "Clinic Coordinator",
  },
];

/* ------------------------------------------------------------------ */
/* PRICING — owner-approved packages (approved 2026-10-21; no longer   */
/* placeholders). Dual presentation: USD price + PKR equivalent. The   */
/* PKR figures are the mid-points of the owner's approved ranges       */
/* (Starter Rs 35–40k, Business Rs 75–85k, E-Commerce & AI             */
/* Rs 120–160k). Payment by bank transfer or JazzCash.                  */
/* ------------------------------------------------------------------ */
export type Tier = {
  name: string;
  price: string;
  pricePkr: string;
  unit: string;
  pages: string;
  delivery: string;
  bestFor: string;
  paymentNote?: string;
  blurb: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const PRICING: Tier[] = [
  {
    name: "Starter",
    price: "$199",
    pricePkr: "Rs 38,000",
    unit: "starting from",
    pages: "5 pages",
    delivery: "5–7 days",
    bestFor: "Small clinics, schools, lawyers & salons",
    blurb: "For new businesses that need a professional presence, fast.",
    features: [
      "5 pages",
      "Mobile-first custom design",
      "WhatsApp chat integration",
      "Contact form + Google Maps",
      "Basic on-page SEO",
      "Domain & high-speed hosting guidance included",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Business",
    price: "$449",
    pricePkr: "Rs 80,000",
    unit: "starting from",
    pages: "12 pages",
    delivery: "10–14 days",
    bestFor: "Restaurants, real estate & service companies",
    paymentNote: "50% to start, 50% on completion",
    blurb: "For growing businesses that want enquiries on autopilot.",
    features: [
      "12 pages",
      "Conversion-focused copywriting help",
      "WhatsApp checkout / lead flows",
      "Blog setup for SEO",
      "Advanced on-page SEO",
      "Speed optimization (90+ score)",
      "1 month free support",
      "Domain & high-speed hosting guidance included",
    ],
    featured: true,
    cta: "Choose Business",
  },
  {
    name: "E-Commerce & AI",
    price: "$899",
    pricePkr: "Rs 140,000",
    unit: "starting from",
    pages: "Store + custom features",
    delivery: "3–4 weeks",
    bestFor: "Clothing brands, WhatsApp-cart stores & custom apps",
    blurb: "E-commerce, apps, AI and custom systems.",
    features: [
      "Online store / web application",
      "AI chatbot & automation",
      "Custom integrations & dashboards",
      "Dedicated project manager",
      "Priority support",
      "Free strategy consultation",
      "Domain & high-speed hosting guidance included",
    ],
    cta: "Choose E-Commerce & AI",
  },
];

export const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Every project is different, so we quote individually — but our pricing page lists transparent starting packages so you always know the range before we talk. Most small business sites fall in the Starter–Business range. Message us on WhatsApp for a free, no-pressure quote.",
  },
  {
    q: "How long will my project take?",
    a: "A typical business website takes 1–2 weeks from content approval. E-commerce stores take 2–4 weeks, and apps or AI systems are scoped individually. We give you a clear timeline before starting — and we hit it.",
  },
  {
    q: "Why is everything WhatsApp-first?",
    a: "Because that's where your customers are. In Pakistan, the UAE and much of the Middle East, buyers prefer chatting over filling forms. One-tap WhatsApp buttons and checkout flows remove friction — and friction is what kills sales.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. We work with clients in Pakistan, the UAE, and worldwide. Communication happens on WhatsApp and video calls, in English or Urdu — whichever you prefer. Time zones are never a problem.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Every site we build includes technical SEO foundations: fast loading, proper headings, metadata, mobile-friendliness and Google Search Console setup. Ranking also needs content over time — our blog setup and SEO service cover exactly that.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Just three things: your logo (if you have one), basic info about your business and services, and any photos you'd like used. Don't have content ready? We help you write it — that's part of the service.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Every project includes a free support window after launch, and affordable care plans are available for ongoing updates, backups and small changes. You're never left alone with a broken site.",
  },
  {
    q: "Why shouldn't I just build it myself on Wix or WordPress?",
    a: "You can — but DIY sites usually end up slow, generic-looking, and invisible on Google. We build conversion-focused, lightning-fast sites that are engineered to bring you customers, not just exist online. Your time is better spent running your business.",
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMins: number;
  keywords: string[];
  body: { heading?: string; paragraphs: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "business-website-cost-2026",
    title: "How Much Does a Business Website Cost in 2026?",
    excerpt:
      "Website prices range from $100 to $10,000+. Here's what actually drives the cost — and how to avoid overpaying.",
    date: "2026-10-20",
    readMins: 6,
    keywords: ["website cost", "web design pricing", "business website price"],
    body: [
      {
        paragraphs: [
          "If you've asked three agencies for a quote, you've probably received three wildly different numbers. One says $120, another says $2,000, and a freelancer on Facebook says $50. Who's right? Honestly — all of them can be, because 'a website' isn't one product.",
          "The price depends on what the website has to do. A simple 5-page business site is a completely different job from an online store with hundreds of products, and both are different from a custom web application. Here's how to think about it.",
        ],
      },
      {
        heading: "What actually drives the cost",
        paragraphs: [
          "Pages and features are the biggest factor. More pages, a blog, product catalogs, booking systems and payment integrations all add work. Design quality matters too — a template slapped together in an afternoon costs less than a custom design built around your brand, but it also converts worse.",
          "Then there's the invisible work: speed optimization, mobile responsiveness, SEO setup, and security. Cheap sites skip all of this, which is why they load slowly and never rank on Google.",
        ],
      },
      {
        heading: "The price ranges you'll see",
        paragraphs: [
          "DIY builders ($0–30/month): fine for a hobby, risky for a business. You pay with your time, and the result usually looks generic.",
          "Freelancers ($100–500): good value if you find someone reliable. Quality varies enormously — check real past work, not screenshots.",
          "Agencies ($300–5,000+): you pay for process, reliability and strategy. For a business website meant to generate customers, this is usually the sweet spot.",
        ],
      },
      {
        heading: "How to avoid overpaying",
        paragraphs: [
          "Get quotes that itemize what's included — pages, revisions, SEO, support. Ask who owns the site when it's done (you should). And be suspicious of prices that seem too good: a $50 website that brings zero customers is infinitely more expensive than a $350 one that brings ten.",
          "At CodeHubb, our pricing page lists transparent starting packages, and every quote is free with zero pressure. If you only take one step today, get a proper quote before deciding anything.",
        ],
      },
    ],
  },
  {
    slug: "why-website-losing-customers",
    title: "5 Signs Your Website Is Losing You Customers",
    excerpt:
      "Most business websites don't fail loudly — they quietly leak customers every day. Here are the five warning signs.",
    date: "2026-10-22",
    readMins: 5,
    keywords: ["website mistakes", "website not converting", "business website tips"],
    body: [
      {
        paragraphs: [
          "Here's an uncomfortable truth: most business websites aren't broken — they're just silently leaking customers. Nobody complains; visitors simply leave and buy from a competitor. Here are the five signs it's happening to you.",
        ],
      },
      {
        heading: "1. It takes more than 3 seconds to load",
        paragraphs: [
          "Over half of mobile visitors abandon a page that takes longer than 3 seconds. If your site was built on a bloated theme with twenty plugins, it's probably slow — and every slow second costs you enquiries.",
        ],
      },
      {
        heading: "2. There's no obvious way to contact you",
        paragraphs: [
          "If a visitor has to hunt for your phone number or fill a long form, you've already lost them. In our market, a floating WhatsApp button outperforms contact forms dramatically — one tap, and they're talking to you.",
        ],
      },
      {
        heading: "3. It looks the same as everyone else's",
        paragraphs: [
          "Template-built sites all blur together. When your website looks identical to ten competitors, price becomes the only differentiator — and that's a race to the bottom you don't want to run.",
        ],
      },
      {
        heading: "4. It doesn't show up on Google",
        paragraphs: [
          "Search your main service + your city. If you're not on page one, your competitors are getting the customers who search. This is usually a technical SEO problem — fixable, but not by itself.",
        ],
      },
      {
        heading: "5. It doesn't work well on phones",
        paragraphs: [
          "Most of your visitors are on mobile. If buttons are tiny, text overflows, or images take forever, mobile users bounce. Test your own site on your phone right now — be honest about what you see.",
        ],
      },
      {
        heading: "What to do about it",
        paragraphs: [
          "You don't always need a full rebuild — sometimes a speed and conversion tune-up is enough. We offer a free website audit: we'll check your speed, mobile experience and SEO, and tell you honestly what's worth fixing. No obligation, just answers.",
        ],
      },
    ],
  },
  {
    slug: "wordpress-vs-static-website",
    title: "WordPress vs. Static Websites: Which Is Better for Your Business?",
    excerpt:
      "WordPress powers 40% of the web — but it's also the most hacked platform on earth. Here's the honest comparison.",
    date: "2026-10-24",
    readMins: 7,
    keywords: ["wordpress vs static", "website security", "static website benefits"],
    body: [
      {
        paragraphs: [
          "WordPress powers over 40% of all websites — and it's also the most hacked platform on the internet. Thousands of business sites get compromised every month through outdated plugins and themes, often without the owner noticing for months while spam and malware quietly destroy their Google rankings.",
          "So is WordPress still the right choice for a small business? Here's the honest breakdown.",
        ],
      },
      {
        heading: "Where WordPress wins",
        paragraphs: [
          "WordPress shines when you publish content constantly and want non-technical staff to edit everything through a dashboard. Its plugin ecosystem is enormous, and any freelancer on earth can maintain it. For content-heavy blogs and news sites, it's still a reasonable choice — if it's kept updated and secured.",
        ],
      },
      {
        heading: "Where WordPress loses",
        paragraphs: [
          "Security is the big one. Every plugin is a potential door for attackers, and the average business owner never updates them. Then there's speed: WordPress sites with page builders are notoriously slow, and slow sites rank worse and convert worse. You're also paying for hosting that can run PHP and a database — forever.",
        ],
      },
      {
        heading: "The static alternative",
        paragraphs: [
          "A static website is just files — HTML, CSS and JavaScript. There's no database to hack, no login page to attack, no plugins to update. The result: pages that load in under a second, near-perfect security by design, and hosting that costs almost nothing.",
          "The trade-off? Content changes need a developer's touch rather than a dashboard click. For most small business sites that change content a few times a year, that's a trade worth making — especially with an agency on call.",
        ],
      },
      {
        heading: "Our take",
        paragraphs: [
          "For brochure and lead-generation business sites, we now build static-first: maximum speed, maximum security, minimum maintenance. For stores and apps with dynamic needs, we pick the right tool per project. The platform should serve your business — not the other way around.",
          "Not sure which fits you? Ask us on WhatsApp — we'll recommend honestly, even if the answer isn't us.",
        ],
      },
    ],
  },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Work" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];

/* ==========================================================================
   PROGRAMMATIC SEO DATA — cities & per-service detail content.
   Appended for the service / service×city / locations page layer.
   City copy is written per city (real local business context), never
   name-swapped boilerplate.
   ========================================================================== */

export type City = {
  slug: string;
  name: string;
  province: string;
  /** Neighbourhoods / commercial areas, as a readable phrase. */
  areas: string;
  /** Dominant local business sectors, as a readable phrase. */
  sectors: string;
  /** Unique paragraph about this city's business landscape (~100 words). */
  overview: string;
  /** Unique note on how customers in this city judge businesses online. */
  marketNote: string;
  /** How delivery / meetings work for clients in this city. */
  meetingNote: string;
  /** Two city-specific FAQs (delivery, communication, local market). */
  faqs: { q: string; a: string }[];
};

export const CITIES: City[] = [
  {
    slug: "lahore",
    name: "Lahore",
    province: "Punjab",
    areas: "DHA, Gulberg, Johar Town, Model Town and the Old City",
    sectors: "food brands, fashion labels, traders and tech startups",
    overview:
      "Lahore runs on appetite and ambition. From the food brands of MM Alam Road and Gulberg to the wholesale traders around Shah Alam and Anarkali, and a fast-growing startup scene in Johar Town and DHA, the city's businesses compete hard for attention — and increasingly that competition happens on a phone screen. Customers here discover a restaurant, boutique or service on Instagram, check its website for credibility, and message on WhatsApp within minutes. A slow, outdated site quietly sends that customer to the shop next door. Lahore businesses that invest in a fast, polished online presence consistently out-convert rivals who rely on footfall alone.",
    marketNote:
      "Lahore customers are brand-conscious and quick to judge. A professional website is often the difference between being seen as a serious business and being scrolled past — especially in food, fashion and lifestyle categories where presentation is half the product.",
    meetingNote:
      "We work with Lahore clients over WhatsApp and video calls, with screen-shared design reviews at every stage. Most clients tell us it is faster than crossing Lahore traffic for office visits — and every decision is documented in your chat.",
    faqs: [
      {
        q: "Can we meet in person in Lahore before starting?",
        a: "Our process is remote-first: discovery, design reviews and delivery all happen on WhatsApp and video calls with screen-sharing, so you see exactly what we see. For larger Lahore projects we can schedule a meeting in Gulberg or DHA — just ask when you message us.",
      },
      {
        q: "Do you understand the Lahore market?",
        a: "Yes. Lahore buyers move from Instagram to website to WhatsApp in minutes, and they compare you against polished DHA and Gulberg competitors. We design for that behaviour: strong visuals, instant WhatsApp contact, and pages that load fast on mobile data.",
      },
    ],
  },
  {
    slug: "karachi",
    name: "Karachi",
    province: "Sindh",
    areas: "Clifton, DHA, Saddar, Tariq Road and Korangi",
    sectors: "wholesalers, retailers, exporters and industrial firms",
    overview:
      "Karachi is Pakistan's commercial engine — a port city where Saddar wholesalers, Tariq Road retailers, Clifton and DHA boutiques, and Korangi's industrial firms all trade at serious scale. In a market this crowded, buyers vet suppliers online long before they visit a godown or showroom: they search, compare websites, and message the business that looks most trustworthy. Karachi's pace punishes slow websites and rewards businesses that answer fast on WhatsApp. Whether you move containers, clothing or consumer electronics, a credible, quick-loading online presence works like a full-time salesperson in a city that never really closes.",
    marketNote:
      "In Karachi, scale is the challenge: thousands of competitors are one search away. Businesses win by looking established online — clear catalogues, real contact details and fast replies — because buyers shortlist suppliers from their phones.",
    meetingNote:
      "Karachi projects run smoothly on WhatsApp and video calls, which suits the city's distances: no Clifton-to-Korangi commutes for a design review. You get screen-shared previews, written milestones and a fixed quote before any build starts.",
    faqs: [
      {
        q: "How will we communicate during the project from Karachi?",
        a: "Everything runs on WhatsApp and scheduled video calls in Pakistan time. You approve designs from screen-shared previews, and every milestone — content, design, build, launch — is confirmed in writing in the chat thread.",
      },
      {
        q: "Can you handle a large Karachi catalogue or product range?",
        a: "Yes. Karachi wholesalers and retailers often start with hundreds of products. We structure catalogues by category from day one and set up a WhatsApp order flow that scales, so adding products later stays simple for your own team.",
      },
    ],
  },
  {
    slug: "islamabad",
    name: "Islamabad",
    province: "Islamabad Capital Territory",
    areas: "Blue Area, the F-sectors, DHA Phase 2 and Bahria Enclave",
    sectors: "tech startups, cafés, consultancies, NGOs and professional services",
    overview:
      "Islamabad's business scene is polished and professional: tech startups in Blue Area and the F-sectors, cafés and clinics serving a discerning clientele, NGOs and development-sector organisations, and consultancies working with government-adjacent clients. Expectations here are high — proposals are compared side by side, websites are scrutinised, and an amateur online presence undermines an otherwise strong firm. The capital's large expatriate and diplomatic community also finds everything through Google. A clean, fast website with clear services, credible copy and easy WhatsApp contact is close to mandatory for winning this market.",
    marketNote:
      "Islamabad clients — including NGOs, embassies' vendors and corporate buyers — routinely check a firm's website before shortlisting it. Clean design, correct English and visible credentials matter more here than anywhere else in Pakistan.",
    meetingNote:
      "We serve Islamabad clients remotely with structured video-call reviews and written approvals at each stage — the same process our startup and consultancy clients prefer, because everything stays documented and decision-making stays fast.",
    faqs: [
      {
        q: "Do you work with NGOs and consultancies in Islamabad?",
        a: "Yes — professional-services firms are a natural fit. We build clear service pages, team and credential sections, and enquiry flows that match how Islamabad buyers evaluate vendors: carefully, and mostly online before the first call.",
      },
      {
        q: "Can the website be in polished English for an international audience?",
        a: "Absolutely. Many Islamabad clients serve expatriates, donors and overseas partners. We write and structure content in professional English (Urdu versions are possible too), with the metadata and speed setup international visitors expect.",
      },
    ],
  },
  {
    slug: "rawalpindi",
    name: "Rawalpindi",
    province: "Punjab",
    areas: "Saddar, Raja Bazaar, Commercial Market, Bahria Town and Chaklala",
    sectors: "bazaar wholesalers, retailers, clinics, schools and housing ventures",
    overview:
      "Rawalpindi blends old-city trading muscle with new-city ambition. Raja Bazaar and Saddar wholesalers move goods across northern Pakistan, Commercial Market retailers serve dense neighbourhood demand, and Bahria Town and Chaklala ventures chase a growing middle-class customer. Many Pindi businesses also serve Islamabad's commuter market — customers who live in one city and shop in the other, and who find businesses almost entirely through their phones. For traders used to competing on relationships, a proper website opens a second front: Google searches from customers who have never walked past the shop, in either twin city.",
    marketNote:
      "Rawalpindi buyers are value-conscious and comparison-driven, and many split their lives between Pindi and Islamabad. Showing up on Google for both cities — with prices, offers and WhatsApp contact up front — wins enquiries that footfall never reaches.",
    meetingNote:
      "Twin-city clients work with us over WhatsApp and video calls, with screen-shared design approvals. Because Rawalpindi and Islamabad share one market, we also advise on covering both cities in your site's content and local SEO from the start.",
    faqs: [
      {
        q: "Can my website target both Rawalpindi and Islamabad customers?",
        a: "Yes, and for most Pindi businesses it should. We structure your service and location content so Google understands you serve the twin cities, without duplicate pages or spammy tricks — one credible site, two markets covered.",
      },
      {
        q: "I run a traditional bazaar business. Is a website worth it for me?",
        a: "For Raja Bazaar and Saddar traders, the win is wholesale enquiries: buyers from smaller cities search online before travelling. A catalogue-style site with WhatsApp ordering turns your existing reputation into orders from customers you would never meet in the bazaar.",
      },
    ],
  },
  {
    slug: "faisalabad",
    name: "Faisalabad",
    province: "Punjab",
    areas: "D Ground, Jaranwala Road, Millat Town and the bazaars around Ghanta Ghar",
    sectors: "textile mills, exporters, dyers, retailers and agri suppliers",
    overview:
      "Faisalabad is Pakistan's textile heartland. Mills, power looms, dyeing units and exporters around the city supply garments to the world, while the eight bazaars of Ghanta Ghar and retail hubs like D Ground serve a huge local market. Export buyers in Europe and the Gulf research Faisalabad suppliers online first — a mill without a credible website often never makes the shortlist, however good its fabric is. Locally, retailers and agri suppliers face the same shift as customers move to WhatsApp ordering. For both audiences, a fast, professional website turns Faisalabad's manufacturing strength into enquiries instead of missed opportunities.",
    marketNote:
      "Faisalabad has two audiences at once: overseas export buyers who judge credibility from your website alone, and local customers who order on WhatsApp. A strong site has to satisfy both — export-grade presentation, local-grade convenience.",
    meetingNote:
      "Faisalabad projects are handled over WhatsApp and video calls with screen-shared reviews. For mills and exporters, we schedule calls around production and buying-season calendars, and keep every approval in writing for your records.",
    faqs: [
      {
        q: "Can a website really help a Faisalabad textile exporter get buyers?",
        a: "It is often the first filter. Gulf and European buyers Google suppliers before contacting anyone; a credible site with your product range, certifications and an easy enquiry button gets you onto shortlists that trade fairs alone no longer guarantee.",
      },
      {
        q: "Do you build sites for local Faisalabad retailers too?",
        a: "Yes — D Ground and Ghanta Ghar retailers use our WhatsApp-first stores and business websites to take orders beyond walk-in traffic. The process is fully remote and designed for owners who are busy running the shop all day.",
      },
    ],
  },
  {
    slug: "multan",
    name: "Multan",
    province: "Punjab",
    areas: "Bosan Road, Gulgasht, Cantt and the Old City around the shrines",
    sectors: "mango and agri traders, cotton businesses, tourism services and retailers",
    overview:
      "Multan trades on agriculture and heritage. The city's mango exporters ship fruit across the Gulf every summer, its cotton and agri-input businesses anchor South Punjab's economy, and the shrines of Shah Rukn-e-Alam and Bahauddin Zakariya draw visitors year-round — visitors who need hotels, transport and food they can find and book from their phones. Bosan Road and Gulgasht retailers serve a growing urban customer that increasingly shops online first. Multan businesses that show up professionally on Google capture demand that used to depend entirely on word of mouth, seasonal rush and passing trade.",
    marketNote:
      "Multan demand is seasonal and mobile: mango season, urs festivals and wedding season all spike searches. Businesses whose websites load fast and answer on WhatsApp convert those spikes; everyone else watches the season pass.",
    meetingNote:
      "We work with Multan clients remotely on WhatsApp and video calls, planning builds around your season — for example, getting a mango exporter's site live well before harvest, not during it. Every stage is approved by you in writing.",
    faqs: [
      {
        q: "We are seasonal — can the website be ready before our peak season?",
        a: "Yes, if we plan backwards from it. Tell us your season dates on the first call (mango harvest, urs, wedding season) and we set a timeline that launches — with content loaded — comfortably before demand peaks.",
      },
      {
        q: "Can my Multan business take bookings or orders from visitors?",
        a: "Yes. Hotels, caterers, transport and retailers around the shrines and Bosan Road use our booking and WhatsApp order flows so visitors can reserve from their phones instead of wandering the Old City comparing options.",
      },
    ],
  },
  {
    slug: "sargodha",
    name: "Sargodha",
    province: "Punjab",
    areas: "Satellite Town, University Road, Qainchi Mor and the main city bazaars",
    sectors: "kinnow exporters, retailers, clinics, schools and local services",
    overview:
      "Sargodha is kinnow country — its citrus orchards and packing houses export across the Middle East and beyond, and export buyers judge Sargodha firms by what they find online long before any visit. Closer to home, Satellite Town and University Road retailers, clinics, academies and services compete for a loyal local customer who now checks Google and WhatsApp before visiting any shop. Sargodha is also home ground for CodeHubb: our team is based in the Sargodha region, so local clients get the easiest in-person access we offer anywhere — real meetings, and a website built by people who know this market firsthand.",
    marketNote:
      "Sargodha customers are loyal but they still verify online: a clinic, academy or exporter with a proper website and active WhatsApp presence feels established, while even well-known local names lose enquiries if Google shows nothing credible.",
    meetingNote:
      "Sargodha is our home region, so local clients can meet us in person as well as on WhatsApp — content collection, design reviews and launch training can all happen face to face if you prefer. No other city gets a shorter path to us.",
    faqs: [
      {
        q: "Can we meet in person in Sargodha?",
        a: "Yes — Sargodha is home ground for CodeHubb. We are based in the Sargodha region, so kickoff meetings, content collection and launch training can happen face to face, alongside the usual WhatsApp updates between meetings.",
      },
      {
        q: "Can a website help Sargodha kinnow exporters reach Gulf buyers?",
        a: "That is exactly where it pays off fastest. Buyers in the Gulf research packers and exporters online; a professional site presenting your grades, packing capacity and export process — with a one-tap enquiry button — turns seasonal interest into real orders.",
      },
    ],
  },
  {
    slug: "peshawar",
    name: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    areas: "University Road, Hayatabad, Saddar and the Old City bazaars",
    sectors: "traders, importers, retailers, clinics and education businesses",
    overview:
      "Peshawar has traded with Central Asia for centuries, and its merchants still move goods between the Karkhano markets, the Old City bazaars and markets far beyond the border. Today's Peshawar customer, though, is thoroughly digital: University Road and Hayatabad retailers, clinics, academies and importers are discovered through phones, judged by their websites, and contacted on WhatsApp. Traders supplying regional and cross-border buyers also find that partners vet them online before any dealing begins. A trustworthy, fast website helps Peshawar businesses convert a historic trading reputation into modern, measurable enquiries — locally and internationally.",
    marketNote:
      "Peshawar buyers trust reputation — and increasingly they verify it online. A business that looks established on Google and replies quickly on WhatsApp wins both the Hayatabad family customer and the out-of-city wholesale buyer.",
    meetingNote:
      "Peshawar projects run on WhatsApp and video calls with screen-shared design reviews, in Pakistan time and in English or Urdu as you prefer. Cross-border and out-of-city clients of yours will reach you through the site — we make sure that path is effortless.",
    faqs: [
      {
        q: "How do we work together if I am based in Peshawar?",
        a: "Remotely and smoothly: discovery on a call, design approvals by screen-share, and every milestone confirmed on WhatsApp. Most Peshawar clients find this easier than office visits — University Road traffic alone makes the case.",
      },
      {
        q: "Can my website serve buyers outside Peshawar, including cross-border traders?",
        a: "Yes. We build clear product and service pages with WhatsApp enquiry flows that work for buyers anywhere, plus the speed and structure Google needs to show your business to searchers well beyond Khyber Pakhtunkhwa.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Per-service long-form content for /services/<slug>/ and city pages. */
/* ------------------------------------------------------------------ */
export type ServiceDetail = {
  /** Two long intro paragraphs expanding SERVICES[].description. */
  intro: [string, string];
  /** Who this service is for (~70-90 words). */
  whoFor: string;
  /** Four-step process. */
  process: { title: string; text: string }[];
  /** Four service-specific FAQs. */
  faqs: { q: string; a: string }[];
  /** Short phrase used in city-page titles, e.g. "Business Website Design". */
  cityTitle: string;
  /** One-line angle used in city-page composition. */
  cityAngle: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "business-websites": {
    cityTitle: "Business Website Design",
    cityAngle:
      "a fast business website that turns local searches into WhatsApp enquiries",
    intro: [
      "A business website has one job: turn a visitor into an enquiry. Our business websites are designed around that single outcome. Every page is structured to answer the questions a buyer actually asks — what do you offer, why should I trust you, and how do I reach you — and then put WhatsApp one tap away. There are no bloated themes, no slow page builders and no filler pages: just a clean, custom design that loads in under a second and makes your business look like the obvious choice in your market.",
      "Technically, we build static-first, which means your pages are pre-rendered files rather than a fragile database-driven stack. The result is 90+ PageSpeed scores, near-perfect security (there is no admin login for attackers to target), and hosting that costs almost nothing to run. On-page SEO foundations come standard: semantic headings, metadata, sitemap, Google Search Console setup and mobile-first layouts that Google's mobile index rewards. You get a website that is fast for customers and legible for search engines at the same time.",
    ],
    whoFor:
      "Business websites suit traders, clinics, restaurants, professional firms and service businesses that rely on enquiries rather than online checkout. If customers currently find you through referrals and word of mouth, a proper website multiplies that trust: every referral Googles you before calling, and what they find decides whether the call happens. It is also the right starting point for new businesses that need to look established from day one.",
    process: [
      {
        title: "Discovery & strategy",
        text: "We learn your business, customers and competitors on a WhatsApp call, then agree the page structure and the one action each page must drive.",
      },
      {
        title: "Design you approve",
        text: "You review a real design of your homepage — colours, layout, copy — and we revise until you approve it. Nothing is built on a guess.",
      },
      {
        title: "Build & speed tuning",
        text: "We build every page mobile-first, optimise images and code, and tune until PageSpeed scores are 90+ on mobile and desktop.",
      },
      {
        title: "Launch & handover",
        text: "We connect your domain, set up Search Console, test every WhatsApp button, and hand over with a walkthrough so you know exactly what you own.",
      },
    ],
    faqs: [
      {
        q: "How much does a business website cost?",
        a: "Our Starter package begins at $199 (Rs 38,000) for 5 pages and the Business package at $449 (Rs 80,000) for 12 pages with conversion copywriting help. Your exact quote depends on pages and features, and it is always fixed in writing before we start — no mid-project surprises.",
      },
      {
        q: "Can you redesign my existing website instead of starting over?",
        a: "Yes. We start with a free audit of your current site — speed, mobile experience, SEO and conversion blockers — and tell you honestly whether a redesign or a targeted fix is the better spend. Many clients keep their domain and content while we rebuild everything underneath.",
      },
      {
        q: "Do I need to provide all the text and photos?",
        a: "No. You provide the facts about your business; we polish the copy for conversions as part of the service. For photos, we can work with your own images or licensed photography. The Business package includes structured copywriting help for your key pages.",
      },
      {
        q: "Will my business website rank on Google?",
        a: "Every build includes technical SEO foundations: fast loading, proper heading structure, metadata, a sitemap and Search Console configuration. Rankings then grow with content — which is why we offer blog setup and a dedicated SEO service once the foundations are in place.",
      },
    ],
  },
  "ecommerce-stores": {
    cityTitle: "E-Commerce Store Development",
    cityAngle:
      "an online store with WhatsApp checkout that local customers actually complete",
    intro: [
      "Most online stores in our market fail at checkout: long forms, card-only payments and carts that confuse first-time buyers. Our e-commerce stores are built around how people here actually shop — browse on the phone, tap a product, and order on WhatsApp in under a minute. Cash on Delivery and bank transfer are supported from day one, and every order lands in your WhatsApp with the product, quantity and customer details already organised. No abandoned carts, no payment-gateway rejections, no lost sales.",
      "Behind that simple flow sits a proper store: a structured product catalogue with categories, search-friendly product pages, and an easy way for you to add, edit and retire products without touching code. Product images are optimised so category pages stay fast even with hundreds of items, and every page carries the metadata Google needs to show your products in search. It is a store designed for clothing, food, electronics and local brands that sell through conversation — which, in Pakistan, is most of them.",
    ],
    whoFor:
      "E-commerce stores suit clothing and fashion labels, food and grocery brands, electronics shops, cosmetics sellers and any retailer whose customers already ask for prices on WhatsApp or Instagram. If you are taking orders through DMs today and losing track of them, a store with a WhatsApp checkout flow turns that chaos into a catalogue you can share, search engines can rank, and customers can order from at 2am.",
    process: [
      {
        title: "Store planning",
        text: "We map your categories, delivery areas, payment methods and order workflow, then agree the catalogue structure before any design begins.",
      },
      {
        title: "Design & checkout flow",
        text: "You approve the store design and we build the WhatsApp checkout: product page to pre-filled order message in the fewest possible taps.",
      },
      {
        title: "Catalogue & payments setup",
        text: "We load your initial products with optimised images, configure COD and bank transfer, and set up order notifications to your WhatsApp.",
      },
      {
        title: "Launch & training",
        text: "We test real orders end to end, then train you to add products, update prices and manage orders confidently on your own.",
      },
    ],
    faqs: [
      {
        q: "Why WhatsApp checkout instead of a normal cart?",
        a: "Because in Pakistan most buyers prefer it. WhatsApp checkout removes account creation, card forms and payment-gateway friction — the three biggest causes of abandoned carts here. You confirm the order in chat, agree delivery, and get paid by COD or bank transfer.",
      },
      {
        q: "Can I add and edit products myself?",
        a: "Yes. Product management is part of the build: you can add products, change prices and mark items out of stock without any technical help. We train you at handover and stay available during your free support window.",
      },
      {
        q: "Do you support Cash on Delivery and delivery charges?",
        a: "Yes. COD and bank transfer are standard. Delivery charges can be flat, per-city or confirmed in the WhatsApp conversation for unusual orders — we set up whichever model matches how you actually ship.",
      },
      {
        q: "How many products can my store hold?",
        a: "There is no practical cap for a local store — hundreds or thousands of products are fine because category and product pages are built to stay fast. If you are starting, we recommend launching with your best sellers and expanding weekly.",
      },
    ],
  },
  "mobile-apps": {
    cityTitle: "Mobile App Development",
    cityAngle:
      "a Flutter mobile app that puts your business on your customers' home screens",
    intro: [
      "A mobile app puts your business on the one screen your customers check a hundred times a day. We build cross-platform apps with Flutter — a single codebase that ships as a native-feel iOS and Android app — so you pay for one build, not two, without compromising performance. Smooth 60fps interfaces, push notifications that bring customers back, and offline-friendly design where it matters: your app feels like it was built by a product team, because it was.",
      "We handle the full journey: scoping what the first version should (and should not) include, designing the interface, building the app and its backend, and guiding you through Play Store and App Store publishing, review questions included. Whether it is a booking app, a delivery app, a customer loyalty app or an internal tool for your staff, you get one accountable team from first sketch to live listing — and a codebase you own outright when we are done.",
    ],
    whoFor:
      "Mobile apps suit businesses whose customers return repeatedly: clinics with appointments, restaurants and stores with reordering, gyms, academies, service companies with field staff, and startups validating a product idea. If your customers currently re-order, re-book or check status through calls and chats, an app turns that repeat behaviour into a self-serve habit — and push notifications give you a marketing channel you do not have to rent.",
    process: [
      {
        title: "App blueprint",
        text: "We define the first version's features, screens and backend needs, and cut everything that can wait — so you launch sooner and cheaper.",
      },
      {
        title: "Interface design",
        text: "You approve screen-by-screen designs before development, so the app you imagine is the app that gets built — no surprises at the end.",
      },
      {
        title: "Flutter build",
        text: "One codebase, built and tested on real iOS and Android devices, with push notifications, backend and admin panel wired in.",
      },
      {
        title: "Store publishing",
        text: "We prepare listings, screenshots and policies, submit to both stores, and handle review feedback until your app is live.",
      },
    ],
    faqs: [
      {
        q: "Is one Flutter codebase really as good as two native apps?",
        a: "For the vast majority of business apps, yes. Flutter compiles to native code and renders at 60fps; users cannot tell the difference. You save roughly half the build and maintenance cost, and every feature ships to iPhone and Android simultaneously.",
      },
      {
        q: "How long does store approval take?",
        a: "Google Play typically reviews new apps within a few days; Apple's App Store usually takes one to two weeks including possible questions. We prepare listings and policy pages carefully to minimise rejections, and we handle resubmissions for you.",
      },
      {
        q: "What does an app cost compared to a website?",
        a: "Apps are scoped individually under our Scale tier because features drive the price. A focused first version — core screens, backend, notifications, store publishing — is far cheaper than most people expect. Message us with your idea for a fixed, itemised quote.",
      },
      {
        q: "Can you update the app after launch?",
        a: "Yes. You own the codebase, and we offer support plans for updates, new features and store-policy changes. Because the app is one codebase, an update ships to both platforms in a single release.",
      },
    ],
  },
  "ai-solutions": {
    cityTitle: "AI Chatbot & Automation Services",
    cityAngle:
      "AI chatbots and automation that answer your customers 24/7, even while you sleep",
    intro: [
      "Every unanswered message is a customer quietly leaving. Our AI solutions — delivered by MindCrafts AI, the AI division of CodeHubb — make sure that never happens: an AI chatbot trained on your business answers customers on your website and WhatsApp at 2pm and 2am alike, qualifies leads while you work, and hands the conversation to a human the moment it should. This is not a generic robot bolted onto your site; it is trained on your prices, services, timings and policies, in the language your customers use.",
      "Beyond chatbots, we automate the busywork around them: lead follow-ups that never get forgotten, booking confirmations, order updates and data entry between the tools you already use. Most teams recover several hours a week in the first month. We start with a use-case audit so you only automate what genuinely pays back, integrate with your existing website or store, and train your team to supervise and improve the system — you stay in control while the repetitive work disappears.",
    ],
    whoFor:
      "AI solutions suit any business drowning in repetitive questions: stores answering the same price and delivery queries all day, clinics and salons handling bookings, academies fielding admissions questions, and service firms losing leads to slow replies. If your team repeats the same answers daily, or enquiries arrive after hours and go cold by morning, an AI assistant pays for itself quickly — and it scales without hiring.",
    process: [
      {
        title: "Use-case audit",
        text: "We review your real customer conversations and pick the automations with the fastest payback — not the fanciest demos.",
      },
      {
        title: "Training on your business",
        text: "We train the assistant on your FAQs, prices, services and policies, and test it against tricky questions before anyone sees it.",
      },
      {
        title: "Integration",
        text: "We connect the assistant to your website, WhatsApp and lead flow, with clean human hand-off rules for anything sensitive.",
      },
      {
        title: "Team training & tuning",
        text: "Your team learns to review conversations, correct answers and improve the assistant over time — we tune alongside you at first.",
      },
    ],
    faqs: [
      {
        q: "Will the chatbot sound robotic to my customers?",
        a: "No. We train it on your business's real answers and tone, and customers usually experience it as a fast, helpful reply — which is what it is. Anything emotional, complex or high-value is handed to a human immediately by design.",
      },
      {
        q: "Can the AI answer in Urdu as well as English?",
        a: "Yes. Our assistants handle English, Urdu and the Roman Urdu mix most customers actually type, and can switch languages mid-conversation. For businesses in Pakistan this matters enormously, and it is configured from day one.",
      },
      {
        q: "What happens when the AI does not know an answer?",
        a: "It says so honestly, captures the customer's question and contact details, and alerts your team — nothing is invented. Those unanswered questions become a weekly improvement list, so the assistant gets smarter where it counts.",
      },
      {
        q: "Is my business data safe with an AI system?",
        a: "Your training content is used only for your assistant. We avoid collecting personal customer data inside the AI beyond what the conversation needs, and we will walk you through exactly what is stored where before launch.",
      },
    ],
  },
  "web-apps": {
    cityTitle: "Web App & Dashboard Development",
    cityAngle:
      "custom web software that replaces spreadsheets and manual follow-ups with one fast dashboard",
    intro: [
      "When a business outgrows spreadsheets, the symptoms are familiar: the same data typed in three places, bookings double-entered, and the one person who 'knows the sheet' becoming a bottleneck. Our web apps replace that chaos with software shaped around how you actually operate — booking and appointment systems, admin dashboards, CRMs, customer portals and internal tools that your team opens in a browser and just uses. No installs, no version confusion, no emailed spreadsheets.",
      "We build web applications to be fast, secure and boring in the best sense: role-based logins so staff only see what they should, data validation that stops bad entries at the door, and an architecture that scales from five users to five hundred without a rebuild. API integrations connect your app to the tools and services you already rely on, and because it runs in the browser, your team can work from the office, from home or from a phone in the field.",
    ],
    whoFor:
      "Web apps suit businesses managing bookings, inventory, customers or staff through spreadsheets, registers or scattered chats: clinics, academies, distributors, service companies, rental businesses and growing retailers. If a process in your business is repeated daily, involves several people, and currently depends on someone remembering steps, it is a web app waiting to be built — and it usually pays back in errors avoided alone.",
    process: [
      {
        title: "Process mapping",
        text: "We document your current workflow step by step, find where time and errors leak, and design the app around the fixed process — not the broken one.",
      },
      {
        title: "Clickable prototype",
        text: "You click through a working prototype of the key screens and flows before full development, so changes are cheap and expectations are aligned.",
      },
      {
        title: "Build in sprints",
        text: "We build in short sprints with weekly demos. You see real progress, test with your own data, and steer while there is time to steer.",
      },
      {
        title: "Deploy & train",
        text: "We deploy securely, migrate your existing data where needed, and train your team — with documentation your future hires can learn from.",
      },
    ],
    faqs: [
      {
        q: "Can a web app really replace our spreadsheets?",
        a: "For the processes we target — bookings, records, follow-ups, reporting — yes, and it removes the classic spreadsheet failures: overwritten formulas, duplicate versions and data only one person understands. We migrate your existing sheet data into the app during the build.",
      },
      {
        q: "How secure is a custom web app?",
        a: "We build with role-based access, individual logins, validated inputs and encrypted connections as standard, and host on reputable infrastructure. Your data is backed up, and access can be revoked per user the day someone leaves your team.",
      },
      {
        q: "Where will the web app be hosted?",
        a: "On reliable cloud hosting matched to your scale and budget, under your own account wherever possible — you own the app and the data. We advise on the options and ongoing costs in plain language before you commit.",
      },
      {
        q: "Can the app grow as my business grows?",
        a: "That is the point of custom software. We architect for scale from the start — more users, more locations, new modules — so growth means extending the app, not replacing it. Most clients add features in small phases after launch.",
      },
    ],
  },
  "seo-speed": {
    cityTitle: "SEO & Speed Optimization Services",
    cityAngle:
      "technical SEO and speed fixes that help local customers find you on Google first",
    intro: [
      "A beautiful website that nobody finds is an expensive secret. Our SEO and speed optimization service fixes the technical reasons Google overlooks your site: slow Core Web Vitals, missing or duplicated metadata, broken heading structure, unindexed pages and mobile layouts that quietly fail on real phones. We start with a full technical audit of your existing site, rank every issue by impact, and then fix them properly — in the code, not with plugin bandages that fall off at the next update.",
      "Speed is where rankings and revenue meet: over half of mobile visitors abandon a page that takes longer than three seconds, and Google's ranking systems know it. We optimise images, code delivery and server response until your Core Web Vitals pass, then handle the on-page layer — keyword-mapped titles, descriptions and content structure — and configure Google Search Console so you can watch impressions and rankings climb in monthly reports you can actually read.",
    ],
    whoFor:
      "SEO and speed optimization suits businesses that already have a website but get little from it: sites that do not appear for their own service-plus-city searches, sites that feel slow on mobile, and sites that lost traffic after a redesign or years of neglect. It is also the right second phase for any business whose new website has launched and now needs to climb — foundations first, then growth.",
    process: [
      {
        title: "Full technical audit",
        text: "We crawl your site and measure speed, indexation, metadata, structure and mobile usability, then rank every fix by expected impact.",
      },
      {
        title: "Speed optimization",
        text: "Images, code and caching are tuned until Core Web Vitals pass on real mobile devices — not just in a lab screenshot.",
      },
      {
        title: "On-page & metadata",
        text: "Titles, descriptions, headings and internal links are mapped to the keywords your customers actually search, page by page.",
      },
      {
        title: "Search Console & reporting",
        text: "We configure Search Console, submit clean sitemaps, and report monthly on rankings, impressions and what we fixed or found next.",
      },
    ],
    faqs: [
      {
        q: "How long until I see ranking improvements?",
        a: "Technical fixes are often reflected in Search Console within weeks; meaningful ranking movement typically builds over two to three months as Google re-crawls and re-evaluates. We show you the leading indicators monthly so progress is visible before it is dramatic.",
      },
      {
        q: "Can you guarantee a number-one ranking?",
        a: "No honest agency can — Google's algorithm is not ours to promise. What we guarantee is the work itself: every technical issue found and fixed, best-practice on-page SEO applied, and transparent reporting. That is what durable rankings are actually made of.",
      },
      {
        q: "Do I need a new website, or can you fix my current one?",
        a: "Usually we can fix the current one. The audit comes first and it is honest: if your platform is fundamentally unfixable — a severely bloated builder site, for example — we will say so and explain the rebuild option before you spend on optimization that cannot hold.",
      },
      {
        q: "What do the monthly reports include?",
        a: "Rankings for your target keywords, impressions and clicks from Search Console, Core Web Vitals status, work completed that month, and the next fixes planned — in plain language, with no vanity metrics padding the page count.",
      },
    ],
  },
};
