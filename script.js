var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:"
};

var app;
require.config( {
  baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources",
  paths: {
    lazy_loading: "../extensions/FINAL_football/lazy-loading"
  }
} );

var options = {
  chart: {
    height: 200,
    width: "100%",
    type: "line"
  },
  xaxis: {
    type: 'numeric'
  },
  series: [
    {
      name: "Form",
      data: [0,1,2,3,4,5]
    }
  ],
  stroke: {
        width: 1,
        curve: 'straight',
        dashArray: 5,
    colors: '#000'
  },
  yaxis: {
      show: false,
   },
  labels: [],

  xaxis: {
    categories: ['Jan 13', 'Mar 29', 'June 12', 'July 7', 'Aug 21'],
    labels:{
      show: false
    },
    crosshairs: {
            show: false
    },
    axisBorder: {
            show: false
    },
    axisTicks: {
            show: false
    },
    tooltip: {
            enabled: false,
    }
  },
  grid: {
    xaxis: {
    lines: {
      show: false
    }
    },
    yaxis: {
    lines: {
      show: false
    }
    }
  },
  markers: {
    size: 5,
    discrete: [{
      seriesIndex: 0,
      // For dataPointIndex: 0 there is no discrete marker at all!
      dataPointIndex: 0,

      // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      fillColor: "#F7A850",
      strokeColor: "#F7A850",
      size: 5
    },{
      seriesIndex: 0,
      // For dataPointIndex: 0 there is no discrete marker at all!
      dataPointIndex: 1,

      // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      fillColor: "#43AC43",
      strokeColor: "#43AC43",
      size: 5
    },{
      seriesIndex: 0,
      // For dataPointIndex: 0 there is no discrete marker at all!
      dataPointIndex: 2,

      // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      fillColor: "#F7A850",
      strokeColor: "#F7A850",
      size: 5
    },{
      seriesIndex: 0,
      // For dataPointIndex: 0 there is no discrete marker at all!
      dataPointIndex: 3,

      // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      fillColor: "#BD1823",
      strokeColor: "#BD1823",
      size: 5
    },{
      seriesIndex: 0,
      // For dataPointIndex: 0 there is no discrete marker at all!
      dataPointIndex: 4,

      // Also docs says its "fill" and "stroke", but "fillColor" and "strokeColor" are working
      fillColor: "#43AC43",
      strokeColor: "#43AC43",
      size: 5
    }
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#form-line-chart"), options);

chart.render();



require(['lazy_loading']), function (ll) {
      ll.appsAndObjectsInited()
    }

require( ["js/qlik"], function ( qlik ) {

  var appID = '8dc8fd65-1892-4fce-92ad-51bd418f840d'

  //open apps -- inserted here --
  var app = qlik.openApp(appID, config)
  app.createGenericObject({
            imgSource: {
                qStringExpression: "=If(GetSelectedCount(Player)=1,Player_Image,'data:image/png;base64,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')"
            }
        },
        function(layout) {
            $('#imgSource').attr('src', layout.imgSource);
        }
    );

/*-------------------------------------------------------------------------------------------------------------------------------------------------
Home Page
---------------------------------------------------------------------------------------------------------------------------------------------------*/


  //Left Nav Toggle Button
  $('.left-nav .side-nav').hover(function() {
    if(!$('.pin-container span').hasClass('open')) {
      $('.left-nav .side-nav').addClass('open');
    }
  }, function() {
    if(!$('.pin-container span').hasClass('active')) {
      $('.left-nav .side-nav').removeClass('open');
    }
  });

  $('#right-nav').hover(function() {
    if($('#right-nav').hasClass('open-filter') == false) {
      $('#right-nav').addClass('open-filter')
      $('#tabs').addClass('open-filter-tab-content')
      $('#tab-button-row').addClass('open-filter-tab-buttons')

      $('#right-nav').removeClass('close-filter')
  }}, function() {
    if($('#right-nav').hasClass('open-filter') == true) {
      $('#right-nav').addClass('close-filter')
      $('#tabs').removeClass('open-filter-tab-content')
      $('#tab-button-row').removeClass('open-filter-tab-buttons')
      $('#right-nav').removeClass('open-filter')
      }
    })
  ;

  //Left Nav Pin Button
  $('.left-nav .pin-container span').click(function() {
    if($('.left-nav .pin-container span').hasClass('active')) {
      $('.left-nav .side-nav').removeClass('fixed');
      $('.left-nav').removeClass('fixed');
      $('.main-app').removeClass('fixed');
    } else {
      $('.left-nav').addClass('fixed');
      $('.left-nav .side-nav').addClass('fixed');
      $('.main-app').addClass('fixed');
    }
    $('.left-nav .pin-container span').toggleClass('active');
  });

  //Filter Button
  $('.filter-button').click(function(e) {
    e.stopPropagation();
    $('.right-nav').toggleClass('open-filter');
    if($('.left-nav .side-nav').hasClass('fixed-mobile')) {
      $('.left-nav .side-nav').removeClass('fixed-mobile');
    }
  });

  //Mobile Button
  $('.mobile-button').click(function(e) {
    e.stopPropagation();
    $('.left-nav .side-nav').toggleClass('fixed-mobile');
    if($('.right-nav').hasClass('open')) {
      $('.right-nav').removeClass('open');
    }
  });

  //Stop Events on navbar
  $('.left-nav, .left-nav .side-nav').click(function(e) {
    e.stopPropagation();
  });

  //Stop Events on right nav
  $('.right-nav').click(function(e) {
    e.stopPropagation();
  });

  //Close menu on other click
  $('.body').click(function(e){
    const icons = [document.getElementById('filter-open-icon'), document.getElementById('filter-close-icon')]
    if ($('#right-nav').hasClass('open-filter')){
      $('#right-nav').addClass('close-filter')
      $('#tabs').removeClass('open-filter-tab-content')
      $('#tab-button-row').removeClass('open-filter-tab-buttons')
      $('#right-nav').removeClass('open-filter')
      }
    if($('.left-nav .side-nav').hasClass('fixed-mobile')) {
      $('.left-nav .side-nav').removeClass('fixed-mobile');
    }
  });

  // Dropdown
  var navItem = document.getElementsByClassName('nav-item');

  for (i = 0; i < navItem.length; i++) {
    if($(navItem[i]).find('ul.dropdown').length !== 0) {
      navItem[i].addEventListener("click", function() {
        var dropdown = $(this).children()[1];
        if (dropdown.style.display === "block") {
         dropdown.style.display = "none";
        } else {
         dropdown.style.display = "block";
        }
      });
    }
  }

});


const setUpPages = () => new Promise(async (resolve, reject) => {
    try {
    const pageIds = ['homepage-page', 'team-page', 'player-page', 'training-page', 'match-history-page']
    const pageElements = pageIds.map((id) => {return document.getElementById(id)})
    const nonHomepageElements = pageElements.filter(page => page.id !== 'homepage-page')
    nonHomepageElements.map((page) => {$('#' + page.id).hide()})
    $('#homepage-page-button-div').addClass('active')
    $('#tab1').addClass('active-tab')

    let tabGroups = Array.prototype.slice.call(document.getElementById('tabs').children).map((tabgroup) => {return Array.prototype.slice.call(tabgroup.children)})
    tabGroups.map((tabGroup) => {
      tabGroup.map(tab => {
        if (tabGroup.indexOf(tab) !== 0){
          tab.style.display = "none"}
        })
      if (tabGroups.indexOf(tabGroup) !== 0){
        const parentId = tabGroup[0].parentElement.id
        $('#' + parentId).hide()
      }
    })

    $('#tab1').text('Team/ Season')
    $('#tab2').text('Top Performers')
    $('#tab3').text('')

      resolve()
    } catch (error) {
      reject(error)
    }
  })

const tabNames = [['tab','tab','tab'],['tab','tab','tab'],['tab','tab','tab']]

const changePage = (newPage) => new Promise(async (resolve, reject) => {
    try {
    const pageIds = ['homepage-page', 'team-page', 'player-page', 'training-page', 'match-history-page']
    const iconIds = ['homepage-page-button', 'team-page-button', 'player-page-button', 'training-page-button', 'match-history-page-button']
    const pageElements = pageIds.map((id) => {return document.getElementById(id)})
    const iconElements = iconIds.map((id) => {return document.getElementById(id)})
    const currentActiveIcon = iconElements.filter((icon) => $('#' + icon.parentElement.id).hasClass('active'))
    const currentActivePage = pageElements.filter(page => $('#' + page.id).is(":visible"))
    const hideIcon = currentActiveIcon[0].parentElement.id
    const hidePage = currentActivePage[0].id
    $('#' + hideIcon).removeClass('active')
    $('#' + hidePage).hide()
    let newPageId = newPage.id
    newPageId = newPageId.substring(0, ((newPageId.length) - 7))
    $('#' + newPageId).show()
    //^^^^^^dont touch
    const newIcon = newPage.parentElement.id
    $('#' + newIcon).addClass('active')

    const currentPageTabGroup = Array.prototype.slice.call(document.getElementById('tabs').children).filter(tabGroup => $('#' + tabGroup.id).css('display') == 'block')[0]
    const newPageTabGroup = document.getElementById(newPageId + '-tabs')
    const newPageNoOfTabs = Array.prototype.slice.call(newPageTabGroup.children).length
    const tabButtons = Array.prototype.slice.call(document.getElementById('tab-button-row').children)
    tabButtons.map(tabButton => {
      if (tabButtons.indexOf(tabButton) == newPageNoOfTabs){
        $('#' + tabButton.id).hide()
      }else{
        $('#' + tabButton.id).show()
      }
    })
    try{
      $('#' + currentPageTabGroup.id).hide()
    }catch(error){
    window.resize()
    }
    $('#' + newPageTabGroup.id).show()
    const tab1 = document.getElementById('tab1')
    changeTab(tab1)
    changeTabButtonWidths(newPageTabGroup)

    console.log( newPageId)
    if (newPageId == 'homepage-page'){
      $('#tab1').text('Team/ Season')
      $('#tab2').text('Top Performers')
      $('#tab3').text('')
    }
    else if (newPageId == 'team-page'){
      $('#tab1').text('Home')
      $('#tab2').text('Away')
      $('#tab3').text('')
    }
    else if (newPageId == 'player-page'){
      $('#tab1').text('Player')
      $('#tab2').text('Timescale')
      $('#tab3').text('')
    }

    $('.side-nav')[0].classList.remove('open')
    $('.side-nav')[0].classList.remove('fixed-mobile')
      var evt = window.document.createEvent('UIEvents')
      evt.initUIEvent('resize', true, false, window, 0)
      window.dispatchEvent(evt)

    $(window).resize()
    qlik.resize()


      resolve()
    } catch (error) {
      reject(error)
    }
  })

  //CALLS
setUpPages()

const toggleFilterIcon = () => new Promise(async (resolve, reject) => {
    try {
    if ($('#right-nav').hasClass('close-filter')){//open
      $('#right-nav').addClass('open-filter')
      $('#tabs').addClass('open-filter-tab-content')
      $('#tab-button-row').addClass('open-filter-tab-buttons')

      $('#right-nav').removeClass('close-filter')

    }else{//close
      $('#right-nav').addClass('close-filter')
      $('#tabs').removeClass('open-filter-tab-content')
      $('#tab-button-row').removeClass('open-filter-tab-buttons')
      $('#right-nav').removeClass('open-filter')
    }
      resolve()
    } catch (error) {
      reject(error)
    }
  })

const changeTab = (newTab) => new Promise(async (resolve, reject) => {
   try {
    const tabButtonsIds = ['tab1', 'tab2', 'tab3']
    const tabButtonsElements = tabButtonsIds.map(button => {return document.getElementById(button)})
    const currentSelectedTab = Array.prototype.slice.call(tabButtonsElements[0].parentElement.children).filter(tab => $('#' + tab.id).hasClass('active-tab'))
    $('#' + currentSelectedTab[0].id).removeClass('active-tab')
    $('#' + newTab.id).addClass('active-tab')

    const currentPageTabGroup = Array.prototype.slice.call(document.getElementById('tabs').children).filter(tabGroup => $('#' + tabGroup.id).css('display') == 'block')[0]
    const activeFilterGroup = Array.prototype.slice.call(currentPageTabGroup.children).filter(tabGroup => $('#' + tabGroup.id).css('display') == 'block')[0]
    const newTabNo = newTab.id.charAt(3)
    const newTabId = '#' + currentPageTabGroup.id.substring(0, ((currentPageTabGroup.id.length) - 4)) + 't' + newTabNo
    $('#' + activeFilterGroup.id).hide()
    $(newTabId).show()

    resolve()
    } catch (error) {
      reject(error)
    }
  })

const changeTabButtonWidths = (tabContainer) => new Promise(async( resolve , reject) => {
  try{
    const numOfTabs = Array.prototype.slice.call(tabContainer.children).length
    const tabButtonsIds = ['tab1', 'tab2', 'tab3']
    const tabButtonsElements = tabButtonsIds.map(button => {return document.getElementById(button)})
    const tabButtonsElementsNoCols = tabButtonsElements.map(element => $('#' + element.id).removeClass('col-md-12 col-md-6 col-md-4 col-xs-12 col-xs-6 col-xs-4'))
    if (numOfTabs == 1){
      tabButtonsElementsNoCols.map(element => {$('#' + element[0].id).addClass('col-xs-12 col-md-12')})
    } else if (numOfTabs == 2){
      tabButtonsElementsNoCols.map(element => {$('#' + element[0].id).addClass('col-xs-6 col-md-6')})
    } else{
      tabButtonsElementsNoCols.map(element => {$('#' + element[0].id).addClass('col-xs-4 col-md-4')})
    }
  } catch (error) {
    reject(error)
  }
})

