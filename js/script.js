
//fullpafe.js init
$(document).ready(function() {
  $('#content').fullpage({
    'verticalCentered': true,
    'css3': true,
    'sectionsColor': ['#b0e8f5', '#b7d8f1', '#f6e2f0', '#e2d6f5', '#d8d5f0'],
    'anchors': ['showcase', 'about', 'folio', 'services', 'contact'],
    'menu': '#navbar-items',
    'scrollingSpeed': 700,
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['PopSplash', 'About', 'Folio', 'Services', 'Contact'],
    'showActiveTooltip': true,
    'paddingTop': '100px',
    'paddingBottom': '100px',
    'slidesNavigation': true,
    'slidesNavPosition': 'bottom',



    'afterLoad': function(anchorLink, index){
      if(index == 1){
        $('#showcase-img').addClass('moveAround');
      }
    },
    'onLeave': function(index, nextIndex, direction){
      if (index == 1 && direction == 'down'){
        $('#showcase-img').removeClass('moveAround');
      }
    }


  });
});


// hamburger menu init
// var  $menuIcon = $('.menu-icon'),
//                 $navigation = $('.navigation'),
//                 $mainNavigation = $('.nav-items'),
//                 $navigationLink = $('.nav-items a');
//
//
//
// $(window).scroll(function() {
//   if(window.scrollY > window.outerHeight) {
//     $menuIcon.addClass('active');
//   } else {
//     $menuIcon.removeClass('active');
//   }
// });
//
// $menuIcon.click(function(e) {
//   var classs = $('.menu-icon').attr('class');
//   console.log(classs);
//   e.preventDefault();
//
//   $navigation.toggleClass('active');
// });

// $mainNavigation.singlePageNav(function() {
//   filter: ':not(.external)',
//   speed: '1000',
//   currentClass: 'current',
//   easing: 'swing',
//   updateHash: false,
//   beforeStart: function() { },
//   onComplete: function() { $navigation.removeClass('active'); }
// });
