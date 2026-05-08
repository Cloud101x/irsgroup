export const carouselSlides = [
  { label: 'IRS Green Energy', src: '/solar.jpeg', alt: 'Solar farm', text: 'IRS Green Energy — Solar & Renewable Power' },
  { label: 'IRS CNG Networks', src: '/cng.jpg', alt: 'Gas pipeline', text: 'IRS CNG Networks — Compressed Natural Gas Infrastructure' },
  { label: 'IRS Oil & Gas', src: '/Oilngas.jpeg', alt: 'Oil refinery', text: 'IRS Oil & Gas Limited — Upstream & Midstream Operations' },
  { label: 'IRS AgriBusiness', src: '/agribiz.jpg', alt: 'Farmland', text: 'IRS AgriBusiness — Agriculture & Food Systems' },
  { label: 'IRS Manufacturing', src: '/manufacturing.jpeg', alt: 'Factory floor', text: 'IRS Manufacturing — Industrial Production' },
  { label: 'IRS Properties', src: '/realty.jpg', alt: 'City skyline', text: 'IRS Properties — Real Estate & Development' },
  { label: 'IRS Healthcare', src: '/health.jpg', alt: 'Hospital', text: 'IRS Healthcare — World-Class Medical Services' },
  { label: 'IRS Electric Mobility', src: '/emobility.png', alt: 'Electric vehicle', text: 'IRS Electric Mobility — EV Infrastructure' },
  { label: 'IRS Fertilizer', src: '/newmethodoff.jpg', alt: 'Crop fields', text: 'IRS Fertilizer Company — Agro-Chemicals & Nutrition' },
  { label: 'IRS Sustainability', src: '/sus.jpg', alt: 'Wind turbines', text: 'IRS Group — Sustainability & ESG Commitments' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Businesses', href: '#sectors' },
  { label: 'Projects', href: '#projects' },
  { label: 'Subsidiaries', href: '#subsidiaries' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Media', href: '#media' },
  { label: 'Careers', href: '#careers' },
]

export const heroStats = [
  { value: '72+', label: 'Years of Enterprise' },
  { value: '10', label: 'Business Sectors' },
  { value: '15k+', label: 'Employees' },
  { value: '₦2T+', label: 'Asset Portfolio' },
]

export const activeSectors = [
  { color: '#40916C', text: 'Clean Energy & Solar Manufacturing' },
  { color: '#C9A84C', text: 'Oil & Gas Exploration' },
  { color: '#60A5FA', text: 'CNG Infrastructure' },
  { color: '#F59E0B', text: 'Agriculture & Fertilizer' },
  { color: '#A78BFA', text: 'Real Estate & Healthcare' },
]

export const tickerItems = [
  'Clean Energy', 'IRS Oil & Gas Limited', 'CNG Infrastructure', 'Solar Manufacturing',
  'Electric Mobility', 'Agriculture & Fertilizer', 'Real Estate', 'Healthcare',
  'IRS Green Energy', 'Manufacturing',
]

export const pillars = [
  { icon: '🏗️', title: 'Industrial Leadership', desc: 'Decades of manufacturing and infrastructure development' },
  { icon: '⚡', title: 'Energy Transition', desc: "Driving Nigeria's clean energy and CNG revolution" },
  { icon: '🌾', title: 'Food Security', desc: "Large-scale agri-investments underpinning Nigeria's food future" },
  { icon: '🤝', title: 'Nation Building', desc: 'Employing tens of thousands and transforming communities' },
]

export const sectors = [
  { icon: '☀️', name: 'Clean Energy', desc: "Utility-scale solar and renewables powering Nigeria's energy transition and grid reliability." },
  { icon: '🔵', name: 'CNG Infrastructure', desc: 'Compressed Natural Gas fueling stations and vehicle conversion networks across Nigeria.' },
  { icon: '🚗', name: 'Electric Mobility', desc: "EV adoption initiatives and charging infrastructure for Nigeria's transport sector." },
  { icon: '🔆', name: 'Solar Manufacturing', desc: 'Domestic production of solar panels and energy storage systems for African markets.' },
  { icon: '🌾', name: 'Agriculture', desc: 'Large-scale farming, commodity processing, and agri-logistics driving food security.' },
  { icon: '🛢️', name: 'Oil & Gas', desc: 'Upstream exploration, midstream infrastructure, and downstream distribution.' },
  { icon: '🏭', name: 'Manufacturing', desc: 'Industrial manufacturing spanning textiles, packaging, consumer goods, and building materials.' },
  { icon: '🧪', name: 'Fertilizer', desc: "Fertilizer production and distribution underpinning Nigeria's agricultural productivity." },
  { icon: '🏢', name: 'Real Estate', desc: "Commercial, residential, and industrial real estate across Nigeria's urban growth corridors." },
  { icon: '🏥', name: 'Healthcare', desc: "World-class hospital facilities and pharmaceutical investment for Nigeria's health sector." },
]

export const bizTabs = [
  { key: 'energy', label: 'Clean Energy' },
  { key: 'cng', label: 'CNG' },
  { key: 'oilgas', label: 'Oil & Gas' },
  { key: 'agri', label: 'Agriculture' },
  { key: 'manufacturing', label: 'Manufacturing' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'healthcare', label: 'Healthcare' },
]

export const bizPanels = {
  energy: {
    label: 'IRS Green Energy',
    tag: 'Clean Energy Division',
    gradient: 'from-[#1B4332] via-[#2D6A4F] to-[#40916C]',
    title: "Illuminating Nigeria's Energy Future",
    paras: [
      "IRS Green Energy is the Group's flagship clean energy subsidiary, developing utility-scale solar installations, mini-grid systems, and distributed renewable energy solutions across Nigeria. Aligned with the Federal Government's energy transition mandate and the Presidential CNG Initiative, IRS Green Energy is positioned to power industries, communities, and critical infrastructure with clean, reliable electricity.",
      'Our solar manufacturing facility in Kano produces panels rated for tropical conditions, with production capacity serving both domestic deployment and West African export markets.',
    ],
    metrics: [
      { val: '500MW', lbl: 'Pipeline Capacity' },
      { val: '12', lbl: 'Active Projects' },
      { val: '₦180B', lbl: 'Committed Investment' },
      { val: '2030', lbl: 'Net-Zero Target' },
    ],
    cta: 'Enquire About Projects',
  },
  cng: {
    label: 'IRS CNG Networks',
    tag: 'CNG Infrastructure',
    gradient: 'from-[#1E3A5F] via-[#2563EB] to-[#60A5FA]',
    title: 'Fuelling the Transition to Clean Gas',
    paras: [
      "IRS CNG Networks is developing Nigeria's most extensive private Compressed Natural Gas fuelling infrastructure, with strategically located stations across Kano, Lagos, Abuja, and major interstate corridors. In alignment with the Federal Government's Presidential CNG Initiative targeting 1 million vehicle conversions by 2027, IRS is a key private sector partner.",
      "The division operates conversion centres, retail fuelling stations, and bulk CNG transport solutions for industrial clients, positioning the Group at the heart of Nigeria's fuel transition.",
    ],
    metrics: [
      { val: '48', lbl: 'Stations Planned' },
      { val: '6', lbl: 'States Covered' },
      { val: '₦85B', lbl: 'Total Investment' },
      { val: '30%', lbl: 'Cost Savings vs PMS' },
    ],
    cta: 'Partnership Enquiries',
  },
  oilgas: {
    label: 'IRS Oil & Gas Limited',
    tag: 'Oil & Gas Division',
    gradient: 'from-[#1A0A00] via-[#7C3900] to-[#C9A84C]',
    title: "Deep Expertise in Nigeria's Hydrocarbon Sector",
    paras: [
      "IRS Oil & Gas Limited brings decades of experience to Nigeria's upstream and midstream petroleum sector. The subsidiary holds exploration acreages across the Niger Delta and North-Central basins, with strategic investments in pipeline infrastructure, oil services, and product distribution networks.",
      'The company works closely with NNPC Limited, the Nigerian Upstream Petroleum Regulatory Commission (NUPRC), and international partners to develop Nigeria\'s hydrocarbon resources with world-class standards for safety and environmental management.',
    ],
    metrics: [
      { val: '3', lbl: 'Exploration Blocks' },
      { val: '25yrs', lbl: 'Sector Experience' },
      { val: '₦220B', lbl: 'Asset Value' },
      { val: '2,800', lbl: 'Direct Employees' },
    ],
    cta: 'Investor Enquiries',
  },
  agri: {
    label: 'IRS AgriBusiness',
    tag: 'Agriculture Division',
    gradient: 'from-[#052e16] via-[#166534] to-[#4ade80]',
    title: 'From Farmgate to Global Market',
    paras: [
      'IRS AgriBusiness operates an integrated agricultural platform spanning large-scale crop cultivation, processing, storage, and distribution. With extensive landholdings across Kano, Jigawa, and Kaduna states, the division produces groundnuts, sesame, sorghum, and other high-value commodities for both domestic processing and export.',
      'Our fertilizer manufacturing subsidiary ensures input supply chain security for Group operations and third-party farmers, while our warehouse network and logistics fleet guarantee post-harvest value preservation.',
    ],
    metrics: [
      { val: '50k', lbl: 'Hectares Cultivated' },
      { val: '12k', lbl: 'Smallholder Partners' },
      { val: '4', lbl: 'Processing Plants' },
      { val: '₦95B', lbl: 'Annual Revenue' },
    ],
    cta: 'Export Enquiries',
  },
  manufacturing: {
    label: 'IRS Manufacturing',
    tag: 'Manufacturing Division',
    gradient: 'from-[#111827] via-[#374151] to-[#9CA3AF]',
    title: 'Made in Nigeria, Built for the World',
    paras: [
      "IRS Manufacturing traces its roots to the Bagauda Textile Mill established in 1972, and has since expanded into a diversified industrial platform. Today, the division encompasses textile and garment production, packaging materials, building products, and consumer goods manufacturing — all anchored in Kano State's industrial heartland.",
      'With modern German and Japanese production lines, ISO-certified quality systems, and a workforce of skilled Nigerian technicians, IRS Manufacturing products meet both domestic demand and international export standards.',
    ],
    metrics: [
      { val: '6', lbl: 'Production Facilities' },
      { val: '5k+', lbl: 'Employees' },
      { val: 'ISO', lbl: 'Certified Quality' },
      { val: '1972', lbl: 'Manufacturing Since' },
    ],
    cta: 'Procurement Enquiries',
  },
  realestate: {
    label: 'IRS Properties',
    tag: 'Real Estate Division',
    gradient: 'from-[#1e1b4b] via-[#4338ca] to-[#818cf8]',
    title: 'Premium Spaces, Enduring Value',
    paras: [
      "IRS Properties develops and manages a premier portfolio of commercial office towers, residential estates, retail hubs, and industrial parks across Nigeria's fastest-growing urban markets. With landmark developments in Kano, Abuja, and Lagos, the company delivers world-class built environments that define Nigeria's modern cityscape.",
      'Our estate management platform offers investors attractive yields through long-term commercial leases, while our residential developments provide aspirational homes for Nigeria\'s growing middle class.',
    ],
    metrics: [
      { val: '₦340B', lbl: 'Portfolio Value' },
      { val: '85+', lbl: 'Properties' },
      { val: '3', lbl: 'Major Cities' },
      { val: '96%', lbl: 'Occupancy Rate' },
    ],
    cta: 'Investment Enquiries',
  },
  healthcare: {
    label: 'IRS Healthcare',
    tag: 'Healthcare Division',
    gradient: 'from-[#0c1a2e] via-[#0e4b7a] to-[#38bdf8]',
    title: 'World-Class Care for Nigerian Communities',
    paras: [
      "IRS Healthcare is building Nigeria's most modern private healthcare infrastructure, beginning with a flagship 300-bed specialist hospital in Kano equipped with cutting-edge diagnostic, surgical, and rehabilitation facilities. The division is developing a network of polyclinics, diagnostic centres, and pharmaceutical distribution across northern Nigeria.",
      'Guided by the belief that every Nigerian deserves world-class medical care, IRS Healthcare partners with leading international medical institutions to bring the best clinical talent and technology to Nigerian patients.',
    ],
    metrics: [
      { val: '300', lbl: 'Bed Flagship Hospital' },
      { val: '8', lbl: 'Planned Facilities' },
      { val: '₦75B', lbl: 'Committed Capital' },
      { val: '2026', lbl: 'Phase 1 Opening' },
    ],
    cta: 'Healthcare Partnerships',
  },
}

export const projects = [
  { tag: 'Energy', title: 'Kano Solar Power Complex — Phase I', location: '📍 Kano State, Nigeria · 250MW · ₦120 Billion', gradient: 'from-[#052e16] via-[#1B4332] to-[#2D6A4F]', large: true },
  { tag: 'CNG', title: 'North-South CNG Corridor', location: '📍 Kano–Lagos Expressway · 24 Stations', gradient: 'from-[#1e3a5f] to-[#1d4ed8]' },
  { tag: 'Oil & Gas', title: 'Niger Delta Exploration Block OML-47', location: '📍 Rivers State · Active Exploration', gradient: 'from-[#3b1f00] to-[#92400e]' },
  { tag: 'Real Estate', title: 'IRS Plaza — Kano Commercial Tower', location: '📍 Kano Central Business District · 28 Floors', gradient: 'from-[#1a0533] to-[#4c1d95]' },
  { tag: 'Agriculture', title: 'Jigawa Integrated Farm Estate', location: '📍 Jigawa State · 20,000 Hectares', gradient: 'from-[#064e3b] to-[#065f46]' },
]

export const leaders = [
  { name: 'Alhaji Rabiu Isyaku Rabiu', role: 'Group Chairman', bg: 'from-[#1B4332] via-[#2D6A4F] to-[#C9A84C]', bio: "Son of the Group's founder, Alhaji Isyaku Rabiu, and steward of the family's industrial legacy spanning seven decades. Leading the Group's strategic transformation into clean energy and next-generation infrastructure." },
  { name: 'Alhaji Muhammad Kabir Rabiu', role: 'Group Managing Director', bg: 'from-[#1e1b4b] via-[#3730a3] to-[#6366f1]', bio: "A seasoned corporate executive with over 25 years of experience across banking, energy, and industrial management. Overseeing the Group's day-to-day operations and cross-sector growth strategy." },
  { name: 'Hajiya Fatima Suleiman', role: 'CFO & Executive Director', bg: 'from-[#0c4a6e] via-[#0369a1] to-[#38bdf8]', bio: "Harvard-educated finance executive who previously led treasury operations at a leading West African investment bank. Driving the Group's capital strategy, financial compliance, and investor relations." },
  { name: 'Engr. Adebayo Oluwatobi', role: 'Chief Energy Officer', bg: 'from-[#052e16] via-[#166534] to-[#4ade80]', bio: "A petroleum engineering expert with field experience across the Niger Delta and international energy markets. Spearheading IRS Group's oil & gas operations and clean energy transition roadmap." },
]

export const sustainPillars = [
  { icon: '🌱', title: 'Energy Transition', desc: "Accelerating Nigeria's transition from fossil fuels to solar, CNG, and distributed renewables through targeted infrastructure investments." },
  { icon: '💧', title: 'Community Impact', desc: 'Creating sustainable employment, supporting smallholder farmers, and investing in healthcare and education in host communities.' },
  { icon: '🏭', title: 'Clean Manufacturing', desc: 'Reducing industrial emissions, optimising waste streams, and integrating circular economy principles across manufacturing operations.' },
]

export const sustainStats = [
  { val: '40%', lbl: 'Emissions Reduction Target by 2030' },
  { val: '500MW', lbl: 'Renewable Energy Pipeline' },
  { val: '12k', lbl: 'Smallholder Farmers Supported' },
  { val: '₦8B', lbl: 'Community Investment Since 2010' },
]

export const timelineLeft = [
  { year: '1952', title: 'Foundation in Kano', body: 'Alhaji Isyaku Rabiu establishes Isyaku Rabiu & Sons, trading in sewing machines, bicycles, and agricultural commodities — building the commercial foundation of the IRS enterprise.' },
  { year: '1963', title: 'Industrial Expansion', body: 'IRS Group joins major business consortia, marking the transition from commodities trading to industrial investment. First forays into manufacturing and financial services.' },
  { year: '1972', title: 'Bagauda Textile Mill', body: 'Establishment of Bagauda Textile Mill, a landmark joint venture manufacturing woven fabrics for military uniforms and the Nigerian domestic market. IRS becomes a manufacturing powerhouse.' },
  { year: '1980s', title: 'Diversification Era', body: "Aggressive expansion into real estate, frozen foods, sugar, insurance, and motor vehicle distribution — establishing IRS as northern Nigeria's most diversified conglomerate." },
]

export const timelineRight = [
  { year: '2000s', title: 'Oil & Gas Entry', body: "IRS Oil & Gas Limited secures its first exploration rights in the Niger Delta, establishing the Group's foothold in Nigeria's most lucrative industrial sector." },
  { year: '2010s', title: 'Generational Transition', body: "The next generation of the Rabiu family assumes stewardship of the Group, bringing fresh vision and international perspective to expand IRS Group's portfolio and governance structures." },
  { year: '2020', title: 'Green Energy Pivot', body: "IRS Green Energy is established, marking the Group's commitment to Nigeria's energy transition. Solar manufacturing operations commence in Kano State." },
  { year: '2024–', title: 'The Next Chapter', body: "Launch of Nigeria's largest private CNG infrastructure network, 300-bed specialist hospital groundbreaking, and 500MW solar pipeline activation — IRS Group's most ambitious decade begins." },
]

export const subsidiaries = [
  { code: 'O&G', name: 'IRS Oil & Gas Limited', sector: 'Upstream & Midstream Petroleum', desc: "Nigeria's upstream exploration and production arm of IRS Group, with active blocks across the Niger Delta and North-Central basins. Operates in full compliance with NUPRC regulations." },
  { code: 'GE', name: 'IRS Green Energy', sector: 'Renewable Energy & Solar', desc: "The clean energy division driving Nigeria's solar revolution. Operates utility-scale solar projects, solar panel manufacturing, and distributed energy systems for off-grid communities." },
  { code: 'CNG', name: 'IRS CNG Networks', sector: 'Compressed Natural Gas Infrastructure', desc: "Building Nigeria's largest private CNG fuelling and conversion network, supporting the Presidential CNG Initiative and transitioning millions of Nigerians to clean, affordable transport fuel." },
  { code: 'MFG', name: 'IRS Manufacturing Industries', sector: 'Industrial Manufacturing', desc: 'Legacy industrial arm of IRS Group with six production facilities across textiles, packaging, building materials, and consumer goods. Heir to the storied Bagauda Textile tradition.' },
  { code: 'AB', name: 'IRS AgriBusiness', sector: 'Agriculture & Food Systems', desc: 'Integrated agri-platform managing 50,000+ hectares, partnering with 12,000 smallholder farmers, and operating four commodity processing plants across northern Nigeria.' },
  { code: 'PP', name: 'IRS Properties', sector: 'Real Estate Development', desc: 'Premier real estate developer managing a ₦340 billion portfolio of office towers, residential estates, and industrial parks in Kano, Abuja, and Lagos.' },
  { code: 'HC', name: 'IRS Healthcare', sector: 'Medical Services & Pharma', desc: "Building northern Nigeria's most advanced private hospital network, starting with a 300-bed specialist centre in Kano delivering world-class diagnostic and surgical care." },
  { code: 'EV', name: 'IRS Electric Mobility', sector: 'EV Infrastructure', desc: 'Pioneering electric vehicle adoption in Nigeria through charging infrastructure, EV fleet leasing, and partnerships with global electric vehicle manufacturers.' },
  { code: 'FT', name: 'IRS Fertilizer Company', sector: 'Agro-Chemicals & Fertilizer', desc: "Producing NPK and urea-based fertilizers for Nigeria's agricultural sector, reducing input costs for farmers and supporting national food security objectives." },
]

export const locations = [
  { name: 'Kano State — Group Headquarters', desc: 'Corporate HQ, Manufacturing, Agriculture, Solar Manufacturing', highlight: true },
  { name: 'Lagos State', desc: 'IRS Properties, Trading Hub, CNG Infrastructure' },
  { name: 'Abuja (FCT)', desc: 'Government Relations, CNG Network, Real Estate' },
  { name: 'Rivers State — Niger Delta', desc: 'IRS Oil & Gas — Exploration Block Operations' },
  { name: 'Jigawa State', desc: 'IRS AgriBusiness — 20,000 Ha Farm Estate' },
  { name: 'Kaduna State', desc: 'Manufacturing Facility, Agricultural Processing' },
]

export const newsItems = [
  { tag: 'Energy', title: 'IRS CNG Networks Opens 12th Fuelling Station on Kano–Abuja Corridor', date: '28 February 2025' },
  { tag: 'Healthcare', title: 'Ground-Breaking Ceremony for IRS 300-Bed Specialist Hospital, Kano', date: '14 January 2025' },
  { tag: 'Agriculture', title: 'IRS AgriBusiness Partners Federal Government on Backward Integration Program', date: '8 December 2024' },
  { tag: 'Corporate', title: 'IRS Group Recognised at Nigeria Business Excellence Awards 2024', date: '22 November 2024' },
  { tag: 'Oil & Gas', title: 'IRS Oil & Gas Signs Technical Services Agreement with International Major', date: '3 October 2024' },
]

export const investorMetrics = [
  { val: '₦2T+', lbl: 'Group Asset Base' },
  { val: '₦480B', lbl: 'Annual Revenue' },
  { val: 'AA-', lbl: 'Credit Rating Target' },
  { val: '10+', lbl: 'Active Subsidiaries' },
]

export const careerStats = [
  { val: '15k+', lbl: 'Employees' },
  { val: '36', lbl: 'Open Positions' },
  { val: '10', lbl: 'Business Divisions' },
  { val: '6', lbl: 'Nigerian States' },
]

export const jobs = [
  { title: 'Senior Energy Engineer', meta: 'IRS Green Energy · Kano State', tags: ['Full-Time','Senior','Energy'] },
  { title: 'Head of CNG Operations', meta: 'IRS CNG Networks · Abuja', tags: ['Full-Time','Director','Gas'] },
  { title: 'Agricultural Program Manager', meta: 'IRS AgriBusiness · Jigawa', tags: ['Full-Time','Mid-Level','Agriculture'] },
  { title: 'Corporate Finance Analyst', meta: 'IRS Group HQ · Kano', tags: ['Full-Time','Mid-Level','Finance'] },
  { title: 'Petroleum Geoscientist', meta: 'IRS Oil & Gas · Port Harcourt', tags: ['Full-Time','Senior','Oil & Gas'] },
  { title: 'Healthcare Project Director', meta: 'IRS Healthcare · Kano', tags: ['Full-Time','Director','Health'] },
]

export const contactDetails = [
  { icon: '📍', label: 'Headquarters', text: 'IRS House, 14 Ahmadu Bello Way, Kano State, Nigeria' },
  { icon: '📞', label: 'Main Switchboard', text: '+234 (0) 800 IRS GROUP' },
  { icon: '✉️', label: 'General Enquiries', text: 'info@irsgroupnigeria.com' },
  { icon: '💼', label: 'Investor Relations', text: 'investors@irsgroupnigeria.com' },
  { icon: '🌐', label: 'Lagos Office', text: 'IRS Properties Tower, Victoria Island, Lagos' },
]

export const footerLinks = {
  businesses: ['Clean Energy','CNG Infrastructure','Oil & Gas','Agriculture','Manufacturing','Real Estate','Healthcare'],
  company: ['About IRS Group','Our History','Leadership','Subsidiaries','Sustainability','Investors'],
  connect: ['Media Center','Careers','Contact Us','Privacy Policy','Terms of Use','Corporate Governance'],
}

export const irsKnowledge = {
  sector: 'IRS Group operates across 10 major sectors: Clean Energy, CNG Infrastructure, Electric Mobility, Solar Manufacturing, Agriculture, Oil & Gas, Manufacturing, Fertilizer, Real Estate, and Healthcare.',
  leader: 'IRS Group is chaired by Alhaji Rabiu Isyaku Rabiu, son of the Group founder Sheikh Isyaku Rabiu. The Group Managing Director oversees day-to-day operations alongside an experienced executive team.',
  invest: 'IRS Group welcomes investor enquiries for private placements, strategic partnerships, and joint ventures. Please contact investors@irsgroupnigeria.com or use the contact form on this page.',
  headquarter: 'IRS Group is headquartered at IRS House, 14 Ahmadu Bello Way, Kano State, Nigeria. The Group maintains offices in Lagos, Abuja, and Port Harcourt.',
  history: 'IRS Group was founded in 1952 in Kano by the late Sheikh Isyaku Rabiu, beginning as a trading company and growing over 72 years into one of Nigeria most diversified conglomerates.',
  energy: 'IRS Green Energy operates a 500MW renewable energy pipeline with utility-scale solar projects, mini-grids, and a solar panel manufacturing facility in Kano State.',
  cng: 'IRS CNG Networks is building 48 compressed natural gas fuelling stations across Nigeria, supporting the Federal Government Presidential CNG Initiative targeting 1 million vehicle conversions by 2027.',
  oil: 'IRS Oil & Gas Limited holds exploration acreages across the Niger Delta with 25+ years of sector experience, operating in compliance with NUPRC regulations.',
  career: 'IRS Group is currently hiring for roles in Energy Engineering, CNG Operations, Agriculture, Finance, Petroleum Geoscience, and Healthcare Management. Contact careers@irsgroupnigeria.com.',
  sustain: 'IRS Group is committed to reducing emissions by 40% by 2030, supporting 12,000+ smallholder farmers, and investing over 8 billion Naira in community development since 2010.',
}

export function getAIResponse(q) {
  q = q.toLowerCase()
  if (q.includes('sector') || q.includes('business') || q.includes('division')) return irsKnowledge.sector
  if (q.includes('lead') || q.includes('chairman') || q.includes('ceo') || q.includes('who')) return irsKnowledge.leader
  if (q.includes('invest') || q.includes('shareholder')) return irsKnowledge.invest
  if (q.includes('head') || q.includes('location') || q.includes('address') || q.includes('where')) return irsKnowledge.headquarter
  if (q.includes('history') || q.includes('found') || q.includes('established')) return irsKnowledge.history
  if (q.includes('solar') || q.includes('renew') || q.includes('energy')) return irsKnowledge.energy
  if (q.includes('cng') || q.includes('gas') || q.includes('fuel')) return irsKnowledge.cng
  if (q.includes('oil') || q.includes('petroleum')) return irsKnowledge.oil
  if (q.includes('career') || q.includes('job') || q.includes('hire')) return irsKnowledge.career
  if (q.includes('sustain') || q.includes('esg') || q.includes('environment')) return irsKnowledge.sustain
  return 'Thank you for your question. Please use our Contact form or email info@irsgroupnigeria.com. Our team will respond within 24 hours.'
}
