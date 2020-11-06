$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		 Counter: $(this).text()
	}, {
		 duration: 3000,
		 easing: 'swing',
		 step: function (now) {
			  $(this).text(Math.ceil(now));
		 }
	});
});


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

