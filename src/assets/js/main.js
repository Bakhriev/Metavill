const navigations = document.querySelectorAll('.nav-btn');

const swiper = new Swiper('.app__carousel', {
	direction: 'vertical',
	slidesPerView: 1,
	mousewheel: true,
	speed: 2000,

	allowTouchMove: false,

	on: {
		activeIndexChange: () => {
			removeActiveNav();
			navigations[swiper.realIndex].classList.add('active');
		},
	},
});

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
