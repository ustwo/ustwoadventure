  // Collect all the portfolios into an array

  const portfolioArray = [
    {
      "name": "Tribe",
      "url": "https://wearetribe.co/",
      "tidyurl": "wearetribe.co",
      "tags": "playground fund",
      "image": "images/team_assets/tribe_image.jpg",
      "logo": "images/team_assets/tribe_logo.png",
      "line": "Nutrition for athletes and an amazing community",
      "copy": "We’re supporting the fast growing everyday athlete market with our natural sports nutrition products, to help our TRIBE train stronger and live better. The strong community behind us supports a social mission to counter human trafficking."
    },
    {
      "name": "Combo",
      "url": "https://www.combostudio.co",
      "tidyurl": "combostudio.co",
      "tags": "playground",
      "image": "images/team_assets/combo_image.jpg",
      "logo": "images/team_assets/combo_logo.png",
      "line": "An AR and VR studio",
      "copy": "Focusing on developing AR and VR content using modern frameworks, we’ve learned lots building experiments and are now making mobile games."
    },
    {
      "name": "23 Code Street",
      "url": "http://www.23codestreet.com",
      "tidyurl": "23codestreet.com",
      "tags": "",
      "image": "images/team_assets/23codestreet_image.jpg",
      "logo": "images/team_assets/23codestreet_logo.png",
      "line": "A coding school for women and social enterprise",
      "copy": "A community an school where for every paying student on our courses we teach a disadvantaged woman in the slums of India."
    },
    {
      "name": "The Art of Ping Pong",
      "url": "http://www.theartofpingpong.co.uk/",
      "tidyurl": "theartofpingpong.co.uk",
      "tags": "playground",
      "image": "images/team_assets/theartofpingpong_image.jpg",
      "logo": "images/team_assets/theartofpingpong_logo.png",
      "line": "A collaborative art concept",
      "copy": "We create fun and colourful ping pong artworks for events, exhibitions and special projects, while raising money for charity. By colliding all the colour of art with the fun of table tennis we’re creating the most spirited ping pong brand on the planet."
    },
    {
      "name": "Comuzi",
      "url": "http://www.comuzi.xyz",
      "tidyurl": "comuzi.xyz",
      "tags": "playground",
      "image": "images/team_assets/comuzi_image.jpg",
      "logo": "images/team_assets/comuzi_logo.png",
      "line": "Creative technology and research",
      "copy": "We are a experimental research firm, working at the intersection of emerging technology and culture."
    },
    {
      "name": "Dubzoo",
      "url": "http://www.dubzoo.com",
      "tidyurl": "dubzoo.com",
      "tags": "playground",
      "image": "images/team_assets/dubzoo_image.jpg",
      "logo": "images/team_assets/dubzoo_logo.png",
      "line": "Grow your fanbase, mindfully",
      "copy": "We’re helping music makers learn to market themselves better on social media with daily tips and inspirations, to mindfully find and engage new audiences."
    },
    {
      "name": "Ayla",
      "url": "http://www.aylafurniture.com/",
      "tidyurl": "aylafurniture.com",
      "tags": "playground",
      "image": "images/team_assets/ayla_image.jpg",
      "logo": "images/team_assets/ayla_logo.png",
      "line": "Creating furniture without compromise",
      "copy": "We’ve designed and made furniture in our studio since 2012, from bespoke pieces to our products we sell online. With influences ranging from deco interiors, mid-century furniture, and industrial design, all of our work has form, function and sustainability in mind. "
    },
    {
      "name": "Easle",
      "url": "https://www.easle.co",
      "tidyurl": "easle.co",
      "tags": "playground fund",
      "image": "images/team_assets/easle_image.jpg",
      "logo": "images/team_assets/easle_logo.png",
      "line": "A freelancer platform getting artists hired",
      "copy": "We find the best work for the best artists. Our creators are vetted by industry experts, and we take care of all the tedious paperwork like timesheets, contracts and invoices."
    },
    {
      "name": "Immersive Rehab",
      "url": "https://www.immersiverehab.com",
      "tidyurl": "immersiverehab.com",
      "tags": "",
      "image": "images/team_assets/immersiverehab_image.jpg",
      "logo": "images/team_assets/immersiverehab_logo.png",
      "line": "Virtual Reality rehabilitation experiences",
      "copy": "Focusing on the creation and development of interactive physiotherapy environments and games in Virtual Reality. We are providing an engaging and motivating solution to the current limitations of rehabilitation."
    },
    {
      "name": "Parasym Health",
      "url": "http://www.parasym.co",
      "tidyurl": "parasym.co",
      "tags": "playground",
      "image": "images/team_assets/parasymhealth_image.jpg",
      "logo": "images/team_assets/parasymhealth_logo.png",
      "line": "Bioelectric Treatment for chronic diseases",
      "copy": "We make medical devices that stimulate the vagus nerve via an ear-clip, using these electrical signals to correct dysfunctions that cause chronic illnesses like tinnitus."
    },
    {
      "name": "Sanctus",
      "url": "http://sanctus.io",
      "tidyurl": "sanctus.io",
      "tags": "playground fund",
      "image": "images/team_assets/sanctus_image.jpg",
      "logo": "images/team_assets/sanctus_logo.png",
      "line": "Changing the perception of mental health",
      "copy": "We believe mental health should be viewed like your physical health, and are on a mission to make it accessible. We work with businesses to help them create an open environment where mental health is accepted, and create content to further this goal."
    },
    {
      "name": "Sidestory",
      "url": "https://sidestory.co",
      "tidyurl": "sidestory.co",
      "tags": "playground fund",
      "image": "images/team_assets/sidestory_image.jpg",
      "logo": "images/team_assets/sidestory_logo.png",
      "line": "Curated immersive experiences, led by insiders",
      "copy": "A SideStory Experience is just you and the Insider discovering a particular neighbourhood or theme in great detail: they'll show you hidden gems and introduce you to the key movers and shakers in the industry, from food to architecture to art."
    },
    {
      "name": "Everyday",
      "url": "http://www.everyday.studio",
      "tidyurl": "everyday.studio",
      "tags": "playground",
      "image": "images/team_assets/everyday_image.jpg",
      "logo": "images/team_assets/everyday_logo.png",
      "line": "A multi-disciplinary studio specialising in film",
      "copy": "From feature length documentaries to original snapchat campaign for brands, we’re your guys for the production of moving image."
    },
    {
      "name": "Tray",
      "url": "https://www.tray.io",
      "tidyurl": "tray.io",
      "tags": "playground fund",
      "image": "images/team_assets/tray_image.jpg",
      "logo": "images/team_assets/tray_logo.png",
      "line": "A beautiful integration platform for cloud apps",
      "copy": "We’ve made a secure and easy to use tool to let you automate any process across any cloud stack, without limits. From simple processes to multi step workflows with conditional logic, we’ve got you covered."
    },
    {
      "name": "Uptree",
      "url": "https://www.uptree.co",
      "tidyurl": "uptree.co",
      "tags": "playground fund",
      "image": "images/team_assets/uptree_image.jpg",
      "logo": "images/team_assets/uptree_logo.png",
      "line": "A career mobility platform for school students",
      "copy": "We are providing students with an online resource to find early career events, internship and jobs to launch their future pathway."
    },
    {
      "name": "Dojo",
      "url": "https://www.dojoapp.co",
      "tidyurl": "dojoapp.co",
      "tags": "fund",
      "image": "images/team_assets/dojo_image.jpg",
      "logo": "images/team_assets/dojo_logo.png",
      "line": "The best places and events in your city",
      "copy": "With editorial selections, high quality reviews, and insider info, our magazine style guide tells you whats going on daily and weekly, so you know what to enjoy."
    },
    {
      "name": "Hoop",
      "url": "https://www.hoop.co.uk",
      "tidyurl": "hoop.co.uk",
      "tags": "fund",
      "image": "images/team_assets/hoop_image.jpg",
      "logo": "images/team_assets/hoop_logo.png",
      "line": "Find the best things going on for kids",
      "copy": "The tool families need to search for events and activities that their kids will love, along with curated content."
    },
    {
      "name": "Wayfindr",
      "url": "https://www.wayfindr.net",
      "tidyurl": "wayfindr.net",
      "tags": "venture",
      "image": "images/team_assets/wayfindr_image.jpg",
      "logo": "images/team_assets/wayfindr_logo.png",
      "line": "Empowering vision impaired people",
      "copy": "We’re empowering vision impaired people to overcome isolation, by setting the standard for audio based navigation. We have developed the world's first internationally-approved standard for accessible audio navigation."
    },
    {
      "name": "Everpress",
      "url": "https://www.everpress.com",
      "tidyurl": "everpress.com",
      "tags": "fund",
      "image": "images/team_assets/everpress_image.jpg",
      "logo": "images/team_assets/everpress_logo.png",
      "line": "Design and sell beautiful merchandise easily",
      "copy": "The best way to create and share campaigns for clothing design, risk free and high quality. We’re enabling the newest wave of influencers to sell products to millions of consumers around the world."
    },
    {
      "name": "Curiscope",
      "url": "https://www.curiscope.com",
      "tidyurl": "curiscope.com",
      "tags": "fund",
      "image": "images/team_assets/curiscope_image.jpg",
      "logo": "images/team_assets/curiscope_logo.png",
      "line": "Educational experiences built for all ages",
      "copy": "We’re creating products using immersive technology like 360° video and AR to let you explore the depths of the ocean or the human body, and unleash your curiosity."
    },
    {
      "name": "Amaliah",
      "url": "https://www.amaliah.com",
      "tidyurl": "amaliah.com",
      "tags": "fund",
      "image": "images/team_assets/amaliah_image.jpg",
      "logo": "images/team_assets/amaliah_logo.png",
      "line": "Amplifying the voices of muslim women",
      "copy": "We create content that is culturally relevant to Muslim women across fashion, beauty, topical issues, lifestyle and more."
    },
    {
      "name": "Mayku",
      "url": "https://www.mayku.me",
      "tidyurl": "mayku.me",
      "tags": "fund",
      "image": "images/team_assets/mayku_image.jpg",
      "logo": "images/team_assets/mayku_logo.png",
      "line": "Make beautiful things with the FormBox",
      "copy": "The most compact vacuum former ever made, letting you start a production line from your desktop. There's no end to the things you can make, It lets you bring your ideas into the world, fast."
    },
    {
      "name": "Marvel",
      "url": "https://www.marvelapp.com",
      "tidyurl": "marvelapp.com",
      "tags": "fund",
      "image": "images/team_assets/marvel_image.jpg",
      "logo": "images/team_assets/marvel_logo.png",
      "line": "Mobile and web prototyping for designers",
      "copy": "Design in Marvel or other tools, add your interactions and gestures to make the designs come to life, and collaborate with your team. We’ve built the best way for designers to to their thing."
    },
    {
      "name": "Dice",
      "url": "https://www.dice.fm",
      "tidyurl": "dice.fm",
      "tags": "fund venture",
      "image": "images/team_assets/dice_image.jpg",
      "logo": "images/team_assets/dice_logo.png",
      "line": "Tickets to the best gigs, with style",
      "copy": "Every feature on DICE is designed for discovery and to make going out easy. We bring you closer to the artists you love. Every event on the app is handpicked by our team, with great copy and design to boot."
    },
    {
      "name": "ustwo Games",
      "url": "https://www.ustwogames.co.uk",
      "tidyurl": "ustwogames.co.uk",
      "tags": "venture",
      "image": "images/team_assets/ustwogames_image.jpg",
      "logo": "images/team_assets/ustwogames_logo.png",
      "line": "Independent studio making beautiful games",
      "copy": "We’re a mobile games studio making interactive entertainment which challenges the medium, with a strong focus on user experience and elegance in presentation."
    },
    {
      "name": "Pilcro",
      "url": "https://www.pilcro.com",
      "tidyurl": "pilcro.com",
      "tags": "playground",
      "image": "images/team_assets/pilcro_image.jpg",
      "logo": "images/team_assets/pilcro_logo.png",
      "line": "Integrated tools to work better together",
      "copy": "In our tools, users can integrate with G Suite to collaborate on documents, automate design flows for text, and send files, all in a creative and easy way."
    },
    {
      "name": "Creative Mentor Network",
      "url": "http://creativementornetwork.org/",
      "tidyurl": "creativementornetwork.org",
      "tags": "playground",
      "image": "images/team_assets/creativementornetwork_image.jpg",
      "logo": "images/team_assets/creativementornetwork_logo.png",
      "line": "Training mentors and connecting them to diverse young talent",
      "copy": "We work with schools across London to connect young people from diverse backgrounds with the creative industries. Our program is making the creative world more inclusive."
    },
    {
      "name": "Pauseable",
      "url": "http://www.pauseable.com",
      "tidyurl": "pauseable.com",
      "tags": "fund",
      "image": "images/team_assets/pauseable_image.jpg",
      "logo": "images/team_assets/pauseable_logo.png",
      "line": "Mindfulness in motion",
      "copy": "We’re creating tools to bring mindfulness to everyone everywhere, through interactive meditation, unlocking an oasis of calm via a series of simple movements."
    },
    {
      "name": "Over",
      "url": "https://www.madewithover.com",
      "tidyurl": "madewithover.com",
      "tags": "fund",
      "image": "images/team_assets/over_image.jpg",
      "logo": "images/team_assets/over_logo.png",
      "line": "Inspiring the world to create",
      "copy": "At Over, we believe that no matter who or where you are, you should be able to pick up your phone, open our app and design whatever you need. We want creating to be fast and easy, but most importantly we want it to be fun."
    },
    {
      "name": "Run an Empire",
      "url": "http://www.runanempire.com",
      "tidyurl": "runanempire.com",
      "tags": "fund",
      "image": "images/team_assets/runanempire_image.jpg",
      "logo": "images/team_assets/runanempire_logo.png",
      "line": "A real world strategy running game",
      "copy": "The most fun way to get on the road. Race against people in the real world to control territory in your area, and claim land in the name of your empire."
    },
    {
      "name": "Brother Cycles",
      "url": "https://www.brothercycles.com/",
      "tidyurl": "brothercycles.com",
      "tags": "fund",
      "image": "images/team_assets/brothercycles_image.jpg",
      "logo": "images/team_assets/brothercycles_logo.png",
      "line": "Beautiful bikes, designed in London",
      "copy": "Our frames are designed by us, are handmade by experienced frame builders out of the best materials, and can be ridden all day, whether in the city, on the track or out in the wild."
    },
    {
      "name": "Paul James",
      "url": "http://pauljamess.com/",
      "tidyurl": "pauljamess.com",
      "tags": "",
      "image": "images/team_assets/pauljames_image.jpg",
      "logo": "images/team_assets/pauljames_logo.png",
      "line": "Solving problems by design",
      "copy": "I design and build products that solve problems, splitting my time between own ventures, and projects I care about for clients."
    },
    {
      "name": "Gather Data",
      "url": "https://gatherdata.co/",
      "tidyurl": "gatherdata.co",
      "tags": "",
      "image": "images/team_assets/gather_image.jpg",
      "logo": "images/team_assets/gather_logo.png",
      "line": "Data integrations, designed for developers",
      "copy": "We help enterprises integrate disparate data across their organization. Our product is is an API integration layer that allows you to create complex pipelines like authentication for your customers, and bring all your data into one place."
    },
    {
      "name": "OH",
      "url": "https://ohthisway.co.uk/",
      "tidyurl": "ohthisway.co.uk",
      "tags": "foundation",
      "image": "images/team_assets/oh_image.jpg",
      "logo": "images/team_assets/oh_logo.png",
      "line": "Alternative education for creative people",
      "copy": "OH is built on ambition, community, and collaboration. We work alongside industry partners to uncover new ways of working and equip the next generation of creative and digital leaders."
    },
    {
      "name": "Studio Something",
      "url": "http://studiosomething.co/",
      "tidyurl": "studiosomething.co",
      "tags": "",
      "image": "images/team_assets/studiosomething_image.jpg",
      "logo": "images/team_assets/studiosomething_logo.png",
      "line": "Ideas people genuinely like",
      "copy": "We’re a creative business that thrives on partnerships and collaboration, working with brands that have vision and aren’t afraid to do things differently to get noticed. We make ads, but have an entrepreneurial spirit and believe in making a difference. That’s why we also create brands, products and (some) things. We are thinkers, but also doers."
    },
    {
      "name": "Raise Your Hands",
      "url": "https://www.raiseyourhands.org.uk/",
      "tidyurl": "raiseyourhands.org.uk",
      "tags": "playground",
      "image": "images/team_assets/raiseyourhands_image.jpg",
      "logo": "images/team_assets/raiseyourhands_logo.png",
      "line": "Doing Good, Feeling Good",
      "copy": "Our mission is to provide a sustainable source of funding for exceptional small charities working with young people. We believe charity needs a fresh approach. Giving shouldn't mean hassle and guilt for people who just want to help out, so we’ve created a platform and community that’s different."
    },
    {
      "name": "Grae Matta Foundation",
      "url": "http://graematta.com/",
      "tidyurl": "graematta.com",
      "tags": "playground",
      "image": "images/team_assets/graematta_image.jpg",
      "logo": "images/team_assets/graematta_logo.png",
      "line": "Sustainable mental health initiatives",
      "copy": "We're a non-profit dedicated to improving mental health in higher education & the workplace, through collaboration, research and awareness."
    },
    {
      "name": "No Mayo",
      "url": "http://www.no-mayo.digital/",
      "tidyurl": "no-mayo.digital",
      "tags": "playground",
      "image": "images/team_assets/nomayo_image.jpg",
      "logo": "images/team_assets/nomayo_logo.png",
      "line": "Software development studio",
      "copy": "We build experiential technology and custom software for our clients and ourselves."
    },
    {
      "name": "Morrama",
      "url": "http://www.morrama.com/",
      "tidyurl": "morrama.com",
      "tags": "playground",
      "image": "images/team_assets/morrama_image.jpg",
      "logo": "images/team_assets/morrama_logo.png",
      "line": "Beautiful product design",
      "copy": "We are an industrial design agency offering design services to both startups and established businesses worldwide. We believe in designing not just beautiful products, but unique and meaningful experiences that help define and strengthen the companies brand."
    },
    {
      "name": "Mr Bingo",
      "url": "http://mr.bingo/",
      "tidyurl": "mr.bingo",
      "tags": "playground",
      "image": "images/team_assets/mrbingo_image.jpg",
      "logo": "images/team_assets/mrbingo_logo.png",
      "line": "Illustrator, artist and speaker",
      "copy": "I was a commercial illustrator for 15 years, working with some big clients, and in 2015 I decided to launch a kickstarter to fund a book about my Hate Mail project. I decided around this period to never work for clients ever again and focus on being some sort of artist, which I’ve done ever since."
    },
    {
      "name": "Seed and Spark",
      "url": "https://www.seedandspark.com/",
      "tidyurl": "seedandspark.com",
      "tags": "fund",
      "image": "images/team_assets/seedandspark_image.jpg",
      "logo": "images/team_assets/seedandspark_logo.png",
      "line": "Look through different lenses",
      "copy": "A new kind of streaming service where perspective matters, combining streaming for audiences with crowdfunding for creators. Our mission is to create an entertainment landscape that reflects what we actually look like."
    },
    {
      "name": "Loop",
      "url": "http://loopsocial.co/",
      "tidyurl": "loopsocial.co",
      "tags": "playground",
      "image": "images/team_assets/loop_image.jpg",
      "logo": "images/team_assets/loop_logo.png",
      "line": "See who’s social",
      "copy": "We’re making a social location app that allows you to see who’s there before you arrive. It’s a way to see the exact location of your various micro tribes, and keep you in the loop by being notified when you are near your friends giving you more opportunities to connect."
    },
    {
      "name": "Lecture in Progress",
      "url": "https://lectureinprogress.com/",
      "tidyurl": "lectureinprogress.com",
      "tags": "foundation",
      "image": "images/team_assets/lectureinprogress_image.jpg",
      "logo": "images/team_assets/lectureinprogress_logo.png",
      "line": "Inspiring and informing the next generation of creatives",
      "copy": "We’re empowering emerging talent with information and first-hand accounts that demystify the workings of the creative world. By focusing on the people, projects and places that make the industry, we’re delivering visibility on how work unfolds, where it happens, and the breadth of roles that exist."
    },
    {
      "name": "UNRD",
      "url": "http://unrd.co/",
      "tidyurl": "unrd.co",
      "tags": "playground",
      "image": "images/team_assets/unrd_image.jpg",
      "logo": "images/team_assets/unrd_logo.png",
      "line": "A new type of immersive entertainment experience",
      "copy": "We’re creating a new genre of entertainment by combining Hollywood quality plots with modern storytelling techniques. Immersive stories that utilise the full potential of your smartphone, all in real-time. Our mission is to create the world's leading mobile-first entertainment brand."
    },
    {
      "name": "Curate Labs",
      "url": "https://curatelabs.co/",
      "tidyurl": "curatelabs.co",
      "tags": "playground",
      "image": "images/team_assets/curatelabs_image.jpg",
      "logo": "images/team_assets/curatelabs_logo.png",
      "line": "Design for wellbeing",
      "copy": "We are a creative content studio that focus on sustainable, ethical design. Predominantly a creative duo, we also manage two annual publications; Curate Magazine & The Annual Digest. Other ventures include a series of travel guides, a sustainable cosmetics range and a platform connecting charities with passionate volunteers."
    },
    {
      "name": "Remote Zoo",
      "url": "https://www.remotezoo.com/",
      "tidyurl": "remotezoo.com",
      "tags": "playground",
      "image": "images/team_assets/remotezoo_image.jpg",
      "logo": "images/team_assets/remotezoo_logo.png",
      "line": "Finding people jobs to do anywhere",
      "copy": "We’re helping people get out of the 9-to-5 grind and match them with meaningful work that can be done anywhere: at home, in a coffee shop or at a beautiful beach bar overlooking crystal clear waves."
    },
    {
      "name": "Tom Gaul",
      "url": "http://www.tomgaul.com/",
      "tidyurl": "tomgaul.com",
      "tags": "playground",
      "image": "images/team_assets/tomgaul_image.jpg",
      "logo": "images/team_assets/tomgaul_logo.png",
      "line": "Design and illustration",
      "copy": "I’m a designer and illustrator, working for a number of clients. At the same time I’m constantly filling my sketchbook and illustrating doodles of the characters you find in London, which I’ve created a book of."
    },
    {
      "name": "Design Club",
      "url": "http://designclub.org.uk/",
      "tidyurl": "designclub.org.uk",
      "tags": "foundation",
      "image": "images/team_assets/designclub_image.jpg",
      "logo": "images/team_assets/designclub_logo.png",
      "line": "Helping children and young people become design thinkers",
      "copy": "We believe that the future needs people-centred designers to help make the world a better place, so we’ve created educational resources and clubs to nurture empathy, collaboration, and problem-solving skills in children and young people everywhere."
    },
    {
      "name": "Suvera",
      "url": "http://suvera.co.uk/",
      "tidyurl": "suvera.co.uk",
      "tags": "",
      "image": "images/team_assets/suvera_image.jpg",
      "logo": "images/team_assets/suvera_logo.png",
      "line": "A new way to manage your prescriptions",
      "copy": "We are a group medical students, designers, and computer scientists who are creating the best tools to help people live healthier and happier lives."
    },
    {
      "name": "Kyra",
      "url": "https://kyra.com/",
      "tidyurl": "kyra.com",
      "tags": "fund",
      "image": "images/team_assets/kyra_image.jpg",
      "logo": "images/team_assets/kyra_logo.png",
      "line": "New age digital media for young people",
      "copy": "We are reimagining TV for the digital world. We make TV quality, brand safe, original content franchises that brands can use to speak to an already engaged audience."
    },
    {
      "name": "Onlicar",
      "url": "https://www.onlicar.com/",
      "tidyurl": "onlicar.com",
      "tags": "playground",
      "image": "images/team_assets/onlicar_image.jpg",
      "logo": "images/team_assets/onlicar_logo.png",
      "line": "Fleet management on autopilot",
      "copy": "We believe in smarter fleet management, and we’re reinventing the entire software stack to make it happen. Our product delivers improved efficiency, better productivity and more insights for businesses that need to manage their vehicles."
    },
    {
      "name": "Alix Fox",
      "url": "https://twitter.com/AlixFox/",
      "tidyurl": "twitter.com/AlixFox",
      "tags": "playground",
      "image": "images/team_assets/alixfox_image.jpg",
      "logo": "images/team_assets/alixfox_logo.png",
      "line": "Writer, broadcaster and sex educator",
      "copy": "I'm a freelance journalist & broadcaster who specialises in sex & relationships education. I work for BBC Radio 1, The Guardian, Brook charity, Grazia, The Modern Mann podcast, VICE... I've got fingers in more pies than a clumsy baker."
    }
  ];


  function kebabCase(string) {
    if (typeof string !== "string") {
      return string;
    }

    return string
      .trim()
      .replace(/\W|[_]/g, "-")
      .replace(/-{2,}/, "-")
      .toLowerCase();
  };



  function shufflePortfolioArray() {

    const a = portfolioArray;

    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a;
  }

  function createListElementsFromArray(a) {
    return a.map(function (el) {
      return "<li class='portfolio_item' data-filter='" + el.tags + "'><a target='_blank' href='#modal-" + kebabCase(el.name) + "'  rel='modal:open'>" + el.name + "</a></li>"
    });
  }

  function createModals() {
    var list = shufflePortfolioArray();

    return list.map(function(el) {
      return "<div id='modal-" + kebabCase(el.name) + "'><div class='modal-inner'><div class='modal-details'><h2>" + el.name + "</h2><a class='modal-site-link' href='" + el.url + "'>" + el.tidyurl + "</a><p class='line'>" + el.line + "</p><p class='copy'>" + el.copy + "</p></div><div class='modal-image'><img class='modal-image-background' src='" + el.image + "' /><img class='modal-image-logo' src='" + el.logo + "' /></div></div></div>"
    });
  }

  $(document).ready(function () {

    const listElements = createListElementsFromArray(shufflePortfolioArray());
    $('ul#companies').html(listElements);
    $('div#modals').html(createModals());

    $('a.filter-button-group').on('click', function (e) {

      var descriptor = $(e.target).data('descriptorstring')
      $('#descriptor').empty();
      $('#descriptor').append(descriptor);

      var filterString = $(e.target).data('filter');
      console.log(filterString);

      // cycle through all the items in the portfolio

      $('.portfolio_item').each(function (idx, el) {

        var fStrings = $(el).data('filter').split(' ');
        var shouldDisplay = fStrings.includes(filterString);

        if (filterString == "*") {
          shouldDisplay = true;
        }

        $(el).css('display', (shouldDisplay == true ? 'block' : 'none'));

      });
    });
  });



  $(".button").click(function(){
    $(".button").not(this).removeClass('is_checked');
    $(this).addClass("is_checked");
  });



  $(document).ready(function () {
    if (window.location.hash){
      var hash = window.location.hash.substring(1);
      if (!hash) return;
      var array = $(".button-group").find(`[data-filter='${hash.toLowerCase()}']`);
      if (!array || !array.length) return;
      var el = array[0];
      if (!el) return;
      el.click();
   }
  });



  $(".onecolumn").click(function(){
    $("ul#companies").addClass("onecolumn").removeClass("twocolumns");
  });

  $(".twocolumns").click(function(){
    $("ul#companies").addClass("twocolumns").removeClass("onecolumn");;
  });



  $(document).ready(function () {
    if (window.location.pathname == "/") {
      history.replaceState( {} , 'ustwo Adventure', '/' );
    }
  });
