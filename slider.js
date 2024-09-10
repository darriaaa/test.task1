// засунули весь контейнер в свайпающийся в переменную для удобства
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 2.4, // сколько слайдов мі видим
	spaceBetween: 26, //расстояние между слайдами
	loop: true, //зацыкленость слайда, нет конца с прави и лева

	pagination: {
		el: '.swiper-pagination', // Добавляем пагинацию 
		clickable: true,
	},
	loop: true,
	centeredSlides: true,


	// наши стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChange: function () {
			highlightActiveSlide(this);
		},
	},
});

function highlightActiveSlide(swiper) {
	const slides = document.querySelectorAll('.swiper-slide');
	slides.forEach(slide => slide.classList.remove('active-slide')); // Удаляем класс у всех слайдов
	const activeIndex = swiper.activeIndex;
	const activeSlide = slides[activeIndex];
	if (activeSlide) {
		activeSlide.classList.add('active-slide'); // Добавляем класс к активному слайду
	}
}

// Инициализация начального состояния
highlightActiveSlide(swiper);


// чтобы менять ширину контейнера, нужно оменять ширину контейнера, а не карточки