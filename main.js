window.onload = function() {
	$(".fancybox").fancybox();
}

var fancybox = document.getElementsByClassName('fancybox'),
	slideNow = 1,
	slideCount = document.getElementsByClassName('item').length,
	translateWidth = 0,
	items = document.getElementsByClassName('item'),
	itemsArr = Array.from(items);
	nextArrow = document.querySelector('.slider__right'),
	prevArrow = document.querySelector('.slider__left');

	nextArrow.addEventListener('click', nextSlide);
	prevArrow.addEventListener('click', prevSlide);


function nextSlide() {
	if(slideNow < slideCount ) {
		translateWidth = -(items[0].offsetWidth + 80) * slideNow;
		itemsArr.forEach(function(item){
			item.style.transform = 'translateX(' + translateWidth + 'px)';
		});

		slideNow++;
	}
}

function prevSlide() {
	if(slideNow > 1) {
		translateWidth = -(items[0].offsetWidth + 80) * (slideNow - 2);
		itemsArr.forEach(function(item){
			item.style.transform = 'translateX(' + translateWidth + 'px)';
		});

		slideNow--;
	}
}