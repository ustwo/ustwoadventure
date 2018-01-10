  // Collect all the portfolios into an array

  const portfolioArray = [
    {
      "name": "Tribe",
      "url": "https://wearetribe.co/"
    },
    {
      "name": "Combo",
      "url": "https://www.combostudio.co"
    },
    {
      "name": "23 Code Street",
      "url": "http://www.23codestreet.com"
    },
    {
      "name": "The Art of Ping Pong",
      "url": "http://www.theartofpingpong.co.uk/"
    },
    {
      "name": "Comuzi",
      "url": "http://www.comuzi.xyz"
    },
    {
      "name": "Dubzoo",
      "url": "http://www.dubzoo.com"
    },
    {
      "name": "Ayla",
      "url": "http://www.aylafurniture.com/"
    },
    {
      "name": "Easle",
      "url": "https://www.easle.co"
    },
    {
      "name": "Immersive Rehab",
      "url": "https://www.immersiverehab.com"
    },
    {
      "name": "Parasym Health",
      "url": "http://www.parasym.co"
    },
    {
      "name": "Sanctus",
      "url": "http://sanctus.io"
    },
    {
      "name": "Sidestory",
      "url": "https://sidestory.co"
    },
    {
      "name": "Everyday",
      "url": "http://www.everyday.studio"
    },
    {
      "name": "Tray",
      "url": "https://www.tray.io"
    },
    {
      "name": "Uptree",
      "url": "https://www.uptree.co"
    },
    {
      "name": "Dojo",
      "url": "https://www.dojoapp.co"
    },
    {
      "name": "Hoop",
      "url": "https://www.hoop.co.uk"
    },
    {
      "name": "Wayfindr",
      "url": "https://www.wayfindr.net"
    },
    {
      "name": "Everpress",
      "url": "https://www.everpress.com"
    },
    {
      "name": "Curiscope",
      "url": "https://www.curiscope.com"
    },
    {
      "name": "Amaliah",
      "url": "https://www.amaliah.com"
    },
    {
      "name": "Mayku",
      "url": "https://www.mayku.me"
    },
    {
      "name": "Marvel",
      "url": "https://www.marvelapp.com"
    },
    {
      "name": "Dice",
      "url": "https://www.dice.fm"
    },
    {
      "name": "ustwo Games",
      "url": "https://www.ustwogames.co.uk"
    },
    {
      "name": "Pilcro",
      "url": "https://www.pilcro.com"
    },
    {
      "name": "Pauseable",
      "url": "http://www.pauseable.com"
    },
    {
      "name": "Over",
      "url": "https://www.madewithover.com"
    },
    {
      "name": "Run an Empire",
      "url": "http://www.runanempire.com"
    },
    {
      "name": "Brother Cycles",
      "url": "https://www.brothercycles.com/"
    },
    {
      "name": "Paul James",
      "url": "http://pauljamess.com/"
    },
    {
      "name": "Gather Data",
      "url": "https://gatherdata.co/"
    },
    {
      "name": "OH",
      "url": "https://www.ohthisway.co.uk/"
    },
    {
      "name": "Studio Something",
      "url": "http://studiosomething.co/"
    },
    {
      "name": "Raise Your Hands",
      "url": "https://www.raiseyourhands.org.uk/"
    },
    {
      "name": "Kate Rees Coaching",
      "url": "https://www.katereescoaching.com/"
    },
    {
      "name": "Grae Matta Foundation",
      "url": "http://graematta.com/"
    },
    {
      "name": "No Mayo",
      "url": "http://www.no-mayo.digital/"
    },
    {
      "name": "Morrama",
      "url": "http://www.morrama.com/"
    },
    {
      "name": "Mr Bingo",
      "url": "http://mr.bingo/"
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

      return "<li class='portfolio_item'><a href='"+ el.url + "' target='_blank'>" + el.name + "</a></li>"

    });

  }


  const listElements = createListElementsFromArray(shufflePortfolioArray());
  $('ul#companies').html(listElements);

  // Construct UI blocks through the portfolio array

  // Call shufflePortfolioArray()

  // Turn these into workable raw HTML to inject into a list
