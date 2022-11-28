( function ( $ ) {
'use strict';
jQuery(document).ready(function(jQuery){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;
 
	//primary navigation slide-in effect
	if(jQuery(window).width() > MQL) {
		var headerHeight = jQuery('.cd-header').height();
		jQuery(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = jQuery(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && jQuery('.cd-header').hasClass('is-fixed')) {
		    		jQuery('.cd-header').addClass('is-visible');
		    	} else {
		    		jQuery('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	jQuery('.cd-primary-nav-trigger').on('click', function(){
		jQuery('.cd-menu-icon').toggleClass('is-clicked'); 
		jQuery('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( jQuery('.cd-primary-nav').hasClass('is-visible') ) {
			jQuery('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				jQuery('body').removeClass('overflow-hidden');
			});
		} else {
			jQuery('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				jQuery('body').addClass('overflow-hidden');
			});	
		}
	});
});
} ( jQuery ) );

'use strict';
/* maps.js */
var map_lat;
var map_lon;
var map_address;
var map_site_url;
var map_location_title;
var map_phone;
var map_email;


function architecture_showMapOnContactPage(lat, lon, address, site_url, location_title, phone, email){
	'use strict';
	map_lat = lat;
	map_lon = lon;
	map_address = address;
	map_site_url = site_url;
	map_location_title = location_title;
	map_phone = phone;
	map_email = email;
	init_map();
	
}
    var map;
    function init_map() {
		'use strict';
        var mapOptions = {
            center: new google.maps.LatLng(map_lat, map_lon),
            zoom: 12,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.DEFAULT,
            },
            disableDoubleClickZoom: true,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            },
            scaleControl: true,
            scrollwheel: false,
            panControl: true,
            streetViewControl: true,
            draggable : true,
            overviewMapControl: true,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        }
        var mapElement = document.getElementById('find-us');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
[map_location_title, map_address, map_phone, map_email, '', map_lat, map_lon, map_site_url+'/images/archi-map-icon.png']
        ];
		var i,description,telephone,email,web,markericon,marker,link;
        for (i = 0; i < locations.length; i++) {
			if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
			if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
			if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
           if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
           if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
            marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
            });
link = '';            bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
     }
 function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
	  'use strict';
      var infoWindowVisible = (function () {
              var currentlyVisible = false;
              return function (visible) {
                  if (visible !== undefined) {
                      currentlyVisible = visible;
                  }
                  return currentlyVisible;
               };
           }());
           var iw = new google.maps.InfoWindow();
           google.maps.event.addListener(marker, 'click', function() {
               if (infoWindowVisible()) {
                   iw.close();
                   infoWindowVisible(false);
               } else {
                   var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a></div>";
                   iw = new google.maps.InfoWindow({content:html});
                   iw.open(map,marker);
                   infoWindowVisible(true);
               }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
 }
}
/* sticky-header.js */
/**
 * cbslideheader - A jQuery plugin to display or hide headerbar with a sliding motion
 * @version v0.3.6
 * @author maechabin <mail@chab.in> http://mae.chab.in/
 * @license MIT license
 */
!function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery"),window,document):e(jQuery,window,document)}(function(e,i,o,t){"use strict";var n=function(i,o){this.element=i,this.$element=e(i),this.methodType="",this.config={},this.options=o,this.slideFlag="up",this.defaults={headerBarHeight:this.$element.height(),headerBarWidth:"100%",header2SelectorName:".cb-header2",headerClone:!1,fullscreenView:!1,zIndex:9999,boxShadow:"none",opacity:1, slidePoint:0,slideDownDuration:"normal",slideUpDuration:"normal",slideDownEasing:"swing",slideUpEasing:"swing",slideDownCallback:function(){},slideUpCallback:function(){},headroom:!1}};n.prototype.slide=function(e,o,t,n){var s=this;this.slideFlag="up"===e?"down":"up",i.setTimeout(function(){s.$element.stop().animate({top:o},s.config["slide"+t+"Speed"],s.config["slide"+t+"Easing"],s.config["slide"+t+"Callback"]).css(n)},200)},n.prototype.slideHeader=function(){var o=this,t=e(i),n="slideDown"===o.methodType?0:"-"+o.config.headerBarHeight+"px",s="slideDown"===o.methodType?"-"+o.config.headerBarHeight+"px":15,d="slideDown"===o.methodType?"Down":"Up",l="slideDown"===o.methodType?"Up":"Down",a={"box-shadow":o.config.boxShadow,transition:"box-shadow .9s linear"},h={"box-shadow":"none"},c="slideDown"===o.methodType?a:h,r="slideDown"===o.methodType?h:a,p=0,g=0;t.on("scroll",function(){"slideUp"===o.methodType&&o.config.headroom===!0?(g=t.scrollTop(),g>p&&g>0?"up"===o.slideFlag&&o.slide.call(o,o.slideFlag,n,d,c):"down"===o.slideFlag&&o.slide.call(o,o.slideFlag,s,l,r),p=g):t.scrollTop()>o.config.slidePoint?"up"===o.slideFlag&&o.slide.call(o,o.slideFlag,n,d,c):"down"===o.slideFlag&&o.slide.call(o,o.slideFlag,s,l,r)})},n.prototype.setStyle=function(){var e=this,i="slideDown"===e.methodType?"-"+e.config.headerBarHeight+"px":15;e.$element.css({top:i,visibility:"visible",opacity:e.config.opacity,width:e.config.width,"z-index":e.config.zIndex})},n.prototype.cloneHeader=function(){var e=this,i=e.$element.clone(!0);i.insertAfter(e.$element).removeClass("cb-header").addClass("cb-header1").css({"z-index":1e4})},n.prototype.changeHeaderHeight=function(){var o=this,t=o.$element.height(),n=e(o.config.header2SelectorName),s=t+n.height(),d=e(i).height(),l="";d>s?(l=o.config.headerClone===!0?(d-s)/2:(d-s+t)/2,o.config.slidePoint=d,n.css({"padding-top":l+"px","padding-bottom":l+"px"})):o.config.headerClone===!0?o.config.slidePoint=s:o.config.slidePoint=s-t},n.prototype.init=function(i){return this.methodType=i,this.config=e.extend({},this.defaults,this.options),this.config.headerClone===!0&&this.cloneHeader(),this.setStyle(),this.config.fullscreenView===!0&&this.changeHeaderHeight(),this.slideHeader(),this},e.extend(e.fn,{cbSlideDownHeader:function(e){return this.each(function(){new n(this,e).init("slideDown")})},cbSlideUpHeader:function(e){return this.each(function(){new n(this,e).init("slideUp")})}})});

/* counter.js */
/*!
* jquery.counterup.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Nov 26, 2013
*/(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

/* Custom.js */
<!-- Header -->	 
jQuery(".header-two").cbSlideDownHeader({
    zIndex: 1001,
    //headerClone: true,
    //fullscreenView: true
  });
  jQuery(".header-one").cbSlideUpHeader({
    zIndex: 30,
	//headerClone: true,
    //fullscreenView: true
    //slideDownCallback: function () {alert("aaa");}
  });





<!-- Smooth Scrol -->	 
jQuery(function(){
'use strict';
var jQuerywindow = jQuery(window);		//Window object

var scrollTime = 0.6;			//Scroll time
var scrollDistance = 355;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

jQuerywindow.on("mousewheel DOMMouseScroll", function(event){

event.preventDefault();	

var delta = event.originalEvent.wheelDelta/125 || -event.originalEvent.detail/3;
var scrollTop = jQuerywindow.scrollTop();
var finalScroll = scrollTop - parseInt(delta*scrollDistance);

TweenMax.to(jQuerywindow, scrollTime, {
scrollTo : { y: finalScroll, autoKill:true },
ease: Power1.easeOut,	
autoKill: true,
overwrite: 5							
});

});

});







<!-- FunFacts -->
(function(jQuery) {
		"use strict";
		function count(jQuerythis){
		var current = parseInt(jQuerythis.html(), 10);
		current = current + 10; /* Where 50 is increment */	
		jQuerythis.html(++current);
			if(current > jQuerythis.data('count')){
				jQuerythis.html(jQuerythis.data('count'));
			} else {    
				setTimeout(function(){count(jQuerythis)}, 1);
			}
		}        	
		jQuery(".stat-count").each(function() {
		  jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
		  jQuery(this).html('0');
		  count(jQuery(this));
		});
   })(jQuery);







<!-- Client Words Carousel -->	
jQuery(document).ready(function() {
 
  jQuery("#client-words").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    
  });
 
});









'use strict';
<!-- Services Tabs -->	
/* jQuery activation and setting options for the tabs*/
var tabbedNav = jQuery("#tabbed-nav").zozoTabs({
orientation: "horizontal",
theme: "silver",
position: "top-left",
size: "medium",
animation: {
duration: 600,
easing: "easeOutQuint",
effects: "fade"
},
defaultTab: "tab1"
});







<!-- About Slide Carousel -->

jQuery(document).ready(function() {
 
  jQuery(".architecture-slider").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});




//PreLoader
;(function(){

			// Menu settings
			jQuery('#menuToggle, .menu-close').on('click', function(){
				jQuery('#menuToggle').toggleClass('active');
				jQuery('body').toggleClass('body-push-toleft');
				jQuery('#theMenu').toggleClass('menu-open');
			});


})(jQuery)

//PAGE LOADER//
jQuery(document).ready(function(){
        jQuery('body').addClass('loaded');

});
  
  
  
  
  
  //Switcher
jQuery(document).ready(function(jQuery) {

jQuery("#default-color" ).click(function(){
jQuery("#color" ).attr("href", "css/default-color.css");
//jQuery(".link img" ).attr("src", "images/timetable-menu-brown.png");
return false;
});

jQuery("#brown" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/brown.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-brown.png");
return false;
});

jQuery("#pink" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/pink.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-pink.png");
return false;
});

jQuery("#dark-blue" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/dark-blue.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-dark-blue.png");
return false;
});


jQuery("#green" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/green.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-green.png");
return false;
});

jQuery("#light-green" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/light-green.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-light-green.png");
return false;
});


jQuery("#orange" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/orange.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-orange.png");
return false;
});

jQuery("#light-blue" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/light-blue.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-light-blue.png");
return false;
});

jQuery("#purple" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/purple.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-purple.png");
return false;
});

jQuery("#red" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/red.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-red.png");
return false;
});

jQuery("#yellow" ).click(function(){
jQuery("#color" ).attr("href", "css/theme-colors/yellow.css");
jQuery(".link img.time-tab" ).attr("src", "images/timetable-menu-yellow.png");
return false;
});



jQuery("#light").click(function(){
jQuery("#footer").addClass("footer-light");
jQuery("#footer").removeClass("footer");
//jQuery("#footer img" ).attr("src", "images/footer-logo.jpg");
});
jQuery("#dark").click(function(){
jQuery("#footer").addClass("footer");
jQuery("#footer").removeClass("footer-light");
//jQuery("#footer img" ).attr("src", "images/footer-logo-dark.jpg");
});

jQuery("#header-one").click(function(){
jQuery("#header-1").show();
jQuery("#header-2").hide();
});
jQuery("#header-two").click(function(){
jQuery("#header-2").show();
jQuery("#header-1").hide();
});



// picker buttton
jQuery(".picker_close").click(function(){

jQuery("#choose_color").toggleClass("position");

});

});

/* main-portfolio.js */

(function(jQuery, window, document, undefined) {
    'use strict';
 
    // init cubeportfolio
    jQuery('#js-grid-lightbox-gallery').cubeportfolio({
        filters: '#js-filters-lightbox-gallery1, #js-filters-lightbox-gallery2',
        
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1500,
            cols: 4
        }, {
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 60,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageInlineInFocus: true,
    });
})(jQuery, window, document);

