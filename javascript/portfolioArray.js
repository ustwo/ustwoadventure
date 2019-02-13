const portfolioArray = [
    {
        name: "Tribe",
        url: "https://wearetribe.co/",
        tidyurl: "wearetribe.co",
        image: "images/team_assets/fund/tribe_image.jpg",
        logo: "images/team_assets/fund/tribe_logo.png",
        line: "The best natural sports nutrition",
        copy: "A community of 50,000+ athletes brought together by a love of nature and a spirit for adventure. Inspired by a 1,000 mile run across Europe to fight human trafficking, TRIBE is on a mission to change the world of sports nutrition."
    },
    {
        name: "Easle",
        url: "https://www.easle.co",
        tidyurl: "easle.co",
        image: "images/team_assets/fund/easle_image.jpg",
        logo: "images/team_assets/fund/easle_logo.png",
        line: "A freelancer platform getting artists hired",
        copy: "We find the best work for the best artists. Our creators are vetted by industry experts, and we take care of all the tedious paperwork like timesheets, contracts and invoices."
    },
    {
        name: "Sanctus",
        url: "https://sanctus.io",
        tidyurl: "sanctus.io",
        image: "images/team_assets/fund/sanctus_image.jpg",
        logo: "images/team_assets/fund/sanctus_logo.png",
        line: "Changing perceptions of mental health",
        copy: "We believe mental health should be viewed like physical health, and are on a mission to make it accessible. We work with businesses to help them create an open environment where mental health is cared for."
    },
    {
        name: "Sidestory",
        url: "https://sidestory.co",
        tidyurl: "sidestory.co",
        image: "images/team_assets/fund/sidestory_image.jpg",
        logo: "images/team_assets/fund/sidestory_logo.png",
        line: "Curated experiences, led by insiders",
        copy: "A SideStory Experience is just you and an Insider discovering a particular neighbourhood or theme in great detail: they'll show you hidden gems and introduce you to key movers and shakers, from food to architecture to art."
    },
    {
        name: "Tray",
        url: "https://www.tray.io",
        tidyurl: "tray.io",
        image: "images/team_assets/fund/tray_image.jpg",
        logo: "images/team_assets/fund/tray_logo.png",
        line: "A beautiful cloud integration platform",
        copy: "We’ve made a secure and easy to use tool to let you automate any process across any cloud stack, without limits. From simple processes to multi step workflows with conditional logic, we’ve got you covered."
    },
    {
        name: "Uptree",
        url: "https://www.uptree.co",
        tidyurl: "uptree.co",
        image: "images/team_assets/fund/uptree_image.jpg",
        logo: "images/team_assets/fund/uptree_logo.png",
        line: "A career mobility platform for students",
        copy: "We are providing students with an online resource to find early career events, internship and jobs to launch their future pathway."
    },
    {
        name: "Dojo",
        url: "https://www.dojoapp.co",
        tidyurl: "dojoapp.co",
        image: "images/team_assets/fund/dojo_image.jpg",
        logo: "images/team_assets/fund/dojo_logo.png",
        line: "The best places and events in your city",
        copy: "With editorial selections, high quality reviews, and insider info, our magazine style guide tells you whats going on daily and weekly, so you know what to enjoy."
    },
    {
        name: "Hoop",
        url: "https://www.hoop.co.uk",
        tidyurl: "hoop.co.uk",
        image: "images/team_assets/fund/hoop_image.jpg",
        logo: "images/team_assets/fund/hoop_logo.png",
        line: "Find the best things happening for kids",
        copy: "Hoop is on a mission to get families get out of house and help their children laugh, learn and make new friends."
    },
    {
        name: "Everpress",
        url: "https://www.everpress.com",
        tidyurl: "everpress.com",
        image: "images/team_assets/fund/everpress_image.jpg",
        logo: "images/team_assets/fund/everpress_logo.png",
        line: "Design & sell beautiful merchandise easily",
        copy: "The best way to create and share campaigns for clothing design, risk free and high quality. We’re enabling the newest wave of influencers to sell products to millions of consumers around the world."
    },
    {
        name: "Curiscope",
        url: "https://www.curiscope.com",
        tidyurl: "curiscope.com",
        image: "images/team_assets/fund/curiscope_image.jpg",
        logo: "images/team_assets/fund/curiscope_logo.png",
        line: "Educational experiences for all",
        copy: "We’re creating products using immersive technology like 360° video and AR to let you explore the depths of the ocean or the human body, and unleash your curiosity."
    },
    {
        name: "Amaliah",
        url: "https://www.amaliah.com",
        tidyurl: "amaliah.com",
        image: "images/team_assets/fund/amaliah_image.jpg",
        logo: "images/team_assets/fund/amaliah_logo.png",
        line: "Amplifying the voices of muslim women",
        copy: "We create content that is culturally relevant to Muslim women across fashion, beauty, topical issues, lifestyle and more."
    },
    {
        name: "Mayku",
        url: "https://www.mayku.me",
        tidyurl: "mayku.me",
        image: "images/team_assets/fund/mayku_image.jpg",
        logo: "images/team_assets/fund/mayku_logo.png",
        line: "Make beautiful things with the FormBox",
        copy: "Mayku are on a mission to give people the power of making. We're building a family of mini-machines that let you start a production line from your tabletop - as simply as baking a cake."
    },
    {
        name: "Marvel",
        url: "https://www.marvelapp.com",
        tidyurl: "marvelapp.com",
        image: "images/team_assets/fund/marvel_image.jpg",
        logo: "images/team_assets/fund/marvel_logo.png",
        line: "Making design simple for everyone",
        copy: "Marvel is a design and collaboration platform that empowers individuals and teams to bring their ideas to life. From wireframing to prototyping to code generation - Marvel is used to create the apps and sites you use everyday"
    },
    {
        name: "Dice",
        url: "https://www.dice.fm",
        tidyurl: "dice.fm",
        image: "images/team_assets/fund/dice_image.jpg",
        logo: "images/team_assets/fund/dice_logo.png",
        line: "Tickets to the best gigs and parties",
        copy: "Every feature on DICE is designed for discovery and to make going out easy. We bring you closer to the artists you love. Every event on the app is handpicked by our team, for the fans"
    },
    {
        name: "Pauseable",
        url: "https://www.pauseable.com",
        tidyurl: "pauseable.com",
        image: "images/team_assets/fund/pauseable_image.jpg",
        logo: "images/team_assets/fund/pauseable_logo.png",
        line: "Mindfulness in motion",
        copy: "We’re creating tools to bring mindfulness to everyone everywhere, through interactive meditation, unlocking an oasis of calm via a series of simple movements."
    },
    {
        name: "Over",
        url: "https://www.madewithover.com",
        tidyurl: "madewithover.com",
        image: "images/team_assets/fund/over_image.jpg",
        logo: "images/team_assets/fund/over_logo.png",
        line: "Inspiring the world to create",
        copy: "We believe that no matter who or where you are, you should be able to pick up your phone, open our app and design whatever you need. We want creating to be fast and easy, but most importantly we want it to be fun."
    },
    {
        name: "Run an Empire",
        url: "https://www.runanempire.com",
        tidyurl: "runanempire.com",
        image: "images/team_assets/fund/runanempire_image.jpg",
        logo: "images/team_assets/fund/runanempire_logo.png",
        line: "A real world strategy running game",
        copy: "The most fun way to get on the road. Race against people in the real world to control territory in your area, and claim land in the name of your empire."
    },
    {
        name: "Brother Cycles",
        url: "https://www.brothercycles.com/",
        tidyurl: "brothercycles.com",
        image: "images/team_assets/fund/brothercycles_image.jpg",
        logo: "images/team_assets/fund/brothercycles_logo.png",
        line: "Beautiful bikes, designed in London",
        copy: "Our frames are designed by us, are handmade by experienced frame builders out of the best materials, and can be ridden all day, whether in the city, on the track or out in the wild."
    },
    {
        name: "Seed&Spark",
        url: "https://www.seedandspark.com/",
        tidyurl: "seedandspark.com",
        image: "images/team_assets/fund/seedandspark_image.jpg",
        logo: "images/team_assets/fund/seedandspark_logo.png",
        line: "Raising daring and diverse voices in film",
        copy: "A streaming service where perspective matters, combining streaming for audiences with crowdfunding for creators. Our mission is to create an entertainment landscape that reflects what we actually look like."
    },
    {
        name: "Kyra",
        url: "https://kyra.com/",
        tidyurl: "kyra.com",
        image: "images/team_assets/fund/kyra_image.jpg",
        logo: "images/team_assets/fund/kyra_logo.png",
        line: "A new age TV network",
        copy: "We are reimagining TV for the digital world. We make TV quality, brand safe, original content franchises that brands can use to speak to an already engaged audience."
    },
    {
        name: "Limbic",
        url: "https://limbic.ai/",
        tidyurl: "limbic.ai",
        image: "images/team_assets/fund/limbic_image.jpg",
        logo: "images/team_assets/fund/limbic_logo.png",
        line: "Humanising Computing",
        copy: "We've created an SDK for emotional intelligence. Using AI models we want to enable products that interact with users as naturally as the interactions between two humans."
    },
    {
        name: "Twiik",
        url: "https://www.twiik.me/",
        tidyurl: "twiik.me",
        image: "images/team_assets/fund/twiik_image.jpg",
        logo: "",
        line: "Digitising the wellness cycle",
        copy: "We want to get as many people as possible to build a healthier and more sustainable lifestyle. Twiik delivers a coaching and analytics platform with digital tools, for the entire wellness cycle."
    },
    {
        name: "Billogram",
        url: "https://billogram.com/",
        tidyurl: "billogram.com",
        image: "images/team_assets/fund/billogram_image.jpg",
        logo: "images/team_assets/fund/billogram_logo.png",
        line: "Easier payments. Quality engagement.",
        copy: "Our interactive format replaces traditional invoices while adding the value of a seamless payment, a new channel for personal communication and a significantly improved customer experience."
    },
    {
        name: "Superhi",
        url: "https://www.superhi.com/?utm_campaign=ustwo_adventure_sh_profile&utm_medium=promo&utm_source=ustwo_adventure",
        tidyurl: "superhi.com",
        image: "images/team_assets/fund/superhi_image.jpg",
        logo: "images/team_assets/fund/superhi_logo.png",
        line: "Online Courses For Creative People",
        copy: "A community of inspiring people from over 80 countries learning new tech and design skills to complement and enhance what they're already great at."
    }
];






const createPortfolioItems = a => a.map(obj => {
    return `
        <a class="portfolio-item" href="#modal-${ kebabCase(obj.name) }" target="_blank" rel="modal:open">
            <p class="name">${ obj.name }</p>
            <img data-src="${ obj.image }">
            <p class="copy">${ obj.line }</p>
        </a>
    `;
});


const createModals = a => a.map(obj => {
    return `
        <div id="modal-${ kebabCase(obj.name) }" class="modal">
            <div class="modal-inner">
                <div class="modal-details">
                    <h2>${ obj.name }</h2>
                    <a class="site-link" href="${ obj.url }" target="_blank">${ obj.tidyurl }</a>
                    <p class="line">${ obj.line }</p>
                    <p class="copy">${ obj.copy }</p>
                </div>
                <div class="modal-image">
                    <img class="background" data-src="${ obj.image }"/>
                    <a href="${ obj.url }" target="_blank"> <img class="logo" src="${ obj.logo }"/> </a>
                </div>
            </div>
        </div>
    `;
});

const modalContainer = document.querySelector(".modal-container");
modalContainer.innerHTML = createModals(portfolioArray).join("");