const swiper = new Swiper('.app__carousel', {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheel: true,
	speed: 2000,
});

const navigations = document.querySelectorAll('.nav-btn');

navigations.forEach((navBtn, index) => {
	navBtn.addEventListener('click', () => {
		removeActiveNav();
		swiper.slideTo(index);
		navBtn.classList.add('active');
	});
});

navigations[0].classList.add('active');

const removeActiveNav = () => {
	navigations.forEach(n => n.classList.remove('active'));
};
