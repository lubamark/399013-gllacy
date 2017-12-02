var buttonSearch = document.querySelector(".modal-item-search");
var modalSearch = document.querySelector(".modal-search");
var inputSearch = modalSearch.querySelector("#search");

var buttonLogin = document.querySelector(".modal-item-login");
var modalLogin = document.querySelector(".modal-enter");
var inputLogin = document.querySelector("#email");
var inputPassword = document.querySelector("#password");
var formLogin = document.querySelector(".form-enter");
var storage = localStorage.getItem("login");


/*Поиск*/
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
			modalLogin.classList.add("modal-error");
		} else{
			localStorage.setItem("login", inputLogin.value);
		}
	});
	
	
	
	window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (modalSearch.classList.contains("modal-show")) {
			modalSearch.classList.remove("modal-show");
		} else if (modalLogin.classList.contains("modal-show")) {
				modalLogin.classList.remove("modal-show");
			}
		}
	});


