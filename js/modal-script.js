/*Поиск*/
var buttonSearch = document.querySelector(".modal-item-search");
var modalSearch = document.querySelector(".modal-search");
var inputSearch = modalSearch.querySelector("#search");


	buttonSearch.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalSearch.classList.add("modal-show");
		inputSearch.focus();
	});
	
	buttonSearch.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalSearch.classList.remove("modal-show");
	});
	
	modalSearch.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalSearch.classList.add("modal-show");
	});
	
	modalSearch.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalSearch.classList.remove("modal-show");
	});

/* Форма входа */

var buttonLogin = document.querySelector(".modal-item-login");
var modalLogin = document.querySelector(".modal-enter");
var inputLogin = document.querySelector("#email");
var inputPassword = document.querySelector("#password");
var formLogin = document.querySelector(".form-enter");
var storage = localStorage.getItem("login");

	buttonLogin.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalLogin.classList.add("modal-show");
		if(storage){
			inputLogin.value = storage;
			inputPassword.focus();
		} else {
			inputLogin.focus();
		}
	});
	buttonLogin.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalLogin.classList.remove("modal-show");
	});
	
	modalLogin.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalLogin.classList.add("modal-show");
	});
	
	modalLogin.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalLogin.classList.remove("modal-show");
	});
	
	formLogin.addEventListener("submit", function(evt){
		if(!inputLogin.value || !inputPassword.value){
			evt.preventDefault();
			modalLogin.classList.remove("modal-error");
			modalLogin.offsetWidth = modalLogin.offsetWidth;
			modalLogin.classList.add("modal-error");
		} else{
			localStorage.setItem("login", inputLogin.value);
		}
	});
	
/*Форма обратной связи*/

var buttonFeedback = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var sliderWrapper = document.querySelector(".slide-wrapper");
var nameFeedback = document.querySelector("#feedback-name");
var emailFeedback = document.querySelector("#feedback-email");
var closeFeedback = document.querySelector(".close-modal");
var submitFeedback = document.querySelector(".feedback-form");

if(buttonFeedback){
	buttonFeedback.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.add("modal-show");
		sliderWrapper.classList.add("modal-feedback-back");
		nameFeedback.focus();
		
	});

	closeFeedback.addEventListener("click", function(evt){
		evt.preventDefault();
		modalFeedback.classList.remove("modal-show");
		sliderWrapper.classList.remove("modal-feedback-back");
		modalFeedback.classList.remove("modal-error");
		
	});

	submitFeedback.addEventListener("submit", function(evt){
		evt.preventDefault();
		if ( !nameFeedback.value || !Feedback.value){
			modalFeedback.classList.remove("modal-error");
			modalFeedback.offsetWidth = modalFeedback.offsetWidth;
			modalFeedback.classList.add("modal-error");
		}
	});
}
	
/* Корзина с товарами */

var buttonCart = document.querySelector(".modal-item-cart");
var modalCart = document.querySelector(".cart-box");

if(buttonCart){
	buttonCart.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalCart.classList.add("modal-show");
	});
	
	buttonCart.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalCart.classList.remove("modal-show");
	});
	
	modalCart.addEventListener("mouseover", function(evt){
		evt.preventDefault();
		modalCart.classList.add("modal-show");
	});
	
	modalCart.addEventListener("mouseout", function(evt){
		evt.preventDefault();
		modalCart.classList.remove("modal-show");
	});
}


	
/* Общие*/
	
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (modalSearch.classList.contains("modal-show")) {
				modalSearch.classList.remove("modal-show");
			} else if (modalLogin.classList.contains("modal-show")) {
				modalLogin.classList.remove("modal-show");
				modalLogin.classList.remove("modal-error");
			} else if (modalFeedback.classList.contains("modal-show")) {
				modalFeedback.classList.remove("modal-show");
				sliderWrapper.classList.remove("modal-feedback-back");
				modalFeedback.classList.remove("modal-error");
			}
		}
	});