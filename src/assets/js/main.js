const swiper = new Swiper('.app__carousel', {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheel: true,
	speed: 2000,
});

const navigations = document.querySelectorAll('.nav-btn');

navigations.forEach((navBtn, index) => {
	navBtn.addEventListener('click', () => {
		swiper.slideTo(index);
	});
});
