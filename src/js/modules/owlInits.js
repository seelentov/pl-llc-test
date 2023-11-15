document.addEventListener('DOMContentLoaded', () => {
	const articlesCarousel =
		document.querySelector('.js-articles-items-carousel') || ''
	if (articlesCarousel) {
		$(document).ready(function () {
			$('.js-articles-items-carousel').owlCarousel({
				loop: true,
				margin: 15,
				nav: false,
				dots: false,
				responsive: {
					0: {
						items: 2.3,
					},
					375: {
						items: 2.7,
					},
					425: {
						items: 3,
					},
					700: {
						items: 5.5,
					},
				},
			})
		})
	}
})
