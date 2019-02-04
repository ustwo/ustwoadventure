const floorArray = [
  {
    name: "Tribe",
    url: "https://wearetribe.co/",
    tidyurl: "wearetribe.co",
    image: "images/team_assets/tribe_image.jpg",
    logo: "images/team_assets/tribe_logo.png",
    line: "Natural sports nutrition and an amazing community.",
    copy: "We are a community of 50,000+ athletes brought together by a love of nature and a shared spirit for adventure. TRIBE was inspired by a 1,000 mile run across Europe to fight human trafficking. A journey that set us on a mission to change the world of sports nutrition."
  },
  {
    name: "Combo",
    url: "https://www.combostudio.co",
    tidyurl: "combostudio.co",
    image: "images/team_assets/combo_image.jpg",
    logo: "images/team_assets/combo_logo.png",
    line: "An AR games studio",
    copy: "Focusing on developing AR content using modern frameworks, we’ve learned lots building experiments and are now making mobile games."
  },
  // {
  //   name: "23 Code Street",
  //   url: "http://www.23codestreet.com",
  //   tidyurl: "23codestreet.com",
  //
  //   image: "images/team_assets/23codestreet_image.jpg",
  //   logo: "images/team_assets/23codestreet_logo.png",
  //   line: "A coding school for all women",
  //   copy: "A community and school where for every paying student on our courses we teach digital skills to a disadvantaged woman in the slums of India."
  // },
  {
    name: "The Art of Ping Pong",
    url: "http://www.theartofpingpong.co.uk/",
    tidyurl: "theartofpingpong.co.uk",
    image: "images/team_assets/theartofpingpong_image.jpg",
    logo: "images/team_assets/theartofpingpong_logo.png",
    line: "The most spirited ping pong brand on the planet",
    copy: "By colliding all the colour of art with the fun of table tennis, we celebrate the popularity and subculture of ping pong – creating beautiful products and engaging events, exhibitions and charity campaigns."
  },
  {
    name: "Comuzi",
    url: "http://www.comuzi.xyz",
    tidyurl: "comuzi.xyz",
    image: "images/team_assets/comuzi_image.gif",
    logo: "images/team_assets/comuzi_logo.png",
    line: "Emerging technology research",
    copy: "We are an experimental R&D agency, working at the intersection of emerging technology and humans."
  },
  {
    name: "Dubzoo",
    url: "http://www.dubzoo.com",
    tidyurl: "dubzoo.com",
    image: "images/team_assets/dubzoo_image.jpg",
    logo: "images/team_assets/dubzoo_logo.png",
    line: "Grow your fanbase, mindfully",
    copy: "We’re teaching music makers around the world how to market themselves effectively and track their growth with daily social media tips and data."
  },
  {
    name: "Easle",
    url: "https://www.easle.co",
    tidyurl: "easle.co",
    image: "images/team_assets/easle_image.jpg",
    logo: "images/team_assets/easle_logo.png",
    line: "A freelancer platform getting artists hired",
    copy: "We find the best work for the best artists. Our creators are vetted by industry experts, and we take care of all the tedious paperwork like timesheets, contracts and invoices."
  },
  {
    name: "Immersive Rehab",
    url: "https://www.immersiverehab.com",
    tidyurl: "immersiverehab.com",
    image: "images/team_assets/immersiverehab_image.jpg",
    logo: "images/team_assets/immersiverehab_logo.png",
    line: "Virtual Reality rehabilitation experiences",
    copy: "Focusing on the creation and development of interactive physiotherapy environments and games in Virtual Reality. We are providing an engaging and motivating solution to the current limitations of rehabilitation."
  },
  {
    name: "Parasym Health",
    url: "http://www.parasym.co",
    tidyurl: "parasym.co",
    image: "images/team_assets/parasymhealth_image.jpg",
    logo: "images/team_assets/parasymhealth_logo.png",
    line: "Bioelectric Treatment for chronic diseases",
    copy: "We make medical devices that stimulate the vagus nerve via an ear-clip, using these electrical signals to correct dysfunctions that cause chronic illnesses like tinnitus."
  },
  {
    name: "Sanctus",
    url: "http://sanctus.io",
    tidyurl: "sanctus.io",
    image: "images/team_assets/sanctus_image.jpg",
    logo: "images/team_assets/sanctus_logo.png",
    line: "Changing the perception of mental health",
    copy: "We believe mental health should be viewed like your physical health, and are on a mission to make it accessible. We work with businesses to help them create an open environment where mental health is accepted, and create content to further this goal."
  },
  {
    name: "Sidestory",
    url: "https://sidestory.co",
    tidyurl: "sidestory.co",
    image: "images/team_assets/sidestory_image.jpg",
    logo: "images/team_assets/sidestory_logo.png",
    line: "Curated immersive experiences, led by insiders",
    copy: "Now owned by <a href='https://www.mrandmrssmith.com/' target='_blank' style='color: #444; text-decoration:  underline;'>Mr & Mrs Smith</a>. A SideStory Experience is just you and the Insider discovering a particular neighbourhood or theme in great detail: they'll show you hidden gems and introduce you to the key movers and shakers in the industry, from food to architecture to art."
  },
  {
    name: "Everyday",
    url: "http://www.everyday.studio",
    tidyurl: "everyday.studio",
    image: "images/team_assets/everyday_image.jpg",
    logo: "images/team_assets/everyday_logo.png",
    line: "A multi-disciplinary studio specialising in film",
    copy: "From feature length documentaries to original snapchat campaign for brands, we’re your guys for the production of moving image."
  },
  {
    name: "Tray",
    url: "https://www.tray.io",
    tidyurl: "tray.io",
    image: "images/team_assets/tray_image.jpg",
    logo: "images/team_assets/tray_logo.png",
    line: "A beautiful integration platform for cloud apps",
    copy: "We’ve made a secure and easy to use tool to let you automate any process across any cloud stack, without limits. From simple processes to multi step workflows with conditional logic, we’ve got you covered."
  },
  {
    name: "Uptree",
    url: "https://www.uptree.co",
    tidyurl: "uptree.co",
    image: "images/team_assets/uptree_image.jpg",
    logo: "images/team_assets/uptree_logo.png",
    line: "A career mobility platform for school students",
    copy: "We are providing students with an online resource to find early career events, internship and jobs to launch their future pathway."
  },
  {
    name: "Wayfindr",
    url: "https://www.wayfindr.net",
    tidyurl: "wayfindr.net",
    image: "images/team_assets/wayfindr_image.jpg",
    logo: "images/team_assets/wayfindr_logo.png",
    line: "Empowering vision impaired people",
    copy: "We’re empowering vision impaired people to overcome isolation, by setting the standard for audio based navigation. We have developed the world's first internationally-approved standard for accessible audio navigation."
  },
  {
    name: "Amaliah",
    url: "https://www.amaliah.com",
    tidyurl: "amaliah.com",
    image: "images/team_assets/amaliah_image.jpg",
    logo: "images/team_assets/amaliah_logo.png",
    line: "Amplifying the voices of muslim women",
    copy: "We create content that is culturally relevant to Muslim women across fashion, beauty, topical issues, lifestyle and more."
  },
  {
    name: "Dice",
    url: "https://www.dice.fm",
    tidyurl: "dice.fm",
    image: "images/team_assets/dice_image.jpg",
    logo: "images/team_assets/dice_logo.png",
    line: "Tickets to the best gigs, with style",
    copy: "Every feature on DICE is designed for discovery and to make going out easy. We bring you closer to the artists you love. Every event on the app is handpicked by our team, with great copy and design to boot."
  },
  {
    name: "Pilcro",
    url: "https://www.pilcro.com",
    tidyurl: "pilcro.com",
    image: "images/team_assets/pilcro_image.jpg",
    logo: "images/team_assets/pilcro_logo.png",
    line: "A faster way to make branded content",
    copy: "Pilcro is a free tool that helps teams create branded documents and presentations, by keeping all brand assets in one fast-access shared space."
  },
  {
    name: "Creative Mentor Network",
    url: "http://creativementornetwork.org/",
    tidyurl: "creativementornetwork.org",
    image: "images/team_assets/creativementornetwork_image.jpg",
    logo: "images/team_assets/creativementornetwork_logo.png",
    line: "Training mentors and connecting them to diverse young talent",
    copy: "We work with schools to connect young people from diverse backgrounds with the creative industries. Our program is making the creative world more inclusive."
  },
  {
    name: "Paul James",
    url: "http://pauljamess.com/",
    tidyurl: "pauljamess.com",
    image: "images/team_assets/pauljames_image.jpg",
    logo: "",
    line: "Solving problems by design",
    copy: "I design and build products that solve problems, splitting my time between own ventures, and projects I care about for clients."
  },
  {
    name: "Raise Your Hands",
    url: "https://www.raiseyourhands.org.uk/",
    tidyurl: "raiseyourhands.org.uk",
    image: "images/team_assets/raiseyourhands_image.jpg",
    logo: "images/team_assets/raiseyourhands_logo.png",
    line: "Doing Good, Feeling Good",
    copy: "Our mission is to provide a sustainable source of funding for exceptional small charities working with young people. We believe charity needs a fresh approach. Giving shouldn't mean hassle and guilt for people who just want to help out, so we’ve created a platform and community that’s different."
  },
  {
    name: "Morrama",
    url: "http://www.morrama.com/",
    tidyurl: "morrama.com",
    image: "images/team_assets/morrama_image.jpg",
    logo: "images/team_assets/morrama_logo.png",
    line: "Beautiful product design",
    copy: "We are an industrial design agency offering design services to both startups and established businesses worldwide. We believe in designing not just beautiful products, but unique and meaningful experiences that help define and strengthen a company's brand."
  },
  {
    name: "Mr Bingo",
    url: "https://mr.bingo/",
    tidyurl: "mr.bingo",
    image: "images/team_assets/mrbingo_image.jpg",
    logo: "images/team_assets/mrbingo_logo.png",
    line: "Illustrator, artist and speaker",
    copy: "I was a commercial illustrator for 15 years, working with some big clients, and in 2015 I decided to launch a kickstarter to fund a book about my Hate Mail project. I decided around this period to never work for clients ever again and focus on being some sort of artist, which I’ve done ever since."
  },
  {
    name: "Loop",
    url: "http://loopsocial.co/",
    tidyurl: "loopsocial.co",
    image: "images/team_assets/loop_image.jpg",
    logo: "images/team_assets/loop_logo.png",
    line: "See who’s social",
    copy: "We’re making a social location app that automatically checks you and your friends in and out of social hotspots. Use it to see who's at your gym, a favourite restaurant, or a bar before stepping outside your home. Our Mission is to facilitate real life experiences with the people in your life."
  },
  {
    name: "UNRD",
    url: "http://unrd.co/",
    tidyurl: "unrd.co",
    image: "images/team_assets/unrd_image.jpg",
    logo: "images/team_assets/unrd_logo.png",
    line: "A new type of immersive entertainment experience",
    copy: "We’re on a mission to create the world's leading mobile-first entertainment brand, by combining Hollywood quality plots with mobile storytelling techniques that utilise the full potential of smartphones. Stories are delivered in real time, through messages, videos, photos and voice notes."
  },
  {
    name: "Curate Labs",
    url: "https://curatelabs.co/",
    tidyurl: "curatelabs.co",
    image: "images/team_assets/curatelabs_image.jpg",
    logo: "images/team_assets/curatelabs_logo.png",
    line: "Design for wellbeing",
    copy: "A creative content studio that focus on sustainable and ethical design. Predominantly a creative duo, Curate also manage two annual publications; Curate Magazine & The Annual Digest. They are also behind the platform Wandering Through, a series of travel guides for conscious travellers."
  },
  {
    name: "Suvera",
    url: "http://suvera.co.uk/",
    tidyurl: "suvera.co.uk",
    image: "images/team_assets/suvera_image.jpg",
    logo: "images/team_assets/suvera_logo.png",
    line: "A new way to manage your prescriptions",
    copy: "We are a group of medical students, designers, and computer scientists who are creating the best tools to help people live healthier and happier lives."
  },
  {
    name: "Onlicar",
    url: "https://www.onlicar.com/",
    tidyurl: "onlicar.com",
    image: "images/team_assets/onlicar_image.jpg",
    logo: "images/team_assets/onlicar_logo.png",
    line: "Fleet management on autopilot",
    copy: "We believe in smarter fleet management, and we’re reinventing the entire software stack to make it happen. Our product delivers improved efficiency, better productivity and more insights for businesses that need to manage their vehicles."
  },
  {
    name: "Alix Fox",
    url: "https://twitter.com/AlixFox/",
    tidyurl: "twitter.com/AlixFox",
    image: "images/team_assets/alixfox_image.jpg",
    logo: "",
    line: "Writer, broadcaster and sex educator",
    copy: "I'm a freelance journalist & broadcaster who specialises in sex & relationships education. I work for BBC Radio 1, The Guardian, Brook charity, Grazia, The Modern Mann podcast, VICE... I've got fingers in more pies than a clumsy baker."
  },
  {
    name: "Metier",
    url: "https://www.metierdigital.com/",
    tidyurl: "metierdigital.com",
    image: "images/team_assets/metier_image.jpg",
    logo: "images/team_assets/metier_logo.png",
    line: "We build prototypes",
    copy: "We're a small studio that helps people build and quickly test their digital businesses. And because we've been on the journey, we coach new founders on how to be their own boss."
  },
  {
    name: "Lovesong",
    url: "http://studiolovesong.com/",
    tidyurl: "studiolovesong.com",
    image: "images/team_assets/lovesong_image.png",
    logo: "images/team_assets/lovesong_logo.png",
    line: "A design and creative technology studio.",
    copy: "We blend established and emerging technologies to create interactive product and installation design, and generative and algorithmic arts. Our values are optimism, curiosity, and inventiveness."
  },
  {
    name: "Superhi",
    url: "https://www.superhi.com/?utm_campaign=ustwo_adventure_sh_profile&utm_medium=promo&utm_source=ustwo_adventure",
    tidyurl: "superhi.com",
    image: "images/team_assets/superhi_image.jpg",
    logo: "images/team_assets/superhi_logo.png",
    line: "Online Courses For Creative People To Learn + Grow",
    copy: "A community of inspiring people from over 50 countries learning new tech skills to complement and enhance what they're already great at. Courses = Foundation HTML, CSS + Javascript, WordPress Design + Development, Advanced CSS + Javascript, Ruby on Rails, React.js"
  },
  {
    name: "Fieldwork Facility",
    url: "http://www.fieldworkfacility.com/",
    tidyurl: "fieldworkfacility.com",
    image: "images/team_assets/fieldworkfacility_image.jpg",
    logo: "images/team_assets/fieldworkfacility_logo.png",
    line: "A design studio for uncharted territories",
    copy: "We're an independent & inter-disciplinary design studio, working across designing both communications and experiences. We've got a particular interest in how emerging technologies can create new relationships between the two fields."
  },
  {
    name: "LookLook",
    url: "https://www.looklook.co.uk/",
    tidyurl: "looklook.co.uk",
    image: "images/team_assets/looklook_image.jpg",
    logo: "images/team_assets/looklook_logo.png",
    line: "Agents of Engagement",
    copy: "We bridge the gap between strategic marketing campaigns and the customer, through the creation of engaging experiences and rich content that’s infinitely sharable."
  },
  {
    name: "WePresent",
    url: "https://wepresent.wetransfer.com/",
    tidyurl: "wepresent.wetransfer.com",
    image: "images/team_assets/wepresent_image.jpg",
    logo: "images/team_assets/wepresent_logo.png",
    line: "Unexpected stories about creative minds",
    copy: "We’re interested in the weird and wonderful ways that creative minds work, and how they shape our world. We showcase the best art, photography, music and more from around the world, and delve into the messy and magical process behind it."
  },
  {
    name: "Loveshark",
    url: "https://loveshark.io/",
    tidyurl: "loveshark.io",
    image: "images/team_assets/loveshark_image.png",
    logo: "images/team_assets/loveshark_logo.png",
    line: "Social Augmented Reality Games",
    copy: "We're making mobile AR games for friends to play together in real life."
  },
  {
    name: "Bounce Cinema",
    url: "https://bouncecinema.com",
    tidyurl: "bouncecinema.com",
    image: "images/team_assets/bouncecinema_image.jpg",
    logo: "images/team_assets/bouncecinema_logo.png",
    line: "Showcasing and supporting emerging film talent",
    copy: "We put on pop-up film events, run workshops, and fund productions. Our aim is to showcase, educate and nurture the next generation of filmmakers."
  },
  {
    name: "The Hot Breakfast",
    url: "https://www.thehotbreakfast.com/",
    tidyurl: "thehotbreakfast.com",
    image: "images/team_assets/hotbreakfast_image.jpg",
    logo: "images/team_assets/hotbreakfast_logo.png",
    line: "Meet inspiring people. Share breakfast & wisdom. Feed your ideas.",
    copy: "We're a hub that connects and supports inspiring Londoners, designed to enable purposeful people to create more impact, more effectively and more enjoyably."
  },
  {
    name: "Pondermed",
    url: "http://www.pondermed.com/",
    tidyurl: "pondermed.com",
    image: "images/team_assets/pondermed_image.jpg",
    logo: "images/team_assets/pondermed_logo.png",
    line: "Breaking down the big ideas in healthcare",
    copy: "I am a doctor in Emergency Medicine and a podcaster. My podcast is a place where I explore interesting narratives in healthcare ranging from the important and inspiring to the controversial and bizarre."
  },
  {
    name: "Notepad",
    url: "https://notepadstudio.com/",
    tidyurl: "notepadstudio.com",
    image: "images/team_assets/notepad_image.jpg",
    logo: "images/team_assets/notepad_logo.png",
    line: "We build brands for startups",
    copy: "We're a brand design studio based in Birmingham and London. Most of the world’s best ideas start life as a quick sketch or scribble in a notepad. It's our mission to find the world’s best business ideas and develop them into brands that challenge the status quo and move the world forward."
  },
  {
    name: "Wholesome Tech Co",
    url: "https://www.wholesome.design",
    tidyurl: "wholesome.design",
    image: "images/team_assets/wholesome_image.png",
    logo: "images/team_assets/wholesome_logo.png",
    line: "Experiments for living well with technology",
    copy: "We're a studio learning how we live well with technology. Technologists haven't worked that out yet. Our experiments focus on balancing attention and intention. We experiment with our own ideas and work with startups to make theirs."
  }
];


const kebabCase = string => {
    return string.replace(/([a-z])([A-Z])/g, "$1-$2")
                 .replace(/[\s_]+/g, "-")
                 .toLowerCase();
};

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const createList = a => a.map(obj => {
    return `<li class="portfolio_item" data-filter="${ obj.tags }">
              <a href="#modal-${ kebabCase(obj.name) }" target="_blank" rel="modal:open"> ${ obj.name }</a>
            </li>`;
});


const createModals = a => a.map(obj => {
    return `<div id="modal-${ kebabCase(obj.name) }">
              <div class="modal-inner">
                <div class="modal-details">
                  <h2>${ obj.name }</h2>
                  <a class="modal-site-link" href="${ obj.url }" target="_blank">${ obj.tidyurl }</a>
                  <p class="line">${ obj.line }</p>
                  <p class="copy">${ obj.copy }</p>
                </div>
                <div class="modal-image">
                  <img class="modal-image-background" src="" data-src="${ obj.image }"/>
                  <a href="${ obj.url }" target="_blank"> <img class="modal-image-logo" src="${ obj.logo }"/> </a>
                </div>
              </div>
            </div>`;
});


if (window.location.search) {
    var query = window.location.search.substring(1);
    var parameters = query.split("&");
    var companyName, val;
    for (var i = 0; i < parameters.length; i++) {
        val = parameters[i].split("=");
        companyName = val[0];
    }
    if (val[0] == "team") {
        companyName = val[1];
    }
    if (!companyName) return;
    $("#modal-" + companyName).modal();
}
