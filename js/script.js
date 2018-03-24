//fullpafe.js init
$(document).ready(function() {
  $('#content').fullpage({
    'verticalCentered': true,
    'css3': true,
    'anchors': ['showcase', 'about', 'folio', 'services', 'contact'],
    'menu': '#navbar-items',
    'scrollingSpeed': 700,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['PopSplash', 'About', 'Folio', 'Services', 'Contact'],
    'paddingTop': '100px',
    'paddingBottom': '100px',
    'slidesNavigation': true,
    'slidesNavPosition': 'bottom',
    'scrollOverflow': true,

    'afterLoad': function(anchorLink, index){
      if(index == 1){
        $('#showcase-img').addClass('moveAround');
      }
    },
    'onLeave': function(index, nextIndex, direction){
      if (index == 1 && direction == 'down'){
        $('#showcase-img').removeClass('moveAround');
      }
      //set background colors
      if (nextIndex == 1){
        var bg = '#b0e8f5';
      } else
      if (nextIndex == 2){
        var bg = '#b7d8f1';
      } else
      if (nextIndex == 3){
        var bg  = '#f6e2f0';
      } else
      if (nextIndex == 4){
        var bg  = '#e2d6f5';
      } else
      if (nextIndex == 5){
        var bg  = '#d8d5f0';
      }
      //change background color
      $('body').css('background-color', bg);
    }


  });
});
