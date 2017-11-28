/* Не поняла почему не работает, 

Рабочий код под комментарием, 
перековыряла с сайта яндекса пример, сдвинула центр, убрала лишние поля и значки, копирайт убирать нельзя. 

	ymaps.ready(init);
	var myMap, 
		myPlacemark;

	function init(){
		myMap = new ymaps.Map("yandexMap", {
			center: [59.9387942, 30.3230833],
			zoom: 16
		});
	}
	
	myPlacemark = new ymaps.Placemark([59.9387942, 30.3230833]),{},{
		iconLayout: 'default#image',
		iconImageHref: 'img/map-marker-shadow.png',
		iconImageSize: [218, 142]
	};
		
	myMap.geoObjects.add(myPlacemark);

*/
'use strict';

var myPlacemark, myMap;

ymaps.ready(function () {
	
	myMap = new ymaps.Map('yandexMap', {
		center: [59.9393, 30.3293],
		zoom: 16,
		 controls: []
	}, {suppressMapOpenBlock: true},{ });

	myPlacemark = new ymaps.Placemark([59.9387942, 30.3230833], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/map-marker-shadow.png',
		iconImageSize: [218, 142],
		iconImageOffset: [-45,-120]
	}),

	myMap.geoObjects.add(myPlacemark);
});
