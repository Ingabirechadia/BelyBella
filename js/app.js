// ==================================================== 
// BELYBELLA Ltd - Agribusiness Portal & Dashboard Logic
// ==================================================== 

// Kinyarwanda & English Translation Dictionary
const TRANSLATIONS = {
    en: {
        logoSub: "Agribusiness Ltd",
        navHome: "Home",
        navAbout: "About Us",
        navProducts: "Products",
        navServices: "Services",
        navBlog: "Blog",
        navGallery: "Gallery",
        navContact: "Contact",
        navLogin: "Portal",
        navLoginBtn: "Portal Login",
        
        // Footer
        footerDesc: "Pioneering modern greenhouse farming and sustainable drip irrigation systems in Eastern Rwanda. Freshness, quality, and community-driven agriculture.",
        footerExplore: "Explore",
        footerHq: "Our Headquarters",
        footerAddress: "Bitoma Village, Cyinzovu Cell,<br>Kabarondo Sector, Kayonza District,<br>Eastern Province, Rwanda",
        footerHours: "Mon - Sat: 7:00 AM - 5:30 PM",
        footerCopyright: "&copy; 2026 BELYBELLA Ltd. All Rights Reserved.",
        footerDesigner: "Designed with dedication for Sustainable Agriculture. CEO: Byiringiro Belange",
        
        // Home Page
        homeTagline: "Belybella Ltd Rwanda",
        homeHeroTitle: "Harvesting the Future with <span>Smart Farming</span>",
        homeHeroDesc: "Pioneering ecological greenhouse cultivation and advanced automated drip irrigation systems in Kayonza District. We supply top-tier tomatoes and sweet green peas from Rwanda to your table.",
        homeBrowseBtn: "Browse Catalog",
        homeStoryBtn: "Our Story",
        homeFeatQuality: "Premium Quality",
        homeFeatQualityDesc: "Greenhouse protected",
        homeFeatIrrig: "Modern Irrigation",
        homeFeatIrrigDesc: "Water efficient",
        homeFeatOrganic: "100% Organic",
        homeFeatOrganicDesc: "Fresh tomatoes & peas",
        
        homeWelcomeTagline: "Agribusiness Innovation",
        homeWelcomeTitle: "Transforming Agriculture in Rwanda",
        homeWelcomeDesc: "Under the visionary leadership of our CEO, <strong>Byiringiro Belange</strong>, BELYBELLA Ltd builds state-of-the-art agricultural infrastructures. We merge modern greenhouse shelters with smart water distribution technology to secure consistent year-round supply of tomatoes and green peas, bypassing changing climate conditions.",
        homeWelcomeFeat1: "Greenhouse Infrastructure",
        homeWelcomeFeat1Desc: "Optimal growth micro-climate",
        homeWelcomeFeat2: "Automated Drip Systems",
        homeWelcomeFeat2Desc: "Efficient water drop-by-drop delivery",
        
        homePillarsTagline: "Our Pillars",
        homePillarsTitle: "What Makes Belybella Unique",
        homePillarsDesc: "We employ advanced technical methods to grow crops that represent the pinnacle of freshness and health.",
        homePillar1Title: "Greenhouse Technology",
        homePillar1Desc: "Our controlled greenhouse covers crops from diseases, pests, and heavy storms. This guarantees an unbroken growth cycle for our delicate tomatoes.",
        homePillar2Title: "Modern Drip Irrigation",
        homePillar2Desc: "We conserve valuable water resources. Our solar-powered irrigation pumps deploy exact liquid portions directly to crop root zones, yielding organic, healthy crops.",
        homePillar3Title: "Fresh Crop Harvest",
        homePillar3Desc: "Harvested at their nutritional peak, our red tomatoes and sweet green peas are processed with rigorous hygiene and delivered straight to bulk marketplaces.",
        
        homeBannerTitle: "Our Premium Crops",
        homeBannerDesc: "Grown with modern practices, packed under strict safety standards, and distributed fresh daily.",
        homeBannerTomatoesTitle: "Belybella Tomatoes",
        homeBannerTomatoesDesc: "We grow high-quality Roma and vine tomatoes inside our modern greenhouses. Perfect sizing, intense red color, rich pulp, and longer shelf-life.",
        homeBannerPeasTitle: "Belybella Green Peas",
        homeBannerPeasDesc: "Sweet, crunchy, and highly nutritious pods. Cultivated under smart drip irrigation grids that supply natural feeding to the roots.",
        
        homeLocTagline: "Find Us in Rwanda",
        homeLocTitle: "Rooted in Eastern Province",
        homeLocDesc: "BELYBELLA Ltd operates in the fertile highlands of Kayonza. Our specialized modern farms are located close to local transport corridors, letting us distribute fresh crops across Rwanda without delays.",
        homeLocDist: "Kayonza District",
        homeLocDistDesc: "Eastern Province, Rwanda",
        homeLocVill: "Kabarondo Sector",
        homeLocVillDesc: "Cyinzovu Cell, Bitoma Village",
        homeLocHq: "BELYBELLA Headquarters",
        homeLocDirBtn: "Get Directions",

        // About Us Page
        aboutBannerTitle: "About BELYBELLA Ltd",
        aboutBannerDesc: "Nurturing communities through technology-driven agribusiness in Rwanda",
        aboutTagline: "Who We Are",
        aboutTitle: "Pioneering Sustainable Agribusiness",
        aboutDesc1: "Founded with a strong passion for modern agricultural systems, BELYBELLA Ltd is a forward-thinking agribusiness based in Kayonza District, Rwanda. We specialize in growing and supplying premium greenhouse tomatoes and fresh podded green peas.",
        aboutDesc2: "By combining protective crop greenhouse structures with automated water-conserving drip irrigation pipelines, we bypass the challenges of climate change and rainfall variability. This allows us to maintain stable, year-round harvest supplies for retail grocery chains, school feeding programs, and food markets across the region.",
        aboutMission: "Our Mission",
        aboutMissionDesc: "To deploy innovative greenhouse and drip irrigation technologies to supply healthy crops, foster local job creation, and drive economic growth in Eastern Rwanda.",
        aboutVision: "Our Vision",
        aboutVisionDesc: "To become a leading regional hub of modern agribusiness, celebrated for top-quality organic products, high efficiency, and empowering local communities.",
        aboutCeoTitle: "CEO & Founder",
        aboutCeoQuote: "Modern agriculture is not just about labor; it's about engineering. By implementing greenhouse shelters and smart drip systems, we make farming predictable, profitable, and highly attractive to youth.",
        aboutCeoMsgBtn: "Message CEO Office",
        aboutWhereTitle: "Where We Farm",
        aboutWhereDesc: "Our farming operations are embedded in a rich agricultural belt in Eastern Province, Rwanda.",
        aboutWhereCountry: "Country",
        aboutWhereDist: "District / Sector",
        aboutWhereCell: "Cell",
        aboutWhereVillage: "Village",
        aboutMilestonesTag: "Milestones",
        aboutMilestonesTitle: "Our Growth Timeline",
        aboutMilestonesDesc: "The journey of BELYBELLA Ltd from founding to tech-enabled agribusiness leader.",
        aboutMilestone1Title: "Founding in Kayonza",
        aboutMilestone1Desc: "BELYBELLA Ltd is registered. Formed with a core team in Kabarondo Sector, acquiring land in Cyinzovu Cell to start fresh farming.",
        aboutMilestone2Title: "Greenhouse Infrastructure",
        aboutMilestone2Desc: "Constructed the first climate-controlled greenhouses, successfully protecting Roma tomato varieties from heavy rain and diseases.",
        aboutMilestone3Title: "Drip Irrigation Rollout",
        aboutMilestone3Desc: "Installed automated solar-powered drip irrigation pipelines across all fields, maximizing crop yields for green peas and tomatoes.",

        // Products Page
        prodBannerTitle: "Products Catalog",
        prodBannerDesc: "Order fresh, eco-friendly agribusiness produce directly from our farm gates",
        prodFilterAll: "All Produce",
        prodFilterTomatoes: "Tomatoes",
        prodFilterPeas: "Green Peas",
        prodSearchPlaceholder: "Search products...",
        prodSearchBtn: "Search",
        prodPriceLabel: "Price Estimate",
        prodInquireBtn: "Inquire",
        prodNoMatch: "No products match your search query.",
        prodClearBtn: "Clear Filters",
        
        // Product Modal
        modalTitle: "Request Price Quote",
        modalBasePrice: "Base Price",
        modalNameLabel: "Your Name",
        modalEmailLabel: "Email Address",
        modalQtyLabel: "Requested Quantity (in kg)",
        modalMinOrder: "Minimum order 10 kg",
        modalNotesLabel: "Additional Requirements",
        modalNotesPlaceholder: "Delivery destination, packing preference, etc.",
        modalSubmitBtn: "Submit Inquiry",
        
        // Services Page
        servBannerTitle: "Agribusiness Services",
        servBannerDesc: "We share and build professional farming infrastructures across Rwanda",
        serv1Tag: "Infrastructures",
        serv1Title: "Commercial Greenhouse Installation",
        serv1Desc: "We design and construct high-durability steel and timber greenhouse frames optimized for Rwanda's mountainous terrain and weather conditions.",
        serv1Feat1: "UV-resistant polyethylene covers",
        serv1Feat2: "Custom insect netting & ventilation flaps",
        serv1Feat3: "Built-in crop support systems",
        serv1Btn: "Book Consultation",
        serv2Tag: "Irrigation Systems",
        serv2Title: "Smart Drip Irrigation Setup",
        serv2Desc: "Conserve water and double crop yields with custom pipe layouts tailored to your crop layout and soil type. We build gravity-fed and solar-powered systems.",
        serv2Feat1: "Direct root zone water delivery",
        serv2Feat2: "Automated solar water pump integration",
        serv2Feat3: "Water filter & backwash installations",
        serv2Btn: "Request Site Visit",
        
        // Blog Page
        blogBannerTitle: "Company Blog & News",
        blogBannerDesc: "Read about modern agricultural techniques and farm updates from Kayonza",
        blogReadMore: "Read Full Post",
        blogBackBtn: "Back to Blog",
        blogNotFound: "Article Not Found",
        blogNotFoundDesc: "The blog article you are looking for has been removed or renamed.",
        blogDiscussion: "Discussion",
        blogWriteComment: "Write a Comment",
        blogCommentName: "Full Name",
        blogCommentText: "Your Comment",
        blogCommentPostBtn: "Post Comment",
        blogFirstComment: "Be the first to share your thoughts!",
        
        // Gallery Page
        gallBannerTitle: "Photo Gallery",
        gallBannerDesc: "Visual overview of our greenhouse layout, crops, and harvesting technology",
        gallMediaTag: "Belybella Farm Media",
        gallLightboxTitle: "BELYBELLA Farm View",

        // Contact Page
        contactBannerTitle: "Contact Us",
        contactBannerDesc: "Send a message or inquire about bulk organic supply",
        contactGetInTouch: "Get in Touch",
        contactGetInTouchDesc: "Contact BELYBELLA Ltd for general information, wholesale pricing, or partnership proposals.",
        contactLabelHq: "Headquarters Location",
        contactLabelPhone: "Phone Contact",
        contactLabelEmail: "General Email",
        contactSendMsg: "Send a Message",
        contactSendMsgDesc: "Fill out the form below. We'll reply within 24 hours.",
        contactLabelSubject: "Subject",
        contactLabelContent: "Message Content",
        contactSubmitBtn: "Send Message",

        // Login Portal
        loginBannerTitle: "Staff Portal Login",
        loginBannerDesc: "Provide credentials to access administrative dashboard controls.",
        loginLabelUser: "Username",
        loginLabelPass: "Password",
        loginSubmitBtn: "Sign In",
    },
    rw: {
        logoSub: "Ubuhinzi Bwize Ltd",
        navHome: "Ahabanza",
        navAbout: "Ninde Twebwe",
        navProducts: "Ibicuruzwa",
        navServices: "Serivisi",
        navBlog: "Inkuru",
        navGallery: "Amafoto",
        navContact: "Twandikire",
        navLogin: "Kwinjira",
        navLoginBtn: "Kwinjira Portal",
        
        // Footer
        footerDesc: "Turi abambere mu buhinzi bugezweho bwa serere (greenhouse) hamwe no kuhira kugezweho mu Burasirazuba bw'u Rwanda. Ubushyakane, ubwiza, n'iterambere rishingiye ku muryango.",
        footerExplore: "Gushakisha",
        footerHq: "Icyicaro Gikuru",
        footerAddress: "Umudugudu wa Bitoma, Akagari ka Cyinzovu,<br>Umurenge wa Kabarondo, Akarere ka Kayonza,<br>Intara y'Iburasirazuba, u Rwanda",
        footerHours: "Mbere - Sat: 7:00 AM - 5:30 PM",
        footerCopyright: "&copy; 2026 BELYBELLA Ltd. Uburenganzira bwose burabatswe.",
        footerDesigner: "Yubatswe n'ubwitange ku bw'Ubuhinzi Burambye. CEO: Byiringiro Belange",
        
        // Home Page
        homeTagline: "Belybella Ltd u Rwanda",
        homeHeroTitle: "Ubwubatsi bw'Ejo Hazaza binyuze mu <span>Buhinzi Bugezweho</span>",
        homeHeroDesc: "Turi abashinzwe ubuhinzi bugezweho bwa serere (greenhouse) hamwe no kuhira kugezweho mu Karere ka Kayonza. Dutanga inyanya nziza n'amashaza aryoshe biva mu Rwanda bikagera ku meza yanyu.",
        homeBrowseBtn: "Reba Ibicuruzwa",
        homeStoryBtn: "Inkuru Yacu",
        homeFeatQuality: "Ubwiza buhebuje",
        homeFeatQualityDesc: "Biringiwe muri serere",
        homeFeatIrrig: "Kuhira Kugezweho",
        homeFeatIrrigDesc: "Kuzigama amazi",
        homeFeatOrganic: "Umwimerere 100%",
        homeFeatOrganicDesc: "Inyanya n'amashaza bishya",
        
        homeWelcomeTagline: "Ihanga Ryiza mu Buhinzi",
        homeWelcomeTitle: "Guhindura Ubuhinzi mu Rwanda",
        homeWelcomeDesc: "Munsi y'ubuyobozi bwiza bwa CEO wacu, <strong>Byiringiro Belange</strong>, BELYBELLA Ltd yubaka ibikorwaremezo bigezweho by'ubuhinzi. Dufatanya serere zigezweho n'ikoranabuhanga ryo kuhira kugira ngo tubone umusaruro w'inyanya n'amashaza umwaka wose, tutitaye ku mihindagurikire y'ibihe.",
        homeWelcomeFeat1: "Ibikorwaremezo bya Serere",
        homeWelcomeFeat1Desc: "Imikurire myiza y'ibimera",
        homeWelcomeFeat2: "Kuhira Bitanga Amazi make",
        homeWelcomeFeat2Desc: "Kugeza amazi ku mizi neza",
        
        homePillarsTagline: "Inkingi Zacu",
        homePillarsTitle: "Ikitwubaka Nka Belybella",
        homePillarsDesc: "Dukoresha uburyo bugezweho bwa tekiniki mu guhinga imyaka ifite ubwiza n'ubuzima bwiza cyane.",
        homePillar1Title: "Ikoranabuhanga rya Serere",
        homePillar1Desc: "Serere zacu zirinda imyaka indwara, udukoko, n'imvura nyinshi. Ibi bituma inyanya zacu zikurira mu mutekano ntangere.",
        homePillar2Title: "Kuhira Kugezweho",
        homePillar2Desc: "Dukoresha neza umutungo w'amazi. Imashini zihira zikoresha imirasire y'izuba zikwirakwiza amazi akenewe neza ku mizi y'ibihingwa.",
        homePillar3Title: "Umusaruro Ushya",
        homePillar3Desc: "Isarurwa rikozwe neza, inyanya n'amashaza byacu bitunganywa isuku kandi bikajyanwa mu masoko manini byihuse.",
        
        homeBannerTitle: "Imyaka Yacu Ihebuje",
        homeBannerDesc: "Ihingwa mu buryo bugezweho, igapakirwa neza, kandi ikagezwa ku bakiriya ishyashya buri munsi.",
        homeBannerTomatoesTitle: "Inyanya za Belybella",
        homeBannerTomatoesDesc: "Duhinga inyanya nziza cyane za Roma mu maserere yacu. Imikurire myiza, umutuku mwiza, n'igihe kirekire zishobora kumara zitangiritse.",
        homeBannerPeasTitle: "Amashaza ya Belybella",
        homeBannerPeasDesc: "Amashaza aryoshe, akomeye kandi afite intungamubiri nyinshi. Ahingwa hakoreshejwe imiyoboro yo kuhira itanga ifumbire ku mizi.",
        
        homeLocTagline: "Tubuze mu Rwanda",
        homeLocTitle: "Dukorera mu Ntara y'Iburasirazuba",
        homeLocDesc: "BELYBELLA Ltd ikorera mu misozi ya Kayonza. Imihaniko yacu y'ubuhinzi iri hafi y'imihanda minini, bituma dushobora kugeza umusaruro wacu aho ariho hose mu Rwanda byihuse.",
        homeLocDist: "Akarere ka Kayonza",
        homeLocDistDesc: "Intara y'Iburasirazuba, u Rwanda",
        homeLocVill: "Umurenge wa Kabarondo",
        homeLocVillDesc: "Akagari ka Cyinzovu, Umudugudu wa Bitoma",
        homeLocHq: "Icyicaro cya BELYBELLA",
        homeLocDirBtn: "Reba Icyerekezo",

        // About Us Page
        aboutBannerTitle: "Tumenye BELYBELLA Ltd",
        aboutBannerDesc: "Guteza imbere imiryango binyuze mu buhinzi bushingiye ku kinyabupfura",
        aboutTagline: "Ninde Twebwe",
        aboutTitle: "Ubukombe mu Buhinzi Burambye",
        aboutDesc1: "Yashinzwe ifite intego yo guteza imbere ubuhinzi bugezweho, BELYBELLA Ltd ni agribusiness ikorera mu Karere ka Kayonza, u Rwanda. Twibanda ku guhinga no gukwirakwiza inyanya nziza za serere n'amashaza mashya.",
        aboutDesc2: "Mu guhuza ibikorwa bya serere n'imiyoboro y'amazi yo kuhira, dukemura ibibazo by'imihindagurikire y'ibihe n'ibura ry'imvura. Ibi bituma tubona umusaruro uhoraho umwaka wose ugakwirakwizwa mu masoko n'amashuri.",
        aboutMission: "Intego Yacu",
        aboutMissionDesc: "Gukoresha ikoranabuhanga rya serere no kuhira mu gutanga umusaruro mwiza, guhanga imirimo ku baturage, no kuzamura ubukungu muri Kayonza.",
        aboutVision: "Icyerekezo Cyacu",
        aboutVisionDesc: "Kuba ikigo cy'intangarugero mu buhinzi bugezweho muri Afurika y'Iburasirazuba, kizwiho umusaruro mwiza w'umwimerere no gufasha abaturage.",
        aboutCeoTitle: "CEO & Umuyobozi",
        aboutCeoQuote: "Ubuhinzi bugezweho si imbaraga z'amaboko gusa; ni ubumenyi bw'inganda. Binyuze mu gukoresha serere n'imashini zihira, dutuma ubuhinzi buba ubwizerwa, bugira inyungu, kandi bushimishije ku rubyiruko.",
        aboutCeoMsgBtn: "Andikira Ibiro bya CEO",
        aboutWhereTitle: "Aho Duhinga",
        aboutWhereDesc: "Isambu yacu iri mu gace keza k'ubuhinzi mu Ntara y'Iburasirazuba, u Rwanda.",
        aboutWhereCountry: "Igihugu",
        aboutWhereDist: "Akarere / Umurenge",
        aboutWhereCell: "Akagari",
        aboutWhereVillage: "Umudugudu",
        aboutMilestonesTag: "Amateka",
        aboutMilestonesTitle: "Gukura Kwe",
        aboutMilestonesDesc: "Inzira BELYBELLA Ltd yanyuzemo kuva ishingwa kugeza ibaye intangarugero mu buhinzi.",
        aboutMilestone1Title: "Gushingwa muri Kayonza",
        aboutMilestone1Desc: "BELYBELLA Ltd yiyandikishije. Yatangiye ifite itsinda rito mu Murenge wa Kabarondo, igura ubutaka mu Kagari ka Cyinzovu.",
        aboutMilestone2Title: "Ibikorwaremezo bya Serere",
        aboutMilestone2Desc: "Wubatswe serere zikoresha ikoranabuhanga, zirinda inyanya imvura nyinshi n'indwara z'ibimera.",
        aboutMilestone3Title: "Kuhira Kugezweho",
        aboutMilestone3Desc: "Washyizweho imiyoboro yo kuhira ikoresha imirasire y'izuba, ikwirakwiza amazi ku mashaza n'inyanya neza.",

        // Products Page
        prodBannerTitle: "Ibicuruzwa Byacu",
        prodBannerDesc: "Oda inyanya n'amashaza bishya biturutse mu mirima yacu",
        prodFilterAll: "Imyaka Yose",
        prodFilterTomatoes: "Inyanya",
        prodFilterPeas: "Amashaza",
        prodSearchPlaceholder: "Shakisha igicuruzwa...",
        prodSearchBtn: "Shakisha",
        prodPriceLabel: "Igiciro Gikekeranywa",
        prodInquireBtn: "Baza Quote",
        prodNoMatch: "Nta gicuruzwa gihuye n'ibyo ushaka.",
        prodClearBtn: "Kura Filteri",
        
        // Product Modal
        modalTitle: "Saba Igiciro cy'Ibicuruzwa",
        modalBasePrice: "Igiciro cy'Ibanze",
        modalNameLabel: "Amazina Yanyu",
        modalEmailLabel: "Imeri",
        modalQtyLabel: "Ingano Ukeneye (mu Bilo)",
        modalMinOrder: "Ntabwo bijya munsi y'ibilo 10",
        modalNotesLabel: "Ibindi Ukeneye",
        modalNotesPlaceholder: "Aho bikomezwa, uko bipakirwa, n'ibindi...",
        modalSubmitBtn: "Ohereza Icyifuzo",
        
        // Services Page
        servBannerTitle: "Serivisi z'Ubuhinzi",
        servBannerDesc: "Twubaka kandi tugafasha abandi kubaka ibikorwaremezo by'ubuhinzi bugezweho mu Rwanda",
        serv1Tag: "Ibikorwaremezo",
        serv1Title: "Wubakirwa Serere Gakondo n'izigezweho",
        serv1Desc: "Dushushanya kandi tukubaka greenhouses zikomeye cyane zikwiranye n'ikirere cy'u Rwanda n'imisozi yaho.",
        serv1Feat1: "Ibipfuko birinda imirasire y'izuba yangiza",
        serv1Feat2: "Inzitiro zirinda udukoko n'imiyaga",
        serv1Feat3: "Inkingi n'imigozi bifasha inyanya gukura neza",
        serv1Btn: "Saba Gusurwa",
        serv2Tag: "Imiyoboro yo Kuhira",
        serv2Title: "Ubwubatsi bw'Imiyoboro yo Kuhira",
        serv2Desc: "Zungura umusaruro wawe kandi uzigame amazi binyuze mu miyoboro yo kuhira yujuje ibipimo by'ubutaka bwawe.",
        serv2Feat1: "Kugeza amazi ku mizi y'imyaka neza",
        serv2Feat2: "Koresha solar pump mu gukurura amazi",
        serv2Feat3: "Fungura amazi meza afite akayunguruzo",
        serv2Btn: "Tegura Inama",
        
        // Blog Page
        blogBannerTitle: "Blog y'Ikigo & Amakuru",
        blogBannerDesc: "Soma ku mateknike y'ubuhinzi n'amakuru y'imbere mu mirima muri Kayonza",
        blogReadMore: "Soma Inkuru Yose",
        blogBackBtn: "Subira ku Nkuru",
        blogNotFound: "Inkuru Ntiyabonetse",
        blogNotFoundDesc: "Inkuru washatse ntabwo ikiri muri sisitemu yacu cyangwa yahinduriwe izina.",
        blogDiscussion: "Ibiganiro",
        blogWriteComment: "Andika Igitekerezo",
        blogCommentName: "Amazina Yose",
        blogCommentText: "Igitekerezo Cyawe",
        blogCommentPostBtn: "Ohereza Igitekerezo",
        blogFirstComment: "Ba uwa mbere mu gutanga igitekerezo!",
        
        // Gallery Page
        gallBannerTitle: "Amafoto",
        gallBannerDesc: "Reba amafoto y'imirima yacu, inyanya n'amashaza, n'abakozi bacu",
        gallMediaTag: "Amafoto ya Belybella Ltd",
        gallLightboxTitle: "Reba Isambu ya BELYBELLA",

        // Contact Page
        contactBannerTitle: "Twandikire",
        contactBannerDesc: "Ohereza ubutumwa cyangwa ubaze ku bijyanye n'umusaruro wacu",
        contactGetInTouch: "Tuvugishe",
        contactGetInTouchDesc: "Andikira BELYBELLA Ltd ubase ibibazo byose, ibiciro by'umurengera cyangwa ubufatanye.",
        contactLabelHq: "Aho Icyicaro Kiri",
        contactLabelPhone: "Terefone Zacu",
        contactLabelEmail: "Imeri",
        contactSendMsg: "Ohereza Ubutumwa",
        contactSendMsgDesc: "Uzuza iyi fomu ikurikira. Turagusubiza mu masaha 24.",
        contactLabelSubject: "Umutwe w'Ubutumwa",
        contactLabelContent: "Ubutumwa",
        contactSubmitBtn: "Ohereza",

        // Login Portal
        loginBannerTitle: "Kwinjira Portal y'Abakozi",
        loginBannerDesc: "Uzuza umwirondoro wawe kugira ngo winjire muri dashboard y'ubuyobozi.",
        loginLabelUser: "Izina ry'Ubukoresha",
        loginLabelPass: "Ijambo ry'Ibanga",
        loginSubmitBtn: "Kwinjira",
    }
};

// Initial State / Data Seeding (Bilingual)
const INITIAL_PRODUCTS = [
    {
        id: "prod-1",
        name_en: "Premium Roma Tomatoes",
        name_rw: "Inyanya nziza cyane za Roma",
        category: "tomatoes",
        price: 1200,
        unit: "kg",
        description_en: "Juicy, firm, and uniform Roma tomatoes grown in our advanced climate-controlled greenhouse. Highly resistant to pests and perfect for paste, salads, or cooking.",
        description_rw: "Inyanya za Roma nini kandi zikomeye zihingwa muri serere yacu igezweho iyoborwa n'ikirere. Zirwanya udukoko kandi ni nziza ku biryo, salade, cyangwa guteka.",
        image: "public/greenhouse.jpg",
        inStock: true,
        features_en: ["Greenhouse Grown", "Drip Irrigated", "Organic Certified"],
        features_rw: ["Ihingwa muri Serere", "Kuhira kugezweho", "Umusaruro w'Umwimerere"]
    },
    {
        id: "prod-2",
        name_en: "Sweet Podded Green Peas",
        name_rw: "Amashaza Aryoshe y'Imyimerere",
        category: "peas",
        price: 2500,
        unit: "kg",
        description_en: "Freshly harvested podded peas, packed with sweetness and crisp texture. Cultivated using precise drip irrigation setups that maximize natural sugars.",
        description_rw: "Amashaza mashya asaruwe mu mirima yacu afite uburyohe budasanzwe. Ahingwa hakoreshejwe imashini n'imiyoboro y'amazi yo kuhira ituma akura neza.",
        image: "public/peas_crop.jpg",
        inStock: true,
        features_en: ["Irrigated Cultivation", "Hand Picked", "100% Fresh"],
        features_rw: ["Imyoboro yo Kuhira", "Yasarurwe n'intoki", "100% Ishyashya"]
    },
    {
        id: "prod-3",
        name_en: "Plump Vine-Ripe Tomatoes",
        name_rw: "Inyanya Nziza z'Imisago",
        category: "tomatoes",
        price: 1500,
        unit: "kg",
        description_en: "Plucked fresh off the vine at optimal ripeness. Packed with intense lycopene content, rich flavor, and extended shelf life, ideal for supermarkets and export.",
        description_rw: "Inyanya zisarurwa zigeze mu gihe cyiza cyo gushya. Zifite uburyohe bwinshi, ibara ryiza cyane, kandi zishobora kumara igihe kirekire ku masoko n'amahoteri.",
        image: "public/tomatoes_plate.jpg",
        inStock: true,
        features_en: ["Vine Ripened", "Hydro-irrigation", "Selected Grades"],
        features_rw: ["Izikuriye ku giti", "Kuhira neza", "Ibyiciro Byatoranijwe"]
    },
    {
        id: "prod-4",
        name_en: "Wholesale Salad Tomatoes",
        name_rw: "Inyanya z'Ubudandazi za Salade",
        category: "tomatoes",
        price: 900,
        unit: "kg",
        description_en: "Sorted bulk tomatoes optimal for commercial kitchens, hotels, and local market sellers. Available in boxes of 20kg at special discounted rates.",
        description_rw: "Inyanya zatoranyijwe neza mu makazi zigenewe amahoteri, amakoni manini, n'abadandaza bo mu masoko. Ziboneka mu masanduku y'ibilo 20 ku giciro cyiza.",
        image: "public/tomatoes_market.jpg",
        inStock: true,
        features_en: ["Sized & Sorted", "Eco Packaging", "High Yield Crops"],
        features_rw: ["Zatoranijwe mu bunini", "Gupakirwa neza", "Umusaruro w'Umurengera"]
    }
];

const INITIAL_BLOGS = [
    {
        id: "blog-1",
        title_en: "Boosting Pea Yields in Rwanda: Our Drip Irrigation Success Story",
        title_rw: "Kongera Umusaruro w'Amashaza mu Rwanda: Amateka y'Imiyoboro yo Kuhira",
        excerpt_en: "Discover how implementing modern drip irrigation in Kabarondo Sector has optimized water usage by 40% and enhanced our crop quality.",
        excerpt_rw: "Uko gukoresha imiyoboro yo kuhira mu Murenge wa Kabarondo byagabanyije ikoreshwa ry'amazi ku kigero cya 40% bikongera ubwiza bw'umusaruro.",
        content_en: `
            <p>At BELYBELLA Ltd, we believe that modern farming isn't just about planting seeds; it's about smart resource management. Located in Bitoma Village, Kayonza District, our fields used to rely heavily on unpredictable seasonal rainfall. That changed when we installed our modern drip irrigation system.</p>
            <p>Drip irrigation delivers water and essential nutrients directly to the root zone of the green peas, minimizing evaporation and weed growth. For a sensitive crop like green peas, maintaining consistent soil moisture without waterlogging is crucial. The result? A 35% increase in pea size and a much sweeter yield.</p>
            <p>In addition, this technology allows us to grow green peas throughout the dry season, providing a stable supply to markets in Kigali and Kayonza when supply elsewhere is low. Sustainable farming is the future of Rwanda's agriculture.</p>
        `,
        content_rw: `
            <p>Muri BELYBELLA Ltd, twemera ko ubuhinzi bugezweho butabamo gutera imbuto gusa; ahubwo bujyana no gucunga neza umutungo wacu. Mu Mudugudu wa Bitoma, Akarere ka Kayonza, imirima yacu yahoraga yishingikiriza ku mvura y'ibihe idahoraho. Ibi byarahindutse ubwo twashyiragaho imiyoboro yacu yo kuhira igezweho.</p>
            <p>Kuhira bitanga amazi n'intungamubiri zikenewe neza ku mizi y'amashaza, bigabanya gutakara kw'amazi no kumera kw'ibyatsi bibi. Ku bihingwa byoroshye nk'amashaza, kugumana ubuhehere bw'ubutaka buringaniye ni ingenzi cyane. Umusaruro wabaye uwuhebuje: amashaza yiyongereyeho ubunini kuri 35% kandi araryoha kurushaho.</p>
            <p>Uretse ibyo, iri koranabuhanga rituma duhinga amashaza mu gihe cy'izuba, bigatuma dushobora kugeza umusaruro uhagije ku masoko ya Kigali n'aya Kayonza igihe ahandi yawabuze. Ubuhinzi burambye ni rwo rufunguzo rw'ejo hazaza h'u Rwanda.</p>
        `,
        image: "public/irrigation.jpg",
        date: "June 18, 2026",
        author: "Byiringiro Belange",
        comments: [
            { name: "Jean Damascene", text: "This is a great inspiration for farmers in Kayonza district! Do you offer tours of your irrigation system?", date: "June 19, 2026" },
            { name: "Marie Claire", text: "The quality of your peas is indeed outstanding. Now I understand why they stay fresh longer.", date: "June 20, 2026" }
        ]
    },
    {
        id: "blog-2",
        title_en: "Why Greenhouse Farming is Key to Quality Tomato Production",
        title_rw: "Kuki Guhingira mu Nzu ya Serere ari Ingenzi ku Nyamurura y'Inyanya",
        excerpt_en: "Explore the benefits of greenhouse cultivation, from pest prevention to climate control, and why it's a game-changer for Belybella Ltd.",
        excerpt_rw: "Reba ibyiza byo guhinga muri serere, kuva ku kurinda udukoko kugeza ku gucunga ikirere, n'impamvu bikora itandukaniro kuri Belybella Ltd.",
        content_en: `
            <p>Greenhouse farming represents a major leap forward for agribusiness in Rwanda. Our state-of-the-art greenhouse structure in Cyinzovu Cell protects our Roma tomatoes from severe weather, pests, and soil-borne diseases.</p>
            <p>By controlling temperature, humidity, and airflow, we create the perfect microclimate for tomatoes. Inside the greenhouse, we utilize vertical trellising, allowing the tomato plants to grow upwards. This increases yield per square meter and makes harvesting much cleaner.</p>
            <p>Furthermore, because the environment is sheltered, we drastically reduce our dependency on chemical pesticides. What you get on your plate is a cleaner, healthier, and tastier tomato. Visit our catalog to taste the difference!</p>
        `,
        content_rw: `
            <p>Ubuhinzi bwa Greenhouse cyangwa serere buhagarariye intambwe nini cyane y'ubuhinzi bugezweho mu Rwanda. Serere yacu igezweho mu Kagari ka Cyinzovu irinda inyanya zacu imvura ikaze, udukoko, n'indwara zituruka mu butaka.</p>
            <p>Mu gucunga ubushyuhe, ubuhehere, n'umuyaga bikenewe, duhanga ikirere cyiza cyane kigenewe inyanya. Imbere muri serere dukoresha uburyo bwo kuzinga inyanya zikazamuka mu kirere. Ibi byongera ingano y'umusaruro kuri metero kare imwe kandi bigatuma isarurwa riba rishimishije cyane kandi ryiza.</p>
            <p>Ikindi kandi, kubera ko ikirere kiba gikingiye neza, tugabanya gukoresha imiti yica udukoko y'imiti. Icyo ubona ku meza yawe ni inyanya zizira imiti, zifite ubuzima kandi ziryoshye cyane. Sura ibicuruzwa byacu wiyumvire itandukaniro!</p>
        `,
        image: "public/greenhouse.jpg",
        date: "May 29, 2026",
        author: "Byiringiro Belange",
        comments: [
            { name: "Gaspard", text: "Outstanding technology! I'm planning to set up a small greenhouse in Kabarondo as well.", date: "May 30, 2026" }
        ]
    },
    {
        id: "blog-3",
        title_en: "Agribusiness and Job Creation: Empowering Youth in Bitoma Village",
        title_rw: "Ubuhinzi no Guhanga Imirimo: Gushoboza Urubyiruko mu Mudugudu wa Bitoma",
        excerpt_en: "BELYBELLA Ltd is not just about profits. Read about how our farm is training local youth in modern irrigation and greenhouse agronomy.",
        excerpt_rw: "BELYBELLA Ltd ntabwo ishakisha inyungu gusa. Soma uko isambu yacu ihugura urubyiruko mu bijyanye no kuhira na serere.",
        content_en: `
            <p>Our company's mission is deeply rooted in community development. As we expand our tomato and pea fields, we are proud to create valuable employment opportunities right here in Cyinzovu Cell, Bitoma Village.</p>
            <p>We believe that agriculture should be attractive to the younger generation. Through hands-on internships and employment programs, we train local youth in greenhouse operations, drip irrigation programming, and sustainable crop protection.</p>
            <p>Under the leadership of our CEO, Byiringiro Belange, we are building a team of skilled agri-professionals who will lead the digital and technical transition of Rwandan farming in the years to come.</p>
        `,
        content_rw: `
            <p>Intego y'ikigo cyacu ishingiye cyane ku iterambere ry'abaturage. Uko twagura imirima yacu y'inyanya n'amashaza, twishimira guhanga imirimo ifite agaciro hano mu Kagari ka Cyinzovu, Umudugudu wa Bitoma.</p>
            <p>Twemera ko ubuhinzi bugomba gukururur urubyiruko rushya. Binyuze mu myitozo ngiro n'akazi, duhugura urubyiruko mu gukoresha serere, gushyiraho gahunda yo kuhira, no kurinda ibihingwa mu buryo burambye.</p>
            <p>Munsi y'ubuyobozi bwa CEO wacu, Byiringiro Belange, turimo kubaka itsinda ry'abanyamwuga mu buhinzi bazamurika ikoranabuhanga mu buhinzi bw'u Rwanda mu myaka iri imbere.</p>
        `,
        image: "public/ceo_crop.jpg",
        date: "April 12, 2026",
        author: "Byiringiro Belange",
        comments: []
    }
];

const INITIAL_MESSAGES = [
    {
        id: "msg-1",
        name: "Kigali Fresh Market",
        email: "wholesale@kigalifresh.rw",
        subject: "Bulk Tomato Supply Inquiry",
        message: "Hello Belybella team. We are looking to secure a weekly supply of 500kg of Roma Tomatoes starting next month. Please send us your commercial pricing sheet and logistics availability.",
        date: "June 21, 2026",
        isRead: false
    },
    {
        id: "msg-2",
        name: "Emmanuel Nsabimana",
        email: "emma.nsa@gmail.com",
        subject: "Greenhouse Installation Consultation",
        message: "I saw your services section. I have a 1-hectare land plot in Kayonza and want to set up 2 modern greenhouses. I would like to schedule a site visit and estimate cost.",
        date: "June 20, 2026",
        isRead: true
    }
];

const INITIAL_USERS = [
    {
        id: "user-1",
        name: "Byiringiro Belange",
        email: "belange@belybella.com",
        username: "admin",
        password: "belybella2026",
        role: "CEO & Founder"
    }
];

// 2. Database Helper Class using localStorage
class Database {
    static init() {
        if (!localStorage.getItem("bb_products")) {
            localStorage.setItem("bb_products", JSON.stringify(INITIAL_PRODUCTS));
        }
        if (!localStorage.getItem("bb_blogs")) {
            localStorage.setItem("bb_blogs", JSON.stringify(INITIAL_BLOGS));
        }
        if (!localStorage.getItem("bb_messages")) {
            localStorage.setItem("bb_messages", JSON.stringify(INITIAL_MESSAGES));
        }
        if (!localStorage.getItem("bb_users")) {
            localStorage.setItem("bb_users", JSON.stringify(INITIAL_USERS));
        }
        if (!localStorage.getItem("bb_language")) {
            localStorage.setItem("bb_language", "en");
        }
    }

    static get(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }

    static save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// Initialize database stores
Database.init();

// 3. Application State Manager
const state = {
    products: Database.get("bb_products"),
    blogs: Database.get("bb_blogs"),
    messages: Database.get("bb_messages"),
    users: Database.get("bb_users"),
    language: localStorage.getItem("bb_language") || "en",
    currentUser: JSON.parse(sessionStorage.getItem("bb_current_user")) || null,
    currentFilter: "all",
    searchQuery: ""
};



// ==================================================== 
// APPLICATION UTILITIES & NOTIFICATIONS
// ==================================================== 

function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = "check-circle";
    if (type === "error") icon = "alert-triangle";
    if (type === "warning") icon = "help-circle";

    toast.innerHTML = `
        <span class="toast-icon"></span>
        <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);
    refreshIcons();

    // Trigger reflow to apply transition
    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    // Remove toast after 4s
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// Form Validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Translation helper function
function t(key) {
    const lang = state.language || "en";
    return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS["en"] && TRANSLATIONS["en"][key]) || key;
}

function refreshIcons() {}

function localizedField(item, field) {
    const lang = state.language || "en";
    return item[`${field}_${lang}`] || item[`${field}_en`] || item[field] || "";
}

function localizedList(item, field) {
    const lang = state.language || "en";
    return item[`${field}_${lang}`] || item[`${field}_en`] || item[field] || [];
}

// Update DOM elements for current language
function updateLanguageDOM() {
    const currentLang = state.language || "en";
    
    // Toggle label texts
    const langLabel = document.getElementById("current-lang-label");
    if (langLabel) langLabel.innerText = currentLang === "en" ? "RW" : "EN";

    const mobLangLabel = document.getElementById("mobile-current-lang-label");
    if (mobLangLabel) mobLangLabel.innerText = currentLang === "en" ? "Kinyarwanda" : "English";

    // Logo subtitle text
    const logoSubText = document.getElementById("logo-sub-text");
    if (logoSubText) logoSubText.innerText = t("logoSub");

    // Desktop & Mobile public navs
    const navs = {
        "nav-home": "navHome",
        "nav-about": "navAbout",
        "nav-products": "navProducts",
        "nav-services": "navServices",
        "nav-blog": "navBlog",
        "nav-gallery": "navGallery",
        "nav-contact": "navContact",
        "nav-login-txt": "navLogin",
        
        "mob-nav-home": "navHome",
        "mob-nav-about": "navAbout",
        "mob-nav-products": "navProducts",
        "mob-nav-services": "navServices",
        "mob-nav-blog": "navBlog",
        "mob-nav-gallery": "navGallery",
        "mob-nav-contact": "navContact",
        "mob-nav-login-txt": "navLogin"
    };

    for (const [id, key] of Object.entries(navs)) {
        const el = document.getElementById(id);
        if (el) el.innerText = t(key);
    }

    // Public footer texts
    const footerElements = {
        "footer-desc": "footerDesc",
        "footer-explore-title": "footerExplore",
        "footer-hq-title": "footerHq",
        "footer-address": "footerAddress",
        "footer-hours": "footerHours",
        "footer-copyright": "footerCopyright",
        "footer-designer": "footerDesigner",
        
        "footer-link-home": "navHome",
        "footer-link-about": "navAbout",
        "footer-link-products": "navProducts",
        "footer-link-services": "navServices",
        "footer-link-blog": "navBlog",
        "footer-link-gallery": "navGallery",
        "footer-link-contact": "navContact"
    };

    for (const [id, key] of Object.entries(footerElements)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = t(key);
    }
}

// Generate unique ID
function generateId(prefix = "id") {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

// Date formatter
function formatDate(date = new Date()) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Helper to check if route requires auth
function isProtectedRoute(route) {
    return route.startsWith("#/admin");
}

// ==================================================== 
// ROUTING ENGINE
// ==================================================== 

const routes = {
    "#/home": renderHome,
    "#/about": renderAbout,
    "#/products": renderProducts,
    "#/services": renderServices,
    "#/blog": renderBlog,
    "#/gallery": renderGallery,
    "#/contact": renderContact,
    "#/login": renderLogin,
    
    // Admin Routes
    "#/admin": renderAdminDashboard,
    "#/admin/products": renderAdminProducts,
    "#/admin/blog": renderAdminBlog,
    "#/admin/messages": renderAdminMessages,
    "#/admin/users": renderAdminUsers
};

function router() {
    let hash = window.location.hash || "#/home";
    
    // Perform navigation bar and footer translation updates
    updateLanguageDOM();
    
    // Dynamic sub-routing for details (e.g. #/blog/blog-1)
    if (hash.startsWith("#/blog/") && hash.length > 7) {
        renderBlogDetail(hash.replace("#/blog/", ""));
        updateActiveNav("#/blog");
        return;
    }

    const viewFn = routes[hash];
    
    // Check Authentication
    if (isProtectedRoute(hash)) {
        if (!state.currentUser) {
            showToast("Please login to access the Portal.", "warning");
            window.location.hash = "#/login";
            return;
        }
        
        // Setup Admin Shell
        document.getElementById("public-header").classList.add("hidden");
        document.getElementById("public-footer").classList.add("hidden");
        document.getElementById("app-outlet").classList.add("hidden");
        
        const adminLayout = document.getElementById("admin-layout");
        adminLayout.classList.remove("hidden");
        
        // Hide mobile sidebar on routing
        const sidebar = document.querySelector(".admin-sidebar");
        if (sidebar) sidebar.classList.remove("show");

        // Update active sidebar nav item
        updateActiveSidebar(hash);
        
        // Run view function
        if (viewFn) {
            viewFn();
        } else {
            renderAdminDashboard();
        }
        
        // Update Unread Messages Badge
        updateUnreadBadge();
    } else {
        // Setup Public Shell
        document.getElementById("admin-layout").classList.add("hidden");
        document.getElementById("public-header").classList.remove("hidden");
        document.getElementById("public-footer").classList.remove("hidden");
        
        const appOutlet = document.getElementById("app-outlet");
        appOutlet.classList.remove("hidden");
        
        updateActiveNav(hash);
        
        if (viewFn) {
            viewFn();
        } else {
            renderHome();
        }
    }
    
    // Re-initialize Lucide icons for dynamically loaded content
    refreshIcons();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// UI Active Navigation highlights
function updateActiveNav(hash) {
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === hash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
        if (link.getAttribute("href") === hash) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Hide mobile dropdown menu after click
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    if (mobileMenu && menuIcon) {
        mobileMenu.style.display = "none";
        menuIcon.setAttribute("data-lucide", "menu");
        refreshIcons();
    }
}

function updateActiveSidebar(hash) {
    document.querySelectorAll(".sidebar-link").forEach(link => {
        const href = link.getAttribute("href");
        if (href === hash || (hash.startsWith(href) && href !== "#/admin")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Set page headers based on admin view
    const titleElement = document.getElementById("admin-view-title");
    const subtitleElement = document.getElementById("admin-view-subtitle");
    
    if (titleElement && subtitleElement) {
        if (hash === "#/admin") {
            titleElement.innerText = "Dashboard Overview";
            subtitleElement.innerText = "General statistics and notifications";
        } else if (hash === "#/admin/products") {
            titleElement.innerText = "Product Inventory Management";
            subtitleElement.innerText = "Add, edit, or delete items from the catalog";
        } else if (hash === "#/admin/blog") {
            titleElement.innerText = "Company Blog Manager";
            subtitleElement.innerText = "Publish news, agribusiness articles, and updates";
        } else if (hash === "#/admin/messages") {
            titleElement.innerText = "Customer Messages & Quotes";
            subtitleElement.innerText = "Review quote requests and contact form submissions";
        } else if (hash === "#/admin/users") {
            titleElement.innerText = "Administrative Users";
            subtitleElement.innerText = "Create and manage system administrator profiles";
        }
    }
}

function updateUnreadBadge() {
    const unreadCount = state.messages.filter(m => !m.isRead).length;
    const badge = document.getElementById("unread-messages-count");
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount;
            badge.classList.remove("hidden");
        } else {
            badge.classList.add("hidden");
        }
    }
}

// Bind Router Events
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", () => {
    router();
    setupGlobalEvents();
});

function setupGlobalEvents() {
    // Mobile navigation toggle
    const toggle = document.getElementById("mobile-nav-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    
    if (toggle && mobileMenu && menuIcon) {
        toggle.addEventListener("click", () => {
            const isVisible = mobileMenu.style.display === "block";
            if (isVisible) {
                mobileMenu.style.display = "none";
                menuIcon.setAttribute("data-lucide", "menu");
            } else {
                mobileMenu.style.display = "block";
                menuIcon.setAttribute("data-lucide", "x");
            }
            refreshIcons();
        });
    }

    // Language Toggle Click listeners
    const langBtn = document.getElementById("lang-toggle-btn");
    const mobLangBtn = document.getElementById("mobile-lang-toggle-btn");
    
    const toggleLanguage = () => {
        state.language = state.language === "en" ? "rw" : "en";
        localStorage.setItem("bb_language", state.language);
        updateLanguageDOM();
        router(); // Refresh dynamic templates
        showToast(state.language === "en" ? "Language set to English." : "Uburimyi bwahinduwe mu Kinyarwanda.", "success");
    };

    if (langBtn) langBtn.addEventListener("click", toggleLanguage);
    if (mobLangBtn) mobLangBtn.addEventListener("click", toggleLanguage);

    // Admin Layout Sidebar mobile toggles
    const sidebarToggle = document.getElementById("admin-sidebar-toggle");
    const sidebar = document.querySelector(".admin-sidebar");
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("show");
        });
    }

    // Sign out functionality
    const logoutBtn = document.getElementById("admin-logout-btn");
    const mobileLogoutBtn = document.getElementById("admin-mobile-logout");
    
    const handleLogout = () => {
        sessionStorage.removeItem("bb_current_user");
        state.currentUser = null;
        showToast("Signed out successfully.", "success");
        window.location.hash = "#/home";
    };

    if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
    if (mobileLogoutBtn) mobileLogoutBtn.addEventListener("click", handleLogout);
}

// ==================================================== 
// PUBLIC PAGES RENDERERS
// ==================================================== 

const outlet = () => document.getElementById("app-outlet");

function renderHome() {
    outlet().innerHTML = `
        <!-- Hero Banner Section -->
        <section class="hero">
            <div class="container hero-grid">
                <div class="hero-content">
                    <span class="section-tagline">${t("homeTagline")}</span>
                    <h1>${t("homeHeroTitle")}</h1>
                    <p class="hero-desc">
                        ${t("homeHeroDesc")}
                    </p>
                    <div class="hero-btns">
                        <a href="#/products" class="btn btn-primary">${t("homeBrowseBtn")}</a>
                        <a href="#/about" class="btn btn-outline">${t("homeStoryBtn")}</a>
                    </div>
                    <div class="hero-features">
                        <div class="hero-feat-item">
                            <div class="hero-feat-icon"></div>
                            <div class="hero-feat-text">
                                <h4>${t("homeFeatQuality")}</h4>
                                <p>${t("homeFeatQualityDesc")}</p>
                            </div>
                        </div>
                        <div class="hero-feat-item">
                            <div class="hero-feat-icon"></div>
                            <div class="hero-feat-text">
                                <h4>${t("homeFeatIrrig")}</h4>
                                <p>${t("homeFeatIrrigDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="hero-media">
                    <img src="public/tomatoes_growing.jpg" alt="Tomato greenhouse farming at Belybella" class="hero-img-main">
                    <div class="hero-badge-floating">
                        
                        <div class="hero-badge-text">
                            <h4>100% Organic</h4>
                            <p>Fresh tomatoes & peas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Welcome Callout & Core Strengths -->
        <section class="section-padding container">
            <div class="welcome-callout">
                <div class="grid-2" style="align-items: center;">
                    <div>
                        <span class="section-tagline">${t("homeWelcomeTagline")}</span>
                        <h2 style="font-size: 2rem; margin-bottom: 16px;">${t("homeWelcomeTitle")}</h2>
                        <p style="color: var(--text-muted);">
                            ${t("homeWelcomeDesc")}
                        </p>
                    </div>
                    <div class="features-grid" style="grid-template-columns: 1fr; gap: 16px;">
                        <div class="card" style="padding: 20px; display: flex; align-items: center; gap: 16px;">
                            <div>
                                <h4 style="margin: 0;">${t("homeWelcomeFeat1")}</h4>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">${t("homeWelcomeFeat1Desc")}</p>
                            </div>
                        </div>
                        <div class="card" style="padding: 20px; display: flex; align-items: center; gap: 16px;">
                            <div>
                                <h4 style="margin: 0;">${t("homeWelcomeFeat2")}</h4>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">${t("homeWelcomeFeat2Desc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Three Core Services/Features Section -->
        <section class="section-padding" style="background-color: #ffffff;">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="section-tagline">${t("homePillarsTagline")}</span>
                    <h2 class="section-title">${t("homePillarsTitle")}</h2>
                    <p class="section-subtitle">${t("homePillarsDesc")}</p>
                </div>
                
                <div class="features-grid">
                    <div class="card feature-card">
                        <div class="feature-icon-wrapper feat-greenhouse">
                            </div>
                        <h3>${t("homePillar1Title")}</h3>
                        <p>${t("homePillar1Desc")}</p>
                    </div>
                    
                    <div class="card feature-card">
                        <div class="feature-icon-wrapper feat-irrigation">
                            </div>
                        <h3>${t("homePillar2Title")}</h3>
                        <p>${t("homePillar2Desc")}</p>
                    </div>
                    
                    <div class="card feature-card">
                        <div class="feature-icon-wrapper feat-organic">
                            </div>
                        <h3>${t("homePillar3Title")}</h3>
                        <p>${t("homePillar3Desc")}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Crops Display Banner -->
        <section class="crop-banner">
            <div class="container">
                <h2>${t("homeBannerTitle")}</h2>
                <p>${t("homeBannerDesc")}</p>
                
                <div class="crop-cards-wrapper">
                    <div class="crop-banner-card">
                        
                        <div class="crop-banner-info">
                            <h3>${t("homeBannerTomatoesTitle")}</h3>
                            <p>${t("homeBannerTomatoesDesc")}</p>
                        </div>
                    </div>
                    <div class="crop-banner-card">
                        
                        <div class="crop-banner-info">
                            <h3>${t("homeBannerPeasTitle")}</h3>
                            <p>${t("homeBannerPeasDesc")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Location Section -->
        <section class="section-padding container">
            <div class="location-cta">
                <div>
                    <span class="section-tagline">${t("homeLocTagline")}</span>
                    <h2 class="section-title">${t("homeLocTitle")}</h2>
                    <p style="color: var(--text-muted); margin-bottom: 24px;">
                        ${t("homeLocDesc")}
                    </p>
                    
                    <div class="location-details">
                        <div class="loc-item">
                            
                            <div class="loc-info">
                                <h4>${t("homeLocDist")}</h4>
                                <p>${t("homeLocDistDesc")}</p>
                            </div>
                        </div>
                        <div class="loc-item">
                            
                            <div class="loc-info">
                                <h4>${t("homeLocVill")}</h4>
                                <p>${t("homeLocVillDesc")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="location-map-mock">
                    <div class="map-card-floating">
                        <h4>${t("homeLocHq")}</h4>
                        <p>Bitoma Village, Kabarondo, Rwanda</p>
                        <a href="#/contact" class="btn btn-primary btn-sm btn-secondary" style="width: 100%;">${t("homeLocDirBtn")}</a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    outlet().innerHTML = `
        <!-- Header banner -->
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/tomatoes_plate.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">About BELYBELLA Ltd</h1>
                <p>Nurturing communities through technology-driven agribusiness in Rwanda</p>
            </div>
        </section>

        <!-- Company details and Mission/Vision -->
        <section class="section-padding container">
            <div class="about-grid">
                <div class="about-text">
                    <span class="section-tagline">Who We Are</span>
                    <h3>Pioneering Sustainable Agribusiness</h3>
                    <p>
                        Founded with a strong passion for modern agricultural systems, BELYBELLA Ltd is a forward-thinking agribusiness based in Kayonza District, Rwanda. We specialize in growing and supplying premium greenhouse tomatoes and fresh podded green peas.
                    </p>
                    <p>
                        By combining protective crop greenhouse structures with automated water-conserving drip irrigation pipelines, we bypass the challenges of climate change and rainfall variability. This allows us to maintain stable, year-round harvest supplies for retail grocery chains, school feeding programs, and food markets across the region.
                    </p>
                    
                    <div class="mission-vision-wrapper">
                        <div class="mission-card">
                            <h4>Our Mission</h4>
                            <p>To deploy innovative greenhouse and drip irrigation technologies to supply healthy crops, foster local job creation, and drive sustainable economic growth in Eastern Rwanda.</p>
                        </div>
                        <div class="mission-card">
                            <h4>Our Vision</h4>
                            <p>To become a leading regional hub of modern agribusiness, celebrated for top-quality organic products, high efficiency, and empowering local communities.</p>
                        </div>
                    </div>
                </div>
                
                <div class="ceo-profile-card">
                    <img src="public/ceo_crop.jpg" alt="CEO Byiringiro Belange" class="ceo-img">
                    <h3>Byiringiro Belange</h3>
                    <div class="ceo-title">CEO & Founder</div>
                    <p class="ceo-quote">
                        "Modern agriculture is not just about labor; it's about engineering. By implementing greenhouse shelters and smart drip systems, we make farming predictable, profitable, and highly attractive to youth."
                    </p>
                    <div style="border-top: 1px solid var(--border-color); padding-top: 16px; margin-top: 16px;">
                        <a href="#/contact" class="btn btn-outline btn-sm">Message CEO Office</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Farm Location details -->
        <section class="section-padding" style="background-color: #ffffff;">
            <div class="container">
                <div class="section-title-wrapper">
                    <span class="section-tagline">Geography & Operations</span>
                    <h2 class="section-title">Where We Farm</h2>
                    <p class="section-subtitle">Our farming operations are embedded in a rich agricultural belt in Eastern Province, Rwanda.</p>
                </div>
                
                <div class="grid-4" style="margin-top: 32px;">
                    <div class="card" style="padding: 24px; text-align: center;">
                        <h4 style="margin-bottom: 8px;">Country</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Rwanda</p>
                    </div>
                    <div class="card" style="padding: 24px; text-align: center;">
                        <h4 style="margin-bottom: 8px;">District / Sector</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Kayonza / Kabarondo</p>
                    </div>
                    <div class="card" style="padding: 24px; text-align: center;">
                        <h4 style="margin-bottom: 8px;">Cell</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Cyinzovu Cell</p>
                    </div>
                    <div class="card" style="padding: 24px; text-align: center;">
                        <h4 style="margin-bottom: 8px;">Village</h4>
                        <p style="color: var(--text-muted); font-size: 0.9rem;">Bitoma Village</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Company Timeline / Milestones -->
        <section class="section-padding container">
            <div class="section-title-wrapper">
                <span class="section-tagline">Milestones</span>
                <h2 class="section-title">Our Growth Timeline</h2>
                <p class="section-subtitle">The journey of BELYBELLA Ltd from founding to tech-enabled agribusiness leader.</p>
            </div>
            
            <div class="timeline">
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>2024</h3>
                        <h4>Founding in Kayonza</h4>
                        <p>BELYBELLA Ltd is registered. Formed with a core team in Kabarondo Sector, acquiring land in Cyinzovu Cell to start fresh farming.</p>
                    </div>
                </div>
                <div class="timeline-item right">
                    <div class="timeline-content">
                        <h3>2025</h3>
                        <h4>Greenhouse Infrastructure</h4>
                        <p>Constructed the first climate-controlled greenhouses, successfully protecting Roma tomato varieties from heavy rain and diseases.</p>
                    </div>
                </div>
                <div class="timeline-item left">
                    <div class="timeline-content">
                        <h3>2026</h3>
                        <h4>Drip Irrigation Rollout</h4>
                        <p>Installed automated solar-powered drip irrigation pipelines across all fields, maximizing crop yields for green peas and tomatoes.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderProducts() {
    let pList = state.products;
    
    // Apply filters
    if (state.currentFilter !== "all") {
        pList = pList.filter(p => p.category === state.currentFilter);
    }
    
    // Apply Search
    if (state.searchQuery) {
        pList = pList.filter(p => localizedField(p, "name").toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                                  localizedField(p, "description").toLowerCase().includes(state.searchQuery.toLowerCase()));
    }

    let productsHTML = pList.map(p => {
        const productName = localizedField(p, "name");
        const productDesc = localizedField(p, "description");
        const productFeatures = localizedList(p, "features");
        return `
        <div class="card product-card">
            <div class="product-img-wrapper">
                <img src="${p.image}" alt="${productName}" class="product-img" onerror="this.src='public/tomatoes_market.jpg'">
                <span class="product-category-tag">${p.category}</span>
            </div>
            <div class="product-details">
                <h3>${productName}</h3>
                <p class="product-desc">${productDesc}</p>
                <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
                    ${productFeatures.length ? productFeatures.map(f => `<span class="badge badge-success" style="font-size: 0.65rem;">${f}</span>`).join('') : '<span class="badge badge-success" style="font-size: 0.65rem;">Fresh Crop</span>'}
                </div>
                <div class="product-meta">
                    <div class="product-price">
                        <span class="price-label">${t("prodPriceLabel")}</span>
                        <span class="price-val">${p.price} RWF / ${p.unit}</span>
                    </div>
                    <button onclick="openOrderModal('${p.id}')" class="btn btn-secondary btn-sm">${t("prodInquireBtn")}</button>
                </div>
            </div>
        </div>
    `}).join("");

    if (pList.length === 0) {
        productsHTML = `
            <div style="grid-column: span 3; text-align: center; padding: 60px 0; border: 1px dashed var(--border-color); border-radius: var(--border-radius); background: white;">
                <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 16px;">${t("prodNoMatch")}</p>
                <button onclick="clearProductSearch()" class="btn btn-primary btn-sm">${t("prodClearBtn")}</button>
            </div>
        `;
    }

    outlet().innerHTML = `
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/tomatoes_market.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">${t("prodBannerTitle")}</h1>
                <p>${t("prodBannerDesc")}</p>
            </div>
        </section>

        <section class="section-padding container">
            <!-- Search & Filters -->
            <div style="background-color: white; border: 1px solid var(--border-color); padding: 24px; border-radius: var(--border-radius); margin-bottom: 40px; display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap;">
                
                <div class="products-filter-bar" style="margin: 0; flex-wrap: wrap;">
                    <button onclick="filterProducts('all')" class="filter-btn ${state.currentFilter === 'all' ? 'active' : ''}">${t("prodFilterAll")}</button>
                    <button onclick="filterProducts('tomatoes')" class="filter-btn ${state.currentFilter === 'tomatoes' ? 'active' : ''}">${t("prodFilterTomatoes")}</button>
                    <button onclick="filterProducts('peas')" class="filter-btn ${state.currentFilter === 'peas' ? 'active' : ''}">${t("prodFilterPeas")}</button>
                </div>
                
                <div class="form-group" style="margin: 0; min-width: 300px; display: flex; align-items: center; gap: 8px;">
                    <input type="text" id="product-search-input" value="${state.searchQuery}" placeholder="${t("prodSearchPlaceholder")}" class="form-control" style="padding: 10px 16px;">
                    <button onclick="searchProducts()" class="btn btn-primary" style="padding: 10px 16px;">${t("prodSearchBtn")}</button>
                </div>
            </div>

            <!-- Products Grid -->
            <div class="grid-3" id="products-grid-outlet">
                ${productsHTML}
            </div>
        </section>

        <!-- Order Inquiry Dialog (Injected when opened) -->
        <div id="modal-container-outlet"></div>
    `;
    
    // Bind search input Enter key event
    const searchInput = document.getElementById("product-search-input");
    if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                searchProducts();
            }
        });
    }
}

// Product list functions
window.filterProducts = function(cat) {
    state.currentFilter = cat;
    renderProducts();
    refreshIcons();
};

window.searchProducts = function() {
    const input = document.getElementById("product-search-input");
    if (input) {
        state.searchQuery = input.value;
        renderProducts();
        refreshIcons();
    }
};

window.clearProductSearch = function() {
    state.currentFilter = "all";
    state.searchQuery = "";
    renderProducts();
    refreshIcons();
};

// Modal Order Quote Handlers
window.openOrderModal = function(id) {
    const p = state.products.find(item => item.id === id);
    if (!p) return;
    const productName = localizedField(p, "name");

    const modalHTML = `
        <div class="modal-overlay" id="order-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${t("modalTitle")}</h3>
                    <button onclick="closeOrderModal()" class="modal-close">Close</button>
                </div>
                <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 20px; background: var(--bg-main); padding: 12px; border-radius: 8px;">
                    <img src="${p.image}" alt="${productName}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <h4 style="margin: 0; color: var(--primary);">${productName}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted); margin: 0;">${t("modalBasePrice")}: ${p.price} RWF / ${p.unit}</p>
                    </div>
                </div>
                <form id="quote-request-form" onsubmit="submitQuoteRequest(event, '${productName}')">
                    <div class="form-group">
                        <label class="form-label">${t("modalNameLabel")}</label>
                        <input type="text" id="quote-name" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t("modalEmailLabel")}</label>
                        <input type="email" id="quote-email" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t("modalQtyLabel")}</label>
                        <input type="number" id="quote-qty" required min="10" placeholder="${t("modalMinOrder")}" class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t("modalNotesLabel")}</label>
                        <textarea id="quote-notes" placeholder="${t("modalNotesPlaceholder")}" class="form-control"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">${t("modalSubmitBtn")}</button>
                </form>
            </div>
        </div>
    `;
    
    document.getElementById("modal-container-outlet").innerHTML = modalHTML;
    refreshIcons();
};

window.closeOrderModal = function() {
    const modal = document.getElementById("order-modal");
    if (modal) {
        modal.remove();
    }
};

window.submitQuoteRequest = function(event, prodName) {
    event.preventDefault();
    
    const name = document.getElementById("quote-name").value;
    const email = document.getElementById("quote-email").value;
    const qty = document.getElementById("quote-qty").value;
    const notes = document.getElementById("quote-notes").value;

    const newMsg = {
        id: generateId("msg"),
        name: name,
        email: email,
        subject: `Quote Request: ${prodName}`,
        message: `Customer requesting quote for ${qty}kg of ${prodName}. Additional notes: ${notes || 'None'}`,
        date: formatDate(new Date()),
        isRead: false
    };

    // Save to message database
    state.messages.unshift(newMsg);
    Database.save("bb_messages", state.messages);

    closeOrderModal();
    showToast(`Quote request for ${prodName} submitted. Our sales team will email you shortly!`, "success");
};

function renderServices() {
    outlet().innerHTML = `
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/tomatoes_growing.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">Agribusiness Services</h1>
                <p>We share and build professional farming infrastructures across Rwanda</p>
            </div>
        </section>

        <section class="section-padding container">
            <!-- Service 1 -->
            <div class="service-showcase">
                <img src="public/tomatoes_growing.jpg" alt="Greenhouse Installation" class="service-img">
                <div class="service-content">
                    <span class="section-tagline">Infrastructures</span>
                    <h3>Commercial Greenhouse Installation</h3>
                    <p>
                        We design and construct high-durability steel and timber greenhouse frames optimized for Rwanda's mountainous terrain and weather conditions.
                    </p>
                    <ul class="service-features-list">
                        <li>UV-resistant polyethylene covers</li>
                        <li>Custom insect netting & ventilation flaps</li>
                        <li>Built-in crop support systems</li>
                    </ul>
                    <a href="#/contact" class="btn btn-primary">Book Consultation</a>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="service-showcase">
                <img src="public/peas_crop.jpg" alt="Drip Irrigation Setup" class="service-img">
                <div class="service-content">
                    <span class="section-tagline">Irrigation Systems</span>
                    <h3>Smart Drip Irrigation Setup</h3>
                    <p>
                        Conserve water and double crop yields with custom pipe layouts tailored to your crop layout and soil type. We build gravity-fed and solar-powered systems.
                    </p>
                    <ul class="service-features-list">
                        <li>Direct root zone water delivery</li>
                        <li>Automated solar water pump integration</li>
                        <li>Water filter & backwash installations</li>
                    </ul>
                    <a href="#/contact" class="btn btn-primary">Request Site Visit</a>
                </div>
            </div>
        </section>
    `;
}

function renderBlog() {
    const blogHTML = state.blogs.map(post => {
        const postTitle = localizedField(post, "title");
        const postExcerpt = localizedField(post, "excerpt");
        return `
        <div class="card blog-card">
            <div class="blog-img-wrapper">
                <img src="${post.image}" alt="${postTitle}" class="blog-img" onerror="this.src='public/tomatoes_plate.jpg'">
            </div>
            <div class="blog-content">
                <div class="blog-date-meta">
                    <span>${post.date}</span>
                    <span>${post.author}</span>
                </div>
                <h3><a href="#/blog/${post.id}">${postTitle}</a></h3>
                <p class="blog-excerpt">${postExcerpt}</p>
                <a href="#/blog/${post.id}" class="blog-read-more">${t("blogReadMore")}</a>
            </div>
        </div>
    `}).join("");

    outlet().innerHTML = `
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/peas_crop.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">${t("blogBannerTitle")}</h1>
                <p>${t("blogBannerDesc")}</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="blog-grid">
                ${blogHTML}
            </div>
        </section>
    `;
}

function renderBlogDetail(id) {
    const post = state.blogs.find(b => b.id === id);
    if (!post) {
        outlet().innerHTML = `
            <div class="container section-padding text-center">
                <h2>${t("blogNotFound")}</h2>
                <p style="margin-bottom: 24px;">${t("blogNotFoundDesc")}</p>
                <a href="#/blog" class="btn btn-primary">${t("blogBackBtn")}</a>
            </div>
        `;
        return;
    }

    const postTitle = localizedField(post, "title");
    const postContent = localizedField(post, "content");
    const commentsHTML = post.comments && post.comments.length > 0 
        ? post.comments.map(c => `
            <div class="comment-card">
                <div class="comment-author-meta">
                    <span class="comment-author">${c.name}</span>
                    <span class="comment-date">${c.date}</span>
                </div>
                <p class="comment-text">${c.text}</p>
            </div>
        `).join("")
        : `<p style="color: var(--text-light); text-align: center; padding: 24px 0;" id="no-comments-prompt">${t("blogFirstComment")}</p>`;

    outlet().innerHTML = `
        <section class="post-detail-container">
            <a href="#/blog" class="btn btn-outline btn-sm" style="margin-bottom: 32px;">${t("blogBackBtn")}</a>
            
            <header class="post-header">
                <h1 class="post-title">${postTitle}</h1>
                <div class="post-meta-details">
                    <span>${post.date}</span>
                    <span>${post.author}</span>
                </div>
            </header>

            <img src="${post.image}" alt="${postTitle}" class="post-featured-image" onerror="this.src='public/tomatoes_plate.jpg'">

            <article class="post-body">
                ${postContent}
            </article>

            <div class="comments-section">
                <h3 class="comments-title">${t("blogDiscussion")} (${post.comments ? post.comments.length : 0})</h3>
                
                <div class="comments-list" id="blog-comments-outlet">
                    ${commentsHTML}
                </div>

                <div class="card" style="padding: 24px;">
                    <h4 style="margin-bottom: 16px;">${t("blogWriteComment")}</h4>
                    <form id="comment-form" onsubmit="submitBlogComment(event, '${post.id}')">
                        <div class="form-group">
                            <label class="form-label">${t("blogCommentName")}</label>
                            <input type="text" id="comment-author" required class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-label">${t("blogCommentText")}</label>
                            <textarea id="comment-text" required class="form-control" style="min-height: 80px;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">${t("blogCommentPostBtn")}</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}
window.submitBlogComment = function(event, postId) {
    event.preventDefault();

    const name = document.getElementById("comment-author").value;
    const text = document.getElementById("comment-text").value;

    const blogIndex = state.blogs.findIndex(b => b.id === postId);
    if (blogIndex === -1) return;

    const newComment = {
        name: name,
        text: text,
        date: formatDate(new Date())
    };

    if (!state.blogs[blogIndex].comments) {
        state.blogs[blogIndex].comments = [];
    }

    state.blogs[blogIndex].comments.push(newComment);
    Database.save("bb_blogs", state.blogs);

    // Dynamic UI update
    showToast("Comment published!", "success");
    renderBlogDetail(postId);
    refreshIcons();
};

function renderGallery() {
    // Gallery Assets mapping
    const galleryItems = [
        { src: "public/tomatoes_growing.jpg", caption: "Advanced greenhouse tomato canopy", size: "wide" },
        { src: "public/peas_crop.jpg", caption: "Sweet green peas cultivation in Kabarondo", size: "" },
        { src: "public/tomatoes_plate.jpg", caption: "Freshly harvested organic Roma tomatoes", size: "tall" },
        { src: "public/tomatoes_market.jpg", caption: "Clean commercial display boxes", size: "wide" },
        { src: "public/ceo_crop.jpg", caption: "CEO Byiringiro Belange inspecting agricultural developments", size: "" }
    ];

    const galleryHTML = galleryItems.map((item, idx) => `
        <div class="gallery-item ${item.size}" onclick="openLightbox(${idx})">
            <img src="${item.src}" alt="${item.caption}">
            <div class="gallery-overlay">
                <h4>${item.caption}</h4>
                <p>Belybella Farm Media</p>
            </div>
        </div>
    `).join("");

    outlet().innerHTML = `
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/tomatoes_growing.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">Photo Gallery</h1>
                <p>Visual overview of our greenhouse layout, crops, and harvesting technology</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="gallery-grid">
                ${galleryHTML}
            </div>
        </section>

        <!-- Lightbox placeholder -->
        <div id="lightbox-outlet"></div>
    `;

    // Global state index mapping
    window.currentGalleryItems = galleryItems;
}

window.openLightbox = function(idx) {
    const item = window.currentGalleryItems[idx];
    if (!item) return;

    const lightboxHTML = `
        <div class="lightbox" id="lightbox-overlay" onclick="closeLightbox()">
            <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
            <img src="${item.src}" alt="${item.caption}" class="lightbox-img" onclick="event.stopPropagation()">
            <div class="lightbox-caption" onclick="event.stopPropagation()">
                <h3>BELYBELLA Farm View</h3>
                <p>${item.caption}</p>
            </div>
        </div>
    `;
    
    document.getElementById("lightbox-outlet").innerHTML = lightboxHTML;
};

window.closeLightbox = function() {
    const box = document.getElementById("lightbox-overlay");
    if (box) {
        box.remove();
    }
};

function renderContact() {
    outlet().innerHTML = `
        <section class="crop-banner" style="background: linear-gradient(rgba(20, 83, 45, 0.85), rgba(20, 83, 45, 0.95)), url('public/tomatoes_plate.jpg') no-repeat center center/cover; padding: 60px 0;">
            <div class="container">
                <h1 style="color: white; font-size: 3rem;">Contact Us</h1>
                <p>Send a message or inquire about bulk organic supply</p>
            </div>
        </section>

        <section class="section-padding container">
            <div class="contact-grid">
                <div class="contact-info-panel">
                    <h3>Get in Touch</h3>
                    <p>Contact BELYBELLA Ltd for general information, wholesale pricing, or partnership proposals.</p>
                    
                    <div class="contact-details-list">
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"></div>
                            <div class="contact-detail-text">
                                <h4>Headquarters Location</h4>
                                <p>Bitoma Village, Cyinzovu Cell, Kabarondo Sector, Kayonza District, Rwanda</p>
                            </div>
                        </div>
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"></div>
                            <div class="contact-detail-text">
                                <h4>Phone Contact</h4>
                                <p>+250 788 123 456<br>+250 789 987 654</p>
                            </div>
                        </div>
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"></div>
                            <div class="contact-detail-text">
                                <h4>General Email</h4>
                                <p>info@belybella.com<br>sales@belybella.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-panel">
                    <h3>Send a Message</h3>
                    <p>Fill out the form below. We'll reply within 24 hours.</p>
                    
                    <form id="contact-inquiry-form" onsubmit="submitContactForm(event)">
                        <div class="grid-2">
                            <div class="form-group">
                                <label class="form-label">Full Name</label>
                                <input type="text" id="contact-name" required class="form-control">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Email Address</label>
                                <input type="email" id="contact-email" required class="form-control">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Subject</label>
                            <input type="text" id="contact-subject" required class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Message Content</label>
                            <textarea id="contact-message" required class="form-control"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

window.submitContactForm = function(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const subject = document.getElementById("contact-subject").value;
    const message = document.getElementById("contact-message").value;

    if (!validateEmail(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
    }

    const newMsg = {
        id: generateId("msg"),
        name: name,
        email: email,
        subject: subject,
        message: message,
        date: formatDate(new Date()),
        isRead: false
    };

    state.messages.unshift(newMsg);
    Database.save("bb_messages", state.messages);

    // Clear form
    document.getElementById("contact-inquiry-form").reset();
    showToast("Message sent successfully! Our team will contact you shortly.", "success");
};

function renderLogin() {
    outlet().innerHTML = `
        <section class="login-section">
            <div class="login-card">
                <div class="login-brand">
                    <span class="logo-icon">🌱</span>
                    <span class="logo-main" style="font-size: 1.75rem;">BELYBELLA Portal</span>
                </div>
                <h2>Staff Portal Login</h2>
                <p>Provide credentials to access administrative dashboard controls.</p>
                
                <form id="portal-login-form" onsubmit="handleLoginSubmit(event)">
                    <div class="form-group" style="text-align: left;">
                        <label class="form-label">Username</label>
                        <input type="text" id="login-username" required class="form-control" placeholder="e.g. admin">
                    </div>
                    <div class="form-group" style="text-align: left;">
                        <label class="form-label">Password</label>
                        <input type="password" id="login-password" required class="form-control" placeholder="••••••••">
                    </div>
                    <div style="background-color: var(--warning-light); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 8px; padding: 12px; margin-bottom: 24px; text-align: left; font-size: 0.8rem; color: #92400e;">
                        <strong>Demo Access:</strong><br>
                        Username: <code>admin</code><br>
                        Password: <code>belybella2026</code>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Sign In</button>
                </form>
            </div>
        </section>
    `;
}

window.handleLoginSubmit = function(event) {
    event.preventDefault();

    const userVal = document.getElementById("login-username").value;
    const passVal = document.getElementById("login-password").value;

    const matchedUser = state.users.find(u => u.username === userVal && u.password === passVal);

    if (matchedUser) {
        sessionStorage.setItem("bb_current_user", JSON.stringify(matchedUser));
        state.currentUser = matchedUser;
        showToast(`Welcome back, ${matchedUser.name}!`, "success");
        window.location.hash = "#/admin";
    } else {
        showToast("Incorrect username or password.", "error");
    }
};

// ==================================================== 
// ADMIN PAGES CONTROLLERS (Dashboard & CRUD Panels)
// ==================================================== 

const adminOutlet = () => document.getElementById("admin-content-outlet");

function renderAdminDashboard() {
    const totalProd = state.products.length;
    const totalBlog = state.blogs.length;
    const unreadCount = state.messages.filter(m => !m.isRead).length;
    const totalUsers = state.users.length;

    // Compile recent messages
    const recentMsgsHTML = state.messages.slice(0, 3).map(m => `
        <div class="message-card-admin ${m.isRead ? '' : 'unread'}" style="padding: 12px; margin-bottom: 10px;">
            <div style="display: flex; justify-content: space-between;">
                <strong>${m.name}</strong>
                <span style="font-size: 0.75rem; color: var(--text-light);">${m.date}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">${m.subject}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.message}</div>
        </div>
    `).join("");

    adminOutlet().innerHTML = `
        <!-- Stats Widgets -->
        <div class="admin-stats-grid">
            <div class="stat-widget">
                <div class="stat-info">
                    <h3>${totalProd}</h3>
                    <p>Total Products</p>
                </div>
                <div class="stat-icon green"></div>
            </div>
            <div class="stat-widget">
                <div class="stat-info">
                    <h3>${totalBlog}</h3>
                    <p>Blog Posts</p>
                </div>
                <div class="stat-icon blue"></div>
            </div>
            <div class="stat-widget">
                <div class="stat-info">
                    <h3>${unreadCount}</h3>
                    <p>Unread Mail</p>
                </div>
                <div class="stat-icon orange"></div>
            </div>
            <div class="stat-widget">
                <div class="stat-info">
                    <h3>${totalUsers}</h3>
                    <p>Admin Users</p>
                </div>
                <div class="stat-icon red"></div>
            </div>
        </div>

        <div class="admin-grid-main">
            <!-- Left panel: Welcome -->
            <div>
                <div class="admin-card">
                    <div class="admin-card-header">
                        <h3>Farming Portal Overview</h3>
                    </div>
                    <p>
                        Welcome to the <strong>BELYBELLA Ltd</strong> administrator dashboard. As an administrator, you have full control over editing product inventory, updating information on the public catalog, writing blog announcements, managing incoming customer quote requests, and creating user credentials.
                    </p>
                    <div style="margin-top: 20px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <a href="#/admin/products" class="btn btn-primary btn-sm">Add Produce</a>
                        <a href="#/admin/blog" class="btn btn-outline btn-sm">Write Blog Post</a>
                    </div>
                </div>
                
                <div class="admin-card">
                    <div class="admin-card-header">
                        <h3>Operating Location</h3>
                    </div>
                    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 0;">
                        <li><strong>Country:</strong> Rwanda</li>
                        <li><strong>District:</strong> Kayonza District</li>
                        <li><strong>Sector:</strong> Kabarondo Sector</li>
                        <li><strong>Cell / Village:</strong> Cyinzovu / Bitoma</li>
                    </ul>
                </div>
            </div>

            <!-- Right panel: Recent Mail -->
            <div>
                <div class="admin-card">
                    <div class="admin-card-header">
                        <h3>Recent Messages</h3>
                        <a href="#/admin/messages" style="font-size: 0.8rem; color: var(--secondary-dark); font-weight: 600;">View All</a>
                    </div>
                    <div>
                        ${recentMsgsHTML || '<p style="text-align: center; color: var(--text-light); padding: 20px 0;">No messages received.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 4. ADMIN PRODUCTS CRUD
function renderAdminProducts() {
    const productsHTML = state.products.map(p => `
        <tr>
            <td>
                <img src="${p.image}" alt="${p.name}" class="admin-table-img" onerror="this.src='public/tomatoes_market.jpg'">
            </td>
            <td><strong>${p.name}</strong></td>
            <td><span class="badge ${p.category === 'tomatoes' ? 'badge-danger' : 'badge-success'}">${p.category}</span></td>
            <td><strong>${p.price} RWF</strong> / ${p.unit}</td>
            <td>
                <div class="actions-cell">
                    <button onclick="editProductPrompt('${p.id}')" class="action-btn action-edit" title="Edit"></button>
                    <button onclick="deleteProduct('${p.id}')" class="action-btn action-delete" title="Delete"></button>
                </div>
            </td>
        </tr>
    `).join("");

    adminOutlet().innerHTML = `
        <div class="admin-grid-main" style="grid-template-columns: 1.25fr 0.75fr;">
            
            <!-- Product List Panel -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3>Produce Inventory</h3>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Estimated Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${productsHTML || '<tr><td colspan="5" style="text-align: center; padding: 24px; color: var(--text-light);">No products in inventory. Add one on the right.</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Add/Edit form -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3 id="product-form-title">Add Produce</h3>
                </div>
                
                <form id="admin-product-form" onsubmit="saveProduct(event)">
                    <input type="hidden" id="prod-form-id">
                    
                    <div class="form-group">
                        <label class="form-label">Product Name</label>
                        <input type="text" id="prod-form-name" required class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Category</label>
                        <select id="prod-form-category" class="form-control">
                            <option value="tomatoes">Tomatoes 🍅</option>
                            <option value="peas">Green Peas 🫛</option>
                        </select>
                    </div>

                    <div class="grid-2" style="gap: 12px; margin-bottom: 0;">
                        <div class="form-group">
                            <label class="form-label">Price (RWF)</label>
                            <input type="number" id="prod-form-price" required class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Per Unit</label>
                            <input type="text" id="prod-form-unit" required value="kg" class="form-control">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Visual Image</label>
                        <select id="prod-form-image" class="form-control">
                            <option value="public/tomatoes_growing.jpg">Tomatoes Growing (Greenhouse)</option>
                            <option value="public/tomatoes_plate.jpg">Tomatoes Displayed (Plate)</option>
                            <option value="public/tomatoes_market.jpg">Tomatoes Stacked (Market)</option>
                            <option value="public/peas_crop.jpg">Green Peas Pods (Harvest)</option>
                            <option value="public/ceo_crop.jpg">CEO Field Inspection (Belange)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Detailed Description</label>
                        <textarea id="prod-form-desc" required class="form-control" style="min-height: 100px;"></textarea>
                    </div>

                    <div style="display: flex; gap: 8px;">
                        <button type="submit" class="btn btn-primary btn-sm" style="flex-grow: 1;">Save Product</button>
                        <button type="button" onclick="cancelProductEdit()" id="prod-cancel-btn" class="btn btn-outline btn-sm hidden">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

window.cancelProductEdit = function() {
    document.getElementById("admin-product-form").reset();
    document.getElementById("prod-form-id").value = "";
    document.getElementById("product-form-title").innerText = "Add Produce";
    document.getElementById("prod-cancel-btn").classList.add("hidden");
};

window.editProductPrompt = function(id) {
    const p = state.products.find(item => item.id === id);
    if (!p) return;

    document.getElementById("prod-form-id").value = p.id;
    document.getElementById("prod-form-name").value = p.name;
    document.getElementById("prod-form-category").value = p.category;
    document.getElementById("prod-form-price").value = p.price;
    document.getElementById("prod-form-unit").value = p.unit;
    document.getElementById("prod-form-image").value = p.image;
    document.getElementById("prod-form-desc").value = p.description;

    document.getElementById("product-form-title").innerText = "Edit Produce";
    document.getElementById("prod-cancel-btn").classList.remove("hidden");
};

window.saveProduct = function(event) {
    event.preventDefault();

    const id = document.getElementById("prod-form-id").value;
    const name = document.getElementById("prod-form-name").value;
    const category = document.getElementById("prod-form-category").value;
    const price = document.getElementById("prod-form-price").value;
    const unit = document.getElementById("prod-form-unit").value;
    const image = document.getElementById("prod-form-image").value;
    const desc = document.getElementById("prod-form-desc").value;

    if (id) {
        // Edit existing product
        const idx = state.products.findIndex(p => p.id === id);
        if (idx !== -1) {
            state.products[idx] = {
                ...state.products[idx],
                name: name,
                category: category,
                price: Number(price),
                unit: unit,
                image: image,
                description: desc
            };
            showToast("Product updated successfully.", "success");
        }
    } else {
        // Create new product
        const newProduct = {
            id: generateId("prod"),
            name: name,
            category: category,
            price: Number(price),
            unit: unit,
            image: image,
            description: desc,
            inStock: true
        };
        state.products.push(newProduct);
        showToast("New product added to inventory.", "success");
    }

    Database.save("bb_products", state.products);
    renderAdminProducts();
    refreshIcons();
};

window.deleteProduct = function(id) {
    if (!confirm("Are you sure you want to delete this product?")) return;

    state.products = state.products.filter(p => p.id !== id);
    Database.save("bb_products", state.products);
    showToast("Product deleted.", "success");
    renderAdminProducts();
    refreshIcons();
};

// 5. ADMIN BLOG CRUD
function renderAdminBlog() {
    const blogsHTML = state.blogs.map(post => `
        <tr>
            <td><strong>${post.title}</strong></td>
            <td>${post.date}</td>
            <td>By ${post.author}</td>
            <td>
                <div class="actions-cell">
                    <button onclick="editBlogPrompt('${post.id}')" class="action-btn action-edit" title="Edit"></button>
                    <button onclick="deleteBlog('${post.id}')" class="action-btn action-delete" title="Delete"></button>
                </div>
            </td>
        </tr>
    `).join("");

    adminOutlet().innerHTML = `
        <div class="admin-grid-main" style="grid-template-columns: 1fr 1fr;">
            
            <!-- Blog posts list -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3>Published Posts</h3>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Author</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${blogsHTML || '<tr><td colspan="4" style="text-align: center; padding: 24px; color: var(--text-light);">No articles posted. Write one on the right.</td></tr>'}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Add/Edit form -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3 id="blog-form-title">Write Blog Post</h3>
                </div>
                
                <form id="admin-blog-form" onsubmit="saveBlog(event)">
                    <input type="hidden" id="blog-form-id">
                    
                    <div class="form-group">
                        <label class="form-label">Article Title</label>
                        <input type="text" id="blog-form-title-input" required class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Featured Image</label>
                        <select id="blog-form-image" class="form-control">
                            <option value="public/tomatoes_growing.jpg">Tomatoes Growing (Greenhouse)</option>
                            <option value="public/tomatoes_plate.jpg">Tomatoes Displayed (Plate)</option>
                            <option value="public/tomatoes_market.jpg">Tomatoes Stacked (Market)</option>
                            <option value="public/peas_crop.jpg">Green Peas Pods (Harvest)</option>
                            <option value="public/ceo_crop.jpg">CEO Field Inspection (Belange)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Short Excerpt (Summary)</label>
                        <input type="text" id="blog-form-excerpt" required class="form-control" placeholder="A single line describing the article.">
                    </div>

                    <div class="form-group">
                        <label class="form-label">Body Content (HTML allowed)</label>
                        <textarea id="blog-form-content" required class="form-control" style="min-height: 150px;"></textarea>
                    </div>

                    <div style="display: flex; gap: 8px;">
                        <button type="submit" class="btn btn-primary btn-sm" style="flex-grow: 1;">Publish Post</button>
                        <button type="button" onclick="cancelBlogEdit()" id="blog-cancel-btn" class="btn btn-outline btn-sm hidden">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
}

window.cancelBlogEdit = function() {
    document.getElementById("admin-blog-form").reset();
    document.getElementById("blog-form-id").value = "";
    document.getElementById("blog-form-title").innerText = "Write Blog Post";
    document.getElementById("blog-cancel-btn").classList.add("hidden");
};

window.editBlogPrompt = function(id) {
    const post = state.blogs.find(b => b.id === id);
    if (!post) return;

    document.getElementById("blog-form-id").value = post.id;
    document.getElementById("blog-form-title-input").value = post.title;
    document.getElementById("blog-form-image").value = post.image;
    document.getElementById("blog-form-excerpt").value = post.excerpt;
    document.getElementById("blog-form-content").value = post.content;

    document.getElementById("blog-form-title").innerText = "Edit Blog Post";
    document.getElementById("blog-cancel-btn").classList.remove("hidden");
};

window.saveBlog = function(event) {
    event.preventDefault();

    const id = document.getElementById("blog-form-id").value;
    const title = document.getElementById("blog-form-title-input").value;
    const image = document.getElementById("blog-form-image").value;
    const excerpt = document.getElementById("blog-form-excerpt").value;
    const content = document.getElementById("blog-form-content").value;

    if (id) {
        // Edit Blog
        const idx = state.blogs.findIndex(b => b.id === id);
        if (idx !== -1) {
            state.blogs[idx] = {
                ...state.blogs[idx],
                title: title,
                image: image,
                excerpt: excerpt,
                content: content
            };
            showToast("Blog article updated.", "success");
        }
    } else {
        // Add Blog
        const newPost = {
            id: generateId("blog"),
            title: title,
            image: image,
            excerpt: excerpt,
            content: content,
            date: formatDate(new Date()),
            author: state.currentUser ? state.currentUser.name : "Byiringiro Belange",
            comments: []
        };
        state.blogs.unshift(newPost);
        showToast("New blog post published.", "success");
    }

    Database.save("bb_blogs", state.blogs);
    renderAdminBlog();
    refreshIcons();
};

window.deleteBlog = function(id) {
    if (!confirm("Are you sure you want to delete this article?")) return;

    state.blogs = state.blogs.filter(b => b.id !== id);
    Database.save("bb_blogs", state.blogs);
    showToast("Blog post deleted.", "success");
    renderAdminBlog();
    refreshIcons();
};

// 6. ADMIN CUSTOMER MESSAGES
function renderAdminMessages() {
    const listHTML = state.messages.map(m => `
        <div class="message-card-admin ${m.isRead ? '' : 'unread'}" id="admin-msg-card-${m.id}">
            <div class="message-card-header">
                <div>
                    <span class="message-sender-name">${m.name}</span>
                    <span class="message-sender-email">(&lt;${m.email}&gt;)</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span class="message-date">${m.date}</span>
                    <button onclick="deleteMessage('${m.id}')" class="action-btn action-delete" style="border-radius:50%;" title="Delete"></button>
                </div>
            </div>
            <div class="message-subject">Subject: ${m.subject}</div>
            <div class="message-body-text" id="admin-msg-body-${m.id}" style="${m.isRead ? '' : 'font-weight: 500; color: var(--text-main);'}">
                ${m.message}
            </div>
            ${m.isRead ? '' : `<button onclick="markMsgRead('${m.id}')" class="btn btn-outline btn-sm" style="margin-top: 12px; padding: 6px 12px; font-size: 0.75rem;" id="admin-msg-read-btn-${m.id}">Mark as Read</button>`}
        </div>
    `).join("");

    adminOutlet().innerHTML = `
        <div class="admin-card" style="max-width: 800px; margin: 0 auto;">
            <div class="admin-card-header">
                <h3>Customer Inquiries & Quotes</h3>
                <button onclick="markAllMessagesRead()" class="btn btn-outline btn-sm">Mark All as Read</button>
            </div>
            
            <div id="messages-list-container">
                ${listHTML || '<p style="text-align: center; color: var(--text-light); padding: 40px 0;">No messages received yet.</p>'}
            </div>
        </div>
    `;
}

window.markMsgRead = function(id) {
    const idx = state.messages.findIndex(m => m.id === id);
    if (idx !== -1) {
        state.messages[idx].isRead = true;
        Database.save("bb_messages", state.messages);
        
        // Dynamic styling changes
        const card = document.getElementById(`admin-msg-card-${id}`);
        const bodyText = document.getElementById(`admin-msg-body-${id}`);
        const readBtn = document.getElementById(`admin-msg-read-btn-${id}`);
        
        if (card) card.classList.remove("unread");
        if (bodyText) {
            bodyText.style.fontWeight = "normal";
            bodyText.style.color = "var(--text-muted)";
        }
        if (readBtn) readBtn.remove();
        
        updateUnreadBadge();
        showToast("Message marked as read.", "success");
    }
};

window.markAllMessagesRead = function() {
    state.messages.forEach(m => m.isRead = true);
    Database.save("bb_messages", state.messages);
    renderAdminMessages();
    updateUnreadBadge();
    refreshIcons();
    showToast("All messages marked as read.", "success");
};

window.deleteMessage = function(id) {
    if (!confirm("Delete this message permanently?")) return;

    state.messages = state.messages.filter(m => m.id !== id);
    Database.save("bb_messages", state.messages);
    showToast("Message deleted.", "success");
    renderAdminMessages();
    updateUnreadBadge();
    refreshIcons();
};

// 7. ADMIN USER MANAGEMENT
function renderAdminUsers() {
    const usersHTML = state.users.map(u => `
        <tr>
            <td>
                <div class="user-info-cell">
                    <div class="admin-avatar">${u.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div class="user-info-text">
                        <h4>${u.name}</h4>
                        <p>${u.email}</p>
                    </div>
                </div>
            </td>
            <td><code>${u.username}</code></td>
            <td><span class="badge badge-success">${u.role}</span></td>
            <td>
                ${u.id === 'user-1' ? '<span style="font-size:0.8rem; color: var(--text-light);">System Owner</span>' : `
                    <button onclick="deleteUser('${u.id}')" class="action-btn action-delete" title="Remove Admin"></button>
                `}
            </td>
        </tr>
    `).join("");

    adminOutlet().innerHTML = `
        <div class="admin-grid-main" style="grid-template-columns: 1.25fr 0.75fr;">
            <!-- Users List -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3>Administrative Staff</h3>
                </div>
                <div class="table-responsive">
                    <table class="admin-table">
                        <thead>
                            <tr>
                                <th>Staff Member</th>
                                <th>Username</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${usersHTML}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Create Admin Form -->
            <div class="admin-card">
                <div class="admin-card-header">
                    <h3>Add System Administrator</h3>
                </div>
                <form id="add-admin-form" onsubmit="createNewAdminUser(event)">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" id="new-user-name" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" id="new-user-email" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Select Role</label>
                        <select id="new-user-role" class="form-control">
                            <option value="Administrator">Administrator</option>
                            <option value="Agronomist / Farm Manager">Agronomist / Farm Manager</option>
                            <option value="Sales / Logistics Coordinator">Sales / Logistics Coordinator</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">System Username</label>
                        <input type="text" id="new-user-username" required class="form-control">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Temporary Password</label>
                        <input type="password" id="new-user-password" required class="form-control" placeholder="••••••••">
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Create Account</button>
                </form>
            </div>
        </div>
    `;
}

window.createNewAdminUser = function(event) {
    event.preventDefault();

    const name = document.getElementById("new-user-name").value;
    const email = document.getElementById("new-user-email").value;
    const role = document.getElementById("new-user-role").value;
    const username = document.getElementById("new-user-username").value;
    const password = document.getElementById("new-user-password").value;

    // Check if username already exists
    if (state.users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
        showToast("Username already exists in the system.", "error");
        return;
    }

    const newUser = {
        id: generateId("user"),
        name: name,
        email: email,
        username: username,
        password: password,
        role: role
    };

    state.users.push(newUser);
    Database.save("bb_users", state.users);

    document.getElementById("add-admin-form").reset();
    showToast(`Administrator account created for ${name}!`, "success");
    renderAdminUsers();
    refreshIcons();
};

window.deleteUser = function(id) {
    if (!confirm("Are you sure you want to revoke admin credentials for this user?")) return;

    state.users = state.users.filter(u => u.id !== id);
    Database.save("bb_users", state.users);
    showToast("Staff access credentials revoked.", "success");
    renderAdminUsers();
    refreshIcons();
};
