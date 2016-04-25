
var
	body = $('body'),
	hometop = $(".home .homeTop"),
	headerHeight = $('header').outerHeight(),
	$main = $("main"),
	contentChunk = $(".contentChunk"),
	menuButton = document.getElementById('menuButton');

function pageHandler()
{
	if (body.hasClass('home')) {
		wayiso();
	} else if (body.hasClass('newsList')) {
		newspage();
	} else if (body.hasClass('newsDetail')) {
	} else if (body.hasClass('videosPage')) {
		videosPage();
	} else if (body.hasClass('gigPage')) {
		openGigList();
	} else if (body.hasClass('releasePage')) {
		releasesPage();
	} else if (body.hasClass('instagramList')) {
		wayiso();
	} else if (body.hasClass('twitterList')) {
		wayiso();
	}
};

function isotopeStart() {
  $('.home .allContent, .instagramList .allContent, .newsList .allContent, .twitterList .allContent').isotope({
    itemSelector: '.isoBlock'
  });
};

function newspage() {
	isotopeStart();
};

function waypointHolder() {
	$(".contentChunk").waypoint(function (dir) {
		var self = this;
		if (dir == "down") {
			$(self).addClass('animatemein');
			$(window).trigger('resize');
		}
    },{offset:($(window).height())});
};

function waypointOld() {
     $(".allContent").waypoint(function (dir) {
   if (dir == "down") {
     $("body").removeClass('clearNavigation');
     $(".downArrowHold").css("opacity", 0);
     }
   else {
       $("body").addClass('clearNavigation');
     $(".downArrowHold").css("opacity", 1);
     }
     },{offset:'50%'}
     );
};

function navigationMenu() {
	var el = $('.title span');
	menuButton.addEventListener('click', function (e) {
	menuButton.classList.toggle('is-active');
	body.toggleClass('show');
	if (el.text() == el.data("text-swap")) { el.text(el.data("text-original")); } else { el.data("text-original", el.text()); el.text(el.data("text-swap")); }
		e.preventDefault();
	});
	$('.closeWindow').click(function () {
		body.toggleClass('show');
		menuButton.classList.toggle('is-active');
		if (el.text() == el.data("text-swap")) {
        el.text(el.data("text-original"));
        } else {
        el.data("text-original", el.text());
        el.text(el.data("text-swap"));
      	}
	});
	/* pressing # opens navigation menu */
    $(document).keydown(function(e){
    if (e.keyCode == 220) { 
       $("body").toggleClass("show");
       menuButton.classList.toggle('is-active');
       if (el.text() == el.data("text-swap")) {
                                el.text(el.data("text-original"));
                              } else {
                                el.data("text-original", el.text());
                                el.text(el.data("text-swap"));
                              }
       return false;
    }
    });

    /*$(menuButton).mouseenter(function() {
		body.toggleClass('show');
      menuButton.classList.toggle('is-active');

  });*/

   $(('.closeWindow')).mouseenter(function() {
    body.toggleClass('show');
      menuButton.classList.toggle('is-active');
  });

};


function wayiso() {
	waypointHolder();
	isotopeStart();
};



function releasesPage() {
	var filterBtnAll = document.getElementById('filterBtnAll'),
	filterBtnSingle = document.getElementById('filterBtnAlbum'),
	filterBtnAlbum = document.getElementById('filterBtnSingle');

	filterBtnAll.addEventListener('click', function () {
          body.addClass("filterByAll").removeClass("filterBySingle").removeClass("filterByAlbum");
          filterBtnAll.addClass('selected');
          filterBtnSingle.removeClass('selected');
          filterBtnAlbum.removeClass('selected');
    });
    filterBtnSingle.addEventListener('click', function () {
          body.removeClass("filterByAll").removeClass("filterBySingle").addClass("filterByAlbum");
          filterBtnSingle.addClass('selected');
          filterBtnAll.removeClass('selected');
          filterBtnAlbum.removeClass('selected');
    });
    filterBtnAlbum.addEventListener('click', function () {
          body.removeClass("filterByAll").removeClass("filterByAlbum").addClass("filterBySingle");
          filterBtnAlbum.addClass('selected');
          filterBtnSingle.removeClass('selected');
          filterBtnAll.removeClass('selected');
    });
	$('.releaseFilter').click(function () {
				$('html, body').animate({scrollTop:$('.filterListHolder').offset().top - headerHeight + 1}, 500);
	});
	 var releaseAnimation = new TimelineMax({paused:false, delay: 0})
             releaseAnimation
             .from($(".releasePackBlock") , 2, { y: '20px', opacity: 0,  ease:Quart.easeInOut}, 0)
             .from($(".title") , 1, { opacity: 0, ease:Quart.easeInOut}, 1)
             .from($(".halfRelease") , 1, { opacity: 0, ease:Quart.easeInOut}, 1.5)
             ;
};


function videosPage() {
	   var videoAnim = new TimelineMax({paused:false, delay: 0})
             videoAnim
             .from($(".videoContent") , 1, { opacity: 0}, 1)
             .from($(".videoslidefooter") , 0.5, { y: '50px', ease:Quart.easeInOut}, 1)
             .from($(".iframeHolder") , 1, { opacity: 0, ease:Quart.easeInOut}, 1)
             ;

	   $('.listBtn').click(function () {
	                $('html, body').animate({scrollTop:$('#videoList').offset().top}, 500);
	    });

	   var figure = $(".videoThumb").hover( hoverVideo, hideVideo );
		function hoverVideo(e) { $('video', this).get(0).play(); }
		function hideVideo(e) { $('video', this).get(0).pause(); }

};


function animEntry() {
	$(".animEntry").not(".animIn").each(function (i) {
		var self = this;
		var timer = i * 250;
		setTimeout(function () {
			$(self).addClass('animIn');
		}, timer);
	});
};

/* = = = = ANIMATION FOR THE HEADER LOGO = = = = */

function openingSequences() {
		$('.headerLogo').css('opacity', 1);

		var logoAnim = new TimelineMax({paused:false, delay: 0})
        	logoAnim.staggerFrom($(".headerLogo .letter") , 3, { y: '-130%', ease:Quart.easeInOut}, 0.07);
		animEntry();
		centerItems();
};

function centerItems() {
	$(window).resize(function() {
			$.fn.CenterTop = function() { this.css({ 'position' : 'absolute', 'top' : '50%', 'margin-top' : -(($(this).outerHeight()/2)) }); return this; }  
			$(".videoTitle").CenterTop();   
			$(".videosPage .vidThumbCopy").CenterTop();   
			$(".newsList .newsListInfo").CenterTop();
			$(".releaseInfoCopy").CenterTop();  
			$(".releaseBlock .releaseLinks").CenterTop();  
			$(".instagramCopy").CenterTop();  
			$(".homeSlideCopy").CenterTop();  
	}).resize();
};


$(function() {

	String.prototype.decodeHTML = function() { return $("<div>", {html: "" + this}).html(); };

	var $main = $("main"),
		$scripts = $("#scripts"),

		loadPage = function(href) {
			var $div = $('<div>');
			$div.load(href, function(response) {
				document.title = $(response).filter('title').html();
				$(body).attr('class', $(response).filter('#bodyclass').attr('rel'));
				content = $(response).filter('#main').html();
				scripts = $(response).filter('#scripts').html();
				$main.html(content);
				$scripts.html(scripts);
				$main.removeClass("fadethisout");
				animEntry();
				pageHandler();
				waypointHolder();
				$(window).trigger('resize');
			});
			$div.remove();
		};

		$(window).on("popstate", function(e) {
			if (e.originalEvent.state !== null) {
				loadPage(location.href);
				$(".loading").fadeOut();
			}
		});


		$(document).on("click", ".homeSlider article", function() {
			var href = $(this).find('a').attr("href");		
			window.open(href, '_blank');
		});

		$(document).on("click", ".mainNav a, a.internal", function(e) {
			var href = $(this).attr("href");
			setTimeout(function () {
				$('html, body').animate({scrollTop:0}, 0, 'easeOutQuint');
			}, 1000);
			setTimeout(function () {
				$main.addClass("fadethisout");
				$(".loading").fadeIn();
			}, 400);
			if (body.hasClass('show'))
			{
				body.toggleClass('show');
				menuButton.classList.toggle('is-active');
			}

		if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1)
		{
			e.preventDefault();
			history.pushState({}, '', href);
			setTimeout(function () {
				loadPage(href);
				$(".loading").fadeOut();
			}, 700);
			return false;
		}

	});

});


$( window ).load(function() {
	$(".loading").fadeOut();
	navigationMenu();
		openingSequences();
		pageHandler();
});
               


 
        

