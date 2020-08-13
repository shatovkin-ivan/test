
// window.addEventListener('DOMContentLoaded', () => {
// 	const menu = document.querySelector('.menu'),
// 		menuItem = document.querySelectorAll('.menu__item'),
// 		hamburger = document.querySelector('.hamburger');

// 	hamburger.addEventListener('click', () => {
// 		hamburger.classList.toggle('hamburger__active');
// 		menu.classList.toggle('menu_active');
// 	});

// 	menuItem.forEach(item => {
// 		item.addEventListener('click', () => {
// 			hamburger.classList.toggle('hamburger__active');
// 			menu.classList.toggle('menu__active');
// 		})
// 	})
// })

// Слайдер

$(document).ready(function () {
	$('.slider__items').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg></button>',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.tabs__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg></button>',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.clients-slider__main').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.clients__slider',
	});

	$('.clients__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		asNavFor: '.clients-slider__main',
		prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg></button>',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.gallery__slider').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-left" class="svg-inline--fa fa-arrow-alt-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z"></path></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path></svg></button>',
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});

	$('.tabs__wrap-title').on('click', function (e) {
		e.preventDefault();
		const findSlider = $(this).parents('.tabs__main-content').find('.tabs__slider');
		$(findSlider).slick('setPosition');
	});

	// паралакс

	$window = $(window);
	$('section[data-type="background"]').each(function () {
		const $bgobj = $(this);
		$(window).scroll(function () {
			const yPos = -($window.scrollTop() / $bgobj.data('speed'));
			const coords = '50% ' + yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});

	// модальное окно

	$('[data-modal=consulting]').on('click', function () {
		$('.overlay, #consulting').fadeIn();
	})
	$('.modal__close').on('click', function () {
		$('.overlay, #consulting').fadeOut()
	})

	// Бургер

	$('.hamburger').on('click', function(){
		$('.menu').toggleClass('menu_active'),
		$('.hamburger').toggleClass('hamburger_active');
	})

	$('a.anchor').click(function(e){
		e.preventDefault();
		var elClick = $(this).attr('href');
		var dest = $(elClick).offset().top;
		$('html:not(:animated),body:not(:animated)').animate({scrollTop : dest}, 1000);
  });

  $('.arrow-btn').on('click', function(event) {
	  event.preventDefault();
		$('.dropdown__links').slideToggle();
  })



  // выпадающее меню

	const listItem = $('.dropdown__link');
	const dropdownInput = $('.dropdown__input input');

	$(listItem).on('click', function(){
		$(this).parents('.dropdown__wrap').find('.dropdown__input input').val($(this).text());
		$('.dropdown__links').slideUp(300);
	});

	if ( $(window).width() < 768 ) {
		const listItem = $('.portfolio__subtitle');
		const portfolioInput = $('.portfolio__menu-mobile input');

	$('.portfolio__btn').on('click', function(event) {
		event.preventDefault();
			$('.portfolio__links').slideToggle();
		})

	$(listItem).on('click', function(event){
		event.preventDefault();
		$(this).parents('.portfolio__wrap').find('.portfolio__menu-mobile input').val($(this).text());
		$('.portfolio__links').slideUp(300);
		});
	}
});


// Табы

let tab = function () {
	let tabNav = document.querySelectorAll('.tabs__item'),
		tabContent = document.querySelectorAll('.tabs__description'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}
	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') :
				item.classList.remove('is-active');
		})
	}
}
tab();

let subtab = function () {
	let subTabNav = document.querySelectorAll('.tabs__wrap-title'),
		subTabContent = document.querySelectorAll('.tabs__change-text'),
		subTabName;

	subTabNav.forEach(item => {
		item.addEventListener('click', selectSubTabNav)
	});
	function selectSubTabNav() {
		subTabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		subTabName = this.getAttribute('data-subtab-name');
		selectSubTabContent(subTabName);
	}
	function selectSubTabContent(subTabName) {
		subTabContent.forEach(item => {
			item.classList.contains(subTabName) ? item.classList.add('is-active') :
				item.classList.remove('is-active');
		})
	}
}
subtab();

let mobileTab = function () {
	let mobileNav = document.querySelectorAll('.tabs__title_mobile'),
		mobileContent = document.querySelectorAll('.tabs__description'),
		mobileTabName;

	mobileNav.forEach(item => {
		item.addEventListener('click', selectMobileNav) 
	});

	function selectMobileNav() {
		mobileNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		mobileTabName = this.getAttribute('data-tab-name');
		selectMobileContent(mobileTabName);
	}
	function selectMobileContent(mobileTabName) {
		mobileContent.forEach(item => {
			item.classList.contains(mobileTabName) ? item.classList.add('is-active') :
				item.classList.remove('is-active');
		})
	}
}
mobileTab();

let ptab = function () {
	let tabNav = document.querySelectorAll('.portfolio__tabs-item'),
		tabContent = document.querySelectorAll('.portfolio__tabs-content'),
		tabName;

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-portfolio-tabs');
		selectTabContent(tabName);
	}
	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active') :
				item.classList.remove('is-active');
		})
	}
}
ptab();

window.onload = function() {
	var images = document.querySelectorAll('.cards__item');

	autoResize(images);

	$(window).resize(function(){
		autoResize(images);
	});

}
function autoResize(imagesElements) {
	for(var i = 0; i < imagesElements.length; i++) {
		var elementWidth = imagesElements[i].offsetWidth;
		imagesElements[i].style.height = elementWidth + "px";
	}
}