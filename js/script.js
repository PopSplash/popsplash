//fullpafe.js init
$(document).ready(function() {
  $('#content').fullpage({
    'verticalCentered': true,
    'anchors': ['showcase', 'about', 'folio', 'services', 'contact'],
    'menu': '#navbar-items',
    'scrollingSpeed': 700,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Home', 'About', 'Folio', 'Services', 'Contact'],
    'paddingTop': '100px',
    'paddingBottom': '100px',
    'slidesNavigation': true,
    'slidesNavPosition': 'bottom',
    'scrollOverflow': true,
    'autoScrolling': true,

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
        var bg = 'rgb(134, 232, 255)';
      } else
      if (nextIndex == 2){
        var bg = 'rgb(249, 111, 194)';
      } else
      if (nextIndex == 3){
        var bg  = 'rgb(250, 250, 250)';
      } else
      if (nextIndex == 4){
        var bg  = 'rgb(209, 180, 255)';
      } else
      if (nextIndex == 5){
        var bg  = 'rgb(0, 240, 182)';
      }
      //change background color
      $('body').css('background-color', bg);
    }


  });
});
