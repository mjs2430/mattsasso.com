/*globals $:false */

$(document).ready(function () {


	/*EVEN ODD COLOR OF WORK CARDS
	function checkEven() {
		$( ".work-card:visible" ).filter( ":even" ).css( "background", "#f4f4f4" );
	}
		$(function () {
		$(".filter-button").not(".filtered").click(function () {
				checkEven();
		});
	}); */



	//Remove outlines for mouse users
	function handleFirstTab(e) {
		if (e.keyCode === 9) { // the "I am a keyboard user" key
			document.body.classList.add('user-is-tabbing');
			window.removeEventListener('keydown', handleFirstTab);
		}
	}

	window.addEventListener('keydown', handleFirstTab);



	//filters
	var tag = 0;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$(function () {
			$(".filter-button").click(function () {
				tag = "." + $(this).html();
				$('.work-card').not(tag).fadeToggle();
				if ($(this).hasClass("unfiltered")) {
					$(this).removeClass("unfiltered");
					$(this).addClass("filtered");
					$(this).siblings("button").hide();
				} else if ($(this).hasClass("filtered")) {
					$(this).removeClass("filtered");
					$(this).addClass("unfiltered");
					$("#loadMore").show();
					$(".unfiltered").slice(0, 2).show();
				}
			});
		});
	} else {
		$(function () {
			$(".filter-button").click(function () {
				tag = "." + $(this).html();
				$('.work-card').not(tag).fadeToggle();
				if ($(this).hasClass("unfiltered")) {
					$(this).removeClass("unfiltered");
					$(this).addClass("filtered");
					$(this).siblings("button").hide();
				} else if ($(this).hasClass("filtered")) {
					$(this).removeClass("filtered");
					$(this).addClass("unfiltered");
					$(".unfiltered").show();
				}
			});
		});

	}


    

	//Set active class to navbar based on page
	var url = window.location;
	$('nav a[href="' + url + '"]').addClass('nav-active');
	console.log(url)
	$('nav a').filter(function () {
		return this.href == url;
	}).addClass('nav-active');




	//Load more items
	function loadMore() {
		$(".filter-button").slice(0, 2).show();
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".filter-button:hidden").slice(0, 15).slideDown();
			if ($(".filter-button:hidden").length == 0) {
				$("#loadMore").hide()
				$("#loadLess").show()
				$("#loadLess").on('click', function (d) {
					d.preventDefault();
					$(".filter-button").slice(2, 15).slideUp();
					$("#loadMore").show()
					$("#loadLess").hide()
				});
			}
		});
	}


	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		loadMore();
	} else {
		$(".filter-button").slice(0, 15).show();
		$("#loadMore").hide()
	}



	//to top
	$('.totop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});


	//lightbox 
		if (! /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var imgNum = null;
	$(".gallery a").click(function () {
		imgNum = "." + $(this).attr('class');
		$('.full').fadeIn(400);
		$('.full').css('display', 'flex');
		$('html').css('overflow', 'hidden'); 
		$(".full").children(imgNum).show(); 
	}); 
	$(".close").click(function () { 
		$(".full").children(imgNum).fadeOut(); 
		$('.full').fadeOut();  
		$('html').css('overflow', 'scroll');
	});
		}

	//slick carousel
	/* 
    $('.gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 4,
        lazyLoad: 'ondemand',
        asNavFor: '.gallery',
        dots: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
*/



/*******
COMPONENTS 
******/    

//Header
    
class Header extends HTMLElement {
  constructor() {
      super();
    this.innerHTML = `
<header>
    <a href="http://matthewsasso.com">
	<img src="http://matthewsasso.com/img/logo-lg-color.png" alt="matt sasso logo">
    </a>
	<nav>
		<a href="http://matthewsasso.com/index.html">my work</a>
		<a href="http://matthewsasso.com/contact-me.html">contact me</a> 
		<a href="http://matthewsasso.com/about-me.html">about me</a> 
	</nav> 
</header>
        `
  }
}

//Footer

class Footer extends HTMLElement {
  constructor() {
      super();
    this.innerHTML = 
      `
  <footer>
    <a href="https://www.instagram.com/mjs2430/?hl=en" target="_blank" aria-label="instagram"><i class="fab fa-instagram"></i></a>
    <a href="https://github.com/mjs2430" target="_blank" aria-label="github"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/mattsasso/" target="_blank" aria-label="linkedin"><i class="fab fa-linkedin"></i></a>
    <a href="https://codepen.io/mjs2430/" target="_blank" aria-label="codepen"><i class="fab fa-codepen"></i></a>
    <a href="mailto:matthewsasso@outlook.com" aria-label="email me"><i class="far fa-envelope"></i></a>  
    <p>handmade with love by matt sasso</p> 
  </footer>

      `
    
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
    
    
 


});
