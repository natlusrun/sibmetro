/* ===================================================================
 *  - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    const cfg = {
                scrollDuration : 800, // smoothscroll duration
                mailChimpURL   : ''   // mailchimp url
                };
    const $WIN = $(window);


    // Add the User Agent to the <html>
    // will be used for IE10/IE11 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; rv:11.0))
    // const doc = document.documentElement;
    // doc.setAttribute('data-useragent', navigator.userAgent);


   /* preloader
    * -------------------------------------------------- */
 



   /* pretty print
    * -------------------------------------------------- */
    const ssPrettyPrint = function() {
        $('pre').addClass('prettyprint');
        $( document ).ready(function() {
            prettyPrint();
        });
    };


	 var $cont = document.querySelector('.cont');
	 var $elsArr = [].slice.call(document.querySelectorAll('.el'));
	 var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
	 
	 setTimeout(function() {
		$cont.classList.remove('s--inactive');
	 }, 200);
	 
	 $elsArr.forEach(function($el) {
		$el.addEventListener('click', function() {
		  if (this.classList.contains('s--active')) return;
		  $cont.classList.add('s--el-active');
		  this.classList.add('s--active');
		});
	 });
	 
	 $closeBtnsArr.forEach(function($btn) {
		$btn.addEventListener('click', function(e) {
		  e.stopPropagation();
		  $cont.classList.remove('s--el-active');
		  document.querySelector('.el.s--active').classList.remove('s--active');
		});
	 });
	 
	 
   /* move header
    * -------------------------------------------------- */
	window.addEventListener('scroll', function(){
		const header = document.querySelector('header'); 
		header.classList.toggle('sticky', window.scrollY > 0);
	});
	
	function toggleMenu(){
		let menuToggle = document.querySelector('.toggle');
		menuToggle.classList.toggle('active');
		let menu = document.querySelector('.menu');
		menu.classList.toggle('active');
		}
	



   /* mobile menu
    * ---------------------------------------------------- */ 
    



   /* photoswipe
    * ----------------------------------------------------- */
    const ssPhotoswipe = function() {
        const items = [],
              $pswp = $('.pswp')[0],
              $folioItems = $('.folio-item');

        // get items
        $folioItems.each( function(i) {

            let $folio = $(this),
                $thumbLink =  $folio.find('.folio-item__thumb-link'),
                $title = $folio.find('.folio-item__title'),
                $caption = $folio.find('.folio-item__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];
        
            let item = {
                src  : $href,
                w    : $width,
                h    : $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function(i) {

            $(this).find('.folio-item__thumb-link').on('click', function(e) {
                e.preventDefault();
                let options = {
                    index: i,
                    showHideOpacity: true
                }

                // initialize PhotoSwipe
                let lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
            });

        });
    };



   /* Responsive
    * ------------------------------------------------------ */
	

   /* animate on scroll
    * ------------------------------------------------------ */
    const ssAOS = function() {
        
        AOS.init( {
            offset: 100,
            duration: 600,
            easing: 'ease-in-out',
            delay: 300,
            once: true,
            disable: 'mobile'
        });

    };



   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };

    
   /* smooth scrolling
    * ------------------------------------------------------ */
    const ssSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            const target = this.hash;
            const $target = $(target);
            
            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {
                window.location.hash = target;
            });
        });

    };
	 
	
   /* back to top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {
        
        const pxShow = 800;
        const $goTopButton = $(".ss-go-top")

        // Show or hide the button
        if ($(window).scrollTop() >= pxShow) $goTopButton.addClass('link-is-visible');

        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                if(!$goTopButton.hasClass('link-is-visible')) $goTopButton.addClass('link-is-visible')
            } else {
                $goTopButton.removeClass('link-is-visible')
            }
        });
    };



   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        
        ssPrettyPrint();
       
        ssPhotoswipe();
        
        ssAOS();
        ssAlertBoxes();
        ssSmoothScroll();
        ssBackToTop();

    })();

})(jQuery);