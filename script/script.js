// Бургер

// $(document).ready(function(){
// 	$('.menu').on('click', function(e){
// 		e.addClass('.menu__active');
// 	})
// })




window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menu'),
	menuItem = document.querySelectorAll('.menu__item'),
	hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger__active');
			menu.classList.toggle('menu_active');
	});

	menuItem.forEach(item => {
			item.addEventListener('click', () => {
					hamburger.classList.toggle('hamburger__active');
					menu.classList.toggle('menu__active');
			})
	})
})

// Слайдер

$(document).ready(function(){
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
});
$(document).ready(function(){
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


		$('.tabs__wrap-title').on('click', function(e){
			e.preventDefault();
			
			var findSlider = $(this).parents('.tabs__main-content').find('.tabs__slider');
		
			$(findSlider).slick('setPosition');
		
		});
	
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
	function selectTabContent(tabName)  {
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
	function selectSubTabContent(subTabName)  {
		subTabContent.forEach(item => {
			item.classList.contains(subTabName) ? item.classList.add('is-active') :
			item.classList.remove('is-active');
		})
		// $('.tabs__slider').slick('reinit');
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
	function selectMobileContent(mobileTabName)  {
		mobileContent.forEach(item => {
			item.classList.contains(mobileTabName) ? item.classList.add('is-active') :
			item.classList.remove('is-active');
		})
	}
}
mobileTab();


window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.dropdown__wrap'),
	hamburger = document.querySelector('.dropdown__btn');

	hamburger.addEventListener('click', () => {
			hamburger.classList.toggle('dropdown__btn_active');
			menu.classList.toggle('show');
	});
})


$(document).ready(function(){
	$window = $(window);
$('section[data-type="background"]').each(function(){
	 var $bgobj = $(this);
$(window).scroll(function() {
		 var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		 var coords = '50% '+ yPos + 'px';
		 $bgobj.css({ backgroundPosition: coords });
	}); 
});    
}); 

$(document).ready(function(){
	$('[data-modal=consulting]').on('click', function() {
		$('.overlay, #consulting').fadeIn();
	})
	$('.modal__close').on('click', function() {
		$('.overlay, #consulting').fadeOut()
	})
})
