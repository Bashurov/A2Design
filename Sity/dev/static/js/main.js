;
// Начинать писать отсюда!!!!




// $(document).ready(function($) {
//     $nav = $('.fixed-div');
//     $maps = $('.maps');
//     $nav.css('width', $nav.outerWidth());
//     $window = $(window);
//     $h = $nav.offset().top;
//     $window.scroll(function() {
//       if ($window.scrollTop() > $h) {
//         $nav.addClass('fixed');
//       } else {
//         $nav.removeClass('fixed');

//       }
//    });
// });

/*-------------------
			slider
--------------------*/

var multiItemSlider = (function () {
	return function (selector, config) {
		var
			_mainElement = document.querySelector(selector), // основный элемент блока
			_sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
			_sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
			_sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
			_sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
			_sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
			_wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
			_itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
			_positionLeftItem = 0, // позиция левого активного элемента
			_transform = 0, // значение транфсофрмации .slider_wrapper
			_step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
			_items = []; // массив элементов
		// наполнение массива _items
		_sliderItems.forEach(function (item, index) {
			_items.push({ item: item, position: index, transform: 0 });
		});

		var position = {
			getMin: 0,
			getMax: _items.length - 1,
		}

		var _transformItem = function (direction) {
			if (direction === 'right') {
				if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
					return;
				}
				if (!_sliderControlLeft.classList.contains('slider__control_show')) {
					_sliderControlLeft.classList.add('slider__control_show');
				}
				if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
					_sliderControlRight.classList.remove('slider__control_show');
				}
				_positionLeftItem++;
				_transform -= _step;
			}
			if (direction === 'left') {
				if (_positionLeftItem <= position.getMin) {
					return;
				}
				if (!_sliderControlRight.classList.contains('slider__control_show')) {
					_sliderControlRight.classList.add('slider__control_show');
				}
				if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
					_sliderControlLeft.classList.remove('slider__control_show');
				}
				_positionLeftItem--;
				_transform += _step;
			}
			_sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
		}

		// обработчик события click для кнопок "назад" и "вперед"
		var _controlClick = function (e) {
			var direction = this.classList.contains('slider__control_right') ? 'right' : 'left';
			e.preventDefault();
			_transformItem(direction);
		};

		var _setUpListeners = function () {
			// добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
			_sliderControls.forEach(function (item) {
				item.addEventListener('click', _controlClick);
			});
		}

		// инициализация
		_setUpListeners();

		return {
			right: function () { // метод right
				_transformItem('right');
			},
			left: function () { // метод left
				_transformItem('left');
			}
		}

	}
}());

var slider = multiItemSlider('.slider')

/*-------------------
				sticky


var StickyElement = function(node){
	var doc = $(document), 
			fixed = false,
			anchor = node.find('.sticky-anchor'),
			content = node.find('.sticky-content');
	
	var onScroll = function(e){
		var docTop = doc.scrollTop(),
				anchorTop = anchor.offset().top;
		
		console.log('scroll', docTop, anchorTop);
		if(docTop > anchorTop){
			if(!fixed){
				anchor.height(content.outerHeight());
				content.addClass('fixed');        
				fixed = true;
			}
		}  else   {
			if(fixed){
				anchor.height(0);
				content.removeClass('fixed'); 
				fixed = false;
			}
		}
	};
	
	$(window).on('scroll', onScroll);
};

// var demo = new StickyElement($('#sticky'));

--------------------*/