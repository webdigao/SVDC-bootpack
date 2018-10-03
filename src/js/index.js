// CSS Imports *include in entry file only
import '../css/bootstrap.css';
import '../css/fonts.css';
import '../css/components.css';
import '../css/site.scss';

/* Boostrap 4 Full Bundles */
import 'bootstrap/dist/js/bootstrap.bundle'; /* Includes popper.js */
// import 'bootstrap'; /* Does not include popper. js */

// Uncomment 'popper.js' in webpack.config.js

/* Boostrap 4 Individual Components (Optional) */
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
 import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/tooltip'; /* requires popper.js */
// import 'bootstrap/js/dist/util';

if (process.env.NODE_ENV === 'development') {
  require('../index.html'); /* Require so webpack watches changes to html file */
}


//parallax js
$(document).ready(function(){
  var $window = $(window);
  $('section[data-type="background"]').each(function(){
    var $bgobj = $(this); // assigning the object
    
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
      
      // Put together our final background position
      var coords = '50% '+ yPos + 'px';
      
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); 
  });    
  //menu transition js
  
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".navbar").addClass("navbar-scroll");
    }
    else{
      $(".navbar").removeClass("navbar-scroll");  	
    }
    if (scroll > 200) {
      $(".navbar").addClass("bg-primary");
    }
    else{
      $(".navbar").removeClass("bg-primary");  	
    }
  })
  
  // Add scrollspy to <body>
  // $('body').scrollspy({target: ".navbar", offset: 56});   
  // Add smooth scrolling on all links inside the navbar
  $(".navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });  
})