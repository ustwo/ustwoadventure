  // Collect all the portfolios into an array

  const portfolioArray = [
    {
      "name": "Tribe",
      "url": "https://wearetribe.co/",
      "tags": "playground fund"
    },
    {
      "name": "Combo",
      "url": "https://www.combostudio.co",
      "tags": "playground"
    },
    {
      "name": "23 Code Street",
      "url": "http://www.23codestreet.com",
      "tags": ""
    },
    {
      "name": "The Art of Ping Pong",
      "url": "http://www.theartofpingpong.co.uk/",
      "tags": "playground"
    },
    {
      "name": "Comuzi",
      "url": "http://www.comuzi.xyz",
      "tags": "playground"
    },
    {
      "name": "Dubzoo",
      "url": "http://www.dubzoo.com",
      "tags": "playground"
    },
    {
      "name": "Ayla",
      "url": "http://www.aylafurniture.com/",
      "tags": "playground"
    },
    {
      "name": "Easle",
      "url": "https://www.easle.co",
      "tags": "playground fund"
    },
    {
      "name": "Immersive Rehab",
      "url": "https://www.immersiverehab.com",
      "tags": ""
    },
    {
      "name": "Parasym Health",
      "url": "http://www.parasym.co",
      "tags": "playground"
    },
    {
      "name": "Sanctus",
      "url": "http://sanctus.io",
      "tags": "playground fund"
    },
    {
      "name": "Sidestory",
      "url": "https://sidestory.co",
      "tags": "playground fund"
    },
    {
      "name": "Everyday",
      "url": "http://www.everyday.studio",
      "tags": "playground"
    },
    {
      "name": "Tray",
      "url": "https://www.tray.io",
      "tags": "playground fund"
    },
    {
      "name": "Uptree",
      "url": "https://www.uptree.co",
      "tags": "playground fund"
    },
    {
      "name": "Dojo",
      "url": "https://www.dojoapp.co",
      "tags": "fund"
    },
    {
      "name": "Hoop",
      "url": "https://www.hoop.co.uk",
      "tags": "fund"
    },
    {
      "name": "Wayfindr",
      "url": "https://www.wayfindr.net",
      "tags": "venture"
    },
    {
      "name": "Everpress",
      "url": "https://www.everpress.com",
      "tags": "fund"
    },
    {
      "name": "Curiscope",
      "url": "https://www.curiscope.com",
      "tags": "fund"
    },
    {
      "name": "Amaliah",
      "url": "https://www.amaliah.com",
      "tags": "fund"
    },
    {
      "name": "Mayku",
      "url": "https://www.mayku.me",
      "tags": "fund"
    },
    {
      "name": "Marvel",
      "url": "https://www.marvelapp.com",
      "tags": "fund"
    },
    {
      "name": "Dice",
      "url": "https://www.dice.fm",
      "tags": "fund venture"
    },
    {
      "name": "ustwo Games",
      "url": "https://www.ustwogames.co.uk",
      "tags": "venture"
    },
    {
      "name": "Pilcro",
      "url": "https://www.pilcro.com",
      "tags": "playground"
    },
    {
      "name": "Creative Mentor Network",
      "url": "http://creativementornetwork.org/",
      "tags": "playground"
    },
    {
      "name": "Pauseable",
      "url": "http://www.pauseable.com",
      "tags": "fund"
    },
    {
      "name": "Over",
      "url": "https://www.madewithover.com",
      "tags": "fund"
    },
    {
      "name": "Run an Empire",
      "url": "http://www.runanempire.com",
      "tags": "fund"
    },
    {
      "name": "Brother Cycles",
      "url": "https://www.brothercycles.com/",
      "tags": "fund"
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
      "tags": "foundation"
    },
    {
      "name": "Studio Something",
      "url": "http://studiosomething.co/",
      "tags": ""
    },
    {
      "name": "Raise Your Hands",
      "url": "https://www.raiseyourhands.org.uk/",
      "tags": "playground"
    },
    {
      "name": "Kate Rees Coaching",
      "url": "https://www.katereescoaching.com/",
      "tags": ""
    },
    {
      "name": "Grae Matta Foundation",
      "url": "http://graematta.com/",
      "tags": "playground"
    },
    {
      "name": "No Mayo",
      "url": "http://www.no-mayo.digital/",
      "tags": "playground"
    },
    {
      "name": "Morrama",
      "url": "http://www.morrama.com/",
      "tags": "playground"
    },
    {
      "name": "Mr Bingo",
      "url": "http://mr.bingo/",
      "tags": "playground"
    },
    {
      "name": "Seed and Spark",
      "url": "https://www.seedandspark.com/",
      "tags": "fund"
    },
    {
      "name": "Loop",
      "url": "http://loopsocial.co/",
      "tags": "playground"
    },
    {
      "name": "Lecture in Progress",
      "url": "https://lectureinprogress.com/",
      "tags": "foundation"
    },
    {
      "name": "UNRD",
      "url": "http://unrd.co/",
      "tags": "playground"
    }
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

      return "<li class='portfolio_item' data-filter='" + el.tags + "'><a href='"+ el.url + "' target='_blank'>" + el.name + "</a></li>"

    });

  }


  $(document).ready(function () {

    const listElements = createListElementsFromArray(shufflePortfolioArray());
    $('ul#companies').html(listElements);

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
      var array = $(".button-group").find(`[data-filter='${hash}.toLowercase()']`);
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
    var hash = window.location.hash;
    if (window.location.search.indexOf('ref=') > -1) {
      history.replaceState( {} , 'ustwo Adventure', `/${hash}` );
    }
  });
