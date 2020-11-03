window.addEventListener('scroll', function(){
	var header = document.querySelector('header'); 
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
	let menuToggle = document.querySelector('.toggle');
	menuToggle.classList.toggle('active');
	let menu = document.querySelector('.menu');
	menu.classList.toggle('active');
	}

