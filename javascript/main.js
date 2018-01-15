  // Collect all the portfolios into an array

  const portfolioArray = [
    {
      "name": "Tribe",
      "url": "https://wearetribe.co/",
      "tags": "Floor Fund"
    },
    {
      "name": "Combo",
      "url": "https://www.combostudio.co",
      "tags": "Floor"
    },
    {
      "name": "23 Code Street",
      "url": "http://www.23codestreet.com",
      "tags": ""
    },
    {
      "name": "The Art of Ping Pong",
      "url": "http://www.theartofpingpong.co.uk/",
      "tags": "Floor"
    },
    {
      "name": "Comuzi",
      "url": "http://www.comuzi.xyz",
      "tags": ""
    },
    {
      "name": "Dubzoo",
      "url": "http://www.dubzoo.com",
      "tags": "Floor"
    },
    {
      "name": "Ayla",
      "url": "http://www.aylafurniture.com/",
      "tags": "Floor"
    },
    {
      "name": "Easle",
      "url": "https://www.easle.co",
      "tags": "Floor Fund"
    },
    {
      "name": "Immersive Rehab",
      "url": "https://www.immersiverehab.com",
      "tags": ""
    },
    {
      "name": "Parasym Health",
      "url": "http://www.parasym.co",
      "tags": "Floor"
    },
    {
      "name": "Sanctus",
      "url": "http://sanctus.io",
      "tags": "Floor"
    },
    {
      "name": "Sidestory",
      "url": "https://sidestory.co",
      "tags": "Floor"
    },
    {
      "name": "Everyday",
      "url": "http://www.everyday.studio",
      "tags": "Floor"
    },
    {
      "name": "Tray",
      "url": "https://www.tray.io",
      "tags": "Floor Fund"
    },
    {
      "name": "Uptree",
      "url": "https://www.uptree.co",
      "tags": "Floor Fund"
    },
    {
      "name": "Dojo",
      "url": "https://www.dojoapp.co",
      "tags": "Fund"
    },
    {
      "name": "Hoop",
      "url": "https://www.hoop.co.uk",
      "tags": "Fund"
    },
    {
      "name": "Wayfindr",
      "url": "https://www.wayfindr.net",
      "tags": "Venture"
    },
    {
      "name": "Everpress",
      "url": "https://www.everpress.com",
      "tags": "Fund"
    },
    {
      "name": "Curiscope",
      "url": "https://www.curiscope.com",
      "tags": "Fund"
    },
    {
      "name": "Amaliah",
      "url": "https://www.amaliah.com",
      "tags": ""
    },
    {
      "name": "Mayku",
      "url": "https://www.mayku.me",
      "tags": "Fund"
    },
    {
      "name": "Marvel",
      "url": "https://www.marvelapp.com",
      "tags": "Fund"
    },
    {
      "name": "Dice",
      "url": "https://www.dice.fm",
      "tags": "Fund Venture"
    },
    {
      "name": "ustwo Games",
      "url": "https://www.ustwogames.co.uk",
      "tags": "Venture"
    },
    {
      "name": "Pilcro",
      "url": "https://www.pilcro.com",
      "tags": "Floor"
    },
    {
      "name": "Pauseable",
      "url": "http://www.pauseable.com",
      "tags": "Fund"
    },
    {
      "name": "Over",
      "url": "https://www.madewithover.com",
      "tags": "Fund"
    },
    {
      "name": "Run an Empire",
      "url": "http://www.runanempire.com",
      "tags": "Fund"
    },
    {
      "name": "Brother Cycles",
      "url": "https://www.brothercycles.com/",
      "tags": "Fund"
    },
    {
      "name": "Paul James",
      "url": "http://pauljamess.com/",
      "tags": ""
    },
    {
      "name": "Gather Data",
      "url": "https://gatherdata.co/",
      "tags": ""
    },
    {
      "name": "OH",
      "url": "https://www.ohthisway.co.uk/",
      "tags": "Foundation"
    },
    {
      "name": "Studio Something",
      "url": "http://studiosomething.co/",
      "tags": ""
    },
    {
      "name": "Raise Your Hands",
      "url": "https://www.raiseyourhands.org.uk/",
      "tags": "Floor"
    },
    {
      "name": "Kate Rees Coaching",
      "url": "https://www.katereescoaching.com/",
      "tags": ""
    },
    {
      "name": "Grae Matta Foundation",
      "url": "http://graematta.com/",
      "tags": "Floor"
    },
    {
      "name": "No Mayo",
      "url": "http://www.no-mayo.digital/",
      "tags": "Floor"
    },
    {
      "name": "Morrama",
      "url": "http://www.morrama.com/",
      "tags": "Floor"
    },
    {
      "name": "Mr Bingo",
      "url": "http://mr.bingo/",
      "tags": "Floor"
    },
  ];

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

      return "<li class='portfolio_item " + el.tags + "'><a href='"+ el.url + "' target='_blank'>" + el.name + "</a></li>"

    });

  }


  const listElements = createListElementsFromArray(shufflePortfolioArray());
  $('ul#companies').html(listElements);

  // Construct UI blocks through the portfolio array

  // Call shufflePortfolioArray()

  // Turn these into workable raw HTML to inject into a list
