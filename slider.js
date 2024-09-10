// засунули весь контейнер в свайпающийся в переменную для удобства
const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 2, // сколько слайдов мі видим
	spaceBetween: 20, //расстояние между слайдами
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
})

// чтобы менять ширину контейнера, нужно оменять ширину контейнера, а не карточки